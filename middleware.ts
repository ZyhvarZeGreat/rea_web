import { NextRequest, NextResponse } from "next/server";
import { getSession, updateSession } from "./lib/session";

const protectedRoutes = ["/portfolio", "/profile"];

export async function middleware(request: NextRequest) {
  // console.log("Middleware triggered!");
  // try {
  //   const session = await getSession();
  //   console.log(session)
  //   // Check if the requested path is a protected route
  //   const isProtectedRoute = protectedRoutes.some((route) =>
  //     request.nextUrl.pathname.startsWith(route),
  //   );
  //   console.log("Is Protected Route:", isProtectedRoute); // Debug log
  
  //   if (!session && isProtectedRoute) {
  //     console.log("Redirecting due to missing session"); // Debug log
  //     const redirectURL = new URL("/login", request.nextUrl.origin);
  //     redirectURL.searchParams.set("redirected", "true");
  //     return NextResponse.redirect(redirectURL.toString());
  //   }
  
  //   if (session && typeof session !== "string") {
  //     console.log("Updating session"); // Debug log
  //     await updateSession(request);
  //   }
  
  //   return NextResponse.next();
  // } catch (error: unknown) {
  //   console.error("Middleware error:", error);
  //   return NextResponse.redirect(
  //     new URL("/login", request.nextUrl.origin).toString(),
  //   );
  // }
}

export const config = {
  matcher: ["/portfolio/:path*", "/profile/:path*"]
};
