'use client'
import {
  Dialog as CustomDialog,
  DialogHeader as CustomDialogHeader,
  DialogTrigger as CustomDialogTrigger,
  DialogContent as CustomDialogContent,
  DialogTitle as CustomDialogTitle,
  DialogFooter as CustomDialogFooter,
  DialogClose as CustomDialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { Wallet } from "@/components/types/interfaces";
import {
  getTransactions,
  getVirtualAccount,
  getWalletBalance,
} from "@/lib/queryFunctions";
import { Button } from "@/components/ui/button";
import { NumericFormat } from "react-number-format";
type Props = {
  isIsolated?: boolean;
  isProperty?: boolean;
};

type VirtualAccount = {
  dva_account_name: string;
  dva_account_number: string;
  dva_bank_name: string;
  user: 110;
};
const Fund_Wallet_Modal = (props: Props) => {
  const [scene, setScene] = useState<"Preview" | "Details" | "Success">(
    "Preview",
  );
  const [amount, setAmount] = useState("");

  const handleChange = (e: any) => {
    e.preventDefault();
    const value = e.target.value.split("(NGN)")[0];
    const formatted = value.replace(/,/g, "");

    setAmount(formatted);
  };

  const {
    data: balance,
    error: balanceError,
    isLoading: balanceLoading,
  } = useQuery<Wallet | undefined>({
    queryKey: ["balance"],
    queryFn: () => getWalletBalance(),
    staleTime: 60 * 1000, // 60 seconds
    retry: 3,
  });

  const {
    data: account,
    error: accountError,
    isLoading: accountLoading,
  } = useQuery<VirtualAccount | undefined>({
    queryKey: ["dva"],
    queryFn: () => getVirtualAccount(),
    staleTime: 60 * 1000, // 60 seconds
    retry: 3,
  });

  // Made this component use named imports due to a bug with the shadcn dialog library that prevents the usage of 2 dialog instances
  return (
    <CustomDialog>
      <CustomDialogTrigger asChild>
        <Button
          className={cn(
            " bg-[#4E23CB] py-7 text-lg ring-2 ring-black/90 hover:bg-[#4E23CB]",
            props.isIsolated === true ? "w-full" : "w-1/2",
            props.isProperty === true &&
              "w-full border border-transparent bg-transparent text-[#4E23CB] ring-0  transition-all duration-300 hover:border-[#4E23CB] hover:bg-transparent",
          )}
        >
          Fund Wallet
        </Button>
      </CustomDialogTrigger>
      {scene === "Preview" && (
        <CustomDialogContent className="bg-white sm:max-w-2xl">
          <CustomDialogHeader className="flex items-center justify-center gap-4 py-6 ">
            <CustomDialogTitle className="text-3xl">
              {" "}
              Fund Wallet
            </CustomDialogTitle>
            <div className="flex w-full items-center justify-center gap-2">
              <p className="text-lg">Wallet Balance:</p>
              <div className="flex h-[2.5rem] items-center justify-center rounded-lg bg-[#c2aef3cc] px-3 text-lg font-semibold   text-[#4E23CB] hover:bg-[#c2aef3cc]">
                ₦{Number(balance?.balance).toLocaleString("en-US")}
              </div>
            </div>
            <div className=" flex w-full flex-col items-center justify-center px-8">
              <div className="relative flex w-full flex-col gap-4 text-[#6D6D6D]">
                <Label className="text-xl font-semibold text-black">
                  {" "}
                  Bank Transfer
                </Label>
                <NumericFormat
                  suffix="(NGN)"
                  onChange={handleChange}
                  placeholder="178,000 (NGN)"
                  className="h-[3.5rem] text-base font-semibold "
                  customInput={Input}
                  thousandSeparator
                  min={100}
                  max={15000000}
                />
                <div className="absolute bottom-0  right-0 flex h-[3.5rem]  w-1/3 items-center justify-end    px-4  text-base font-semibold">
                  <h3>Minimum 1000</h3>
                </div>
              </div>
              <div className="mt-2 flex w-full items-center justify-end font-medium">
                <p className="text-[#4E23CB]">
                  You will be provided a temporary bank account
                </p>
              </div>
              <div className="flexn w-full flex-col items-center justify-center">
                <div className="flex w-full py-4">
                  <h3 className="text-xl font-semibold">Funding Steps</h3>
                </div>
                <div className="flex w-full flex-col ">
                  <ul className="flex w-full flex-col gap-6 px-4 text-[#6D6D6D]">
                    <li className="list-disc">
                      Enter the amount you want to deposit and click the “Next”
                      Button
                    </li>

                    <li className="list-disc">
                      You will be provided a temporary transfer account number
                      (expires in 20 mins).
                    </li>
                    <li className="list-disc">
                      Transfer money to the account via your online banking or
                      USSD.
                    </li>

                    <li className="list-disc">
                      Check your transaction history, Bank transfers generally
                      credit within 10 minutes. if the deposit doesn&apos;t
                      credit within 24 hours, Please contact your bank.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CustomDialogHeader>

          <div className="flex w-full items-center justify-center self-center ">
            <Button
              onClick={() => {
                setScene("Details");
              }}
              disabled={Number(amount) < 1000}
              className="w-full rounded-xl border border-black bg-[#4E23CB] py-8 text-2xl hover:bg-[#4E23CB]/80"
            >
              Next
            </Button>
          </div>
        </CustomDialogContent>
      )}

      {scene === "Details" && (
        <CustomDialogContent className="bg-white sm:max-w-[470px]">
          <CustomDialogHeader className="flex items-center justify-center gap-4 py-6 ">
            <div className="flex w-full items-center justify-center gap-2">
              <p className="text-lg font-semibold">
                {" "}
                Amount:{" "}
                <span className="font-semibold text-[#4E23CB]">
                  {" "}
                  ₦{Number(amount).toLocaleString()}
                </span>
              </p>
            </div>
          </CustomDialogHeader>

          <Card className="mx-auto flex w-4/5 flex-col gap-4 px-4 py-6 text-lg  font-semibold shadow-lg ">
            <div className="flex w-full justify-center px-4">
              <p> {account?.dva_account_name}</p>
            </div>
            <div className="flex w-full items-start justify-start gap-4 px-4">
              <h3> Account Number </h3>
              <p className="text-[#4E23CB]">{account?.dva_account_number}</p>
            </div>
          </Card>
          <div className="mt-16 flex w-full flex-col  items-center justify-center gap-3 self-center ">
            <p className="text-[#6D6D6D]">
              {" "}
              Transfer any amount into your Rea Account
            </p>
            <Button
              onClick={() => {
                setScene("Success");
              }}
              disabled={amount === ""}
              className="w-2/3 rounded-xl  border border-black bg-[#4E23CB] py-6 text-lg hover:bg-[#4E23CB]/80"
            >
              Confirm
            </Button>
          </div>
        </CustomDialogContent>
      )}

      {scene === "Success" && (
        <CustomDialogContent className="bg-white sm:max-w-[470px]">
          <CustomDialogHeader className="flex items-center justify-center gap-4 py-6 ">
            <CustomDialogTitle className="font-m text-3xl">
              {" "}
              Wallet Funded Successfully
            </CustomDialogTitle>
          </CustomDialogHeader>

          <CustomDialogClose className="mt-16 flex w-full flex-col  items-center justify-center gap-3 self-center ">
            <Button
              onClick={() => {
                setScene("Preview");
                setAmount("");
              }}
              disabled={amount === ""}
              className="w-2/3  rounded-xl border border-black bg-[#4E23CB] py-6 text-lg hover:bg-[#4E23CB]/80"
            >
              See Wallet
            </Button>
          </CustomDialogClose>
        </CustomDialogContent>
      )}
    </CustomDialog>
  );
};

export default Fund_Wallet_Modal;
