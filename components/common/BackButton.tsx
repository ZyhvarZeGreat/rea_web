"use client";
import { Button } from "@/components/ui/button";
import BackImg from "@/public/back-btn.png";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export const BackButton = () => {
  const router = useRouter();
  return (
    <div
      className=" flex  sm:px-0 sm:max-w-screen-3xl   h-[3rem] w-full items-center justify-start justify-self-start ">
      <Button
        onClick={() => {
          router.back();
        }}
        variant="ghost"
        className="-ml-8 hover:bg-transparent hover:text-current  items-center justify-center gap-1 text-lg text-[#4E23CB] sm:flex"
      >
        <Image className=" cursor-pointer fill" src={BackImg} alt={"profile-img"} />
        <p>Back </p>
      </Button>
    </div>
  );
};