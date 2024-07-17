import React from "react";

import Logo from "@/app/assets/logo.svg";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import SignupHero from "@/app/assets/signup.svg";

import { useRouter } from "next/navigation";
import MobileLogo from "@/app/assets/mobile_signup_logo.svg";
import { SignupForm } from "@/components/Auth Components/SignupForm";
type Props = {};

const Signup = (props: Props) => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#8459FF] sm:h-full xl:h-screen xl:w-screen xl:overflow-hidden">
      <div className="relative flex h-full w-screen flex-col items-center justify-center gap-12 xl:w-1/2 xl:flex-row     xl:gap-0 ">
        <div className=" hidden h-full w-full flex-col items-center  gap-16   p-12 sm:flex">
          <div className="hidden w-full items-center justify-start  py-16 sm:flex xl:py-0">
            <Logo />
          </div>
          <div className="hidden h-[80%] w-full flex-col items-center justify-center gap-4  sm:flex  ">
            <div className="  flex w-full items-center justify-center self-start text-center xl:justify-start xl:text-start">
              <h3 className=" text-2xl font-black text-white sm:text-4xl">
                Investing in top rental <br className="hidden xl:block" />{" "}
                assets without Hassle
              </h3>
            </div>
            <div className=" flex flex-col items-center justify-start ">
              <SignupHero className="mr-24 hidden xl:block" />
              <div className="flex w-full items-center justify-center gap-4 xl:justify-end xl:px-64">
                <span className=" hidden text-xl font-semibold text-[#D9D9D9] sm:block">
                  Say hello to passive income{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        <Card className=" flex h-full w-full flex-col items-center justify-start gap-12 border-none  sm:mb-8 sm:w-[80%]   sm:justify-between sm:rounded-xl sm:shadow-2xl md:w-[70%] lg:max-w-[60%] xl:relative xl:hidden xl:h-full xl:w-1/2">
          <div className=" w-full items-center justify-end  px-8 py-8 font-semibold text-[#6D6D6D] sm:flex sm:py-8 xl:h-[10%]">
            <MobileLogo className="sm:hidden" />
          </div>
          <div className="flex w-full flex-col gap-8  py-12   lg:max-w-2xl">
            <SignupForm />
          </div>
          <div className="flex w-full items-start justify-center gap-2 rounded-t-full bg-[#ECE5FF] xl:h-[20%]">
            <div className="mt-12 flex items-start justify-center gap-2">
              <p className="text-lg">Already have an account?</p>
              <Link
                className="text-lg  font-bold text-[#4E23CB]  "
                href="login"
              >
                Login
              </Link>
            </div>
          </div>
        </Card>
      </div>
      <Card className="    hidden flex-col items-center  justify-between self-end  shadow-lg xl:relative xl:flex xl:h-full xl:w-1/2">
        <div className=" flex w-full items-center justify-end px-8 py-8 font-semibold text-[#6D6D6D] xl:h-[10%]">
          English NG
        </div>
        <div className="flex  w-full flex-col gap-8 py-12   lg:max-w-2xl">
          <SignupForm />
        </div>
        <div className="flex w-full items-start justify-center gap-2 rounded-t-full bg-[#ECE5FF] xl:h-[20%]">
          <div className="mt-12 flex items-start justify-center gap-2">
            <p className="text-lg">Already have an account?</p>
            <Link className="text-lg  font-bold text-[#4E23CB]  " href="login">
              Login
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default Signup;
