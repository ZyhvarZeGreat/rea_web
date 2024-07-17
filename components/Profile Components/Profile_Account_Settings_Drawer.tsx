import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";


import React from "react";
// import { ArrowRight, Bank } from "iconsax-react";
import Profile_Account_Settings_Content from "./Profile_Account_Settings_Content";

type Props = {};

const Profile_Account_Settings_Drawer = (props: Props) => {
  return (
    <div className="w-full">
      <Drawer>
        <DrawerTrigger className="flex w-full   items-center justify-between gap-2 rounded-xl px-2 py-4 text-lg hover:bg-[#ECE5FF] sm:hidden">
          <div className="flex w-full gap-2  ">
            {/*<Bank variant="Bulk" />*/}
            <h3>Bank Accounts</h3>
          </div>

          {/*<ArrowRight />*/}
        </DrawerTrigger>
        <DrawerContent>
          <Profile_Account_Settings_Content />
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Profile_Account_Settings_Drawer;
