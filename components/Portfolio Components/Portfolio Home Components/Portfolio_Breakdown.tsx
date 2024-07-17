import { Button } from "@/components/ui/button";
import ArrowRight from "@/public/arrow-right.png";
import CaretDown from "@/public/caret-down.png";
import React from "react";
import Income_History_Modal from "./Income_History_Modal";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { PortfolioNew, User } from "@/components/types/interfaces";
import { getUsers } from "@/lib/queryFunctions";
import TextSkeleton from "@/components/common/Skeletons/TextSkeleton";
import Image from "next/image";
import { LineChartComponent } from "./LineChartComponent";

type Props = {
  showAssets: boolean;
  metrics: PortfolioNew
  setShowAssets: React.Dispatch<React.SetStateAction<boolean>>;
};

const Portfolio_Breakdown = ({ metrics, showAssets, setShowAssets }: Props) => {
  const {
    data: user,
    error,
    isLoading
  } = useQuery<User | undefined>({
    queryKey: ["user"],
    queryFn: () => getUsers(),
    staleTime: 60 * 1000, // 60 seconds
    retry: 3
  });


  

  return (
    <div className="flex w-full items-center justify-center ">
      <div className="flex  w-full flex-col items-center justify-center gap-5 sm:gap-8">
        <div className="w-full self-start ">
          {isLoading ? (
            <TextSkeleton className="h-10" />
          ) : error ? (
            <div className="px-6">Error</div>
          ) : (
            <h1 className="sm:py-106 flex  pt-4 text-2xl font-medium sm:text-4xl">
              Good Afternoon {user?.first_name} !
            </h1>
          )}
        </div>

        <div className="flex w-full justify-between rounded-[10px] bg-[#4E23CB] ">
          <div className="sm:py-100 flex w-full flex-col justify-between gap-2 px-8 py-6 sm:gap-0 lg:flex-row">
            <div className=" flex w-full flex-col   gap-3 font-semibold text-white">
              <h3 className=" text-sm sm:text-2xl">Portfolio Value</h3>

              <p className=" w-full text-2xl sm:w-2/5 sm:text-3xl">
                ₦{metrics?.portfolio}
              </p>

              <div className="flex items-center justify-center">
                <div className="flex w-full items-start  text-white    sm:items-center">

                  <h3 className=" text-base  sm:text-xl ">
                    +0.00 <span className="text-[#13EF29]">(0%)</span>
                  </h3>

                </div>
              </div>
            </div>
          </div>
          <div className="mr-6 flex  items-center justify-center ">


          <LineChartComponent/>
          </div>
        </div>

        <div className="flex w-full items-center justify-between rounded-[10px] border bg-white py-4  sm:h-[14rem]">
          <div className="flex w-full flex-col   px-8 lg:flex-row">
            <div className=" flex w-full flex-col items-start gap-2 font-semibold text-[#4E23CB] ">
              <p className=" text-base font-semibold text-black sm:text-xl  ">
                Total Rental Income
              </p>

              <p className="w-2/5 text-2xl font-medium sm:text-3xl">
                ₦{metrics?.roi}
              </p>
              <div className="flex w-full font-semibold text-white  ">


                <h3 className=" text-base text-black sm:text-xl ">
                  +0.00 <span className="text-[#13EF29]">(0%)</span>
                </h3>

              </div>
              <div className="w-full items-center justify-center py-4">
                <Income_History_Modal />
                <Link className="block lg:hidden" href={"portfolio/income-history"}>
                  <span className="flex cursor-pointer items-center  gap-1 px-0 text-base text-black">
                    See Rental Income History
                    {/*<ChevronDown />*/}
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex  items-center justify-center ">
          <LineChartComponent/>
          
          </div>
        </div>

        <div className=" mt-4 flex w-full flex-col items-start gap-6   sm:mt-12">
          <div className="w-full px-8">
            <h2 className=" text-xl font-semibold sm:text-4xl">Insights</h2>
          </div>
          <div className="flex w-full flex-col items-center gap-4  sm:gap-8 lg:items-start ">
            <div className="flex h-[4rem] w-full  items-center  rounded-[10px] bg-white sm:w-full  sm:py-10 lg:w-4/5  ">
              <div className="flex w-full justify-between gap-6 px-8 text-[#4E23CB]">
                <h3 className=" text-base font-semibold sm:text-xl">
                  Monthly Income
                </h3>

                <p className=" text-base font-bold sm:text-2xl"> ₦47,082</p>

              </div>
            </div>
            <div className="flex h-[4rem] w-full  items-center  rounded-[10px] bg-white  sm:w-full   lg:w-4/5">
              <Link
                href="/portfolio/portfolio-status"
                className="flex h-[4rem] w-full items-center justify-between gap-6 px-8 py-0 text-[#4E23CB] hover:bg-[#F0EBFF]"
              >
                <h3 className=" text-base font-medium sm:text-xl">
                  Portfolio Status
                </h3>
                <Image className="h-4 w-auto" priority src={ArrowRight} alt="arrow-right" />
              </Link>
            </div>
            <div className="flex h-[4rem] w-full  items-center rounded-[10px] bg-white  sm:w-full  sm:py-10 lg:w-4/5">
              <div className="flex w-full items-center justify-between px-8 text-[#4E23CB]">
                <div>
                  <h3 className=" text-base font-semibold sm:text-xl">
                    Properties Invested
                  </h3>
                </div>
                <div>
                  <Button
                    onClick={() => {
                      setShowAssets(!showAssets);
                    }}
                    className="flex gap-2 text-4xl hover:bg-transparent hover:text-[#4E23CB]"
                    variant="ghost"
                  >

                    <h3 className=" text-2xl"> 6</h3>

                    <Image className="h-6 w-6" priority src={CaretDown} alt="caret-down" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio_Breakdown;
