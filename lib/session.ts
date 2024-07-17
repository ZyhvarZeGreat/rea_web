"use server";
import { JWTPayload, jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { Session } from "@/components/types/interfaces";

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("2h")
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined) {
  try {
    if (session) {
      const { payload } = await jwtVerify(session, encodedKey, {
        algorithms: ["HS256"],
      });
      return payload;
    }
  } catch (error) {
    console.log("Failed to verify session");
  }
}
export async function createSession(sessionToken: string | undefined) {
  const expiresAt = new Date(Date.now() + 20 * 60 * 60 * 1000);
  const session = await encrypt({ sessionToken, expiresAt });
  if (sessionToken) {
    cookies().set("session", session, {
      httpOnly: true,
      secure: true,
      expires: expiresAt,
      sameSite: "lax",
      path: "/",
    });
  }
}

export async function getSession(): Promise<
  JWTPayload | undefined | null | string | Session
> {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  const payload = await decrypt(session);
  return payload;
}

export async function updateSession(request: NextRequest) {
  const session = cookies().get("session")?.value;
  if (!session) return;

  const parsed = await decrypt(session);
  if (parsed) {
    // parsed.expires = new Date(Date.now() + 2 * 60 * 60 * 1000);
    const res = NextResponse.next();
    res.cookies.set({
      name: "session",
      value: await encrypt(parsed),
      httpOnly: true,
      expires: new Date(Date.now() + 2 * 60 * 60 * 1000),
    });
    return res;
  }
}

export async function deleteSession() {
  cookies().delete("session");
  const session = cookies().get("session")?.value;
  return !session;
}
