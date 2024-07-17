import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z, ZodType } from "zod";
import { zfd } from "zod-form-data";
import { AxiosError, AxiosResponse } from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface loginFormData {
  email: string | null | undefined;
  password: string | null | undefined;
}
export interface signupFormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export const signupSchema: ZodType<signupFormData> = z
  .object({
    fullName: z
      .string()
      .min(3, { message: "Full Name must have at least 3 characters" }),

    email: z
      .string()
      .email({ message: " Please input a valid email address" })
      .max(255, { message: "Email must be below 256 characters " }),
    password: z
      .string()
      .min(8, { message: "Be at least 8 characters long" })
      .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
      .regex(/[0-9]/, { message: "Contain at least one number." })
      .regex(/[^a-zA-Z0-9]/, {
        message: "Contain at least one special character.",
      }),
    confirmPassword: z.string().min(6, { message: "Passwords must match" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const serverSignupSchema = zfd
  .formData({
    fullName: z
      .string()
      .min(3, { message: "Full Name must have at least 3 characters" }),

    email: z
      .string()
      .email({ message: " Please input a valid email address" })
      .max(255, { message: "Email must be below 256 characters " }),
    password: z
      .string()
      .min(8, { message: "Be at least 8 characters long" })
      .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
      .regex(/[A-Z]/, {
        message: "Must contain at least one uppercase letter.",
      })
      .regex(/[0-9]/, { message: "Contain at least one number." })
      .regex(/[^a-zA-Z0-9]/, {
        message: "Contain at least one special character.",
      }),
    confirmPassword: z.string().min(6, { message: "Passwords must match" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const serverLoginSchema = zfd.formData({
  email: zfd.text(z.string().email()),
  password: zfd.text(
    z.string().min(8, { message: "Must be at least 8 characters long" }),
    // .regex(/[a-zA-Z]/, { message: "Must contain at least one letter." })
    // .regex(/[0-9]/, { message: "Must contain at least one number." })
    // .regex(/[^a-zA-Z0-9]/, {
    //   message: "Must contain at least one special character.",
    // })
    // .regex(/[^a-zA-Z0-9]/, {
    //         message: "Must contain at least one special character.",
    //       })
  ),
});
export type LoginFormState =
  | {
      status: "success";
      message: string | AxiosResponse<any, any>;
      redirectTo: string;
    }
  | {
      status: "error";
      message: string | AxiosResponse<any, any> | AxiosError<unknown, any>;
      errors?: Array<{
        path: string;
        message: string;
      }>;
    }
  | null;

export type SignupFormState =
  | {
      status: "success";
      message: string | AxiosResponse<any, any>;
      redirectTo: string;
    }
  | {
      status: "error";
      message: string | AxiosResponse<any, any> | AxiosError<unknown, any>;
      response?: string;
      errors?: Array<{
        path: string;
        message: string;
      }>;
    }
  | null;
