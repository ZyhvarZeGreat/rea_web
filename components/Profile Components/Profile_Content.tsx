'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Edit from "@/app/assets/edit_square.svg";
import Heart from "@/app/assets/profile-icons/heart.svg";
import Link from "next/link";
import Settings from "@/app/assets/profile-icons/settings.svg";
import Call from "@/app/assets/profile-icons/call.svg";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Profile_Form from "@/components/Profile Components/Profile_Form";
import { User } from "@/components/types/interfaces";

type Props ={
  user:User
}
export const Profile_Content = ({user}:Props) => {
  const router = useRouter();
  const [disabled, setDisabled] = useState<boolean>(true);

  return (
    <>
      <div className="flex h-full w-full flex-col items-center justify-start gap-8  px-4 sm:max-w-screen-lg sm:px-0 ">
        <div className="flex w-full flex-col items-center justify-center gap-6">
          <div className="flex w-full items-center justify-between rounded-lg bg-white px-4 py-4 sm:py-12">
            <div className="flex items-center justify-center gap-2 sm:items-start">
              <Avatar className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-500 sm:h-20 sm:w-20">
                <AvatarImage
                  className="rounded-full"
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col font-medium text-[#6D6D6D] sm:gap-1">
                <h3 className="text-xl font-semibold text-black">
                  {" "}
                  {user?.first_name}
                </h3>
                <p>{user?.email}</p>
                <p>Pluto, Nigeria</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Button
                className=" hidden gap-1 sm:flex"
                variant={"ghost"}
                onClick={() => {
                  setDisabled(!disabled);
                }}
              >
                <p>Edit</p>
                <Edit />
              </Button>
              <Button
                className="flex gap-1 sm:hidden"
                variant={"ghost"}
                onClick={() => {
                  router.push("profile/details");
                }}
              >
                <Edit />
              </Button>
            </div>
          </div>
          <div
            className="flex w-full flex-col  items-start justify-between gap-2 rounded-lg bg-white px-6 py-6 sm:h-[3rem] sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:py-0">
            <div className=" font-medium text-black">
              <h3>Rea Bank Account:</h3>
            </div>
            <div
              className=" flex w-full flex-col items-start justify-start font-medium text-[#6D6D6D] sm:w-1/2 sm:flex-row sm:items-center sm:justify-between sm:py-0">
              <h3>
                Name: {user?.first_name} {user?.last_name}
              </h3>
              <h3>Account Number:R911A583X6</h3>
            </div>
          </div>
        </div>
        <div
          className="flex w-full  flex-col items-center justify-center gap-4 rounded-xl bg-white px-4 py-4 lg:hidden ">
          <div
            className="flex w-full cursor-pointer items-center justify-start gap-2 rounded-xl px-4 py-4 hover:bg-[#F0EBFF]">
            <Heart />
            <Link className="text-base text-[#6D6D6D]" href="profile/favorites">
              Favorites
            </Link>
          </div>
          <div
            className="flex w-full cursor-pointer items-center justify-start gap-2 rounded-xl px-4 py-4 hover:bg-[#F0EBFF]">
            <Settings />
            <Link
              className="text-base text-[#6D6D6D]"
              href="profile/account-settings"
            >
              {" "}
              Account Settings
            </Link>
          </div>
          <div
            className="flex w-full cursor-pointer items-center justify-start gap-2 rounded-xl px-4 py-4 hover:bg-[#F0EBFF]">
            <Call />
            <Link
              className="text-base text-[#6D6D6D]"
              href="profile/help-center"
            >
              {" "}
              Help Service
            </Link>
          </div>
        </div>
        <Profile_Form
          isIsolated={false}
          user={user}
        />
      </div>
    </>
  );
};