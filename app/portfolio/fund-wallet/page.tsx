"use client";
import React, { useState } from "react";


import { Label } from "@/components/ui/label";
import { NumericFormat } from "react-number-format";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Wallet } from "@/components/types/interfaces";
import { getVirtualAccount, getWalletBalance } from "@/lib/queryFunctions";
import { BackButton } from "@/components/common/BackButton";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import Link from "next/link";

type Props = {};

type VirtualAccount = {
  dva_account_name: string;
  dva_account_number: string;
  dva_bank_name: string;
  user: 110;
};
const Fund_Wallet = (props: Props) => {
  const [scene, setScene] = useState<"Preview" | "Details" | "Success">(
    "Details"
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
    isLoading: balanceLoading
  } = useQuery<Wallet | undefined>({
    queryKey: ["balance"],
    queryFn: () => getWalletBalance(),
    staleTime: 60 * 1000, // 60 seconds
    retry: 3
  });

  const {
    data: account,
    error: accountError,
    isLoading: accountLoading
  } = useQuery<VirtualAccount | undefined>({
    queryKey: ["dva"],
    queryFn: () => getVirtualAccount(),
    staleTime: 60 * 1000, // 60 seconds
    retry: 3
  });
  return (
    <div className="  flex flex-col px-4   flex h-screen w-screen items-start justify-center ">
      <div className="w-full px-6  ">
        <BackButton />
      </div>

      <div className="bg-white ">
        <div className="flex flex-col items-center justify-center gap-4  ">
          <h1 className="text-3xl">
            {" "}
            Fund Wallet
          </h1>
          <div className="flex w-full items-center justify-center gap-2">
            <p className="text-lg">Wallet Balance:</p>
            <div
              className="flex h-[2.5rem] items-center justify-center rounded-lg bg-[#c2aef3cc] px-3 text-lg font-semibold   text-[#4E23CB] hover:bg-[#c2aef3cc]">
              ₦{Number(balance?.balance).toLocaleString("en-US")}
            </div>
          </div>
          <div className=" flex w-full flex-col items-center justify-center ">
            <div className="relative text-sm flex w-full flex-col gap-4 text-[#6D6D6D]">
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
              <div
                className="absolute bottom-0 text-sm  right-0 flex h-[3.5rem]  w-1/3 items-center justify-end    px-4  text-base font-semibold">
                <h3>Min 1000</h3>
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
                <ul className="flex text-sm w-full flex-col gap-6 px-4 text-[#6D6D6D]">
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
        </div>

        <Drawer>
          <DrawerTrigger className="w-full" disabled={Number(amount) < 1000}>
            <div className="flex mt-8 w-full items-center justify-center self-center ">
              <div
                className="w-full rounded-xl text-white border text-lg flex items-center justify-center border-black bg-[#4E23CB] h-12 text-2xl hover:bg-[#4E23CB]/80"
              >
                Next
              </div>
            </div>
          </DrawerTrigger>
          <DrawerContent>
            {scene === "Details" && (
              <div className="bg-white sm:max-w-[470px]">
                <div className="flex items-center justify-center gap-4 py-6 ">
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
                </div>

                <div className="mx-auto flex w-4/5 flex-col gap-4 px-4 py-6 text-lg  font-semibold shadow-lg ">
                  <div className="flex w-full justify-center px-4">
                    <p> {account?.dva_account_name}</p>
                  </div>
                  <div className="flex w-full items-start justify-start gap-4 px-4">
                    <h3> Account Number </h3>
                    <p className="text-[#4E23CB]">{account?.dva_account_number}</p>
                  </div>
                </div>
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
              </div>
            )}

            {scene === "Success" && (
              <div className="bg-white sm:max-w-[470px]">
                <div className="flex items-center justify-center gap-4 py-6 ">
                  <h1 className="font-m text-lg">
                    {" "}
                    Wallet Funded Successfully
                  </h1>
                </div>

                <div className=" py-6 flex w-full flex-col  items-center justify-center gap-3 self-center ">
                  <Link
                    href="/properties"
                    className="w-2/3 flex items-center justify-center text-white font-semibold rounded-xl border border-black bg-[#4E23CB] py-3 text-lg hover:bg-[#4E23CB]/80"
                  >
                    Back to Property Purchase
                  </Link>
                </div>
              </div>
            )}
          </DrawerContent>
        </Drawer>
      </div>


    </div>
  );
};

export default Fund_Wallet;
