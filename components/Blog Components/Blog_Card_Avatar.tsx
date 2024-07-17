"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "@/components/ui/button";
// import { Link2, Share } from "lucide-react";
import React from "react";

export const Blog_Card_Avatar = () => {
  return (
    <>
      <div className="flex px-3 items-center w-full sm:w-auto mt-4 sm:mt-0 sm:gap-4 ">
        <Avatar className="h-10 w-10 rounded-full">
          <AvatarImage
            className="rounded-full"
            src="https://github.com/shadcn.png"
            alt="@shadcn"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col  ">
          <p className='font-semibold'> Zach Bello</p>
          <p> 20th Jan. 2024</p>
        </div>
        <div className="flex sm:flex-col gap-4">
          <Button size="sm" className={"hover:bg-transparent px-0"} variant="ghost">
            {/*<Share color="black" />*/}
          </Button>

          <Button size="sm" className={"hover:bg-transparent px-0"} variant="ghost">
            {/*<Link2 color="black" />*/}
          </Button>
        </div>
      </div>
    </>
  );
};