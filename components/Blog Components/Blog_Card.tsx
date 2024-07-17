"use client";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
type Props = {
  blurDataUrl:string|undefined
  imageUrl: string | StaticImageData;
};

const Blog_Card = ({blurDataUrl,imageUrl}: Props) => {
  return (
    <Link
      href="blog/2"
      className=" w-full xs:col-span-10 flex-col items-center  justify-around shadow-sm gap-8 rounded-lg sm:bg-[#F5F5F5]  sm:col-span-10 sm:mx-auto   lg:col-span-6   xl:col-span-4 "
    >
      <div className="relative h-[15rem] sm:h-[20rem] w-full overflow-hidden rounded-lg ">
        <Image

          placeholder='blur'
          className="   rounded-lg object-cover transition-all duration-500 hover:scale-110"
          fill
          blurDataURL={blurDataUrl}
          src={imageUrl}
          alt=""
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 flex h-full w-full items-end justify-start rounded-lg bg-black/30 px-4  ">
          <div className="px- flex h-full w-full  items-start justify-between  text-white">
            <div className="mt-6 flex items-center justify-center rounded-lg bg-[#1A1A1A] px-2 py-1 font-bold text-white">
              4 Mins
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 rounded-lg  px-6 py-6">
        <div className="flex flex-col gap-4">
          <h3 className=" text-xl sm:text-3xl font-semibold">
            Diversify Your Real Estate Investments with Rea
          </h3>
          <p className='text-xs sm:text-lg'>
            Lorem ipsum dolor sit amet consectetur. In habitant quam eleifend
            venenatis molestie platea eu vitae.
          </p>
        </div>
        <div className="flex items-center gap-4 ">
          <Avatar className=" h-8 w-8 sm:h-10 sm:w-10 rounded-full">
            <AvatarImage
              className="rounded-full"
              src="https://github.com/shadcn.png"
              alt="@shadcn"
            />
            <AvatarFallback className='bg-gray-400 rounded-full p-2'>ZB</AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-sm sm:text-lg gap-1 ">
            <p className="font-semibold"> Zach Bello</p>
            <p> 20th Jan. 2024</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Blog_Card;
