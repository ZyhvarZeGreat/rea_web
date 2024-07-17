"use client";
import React from "react";
import Logo from "@/app/assets/mobile_signup_logo.svg";
import Message from "@/app/assets/verify_message.svg";
import Lock from "@/app/assets/verify-lock.svg";
import { Button } from "@/components/ui/button";
import InputOtp from "@/components/common/InputOtp/InputOtp";
import { useMutation } from "@tanstack/react-query";
import { createPin } from "@/lib/queryFunctions";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type Props = {};

type Pin = {
  pin: string;
};

const VerifyPin = (props: Props) => {
  const [value, setValue] = React.useState("");
  const [confirmValue, setConfirmValue] = React.useState("");
  const [disableResend, setDisableResend] = React.useState<boolean>(false);

  const [scene, setScene] = React.useState<"Initial" | "Final">("Initial");
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: () => {
      return createPin(Number(confirmValue));
    },
    onSuccess: () => {
      // Handle success
      toast("Pin Creation Succesful", {
        className: "text-[1.2rem] font-jakarta",
      });
      console.log("Pin created successfully");
    },
    onError: (error: any) => {
      // Handle error
      toast("Pin Creation Failed", {
        className: "text-[1.2rem] font-jakarta ",
      });
      console.error("Error creating user:", mutation.error);
    },
  });

  const handleVerifyPin = async () => {
    mutation.mutate();
    if (mutation.isError) {
      toast("Pin Update Failed", {
        className: "text-[1.2rem font-jakarta",
      });
    } else if (mutation.status === "success") {
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-hidden">
      <div className=" flex h-full w-full flex-col  items-center justify-start   md:max-w-screen-2xl md:px-0">
        <div className="flex w-full  items-center justify-between px-6 py-10 sm:px-12">
          <div>
            <Logo />
          </div>
          <div>
            <Message />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 py-4 text-center sm:gap-6">
          <div className=" flex items-center justify-center rounded-full bg-[#FFD6D6] p-4 sm:p-6">
            <Lock />
          </div>
          <h3 className="text-3xl font-bold lg:text-6xl">
            {scene === "Initial"
              ? "Create Transaction Pin"
              : "Re-confirm Transaction Pin"}
          </h3>
          <p className=" px-24 text-lg text-[#828282] sm:text-xl">
            We suggest you use 4 digital numbers you can easily recall anytime.
          </p>
          {/* <p className=" text-lg font-bold text-[#4E23CB] sm:text-xl">
            {email}
          </p> */}
        </div>

        <div className=" flex flex-col items-center  justify-center gap-24 py-12 sm:py-20">
          {scene === "Initial" ? (
            <InputOtp value={value} setValue={setValue} maxLength={4} />
          ) : (
            <InputOtp
              value={confirmValue}
              setValue={setConfirmValue}
              maxLength={4}
            />
          )}
          <div className="mt-6 flex flex-col items-center justify-center gap-4">
            {scene === "Initial" ? (
              <Button
                disabled={value?.length !== 4}
                onClick={() => {
                  setScene("Final");
                }}
                className="h-[3rem] w-[18rem] rounded-xl border border-black bg-[#4E23CB] text-xl  text-white hover:bg-[#4E23CB]/80 lg:w-[27rem]"
              >
                Continue
              </Button>
            ) : (
              <Button
                disabled={
                  confirmValue?.length !== 4 || mutation.isPending
                }
                onClick={() => {
                  handleVerifyPin();
                }}
                className="h-[3rem] w-[18rem] rounded-xl border border-black bg-[#4E23CB] text-xl  text-white hover:bg-[#4E23CB]/80 lg:w-[27rem]"
              >
                {mutation.isPending ? "Loading" : "Finish"}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyPin;
