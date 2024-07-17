import { Card, CardContent } from "@/components/ui/card";
import React, { Suspense } from "react";
import Logo from "@/app/assets/auth_logo.svg";
import Image from "next/image";
import Link from "next/link";
import { LoginForm } from "@/components/Auth Components/LoginForm";
import getbase64 from "@/lib/getbase64";


const Login: React.FC = async () => {
  const remoteImg = 'https://tabodozo.sirv.com/login.jpg'
  const base64 = await getbase64(remoteImg)
  return (
    <div className=" relative flex h-screen w-screen items-center justify-center overflow-hidden">
      <div className="flex h-full w-full items-center justify-center sm:h-auto ">
        <Card className="flex z-50 h-full w-full flex-col justify-start  gap-4 rounded-none sm:max-w-2xl  sm:rounded-lg">
          <div className="mt-1 flex w-full flex-col items-center justify-between sm:mt-0 sm:justify-center">
            <div className="w-full px-8 py-6 sm:py-8">
              <Logo />
            </div>
          </div>

        <div className='flex items-center h-[90%] w-full  justify-between flex-col'>
          <CardContent className=" mt-[75px] flex  max-w-screen-2xl flex-col items-center justify-center gap-[40px] sm:mt-0 sm:gap-12 lg:w-[37rem] ">
            <div className="flex flex-col items-center justify-center  gap-2 text-center">
              <h3 className=" text-3xl font-bold text-black sm:text-4xl sm:text-[#4E23CB]">
                Get started
              </h3>
              <p className="text-[#6D6D6D] ">Login to begin</p>
            </div>

            <div className="w-full  ">
              <Suspense fallback={""}>

              <LoginForm />
              </Suspense>
            </div>
          </CardContent>
          <div className="flex w-full h-[5rem] items-center  justify-center gap-2   rounded-t-2xl bg-[#ECE5FF] sm:h-[7rem] sm:rounded-t-full">
            <p className="text-lg">Don &apos;t have an account?</p>
            <Link className="text-lg  font-bold text-[#4E23CB]  " href="signup">
              Join us Today
            </Link>
          </div>
        </div>
        </Card>
      </div>
      <div className="  relative hidden xs:-z-50 sm:z-auto h-full w-full items-center sm:absolute sm:flex">
        <Image
          placeholder='blur'
          blurDataURL={base64}
          className="object-cover w-full h-full object-top"
          src={remoteImg}
          alt={"background"}
          fill
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full bg-[#18005C]/70 backdrop-blur-xl">
          <p className="hidden">ss</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
