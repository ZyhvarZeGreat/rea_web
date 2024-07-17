import Wallet_Balance from "@/components/Portfolio Components/Portfolio Home Components/Wallet_Balance";
import React from "react";

type Props = {};

const page = (props: Props) => {

  return (
    <div className="   flex h-screen w-screen items-center justify-center ">
      <Wallet_Balance isIsolated={true} isHidden={true} />
    </div>
  );
};

export default page;
