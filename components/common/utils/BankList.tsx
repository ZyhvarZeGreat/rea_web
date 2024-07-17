import React, { useCallback, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
// import { Search } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getBankDetails } from "@/lib/queryFunctions";
import { accountDetails, Banks } from "@/components/types/interfaces";
import Image from "next/image";
import { RadioGroup } from "@/components/ui/radio-group";

type Props = {
  filteredBanks: Banks[];
  scene: "Unpaid" | "SelectBank" | "Approve";
};

const BankList = ({ filteredBanks, scene }: Props) => {
  const [pin, setPin] = useState<string>();
  const [amount, setAmount] = useState<any>();
  const [accountDetails, setAccountDetails] = useState<accountDetails>({
    bankName: null,
    accountNumber: null,
    bankCode: null, // Assuming accountNumber is a required property
    logo: "",
  });

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

  const suffix = " (NGN)";

  const [searchValue, setSearchValue] = useState("");
  const [debouncedSearchValue, setDebouncedSearchValue] = useState(searchValue);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Remove the suffix before appending it again to avoid duplicates
    let newValue = event.target.value;
    // if (newValue.endsWith(suffix)) {
    //   newValue = newValue.slice(0, -suffix.length);
    // }
    setAmount(Number(newValue).toLocaleString("en-US"));
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
                          <h3 className="text-base font-medium">{bank.name}</h3>
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
        </DialogContent>
      )}
    </Dialog>
  );
};

export default BankList;
