import React, { Dispatch, SetStateAction } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { confirmPin, createUserAccount, withdrawFunds } from "@/lib/queryFunctions";
import { toast } from "sonner";
import { AxiosError } from "axios";

type Props = {
  isWithdrawal: boolean;
  text: string;
  details: any;
  pin: string | undefined;
  setPin: Dispatch<SetStateAction<string | undefined>>;
};

const Approval_Modal = ({
  isWithdrawal,
  text,
  details,
  pin,
  setPin,
}: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPin(e.target.value);
  };

  const withdrawalMutation = useMutation({
    mutationFn: () => {
      return withdrawFunds(details);
    },
    onSuccess: () => {
      // Handle success
      toast.success("Withdrawal Succesful", {
        position: "top-right",
        className: "font-jakarta",
      });
      console.log("Account Details Saved");
    },
    onError: (error: AxiosError) => {
      // Handle error
      toast.error("Withdrawal Failed", {
        position: "top-right",
        className: "font-jakarta",
      });
      console.error("Account Submission Failed:", error.response);
    },
  });
  const confirmPinMutation = useMutation({
    mutationFn: () => {
      return confirmPin(pin);
    },
    onSuccess: () => {
      // Handle success
      toast.success("Pin Confirmed", {
        position: "top-right",
        className: "font-jakarta",
      });
      console.log("Pin Confirmed");
    },
    onError: (error: any) => {
      // Handle error
      toast.error("Pin Confirmation Failed", {
        position: "top-right",
        className: "font-jakarta",
      });
      console.error("Pin Confirmation Failed:", error.response);
    },
  });

  const saveBankMutation = useMutation({
    mutationFn: () => {
      return createUserAccount(details);
    },
    onSuccess: () => {
      // Handle success
      toast.success("Account Details Saved", {
        position: "top-right",
        className: "font-jakarta  z-100",
      });
      console.log("Account Details Saved");
    },
    onError: (error: any) => {
      // Handle error
      toast.error(`${error?.response?.data?.non_field_errors[0]}`, {
        position: "top-right",
        className: "font-jakarta z-100",
      });
      console.error(error?.response?.data?.non_field_errors[0]);
    },
  });

  const handleAction = () => {
    // confirmPinMutation.mutate();
    if (isWithdrawal) {
      withdrawalMutation.mutate();
    } else if (!isWithdrawal) {
      saveBankMutation.mutate();
    }
  };
  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <div
          className={
            "flex h-[4rem] w-full items-center justify-center rounded-[10px] bg-[#4E23CB] text-lg text-white hover:bg-[#4e23cb]"
          }
        >
          {text}
        </div>
      </DialogTrigger>
      <DialogContent className="bg-white sm:max-w-lg">
        <div className="flex w-full flex-col pt-8 gap-16">
          <DialogHeader className="flex items-center justify-center gap-12 ">
            <DialogTitle className=" text-[#4E23CB] text-2xl">
              {" "}
              Enter Your Wallet Pin
            </DialogTitle>
            <div className="  flex w-full flex-col items-center gap-32 text-base">
              <Input
                type="password"
                onChange={(e) => {
                  handleChange(e);
                }}
                placeholder="Enter Wallet Pin"
                className=" h-16 rounded-[15px] focus-visible:outline-none w-[241px] border-[2px] border-[#8459FF] py-5 text-center text-lg placeholder:text-[#6d6d6d]"
              />
            </div>
          </DialogHeader>


          <div className=" pb-4 flex w-full flex-col gap-4">
            <p className="text-[13.2px] text-center text-[#6d6d6d]">
              By clicking “Withdraw” you agree that the bank account provided is
              yours
            </p>
            <Button
              onClick={() => {
                handleAction();
              }}
              className={
                "w-full bg-[#4E23CB] py-7 text-lg text-white hover:bg-[#4e23cb]"
              }
            >
              {text}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Approval_Modal;
