import React from "react";
import {
  Dialog as CustomDialog,
  DialogContent as CustomDialogContent,
  DialogHeader as CustomDialogHeader,
  DialogTitle as CustomDialogTitle,
  
  DialogTrigger as CustomDialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import DownloadIcon from '@/public/download.png'
import ExportIcon from '@/public/export.png'
import SearchIcon from '@/public/search.png'
import { Input } from "@/components/ui/input";
import Income_History_Tabs from "./Income_History_Tabs";
import Image from "next/image";
Image
type Props = {};
const invoices = [
  {
    assetDetails: "",
    incomeAmount: "",
    paymentDate: "",
    status: "",
  },
];

const Income_History_Modal = (props: Props) => {
  return (
    <CustomDialog>
      <CustomDialogTrigger className=" hidden  hover:underline lg:block w-full " asChild>
        <p className="flex  cursor-pointer items-center  gap-1 px-0 text-base text-black">
          See Rental Income History
          {/*<ChevronDown />*/}
        </p>
      </CustomDialogTrigger>
      <CustomDialogContent className=" hidden sm:block md:max-w-screen-lg    bg-[#F6F6F6]   ">
        
        <CustomDialogHeader className="flex  items-center justify-center gap-4 py-6 ">
          <CustomDialogTitle className="flex w-full items-center justify-between rounded-lg  bg-white p-6">
            <div className="flex flex-col gap-4 p-4">
              <h3 className="text-3xl">Income History</h3>
              <p className="rounded-full bg-[#F0EBFF] p-2">Ref. NO: EX34590C</p>
            </div>

            <div className="flex gap-6">
              <Button
                className=" flex gap-1 p-0 text-base text-black  hover:bg-transparent"
                variant="ghost"
              >
                {" "}
                <Image className="h-6 w-6" src={ExportIcon} alt=''/>
                Export
              </Button>

              <Button
                className=" flex gap-1 p-0 text-base text-black  hover:bg-transparent"
                variant="ghost"
              >
              <Image className="h-6 w-6" src={DownloadIcon} alt=''/>
                Download
              </Button>
            </div>
          </CustomDialogTitle>
        </CustomDialogHeader>

        <div className="relative flex w-auto rounded-lg  bg-white  px-4 py-2 ">
          <Input
            className=" w-full rounded-lg bg-[#F6F6F6] px-10 py-1 font-bold"
            placeholder="Search Assets"
          />
          <div className=" absolute bottom-0 left-0 right-0 top-0  ml-7 flex w-[4rem] items-center justify-start ">
          <Image className="h-5 w-5 z-20" src={SearchIcon} alt=''/>
          </div>
        </div>

        <div className="w-auto ">
          <Income_History_Tabs />
        </div>
      </CustomDialogContent>
    </CustomDialog>
  );
};

export default Income_History_Modal;
