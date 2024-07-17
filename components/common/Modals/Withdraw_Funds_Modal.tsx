"use client";
import React, { Suspense, useCallback, useEffect, useMemo, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import { Search } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { accountVerificationHandler } from "@/lib/accountVerificationHandler";
import { RadioGroup } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { accountDetails, Accounts, Banks, withdrawFundsInterface } from "@/components/types/interfaces";
import { AxiosResponse } from "axios";
import Approval_Modal from "./Approval_Modal";
import { NumericFormat } from "react-number-format";
import PageLoader from "@/components/common/Loader/PageLoader";
import { useQuery } from "@tanstack/react-query";
import { getBankDetails, getSavedAccounts } from "@/lib/queryFunctions";

type Props = {
  walletBalance: string | undefined;
  isIsolated?: boolean;
};
export type Details = {
  account_number: string;
  account_name: string;
  pin: number;
  bank_code: string;
  bank_name: string;
};

const Withdraw_Funds_Modal = ({walletBalance,isIsolated}: Props) => {


  const [scene, setScene] = useState<"Unpaid" | "SelectBank" | "Approve">(
    "Unpaid",
  );
  const [pin, setPin] = useState<string>();
  const [amount, setAmount] = useState<any>();
  const [accountDetails, setAccountDetails] = useState<accountDetails>({
    bankName: null,
    accountNumber: null,
    bankCode: null, // Assuming accountNumber is a required property
    logo: "",
  });



  const [searchValue, setSearchValue] = useState("");
  const [debouncedSearchValue, setDebouncedSearchValue] = useState(searchValue);

  // Debounce the search input
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchValue(searchValue);
    }, 300); // Adjust the debounce delay as needed

    return () => {
      clearTimeout(handler);
    };
  }, [searchValue]);
  const {
    data: banks,
    error,
    isLoading,
  } = useQuery<Banks[] | undefined>({
    queryKey: ["banks"],
    queryFn: () => getBankDetails(),
    staleTime: 60 * 1000, // 60 seconds
    retry: 3,
  });

  const {
    data: accounts,
    error: accountsError,
    isLoading: accountsLoading,
  } = useQuery<Accounts[] | undefined>({
    queryKey: ["accounts"],
    queryFn: () => getSavedAccounts(),
    staleTime: 60 * 1000, // 60 seconds
    retry: 3,
  });
  // Memoize the filtered banks to avoid unnecessary recalculations
  const filteredBanks = useMemo(() => {
    return banks?.filter((bank) =>
      bank.name.toLowerCase().includes(debouncedSearchValue.toLowerCase()),
    );
  }, [banks, debouncedSearchValue]);
  const [userAccount, setUserAccount] = useState<any>();

  const details: withdrawFundsInterface = {
    // Populate your interface properties here
    account_name: userAccount?.data?.account_name,
    account_number: userAccount?.data?.account_number,
    bank_code: userAccount?.bank_code,
    bank_name: accountDetails.bankName,
    pin: pin,
    amount: amount,
  };

  useEffect(() => {
    const getDetails = async () => {
      try {
        const userDetails: AxiosResponse<accountDetails> =
          await accountVerificationHandler(accountDetails);
        console.log(userDetails);
        if (userDetails) {
          setUserAccount(userDetails);

          toast.success("Account Details Found", {
            position: "top-right",
            className: "font-jakarta",
          });
        } else if (!userDetails) {
          toast.error("Invalid Account Details", { position: "top-left" });
        }
      } catch (error) {
        console.error("Error fetching account details:", error);
        // Handle error, e.g., show error message to the user
        toast.error("Error fetching account details", {
          position: "top-right",
        });
      }
    };
    if (
      accountDetails?.accountNumber?.length === 10 &&
      accountDetails?.bankName !== null
    ) {
      getDetails();
    }
  }, [accountDetails]);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const value = event.target.value.split("(NGN)")[0];
    const formatted = value.replace(/,/g, "");

    setAmount(parseInt(formatted));
  };

  const handleSearchBanks = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(event.target.value);
    },
    [],
  );

  const handleRadioChange = (e: any) => {
    const value = e.target.value;
    const logo = banks?.find((bank) => {
      return bank.name === value;
    })?.logo;

    setAccountDetails({
      ...accountDetails, // Copy the existing state
      bankName: value,
      logo: logo,
    });
  };




  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className={cn(
            "w-1/2 bg-[#c2aef3cc] py-7 text-base text-[#4E23CB] hover:bg-[#c2aef3cc]",
            isIsolated === true ? "w-full" : "w-1/2",
          )}
        >
          Withdraw
        </Button>
      </DialogTrigger>
      {scene === "Unpaid" && (
        <DialogContent className="bg-white sm:max-w-2xl">
          <DialogHeader className="flex items-center justify-center gap-4 ">
            <DialogTitle className="text-3xl"> Withdraw</DialogTitle>
            <div className="flex w-full items-center justify-center gap-2">
              <p className="text-base">Wallet Balance:</p>
              <div className="flex h-[2.5rem] items-center justify-center rounded-lg bg-[#c2aef3cc] px-3 text-base font-semibold   text-[#4E23CB] hover:bg-[#c2aef3cc]">
                ₦{walletBalance}
              </div>
            </div>
            <div className=""></div>
          </DialogHeader>
          <div className="flex w-full flex-col items-center gap-4 space-x-2 px-6 text-base">
            <div className="w-full px-2">
              <h3 className="font-medium"> Enter Bank Details</h3>
            </div>
            <div className="flex w-full flex-col gap-3 text-sm">
              <div className="w-full">
                {accountDetails?.bankName === null ? (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Input
                        className="h-12 border-0 border-b border-b-[#8459FF] 
                    text-sm shadow-none focus-visible:ring-0 focus-visible:placeholder:text-black"
                        placeholder="Select Bank"
                      />
                    </DialogTrigger>
                    {scene === "Unpaid" && (
                      <DialogContent className="bg-white sm:max-w-2xl">
                        <DialogHeader className="flex items-center justify-center gap-4 ">
                          <DialogTitle className="py-5 text-xl">
                            Select bank to withdraw funds
                          </DialogTitle>
                        </DialogHeader>
                        <div className="relative w-full px-8">
                          <Input
                            type="text"
                            value={searchValue}
                            onChange={handleSearchBanks}
                            placeholder="Search for a bank..."
                            className=" w-full rounded-lg bg-[#d9d9d9af] px-10 py-1 font-bold"
                          />
                          <div className=" absolute bottom-0 left-0 right-0 top-0  z-20 ml-[3.2rem] flex w-[4rem] items-center justify-start">
                            {/*<Search size={18} className="z-100" />*/}
                          </div>
                        </div>
                        <div className="flex w-full flex-col items-center justify-center px-8">
                          <div className="w-full py-4 ">Recents</div>
                          <div className="no-scrollbar flex h-[30rem]  w-full flex-col  gap-4 overflow-y-scroll  ">

                            <Suspense fallback={<PageLoader/>}>
                              <RadioGroup
                                onChange={(e: any) => {
                                  handleRadioChange(e);
                                }}
                                defaultValue={
                                  accounts && accounts[0]?.bank_name
                                }
                              >
                                {accounts?.map((bank, i) => {
                                  return (
                                    <div
                                      key={i}
                                      className=" mb-2 flex items-center justify-between rounded-xl bg-white px-6 py-1.5  shadow-lg"
                                    >
                                      <div className="flex items-center gap-4">
                                        {/* <Image
                                          height={32}
                                          width={32}
                                          // src={bank.logo}
                                          alt={bank?.bank_name}
                                        /> */}
                                        <h3 className="text-base font-medium">
                                          {bank?.bank_name}
                                        </h3>
                                      </div>
                                      <div>
                                        <div className="flex items-center space-x-2">
                                          <input
                                            type="radio"
                                            onChange={(e: any) => {
                                              handleRadioChange(e);
                                            }}
                                            value={`${bank?.bank_name}`}
                                            id={`${bank?.bank_name}`}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </RadioGroup>
                            </Suspense>
                          </div>
                        </div>
                      </DialogContent>
                    )}
                  </Dialog>
                ) : (
                  <div className="relative flex w-full justify-end">
                    <Input
                      className="h-12 border-0 border-b border-b-[#8459FF] text-base shadow-none focus-visible:ring-0 focus-visible:placeholder:text-black"
                      value={accountDetails?.bankName}
                      onChange={() => {
                        setAccountDetails({
                          ...accountDetails, // Copy the existing state
                          bankName: null,
                        });
                      }}
                    />
                    <div className="absolute -right-1 bottom-0 top-0 flex  h-12 w-[12rem] items-center justify-end  px-6">
                      {accountDetails?.logo && accountDetails?.bankName && (
                        <Image
                          height={40}
                          width={40}
                          src={accountDetails.logo}
                          alt={accountDetails.bankName}
                        />
                      )}
                    </div>
                  </div>
                )}
              </div>
              <div className="w-full">
                {/* <Input
                  className="h-12 border-0 border-b border-b-[#8459FF] text-base  shadow-none focus-visible:ring-0 focus-visible:placeholder:text-black"
                  placeholder="Account Number"
                  value={accounts && accounts[0]?.account_number}
                /> */}
              </div>
            </div>

            <div className="w-full ">
              {userAccount !== undefined && (
                <span>Account Name: {userAccount?.data?.account_name}</span>
              )}
            </div>

            <div className="relative w-full">
              <div className="flex w-full flex-col gap-4">
                <NumericFormat
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  suffix="(NGN)"
                  placeholder="Amount (NGN)"
                  value={amount}
                  className="h-12   border border-[#8459FF] text-base shadow-none focus-visible:ring-0 focus-visible:placeholder:text-black"
                  customInput={Input}
                  min={1000}
                  max={15000000}
                  thousandSeparator
                />

                <ul className="flex flex-col gap-2 px-6 text-sm text-[#6d6d6d]">
                  <li className=" list-disc">Minimum withdrawal is ₦1000</li>
                  <li className=" list-disc">
                    Maximum withdrawal is ₦15,000,000
                  </li>
                </ul>
              </div>
              <div className="absolute  bottom-0  right-0 top-0 flex h-12 w-1/3 items-center justify-end  px-6">
                <span className="absolute z-10 font-medium text-[#6d6d6d]">
                  Minimum 1000
                </span>
              </div>
            </div>

            <div className="mt-4 flex w-full flex-col items-center justify-center gap-2 py-4">
              <Approval_Modal
                isWithdrawal={true}
                text="Withdraw"
                details={details}
                pin={pin}
                setPin={setPin}
              />
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="h-[3.5rem] w-full bg-transparent  text-xl text-[#4E23CB] hover:border  hover:border-[#4E23CB] hover:bg-transparent ">
                    Switch Bank Accounts
                  </Button>
                </DialogTrigger>
                {scene === "Unpaid" && (
                  <DialogContent className="bg-white sm:max-w-2xl">
                    <DialogHeader className="flex items-center justify-center gap-4 ">
                      <DialogTitle className="py-5 text-xl">
                        Select bank to withdraw funds
                      </DialogTitle>
                    </DialogHeader>
                    <div className="relative w-full px-8">
                      <Input
                        onChange={(e) => {
                          handleSearchBanks(e);
                        }}
                        className=" w-full rounded-lg bg-[#d9d9d9af] px-10 py-1 font-bold"
                        placeholder="Search Banks"
                      />
                      <div className=" absolute bottom-0 left-0 right-0 top-0  z-20 ml-[3.2rem] flex w-[4rem] items-center justify-start">
                        {/*<Search size={18} className="z-100" />*/}
                      </div>
                    </div>
                    <div className="flex w-full flex-col items-center justify-center px-8">
                      <div className="w-full py-4 ">Recents</div>
                      <div className="no-scrollbar flex h-[30rem]  w-full flex-col  gap-4 overflow-y-scroll  ">

                        <Suspense fallback={<PageLoader/>}>

                          <RadioGroup
                            onChange={(e: any) => {
                              handleRadioChange(e);
                            }}
                            defaultValue={banks?.[0]?.name}
                          >
                            {filteredBanks?.map((bank, i) => {
                              return (
                                <div
                                  key={i}
                                  className=" mb-2 flex items-center justify-between rounded-xl bg-white px-6 py-1.5  shadow-lg"
                                >
                                  <div className="flex items-center gap-4">
                                    <Image
                                      height={32}
                                      width={32}
                                      src={bank.logo}
                                      alt={bank.name}
                                    />
                                    <h3 className="text-base font-medium">
                                      {bank.name}
                                    </h3>
                                  </div>
                                  <div>
                                    <div className="flex items-center space-x-2">
                                      <input
                                        type="radio"
                                        onChange={(e: any) => {
                                          handleRadioChange(e);
                                        }}
                                        value={`${bank.name}`}
                                        id={`${bank.name}`}
                                      />
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </RadioGroup>
                        </Suspense>

                      </div>
                    </div>
                  </DialogContent>
                )}
              </Dialog>
            </div>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default Withdraw_Funds_Modal;
