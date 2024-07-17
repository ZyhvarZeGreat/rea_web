"use client";
import { signupFormData } from "@/lib/utils";
import React from "react";
import { useFormStatus } from "react-dom";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Input } from "../ui/input";
import { ErrorMessage } from "@hookform/error-message";
import { Button } from "../ui/button";
// import { Eye, EyeOffIcon, X } from "lucide-react";
type Props = {};

const SignupFormContent = ({
  register,
  isValid,
  errors,
}: {
  register: UseFormRegister<signupFormData>;
  isValid: boolean;
  errors: FieldErrors<signupFormData>;
}) => {
  const { pending } = useFormStatus();
  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] =
    React.useState<boolean>(false);

  console.log(pending);
  return (
    <>
      <div className="mb-6 flex w-full  items-center justify-start  px-6 sm:px-14 xl:mb-12 ">
        <h3 className=" text-4xl font-bold text-start xl:text-5xl">Create Account</h3>
      </div>
      <div className=" flex w-full flex-col  items-center justify-center  gap-8 ">
        <div className=" flex w-[90%] flex-col gap-2 sm:w-[80%]">
          <Input
            {...register("fullName")}
            className="h-14 w-full border-0 border-b-2 border-b-[#8459FF] text-lg shadow-none ring-0 focus-visible:ring-0 focus-visible:placeholder:text-black xl:h-16"
            placeholder="Full Name"
          />

          <div className="font-semibold text-red-500">
            <ErrorMessage name="fullName" errors={errors} />
          </div>
        </div>

        <div className=" flex w-[90%] flex-col gap-2 sm:w-[80%]">
          <Input
            autoComplete="email"
            {...register("email")}
            className="h-14 border-0 border-b-2 border-b-[#8459FF] text-lg shadow-none ring-0 focus-visible:ring-0 focus-visible:placeholder:text-black xl:h-16"
            placeholder="Email"
          />
          <div className="font-semibold text-red-500">
            <ErrorMessage name="email" errors={errors} />
          </div>
        </div>
        <div className="relative w-[90%]  sm:w-[80%]">
          <Input
            autoComplete="password"
            {...register("password")}
            type={passwordVisible ? "password" : "text"}
            className=" z-50 h-14 border-0 border-b-2 border-b-[#8459FF] text-lg shadow-none ring-0 focus-visible:ring-0 focus-visible:placeholder:text-black xl:h-16"
            placeholder="Password"
          />
          <div className="font-semibold text-red-500">
            <ErrorMessage name="password" errors={errors} />
          </div>

          <div className="absolute bottom-0 left-0 right-0 top-0 flex h-14 w-[3rem]  items-center justify-end  justify-self-end xl:h-16 ">
            <Button
              onClick={(e) => {
                e.preventDefault();
                setPasswordVisible(!passwordVisible);
              }}
              className=" z-100 hover:bg-transparent"
              variant={"ghost"}
            >
              {/*{passwordVisible ? <EyeOffIcon size={28} /> : <Eye size={28} />}*/}
            </Button>
          </div>
        </div>
        <div className="relative w-[90%]  sm:w-[80%]">
          <Input
            autoComplete="password"
            {...register("confirmPassword")}
            type={confirmPasswordVisible ? "password" : "text"}
            className=" z-50 h-14 border-0 border-b-2 border-b-[#8459FF] text-lg shadow-none ring-0 focus-visible:ring-0 focus-visible:placeholder:text-black xl:h-16"
            placeholder="Confirm Password"
          />
          <div className="font-semibold text-red-500">
            <ErrorMessage name="confirmPassword" errors={errors} />
          </div>
          <div className="absolute bottom-0 left-0 right-0 top-0 flex h-14 w-[3rem]  items-center justify-end  justify-self-end xl:h-16 ">
            <Button
              onClick={(e) => {
                e.preventDefault();
                setConfirmPasswordVisible(!confirmPasswordVisible);
              }}
              className=" z-100 hover:bg-transparent"
              variant={"ghost"}
            >
              {/*{confirmPasswordVisible ? (*/}
              {/*  <EyeOffIcon size={28} />*/}
              {/*) : (*/}
              {/*  <Eye size={28} />*/}
              {/*)}*/}
            </Button>
          </div>

          <div className="flex w-full items-center justify-end  ">
            <Button className="text-lg text-[#8459FF]" variant="link">
              Forgot Password?
            </Button>
          </div>
        </div>
        <div className=" flex w-[90%] flex-col gap-6 text-center sm:w-[80%]">
          <Button
            disabled={pending || !isValid}
            type="submit"
            className=" flex h-12 w-full items-center justify-center gap-2 rounded-xl   border-2  border-black/60 bg-[#4E23CB] text-xl hover:bg-[#4E23CB]/80 sm:h-14 sm:rounded-lg"
          >
            {pending && (
              <>
                <svg
                  aria-hidden="true"
                  className={`h-6 w-6 animate-spin fill-[#4E23CB] text-gray-200 dark:text-gray-600`}
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </>
            )}{" "}
            Signup
          </Button>

          <span className="text-sm text-[#6D6D6D]">
            By clicking Sign Up you agree to Rea&apos;,s Terms & Conditions and
            Key Risks
          </span>
        </div>
      </div>
    </>
  );
};

export default SignupFormContent;
