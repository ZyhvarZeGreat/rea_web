"use client";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";
// import { Eye, EyeOffIcon, X } from "lucide-react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { loginFormData } from "@/lib/utils";
import { ErrorMessage } from "@hookform/error-message";
import axiosInstance from "@/app/axiosInstance";
import { toast } from "sonner";
import axios, { AxiosError } from "axios";
import {
  Dialog as CustomDialog,
  DialogContent as CustomDialogContent,
  DialogDescription as CustomDialogDescription,
  DialogFooter as CustomDialogFooter,
  DialogHeader as CustomDialogHeader,
  DialogTitle as CustomDialogTitle,
  DialogTrigger as CustomDialogTrigger
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { baseURL } from "@/lib/constants";

const LoginFormContent = ({
  register,
  isValid,
  errors,
}: {
  register: UseFormRegister<loginFormData>;
  isValid: boolean;
  errors: FieldErrors<loginFormData>;
}) => {
  const { pending } = useFormStatus();
  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(true);
  const [resetEmail, setResetEmail] = React.useState<string>();
  const handleForgotPassword = async (
    e: React.MouseEvent<HTMLButtonElement>,
    user: any,
  ) => {
    const details = { email: user };
    e.preventDefault();
    try {
      const response = await axiosInstance.post(
        `${baseURL}account/request/reset-password`,
        details,
      );

      if (response.status === 200) {
        toast(`Password Reset Successful,${response.data}`, {
          className: "text-[1.1rem] ",
        });

        console.log(response.data);
      } else {
        toast(`Password Reset Failed,${response.data}`, {
          className: "text-[1.1rem] ",
        });
        console.log(response.data);
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        console.error("Authentication error:", axiosError.message);
      } else {
        console.error("Unknown error:", error);
        toast("Signup Failed, Please check your connection", {
          className: "text-[1.1rem] font-jakarta   ",
          position: "top-right",
        });
      }
    }
  };
  return (
    <>
      <div className={'flex flex-col w-full  gap-[40px]'}>
        <div className='flex flex-col w-full gap-8'>
          <div className="flex flex-col gap-3 ">
            <Input
              {...register("email")}
              className="h-12 border-0 border-b-2 border-b-[#8459FF] text-lg shadow-none ring-0 focus-visible:ring-0 focus-visible:placeholder:text-black"
              placeholder="Email"
            />
            <div className="font-semibold text-red-500">
              <ErrorMessage name="email" errors={errors} />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="relative flex flex-col items-center justify-center gap-2 ">
              <Input
                {...register("password")}
                className="h-12 border-0 border-b-2 border-b-[#8459FF] text-lg shadow-none focus-visible:ring-0 focus-visible:placeholder:text-black"
                placeholder="Password"
                type={passwordVisible ? "password" : "text"}
              />

              <div
                className="absolute bottom-0 left-0 right-0 top-0 flex h-14 w-[3rem] items-center justify-end  justify-self-end xl:h-[3.2rem] ">
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
              <div className=" flex w-full items-center justify-start  font-semibold text-red-500">
                <ErrorMessage name="password" errors={errors} />
              </div>
            </div>

            <div className="flex w-full  justify-end ">
              <CustomDialog>
                <CustomDialogTrigger asChild>
                  <div className="cursor-pointer text-[#8459FF]">
                    Forgot Password?
                  </div>
                </CustomDialogTrigger>
                <CustomDialogContent className="sm:max-w-[425px]">
                  <CustomDialogHeader>
                    <CustomDialogTitle>Reset Password</CustomDialogTitle>
                    <CustomDialogDescription>
                      Input your email and a reset link will be sent to your email
                    </CustomDialogDescription>
                  </CustomDialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Email
                      </Label>
                      <Input
                        {...register("email")}
                        id="name"
                        onChange={(e) => {
                          setResetEmail(e.target.value);
                        }}
                        value={resetEmail}
                        className="col-span-3"
                      />
                      <div className="font-semibold text-red-500">
                        <ErrorMessage name="email" errors={errors} />
                      </div>
                    </div>
                  </div>
                  <CustomDialogFooter>
                    <Button
                      className="bg-[#4E23CB]"
                      onClick={(e) => {
                        handleForgotPassword(e, resetEmail);
                      }}
                    >
                      Reset Password
                    </Button>
                  </CustomDialogFooter>
                </CustomDialogContent>
              </CustomDialog>
            </div>
          </div>
        </div>
        <div className="flex mt-4  w-full flex-col gap-2 text-center sm:gap-6">
          <Button
            disabled={pending || !isValid}
            type="submit"
            className=" flex h-14 w-full items-center justify-center gap-2 rounded-[15px]   border-2  border-black/60 bg-[#4E23CB] text-xl hover:bg-[#4E23CB]/80 sm:h-14 sm:rounded-lg"
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
            Login
          </Button>

          <span className="text-sm text-[#6D6D6D]">
          By clicking Log In you agree to Rea&apos;,s Terms & Conditions and Key
          Risks
        </span>
        </div>
      </div>

    </>
  );
};

export default LoginFormContent;
