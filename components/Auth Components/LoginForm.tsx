"use client";
import { useEffect, useRef } from "react";
import { login } from "@/app/actions/auth";
import { FieldPath, useForm } from "react-hook-form";
import { loginFormData, serverLoginSchema } from "@/lib/utils";
import { useFormState } from "react-dom";
import LoginFormContent from "./LoginFormContent";
import { zodResolver } from "@hookform/resolvers/zod";
import useAuthStore from "@/components/store/useAuthStore";
import { getSession } from "@/lib/session";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";

export function LoginForm() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const toastShownRef = useRef(false);

  useEffect(() => {
    const redirected = searchParams.get("redirected");

    if (redirected !== null && !toastShownRef.current) {
      // Display a toast message
      console.log(redirected);
      toast.warning("Please login or signup to get access to this page", {
        position: "top-right",
        className: "text-1.1rem font-jakarta",
      });

      // Set the ref to indicate the toast has been shown
      toastShownRef.current = true;
      // Remove the 'redirected' parameter from the URL
      const cleanUrl = pathname;
      router.replace(cleanUrl);
    }
  }, [router, pathname, searchParams]);
  const {
    register,
    formState: { isValid, errors },
    setError,
  } = useForm<loginFormData>({
    mode: "all",
    resolver: zodResolver(serverLoginSchema),
  });

  const [state, action] = useFormState(login, null);
  const { setLoginState } = useAuthStore();

  useEffect(() => {
    if (!state) {
      return;
    }
    console.log(state);
    // In case our form action returns `error` we can now `setError`s
    if (state.status === "error") {
      state.errors?.forEach((error) => {
        setError(error.path as FieldPath<loginFormData>, {
          message: error.message,
        });
      });
      toast.error(`Login Failed  `, {
        className: " font-jakarta ",
        position: "top-right",
      });
    }
    if (state.status === "success") {
      toast.success("Login Successful", {
        className: "font-jakarta ",
        position: "top-right",
      });
      const session = getSession();
      if (session !== null) {
        setLoginState(true);
      }


      router.push("/");

    }
  }, [state, setError, setLoginState, router]); // Make sure to include toast in dependencies array

  return (
    <form action={action} className="flex flex-col gap-4 w-full sm:gap-6 sm:px-10">

    <LoginFormContent register={register} isValid={isValid} errors={errors} />
    </form>
  );
}
