"use client";
import {
  Dialog as CustomDialog,
  DialogTrigger as CustomDialogTrigger,
  DialogContent as CustomDialogContent,
  DialogHeader as CustomDialogHeader,
} from "@/components/ui/dialog";
import React from "react";
import { Button } from "../ui/button";

type Props = {
  disabled: boolean;
};

const Profile_Change_Pin_Modal = (props: Props) => {
  return (
    <CustomDialog>
      <CustomDialogTrigger className="">
        <Button
          disabled={props.disabled}
          className="flex h-10 w-2/3 items-center justify-center rounded-lg border border-black bg-[#4E23CB] text-white"
        >
          Change pin
        </Button>
      </CustomDialogTrigger>
      <CustomDialogContent className="no-scrollbar flex  flex-col overflow-y-scroll bg-white px-12 py-8 sm:max-w-3xl">
        <CustomDialogHeader className="flex flex-col items-center justify-center gap-4">
          <div className=" flex w-full flex-col gap-2">
            <h3 className="text-3xl font-bold">Recent Bank Accounts</h3>
          </div>
        </CustomDialogHeader>
      </CustomDialogContent>
    </CustomDialog>
  );
};

export default Profile_Change_Pin_Modal;
