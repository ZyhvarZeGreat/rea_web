"use client";
import { Button } from "@/components/ui/button";
// import { ShieldSecurity } from "iconsax-react";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { BackButton } from "@/components/common/BackButton";


const  Profile_Account_Settings_Drawer  = dynamic(() => import('@/components/Profile Components/Profile_Account_Settings_Drawer'), {
  ssr: false,
})
const Profile_Change_Pin_Modal  = dynamic(() => import('@/components/Profile Components/Profile_Change_Pin_Modal'), {
  ssr: false,
})
const Profile_Account_Settings_Modal  = dynamic(() => import('@/components/Profile Components/Profile_Account_Settings_Modal'), {
  ssr: false,
})
const Profile = () => {
  const [showPinInput, setShowPinInput] = useState(false);
  const [pinInput, setPinInput] = useState("");
  const handleInputChange = (e: any) => {
    e.preventDefault();
    setPinInput(e.target.value);
  };
  const router = useRouter();

  return (
    <div className=" flex h-full w-full max-w-screen-lg flex-col items-start  px-4 sm:py-16 text-[#6D6D6D] sm:px-0">
      <BackButton />
      <div className="  flex  w-full flex-col justify-center gap-6 rounded-xl bg-white px-3 py-10 font-medium">
        <div className="  w-full    py-1 ">
          <Profile_Account_Settings_Drawer />
          <Profile_Account_Settings_Modal />
        </div>
        <div className=" flex w-full flex-col items-center gap-1 py-1  sm:w-2/5">
          <Button
            className="flex  h-12 w-full justify-start  gap-2 rounded-xl px-2 text-lg hover:bg-[#ECE5FF]"
            variant="ghost"
            onClick={() => {
              setShowPinInput(!showPinInput);
            }}
          >
            {/*<ShieldSecurity size={24} variant="Bulk" className=" p-0 " />*/}
            <h3>Change Transaction Pin</h3>
          </Button>
          {showPinInput && (
            <div className="mt-4 flex w-full  flex-col justify-start gap-2">
              <Input
                onChange={handleInputChange}
                className="h-12 w-2/3"
                type="number"
                placeholder="Enter your old pin"
              />
              <Profile_Change_Pin_Modal disabled={pinInput !== "2002"} />
            </div>
          )}
        </div>
        <div className=" flex w-full sm:w-2/5 items-start sm:items-center  py-1">
          <Button
            className="  sm:px-12 text-start  text-base text-[#EA1313] hover:bg-transparent hover:text-[#EA1313]/70"
            variant="ghost"
          >
            <p>Deactivate Account</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
