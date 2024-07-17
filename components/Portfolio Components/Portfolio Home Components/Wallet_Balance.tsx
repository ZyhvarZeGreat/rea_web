"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import TransactionStats from "./TransactionStats";
import Fund_Wallet_Modal from "@/components/common/Modals/Fund_Wallet_Modal";
import Withdraw_Funds_Modal from "@/components/common/Modals/Withdraw_Funds_Modal";
import { Transaction, Wallet } from "@/components/types/interfaces";
import { useRouter } from "next/navigation";
import { getTransactions, getWalletBalance } from "@/lib/queryFunctions";
import { useQuery } from "@tanstack/react-query";
import TextSkeleton from "@/components/common/Skeletons/TextSkeleton";
import { cn } from "@/lib/utils";

type Props = {
  isHidden?: boolean;
  isIsolated?: boolean;
};

const Wallet_Balance = (props: Props) => {
  const { push } = useRouter();
  const {
    data: wallet,
    error,
    isLoading,
  } = useQuery<Wallet | undefined>({
    queryKey: ["wallet"],
    queryFn: () => getWalletBalance(),
    staleTime: 60 * 1000, // 60 seconds
    retry: 3,
  });

  const {
    data: transactions,
    error: txError,
    isLoading: txLoading,
  } = useQuery<Transaction | undefined>({
    queryKey: ["user", "balance"],
    queryFn: () => getTransactions(),
    staleTime: 60 * 1000, // 60 seconds
    retry: 3,
  });

  const array = new Array(6).fill(0);
  return (
    <div
      className={cn(
        "  flex-col items-center  justify-center gap-4  rounded-[15px] bg-white ",
        props.isHidden === true ? "flex lg:hidden rounded-none mt-32  " : " hidden rounded-[15px] lg:flex",

        props.isIsolated === true
          ? "  w-full px-4 sm:max-w-2xl  sm:px-0 sm:shadow-lg "
          : "w-auto",
      )}
    >
      <div
        className={cn(
          "flex h-[18rem] w-full flex-col items-center justify-center gap-6 text-center",
          props.isHidden && "h-auto",
          props.isIsolated === true
            ? "h-auto "
            : " hidden rounded-none lg:flex",
        )}
      >
        <h2 className="py-2 text-3xl">Wallet Balance</h2>
        <div className="flex w-full items-center justify-center ">
          {isLoading ? (
            <TextSkeleton className="w-2/5 bg-muted" />
          ) : error ? (
            <div>Error</div>
          ) : (
            <h3 className="text-4xl font-bold text-[#4E23CB]">
              ₦{Number(wallet?.balance).toLocaleString("en-US")}
            </h3>
          )}
        </div>
        <div
          className={cn(
            "flex w-full  items-center justify-between  px-6",
            props.isIsolated ? "flex-col gap-4  sm:flex-row" : "flex-row gap-8",
          )}
        >
          <Fund_Wallet_Modal isIsolated={props.isIsolated} />
          <Withdraw_Funds_Modal
            isIsolated={props.isIsolated}
            walletBalance={Number(wallet?.balance).toLocaleString("en-US")}
          />
        </div>
      </div>
      <div className=" flex w-full flex-col items-center justify-center gap-6 px-6">
        <div className="w-full">
          <h3 className="text-base font-medium text-[#8459FF]">
            Recent Transactions
          </h3>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-4 ">
          {txLoading ? (
            <>
              {array.map((item, i) => {
                return (
                  <TextSkeleton key={i} className="h-14 w-full bg-muted" />
                );
              })}
            </>
          ) : txError ? (
            <div>Error</div>
          ) : (
            <>
              <TransactionStats />
              <TransactionStats />
              <TransactionStats />
              <TransactionStats />
              <TransactionStats />
              <TransactionStats />
            </>
          )}
        </div>
        <div className="flex items-center justify-center py-2">
          <Button
            className="py-6 text-lg font-medium  text-[#8459FF] hover:bg-transparent hover:text-[#4E23CB]"
            variant="ghost"
            onClick={() => {
              push("portfolio/transaction-history");
            }}
          >
            See All Transactions
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Wallet_Balance;
