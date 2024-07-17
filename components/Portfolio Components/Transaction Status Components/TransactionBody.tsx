"use client";

import React from "react";
import CustomSelect from "@/components/common/Select/Select";
import { TransactionTable } from "@/components/Portfolio Components/Transaction Status Components/TransactionTable";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
// import { Search, Wallet } from "lucide-react";
import { useRouter } from "next/navigation";
// import { ArrowLeft2, Receive, Transmit } from "iconsax-react";
import { getTransactions } from "@/lib/queryFunctions";
import { useQuery } from "@tanstack/react-query";
import { Transaction } from "@/components/types/interfaces";
import TransactionStats from "../Portfolio Home Components/TransactionStats";
import DashboardNav from "@/components/common/Dashboard Nav/DashboardNav";

type Props = {};

const TransactionBody = (props: Props) => {
  const router = useRouter();
  const {
    data: transactions,
    error,
    isLoading,
  } = useQuery<Transaction | undefined>({
    queryKey: ["transaction"],
    queryFn: () => getTransactions(),
    staleTime: 60 * 1000, // 60 seconds
    retry: 3,
  });

  return (
    <>
      {" "}
      <div className="  flex w-full py-2 sm:py-6 ">
        <Button
          onClick={() => {
            router.back();
          }}
          className="flex gap-1 bg-transparent font-bold text-[#4E23CB] hover:bg-transparent sm:font-semibold"
        >
          {/*<ArrowLeft2 />*/}
          Back
        </Button>
      </div>
      <div className="flex w-[90%] flex-col items-center justify-center sm:w-[80%]">
        <Card className="flex w-full flex-col items-start justify-center gap-4 rounded-lg bg-white px-4 py-6 shadow-none sm:h-[14rem] sm:flex-row sm:items-center sm:justify-between sm:px-12 sm:shadow-lg ">
          <div className="flex flex-col gap-2 sm:gap-6 ">
            <h2 className=" text-2xl font-bold sm:text-3xl">
              {" "}
              Transaction History
            </h2>
            <p className=" rounded-lg bg-[#F0EBFF] p-2 text-sm text-black sm:text-lg">
              Ref. NO: EX34590C
            </p>
          </div>
          <div className="flex gap-12 rounded-lg font-semibold sm:p-4 sm:shadow-md ">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className=" sm:text-md flex flex-row  items-center  justify-center gap-1 text-sm sm:flex-col sm:gap-2">
                In:
                <div className=" flex gap-1 text-[#05C75F] sm:gap-2">
                  {/*<Receive />*/}
                  <p>₦434,054.67</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className=" sm:text-md flex items-center   justify-center gap-1 text-sm sm:flex-col sm:gap-2">
                Out:
                <div className=" flex gap-1 text-[#EB5757] sm:gap-2">
                  {/*<Transmit />*/}
                  <p>₦434,054.67</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className=" mt-4 flex w-full flex-col items-center justify-center gap-6 sm:mt-12">
          <div className="flex w-full flex-col items-center justify-between  sm:flex-row sm:px-6 ">
            <div className=" w-full sm:w-[7rem] sm:shadow-sm">
              <CustomSelect />
            </div>
            <div className="relative flex h-[3.4rem] w-full items-center justify-center rounded-lg bg-white  sm:w-1/3    ">
              <Input
                className=" w-full rounded-lg bg-[#d9d9d9] px-10 py-3 font-bold"
                placeholder="Search Transactions..."
              />
              <div className=" absolute bottom-0 left-0 right-0 top-0  flex w-[4rem] items-center justify-start px-2 ">
                {/*<Search className="z-20" />*/}
              </div>
            </div>
          </div>

          <div className="w-full xs:hidden  rounded-lg bg-white sm:px-6 sm:py-6">
            <div className="flex w-full flex-col gap-6">
              <div className="flex w-full flex-col gap-1">
                <div className="w-full px-4">
                  <p className="text-base text-[#8459FF]">March 2024</p>
                </div>
                <div className=" flex  w-full flex-col items-center justify-center gap-4 px-4 py-2 sm:hidden">
                  <TransactionStats />
                  <TransactionStats />
                  <TransactionStats />
                  <TransactionStats />
                  <TransactionStats />
                  <TransactionStats />
                  <TransactionStats />
                </div>
              </div>

              <div className="flex w-full flex-col gap-1">
                <div className="w-full px-4">
                  <p className="text-base text-[#8459FF]">April 2024</p>
                </div>
                <div className=" flex  w-full flex-col items-center justify-center gap-4 px-4 py-2 sm:hidden">
                  <TransactionStats />
                  <TransactionStats />
                  <TransactionStats />
                  <TransactionStats />
                  <TransactionStats />
                  <TransactionStats />
                  <TransactionStats />
                </div>
              </div>

              <div className="flex w-full flex-col gap-1">
                <div className="w-full px-4">
                  <p className="text-base text-[#8459FF]">May 2024</p>
                </div>

                <div className=" flex  w-full flex-col items-center justify-center gap-4 px-4 py-2 sm:hidden">
                  <TransactionStats />
                  <TransactionStats />
                  <TransactionStats />
                  <TransactionStats />
                  <TransactionStats />
                  <TransactionStats />
                  <TransactionStats />
                </div>
              </div>
            </div>
            <TransactionTable
              loading={isLoading}
              error={error}
              data={transactions}
            />
          </div>
        </div>

        <div className=" flex w-full items-center justify-center  py-4 sm:py-12">
          <Button className="border-2  border-[#4E23CB] bg-white font-semibold text-[#4E23CB] hover:bg-transparent">
            More Transactions
          </Button>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-8 py-4 sm:py-8">
          <DashboardNav />
        </div>
      </div>
    </>
  );
};

export default TransactionBody;
