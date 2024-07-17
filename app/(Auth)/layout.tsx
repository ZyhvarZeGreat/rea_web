import React from "react";

type Props = {
  children: React.ReactNode;
};
const Layout = (props: Props) => {
  return (
    <div className="flex w-full flex-col">

      <div className=" flex w-full items-center justify-center self-center  ">
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
