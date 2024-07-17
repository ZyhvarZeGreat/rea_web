import Income_History_Tabs from "@/components/Portfolio Components/Portfolio Home Components/Income_History_Tabs";
import { Button } from "@/components/ui/button";
// import { ExportCurve, ImportCurve } from "iconsax-react";
// import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import React from "react";

type Props = {};

const IncomeHistory = (props: Props) => {
  return (
    <div className=" max-w-screen-3xl overflow-x-hidden">
      <div className=" w-full    px-8 ">
        <div className="flex w-full items-center justify-center gap-4 py-6 ">
          <div className="flex w-full flex-col items-start justify-start  p-6 sm:flex-row sm:items-center    sm:justify-between">
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
                {/*<ExportCurve />*/}
                Export
              </Button>

              <Button
                className=" flex gap-1 p-0 text-base text-black  hover:bg-transparent"
                variant="ghost"
              >
                {" "}
                {/*<ImportCurve /> */}
                Download
              </Button>
            </div>
          </div>
        </div>

        <div className="relative w-full lg:w-3/5 flex w-full rounded-lg  py-2 ">
          <Input
            className=" w-full rounded-lg bg-[#d9d9d9] px-16 py-1 font-bold"
            placeholder="Search Assets"
          />
          <div className=" absolute bottom-0 left-0 right-0 top-0  ml-6 flex w-[4rem] items-center justify-start ">
            {/*<Search className="z-20" />*/}
          </div>
        </div>

        <div className="w-screen lg:max-w-screen-xl xl:max-w-screen-2xl 2xl:max-w-screen-3xl">
          <Income_History_Tabs />
        </div>
      </div>
    </div>
  );
};

export default IncomeHistory;
