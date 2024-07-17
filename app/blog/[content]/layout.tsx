
import React from "react";
type Props = {
  children: React.ReactNode;
};
const layout = (props: Props) => {
  return (
    <div className="flex w-full bg-[#F3F3F3] flex-col">

      <div className=" pb-32 flex w-full items-center justify-center self-center ">
        {props.children}
      </div>

    </div>
  );
};

export default layout;
