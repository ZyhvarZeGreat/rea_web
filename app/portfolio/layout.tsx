import React from "react";
import Navbar from "@/components/common/Navbar/Navbar";

type Props = {
  children: React.ReactNode;
};
const Layout = (props: Props) => {
  return (
    <div className="flex w-full flex-col ">
      <Navbar />

      <div className="  flex w-full items-center justify-center self-center   ">

      {props.children}
      </div>
    </div>
  );
};

export default Layout;
