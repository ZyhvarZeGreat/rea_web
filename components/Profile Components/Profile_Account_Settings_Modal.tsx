"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import BankIcon from '@/public/account_balance.png'
import ArrowIcon from '@/public/bank_arrow.png'
import Profile_Account_Settings_Content from "./Profile_Account_Settings_Content";
import Image from "next/image";

const Profile_Account_Settings_Modal = () => {
  return (
    <Dialog>
      <DialogTrigger className="hidden w-full items-center justify-between   gap-2 rounded-xl  px-2 py-4 text-lg hover:bg-[#ECE5FF] sm:flex sm:w-2/5">
        <div className="flex w-full gap-2 items-center   ">
         <Image className="h-4 w-4" src={BankIcon} alt='ss' />
          <h3>Bank Accounts</h3>
        </div>
        <Image className="h-4 w-4" src={ArrowIcon} alt='ss' />
      </DialogTrigger>
      <DialogContent>
        <Profile_Account_Settings_Content />
      </DialogContent>
    </Dialog>
  );
};

export default Profile_Account_Settings_Modal;
