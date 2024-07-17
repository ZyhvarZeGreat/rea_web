// noinspection UnnecessaryLocalVariableJS

import { baseURL } from "@/lib/constants";
import { createSession, deleteSession } from "@/lib/session";
import { LoginFormState, serverLoginSchema, serverSignupSchema, SignupFormState } from "@/lib/utils";
import axios from "axios";
import { ZodError } from "zod";

export async function login(
  state: LoginFormState | null,
  formData: FormData,
): Promise<LoginFormState> {
  // Validate form fields
  let dynamicResponse = {};

  try {
    // Validate our data
    const data = serverLoginSchema.parse(formData);
    const response = await axios.post(`${baseURL}account/login/`, data);
    dynamicResponse = { ...response };
    await createSession(response.data?.access);
    return {
      status: "success",
      message: `${response.data?.message}`,
      redirectTo: "/",
    };
  } catch (e) {
    // In case of a ZodError (caused by our validation) we're adding issues to our response
    if (e instanceof ZodError) {

      return {
        status: "error",
        message: "Invalid form data",
        errors: e.issues.map((issue) => ({
          path: issue.path.join("."),
          message: `Server validation: ${issue.message}`,
        })),
      };
    }
    return {
      status: "error",
      message: `${state?.message}`,
    };
  }
}
export async function signup(
  state: SignupFormState | null,
  formData: FormData,
): Promise<SignupFormState> {
  // Validate form fields
  try {
    // Validate our data
    const data = serverSignupSchema.parse(formData);
    const firstName = data?.fullName.split(" ")[0];
    const lastName = data?.fullName.split(" ")[1];
    const payload = {
      first_name: firstName,
      last_name: lastName,
      email: data?.email,
      password1: data?.password,
      password2: data?.confirmPassword,
      country: "Nigeria",
    };
    const response = await axios.post(
      `${baseURL}account/user/register`,
      payload,
    );

    await createSession(response.data?.access);
    return {
      status: "success",
      message: `${state?.message}`,
      redirectTo: "/verify-mail",
    };
  } catch (e: any) {
    if (e instanceof ZodError) {
      return {
        status: "error",
        message: "Invalid form data",
        errors: e.issues.map((issue) => ({
          path: issue.path.join("."),
          message: `Server validation: ${issue.message}`,
        })),
      };
    }

    // Check if the error is an AxiosError
    if (axios.isAxiosError(e) && e.response) {
      return {
        status: "error",
        message: e.response.data.message || "An error occurred during signup",
        response: e.response.data?.email[0], // Include the entire response data if needed
      };
    }

    // Fallback for other errors
    return {
      status: "error",
      message: e.message || "An unknown error occurred",
    };
  }
}
export async function resetPassword(
  state: LoginFormState | null,
  formData: FormData,
): Promise<LoginFormState> {
  // Validate form fields
  try {
    // Validate our data
    const data = serverLoginSchema.parse(formData);
    const response = await axios.post(`${baseURL}account/login/`, data);
    await createSession(response.data?.access);
    console.log(response.data);
    return {
      status: "success",
      message: `Welcome, ${data.email}!`,
      redirectTo: "/",
    };
  } catch (e) {
    // In case of a ZodError (caused by our validation) we're adding issues to our response
    if (e instanceof ZodError) {
      return {
        status: "error",
        message: "Invalid form data",
        errors: e.issues.map((issue) => ({
          path: issue.path.join("."),
          message: `Server validation: ${issue.message}`,
        })),
      };
    }
    return {
      status: "error",
      message: "Something went wrong. Please try again.",
    };
  }
}
export async function logout() {
  try {
    const isLoggedOut = deleteSession();
    return isLoggedOut;
  } catch (error) {
    console.log("Error occurred:" + error);
  }
}
