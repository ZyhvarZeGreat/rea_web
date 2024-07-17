"use client";
import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { accountVerificationHandler } from "@/lib/accountVerificationHandler";
import { RadioGroup } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { accountDetails, Accounts, Banks, CreateUserAccountInterface } from "@/components/types/interfaces";
import { AxiosResponse } from "axios";
import { Button } from "../ui/button";
// import { Trash } from "iconsax-react";
import { Input } from "@/components/ui/input";
// import { Search } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getBankDetails, getSavedAccounts } from "@/lib/queryFunctions";
import Approval_Modal from "../common/Modals/Approval_Modal";
import Image from "next/image";
import { appendLogo } from "@/lib/appendLogo";
import { Spinner } from "@/components/common/Loader/Spinner";

type Props = {};

const Profile_Account_Settings_Content = (props: Props) => {
  const [scene, setScene] = useState<"Normal" | "Add Account">("Normal");
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [pin, setPin] = useState<string>();
  const [accountDetails, setAccountDetails] = useState<accountDetails>({
    bankName: null,
    accountNumber: null,
    bankCode: null, // Assuming accountNumber is a required property
    logo: "",
  });

  const [userAccount, setUserAccount] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [appendedAccounts, setAppendedAccounts] = useState<Accounts[]>();
  const handleRadioChange = (e: any) => {
    setAccountDetails({
      ...accountDetails, // Copy the existing state
      bankName: e.target.value,
    });
  };

  const details: CreateUserAccountInterface = {
    // Populate your interface properties here
    account_number: userAccount?.data?.account_number,
    account_name: userAccount?.data?.account_name,
    bank_code: userAccount?.bank_code,
    bank_name: accountDetails.bankName,
    pin: pin,
  };

  type accountResponse = {
    bank_code: string;
    data: any;
  };
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
    queryKey: ["saved-accounts"],
    queryFn: () => getSavedAccounts(),
    staleTime: 60 * 1000, // 60 seconds
    retry: 3,
  });
  console.log(accounts);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const userDetails: AxiosResponse<any> =
          await accountVerificationHandler(accountDetails);
        toast("Invalid Account Details", { position: "top-left" });
      } catch (error) {
        console.error("Error fetching account details:", error);
        // Handle error, e.g., show error message to the user
        toast("Error fetching account details", {
          position: "top-left",
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

  useEffect(() => {
    const getBankLogo = async (data: Accounts[] | undefined) => {
      if (accounts) {
        const appendedAccounts = await appendLogo(accounts);
        setLoading(false);
        setAppendedAccounts(appendedAccounts);
      }
    };
    getBankLogo(accounts);
  }, [accounts]);
  return (
    <div className="no-scrollbar  flex  flex-col overflow-y-scroll bg-white px-12 py-8 sm:h-full sm:max-w-2xl">
      {" "}
      {scene === "Normal" && (
        <div className=" mx-auto flex h-[80%] w-full flex-col items-center justify-center gap-6 sm:h-full ">
          <DialogHeader className="mt-12 flex  flex-col items-center justify-center gap-4">
            <div className=" flex w-full flex-col gap-2 text-center">
              <h3 className="text-2xl font-semibold">Recent Bank Accounts</h3>
            </div>
          </DialogHeader>
          <div className="flex w-full items-center justify-end">
            <Button
              onClick={() => {
                setIsEditable(!isEditable);
                console.log("clicked");
              }}
              className=" text-[#4E23CB] hover:bg-transparent"
              variant="link"
            >
              Edit
            </Button>
          </div>
          <div className="no-scrollbar flex  w-full flex-col items-center justify-center  gap-6 overflow-y-scroll rounded-lg py-4 sm:px-4 ">
            {loading ? (
              <Spinner />
            ) : accountsError ? (
              <div>error Loading accounts</div>
            ) : (
              appendedAccounts?.map((account, i) => {
                return (
                  <div
                    key={i}
                    className="flex w-full items-start justify-between rounded-lg px-4 py-3 shadow-lg"
                  >
                    <div className="flex items-center justify-center gap-1">
                      <div className="flex flex gap-4 font-medium">
                        <div>
                          {account.logo && <Image width={40} height={40} alt="bank-logo" src={account.logo} />}
                        </div>
                        <div className="flex flex-col gap-2">
                          <p className="">{account.account_name}</p>
                          <p className="text-[#6d6d6d]">
                            {account.account_number}
                          </p>
                        </div>
                      </div>
                    </div>
                    {isEditable ? (
                      <div className="flex items-center justify-center ">
                        <Button variant="link" className="hover:bg-transparent">
                          {/*<Trash className="text-red-500" variant="Bulk" />*/}
                        </Button>
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                );
              })
            )}
          </div>
          <div className="flex w-full items-center justify-center py-12">
            <Button
              onClick={() => {
                setScene("Add Account");
              }}
              variant="link"
              className=" text-xl  font-medium text-[#4E23CB] hover:bg-transparent hover:text-[#4E23CB] "
            >
              Add New Bank Account
            </Button>
          </div>
        </div>
      )}
      {scene === "Add Account" && (
        <div className="flex flex-col gap-16 py-8">
          <div className="flex w-full flex-col gap-6">
            <div className="w-full px-2">
              <h3 className="w-full text-center text-3xl font-medium">
                {" "}
                Enter Bank Details
              </h3>
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
                    {(
                      <DialogContent className="bg-white sm:max-w-xl ">
                        <DialogHeader className="flex items-center justify-center gap-4 ">
                          <DialogTitle className="py-5 text-xl">
                            Select bank to withdraw funds
                          </DialogTitle>
                        </DialogHeader>
                        <div className="relative w-full px-8">
                          <Input
                            className=" w-full rounded-lg bg-[#d9d9d9af] px-10 py-1 font-bold"
                            placeholder="Search Banks"
                          />
                          <div
                            className=" absolute bottom-0 left-0 right-0 top-0  z-20 ml-[3.2rem] flex w-[4rem] items-center justify-start">
                            {/*<Search size={18} className="z-100" />*/}
                          </div>
                        </div>
                        <div className="flex w-full flex-col items-center justify-center px-8">
                          <div className="w-full py-4 ">Recents</div>
                          <div className="no-scrollbar flex h-[30rem]  w-full flex-col  gap-4 overflow-y-scroll  ">
                            <div className="no-scrollbar flex h-[30rem]  w-full flex-col  gap-4 overflow-y-scroll  ">
                              {isLoading ? (
                                "Loading"
                              ) : error ? (
                                "error"
                              ) : (
                                <RadioGroup
                                  onChange={(e: any) => {
                                    handleRadioChange(e);
                                  }}
                                  defaultValue={banks?.[0]?.name}
                                >
                                  {banks?.map((bank, i) => {
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
                              )}
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    )}
                  </Dialog>
                ) : (
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
                )}
              </div>
              <div className="w-full">
                <Input
                  className="h-12 border-0 border-b border-b-[#8459FF] text-base  shadow-none focus-visible:ring-0 focus-visible:placeholder:text-black"
                  placeholder="Account Number"
                  onChange={(e) => {
                    setAccountDetails({
                      ...accountDetails, // Copy the existing state
                      accountNumber: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="w-full ">
                {userAccount !== undefined && (
                  <span>Account Name: {userAccount?.data?.account_name}</span>
                )}
              </div>
            </div>
          </div>
          <div className="mt-12 flex w-full flex-col gap-4  px-6">
            <Approval_Modal
              isWithdrawal={false}
              text="Save Bank"
              pin={pin}
              setPin={setPin}
              details={details}
            />

            <Button
              onClick={() => {
                setScene("Normal");
              }}
              className={
                "w-full border  border-transparent bg-transparent py-7  text-base text-[#4E23CB] hover:border-[#4E23CB] hover:bg-transparent "
              }
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile_Account_Settings_Content;
