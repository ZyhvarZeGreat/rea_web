"use client";
import { useState } from "react";
import { getSession } from "@/lib/session";
import useAuthStore from "@/components/store/useAuthStore";
import { baseURL } from "@/lib/constants";

export default function useRequest(
  endpoint: string,
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
  params?: any,
  headers?: Record<string, any>,
) {
  const { loginState } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<any>();
  const [statusCode, setStatusCode] = useState(0);
  const [error, setError] = useState(false);

  async function checkSession() {
    const session = await getSession();
    if (session && typeof session !== "string") {
      const accessToken = session?.sessionToken;

      if (loginState === true) {
        return accessToken;
      } else {
        return null;
      }
    }
  }
  async function makeRequest(data?: any) {
    const accessToken = await checkSession();

    const requestHeaders: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (loginState === true) {
      requestHeaders["Authorization"] = `Bearer ${accessToken}`;
    }
    const response = await fetch(`${baseURL}${endpoint}`, {
      method,
      headers: requestHeaders,
      body:
        method === "POST" || method === "PUT" || method === "PATCH"
          ? JSON.stringify(data)
          : undefined,
    });

    if (error) {
      setLoading(false);
    }

    if (response.status === 201) {
      setLoading(false);
      setError(false);
    }

    if (response.status === 401 || response.status === 400) {
      setError(true);
      setLoading(false);
    }
    const json = await response.json();

    setResponse(json);
    setStatusCode(response.status);

    setLoading(false);

    return [json, response.status];
  }

  async function makeRequestWithFileUpload(data?: FormData) {
    setLoading(true);

    const response = await fetch(`${baseURL}${endpoint}`, {
      method,
      headers: headers,
      body: data,
    });

    const json = await response.json();

    setResponse(json);
    setStatusCode(response.status);

    setLoading(false);

    return [json, response.status];
  }

  return {
    loading,
    error,
    makeRequest,
    makeRequestWithFileUpload,
    response,
    statusCode,
  };
}
