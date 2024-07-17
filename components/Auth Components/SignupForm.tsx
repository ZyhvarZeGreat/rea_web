"use client";
import { signup } from "@/app/actions/auth";
import { useFormState } from "react-dom";
import SignupFormContent from "./SignupFormContent";
import { getSession } from "@/lib/session";
import { serverSignupSchema, signupFormData } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FieldPath, useForm } from "react-hook-form";
import { toast } from "sonner";
import useAuthStore from "../store/useAuthStore";

export function SignupForm() {
  const {
    register,
    formState: { isValid, errors },
    setError,
  } = useForm<signupFormData>({
    mode: "all",
    resolver: zodResolver(serverSignupSchema),
  });

  const [state, action] = useFormState(signup, null);
  const { setLoginState } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!state) {
      return;
    }
    console.log(state);
    // In case our form action returns `error` we can now `setErrors`
    if (state.status === "error") {
      state.errors?.forEach((error) => {
        setError(error.path as FieldPath<signupFormData>, {
          message: error.message,
        });
      });
    }
    if (state.status === "success") {
      alert(state.message);
      toast.success(`${state.message}`, {
        className: " font-jakarta ",
      });

      const session = getSession();
      if (session !== null) {
        setLoginState(true);
      }


      router.push("/verify-mail");
    } else if (state.status === "error") {
      toast.error(`Signup failed ${state?.response}`, {
        className: "font-jakarta ",
        position: "top-right",
      });
      if (state?.response?.includes("exists")) {
        toast.info("You are already registered, please login ", {
          className: "font-jakarta ",
          position: "top-right",
          duration: 3000,
        });
        setTimeout(() => {
          router.push("login");
        }, 1200);
      }
    }
  }, [state, setError, setLoginState, router]);

  return (
    <form
      action={action}
      className="flex h-full w-full flex-col items-center   justify-center self-start "
    >
      <SignupFormContent
        register={register}
        isValid={isValid}
        errors={errors}
      />
    </form>
  );
}
