import React from "react";
// import { Receive, Transmit } from "iconsax-react";
type Props = {};

const TransactionStats = (props: Props) => {
  return (
    <div className="flex w-full items-center justify-between py-2">
      <div className="flex items-center justify-center gap-3 ">
        {/*<Receive color="#05C75F" />*/}
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold">R0927339387D</h4>
          <div className="flex gap-2">
            <p className="text-[#818181]">Bank Transfer</p>
            <p className="text-[#818181]">9:11 PM</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-[#05C75F]">+ 680,000</p>
        <p className="text-[#818181]">9 Mar 2024</p>
      </div>
    </div>
  );
};

export default TransactionStats;
