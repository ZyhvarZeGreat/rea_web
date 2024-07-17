"use client";
import React from "react";
import { BackButton } from "@/components/common/BackButton";

type Props = {
  children: React.ReactNode;
};
const StatusLayout = (props: Props) => {

  return (
    <div className="flex w-full flex-col  ">
      <div className="flex w-full  flex-col items-center justify-center rounded-b-xl bg-[#4E23CB]">
        <BackButton />
        <div className=" flex h-[13rem]  w-full items-center justify-between text-center   sm:max-w-screen-3xl  lg:h-[10rem] lg:text-start ">
          <div className=" b mb-6 flex w-full flex-col justify-start gap-4 self-end  px-6 py-6 ">
            <h2 className="w-full text-4xl text-white  ">Portfolio Status</h2>
            <p className=" text-xl text-white lg:text-lg ">
              View Real time updates of your portfolio status
            </p>
          </div>
          <div className="hidden  lg:block ">ssss</div>
        </div>
      </div>

      <div className=" mt-12  flex w-full items-center justify-center self-center  sm:max-w-screen-3xl ">
        {props.children}
      </div>
    </div>
  );
};

export default StatusLayout;
