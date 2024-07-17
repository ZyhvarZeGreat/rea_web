"use client";
import React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
type Props = {
  maxLength: number;
  value?: string;
  setValue: (value: string) => void;
};

const InputOtp = (props: Props) => {
  const arr = Array.from({ length: props.maxLength }, (_, index) => index);
  return (
    <InputOTP
      value={props.value}
      onChange={(value: any) => props.setValue(value)}
      maxLength={props.maxLength}
    >
      <InputOTPGroup className="flex gap-4 sm:gap-12">
        {arr.map((index) => {
          return (
            <InputOTPSlot
              className=" text-lg font-bold sm:text-2xl"
              key={index}
              index={index}
            />
          );
        })}
      </InputOTPGroup>
    </InputOTP>
  );
};

export default InputOtp;
