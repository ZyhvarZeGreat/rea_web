"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn, signupFormData, signupSchema } from "@/lib/utils";
import { User } from "../types/interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { BackButton } from "@/components/common/BackButton";

type Props = {
  user: User | undefined;
  isIsolated: boolean;
  // disabled:boolean
};

const Profile_Form = ({ user, isIsolated }: Props) => {
  const [disabled, setDisabled] = useState<boolean>(true);
  const { register, handleSubmit, getValues, control, formState } =
    useForm<signupFormData>({
      resolver: zodResolver(signupSchema),
    });
  const { errors } = formState;
  return (
    <div
      className={cn(
        "w-full  flex-col  ",
        isIsolated ? "flex px-4" : "hidden gap-4 sm:flex"
      )}
    >
      {isIsolated && (
        <BackButton />
      )}
      <div className="w-full ">
        {isIsolated ? (
          <h3 className="py-4 text-lg font-semibold ">
            Edit your Personal Information
          </h3>
        ) : (
          <h3 className="text-xl ">Personal Information</h3>
        )}
      </div>

      <div className=" sm flex flex-col gap-8 gap-x-8  rounded-lg bg-white  px-4 py-8 sm:grid sm:grid-cols-12 sm:gap-y-12 sm:px-8 ">
        <div className=" col-span-12 flex flex-col items-center justify-start gap-2 sm:col-span-6">
          <Label className="w-full font-semibold text-[#8459FF]">
            First Name
          </Label>
          <div className=" flex w-full flex-col gap-2  ">
            <Input
              disabled={disabled}
              {...register("fullName")}
              className="h-12 w-full border-0 border-b-2 border-[#4E23CB] text-lg shadow-none ring-0 focus-visible:ring-0 focus-visible:placeholder:text-black "
              placeholder={user?.first_name}
            />
            {errors?.fullName && (
              <div>
                <p className="font-semibold text-red-500">
                  {" "}
                  {errors?.fullName?.message}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className=" col-span-12 flex flex-col items-center justify-start gap-2 sm:col-span-6">
          <Label className="w-full font-semibold text-[#8459FF]">
            Last Name
          </Label>
          <div className=" flex w-full flex-col gap-2  ">
            <Input
              disabled={disabled}
              {...register("fullName")}
              className="h-12 border-0 border-b-2 border-[#4E23CB] text-lg shadow-none ring-0 focus-visible:ring-0 focus-visible:placeholder:text-black "
              placeholder={user?.last_name}
            />
            {errors?.fullName && (
              <div>
                <p className="font-semibold text-red-500">
                  {" "}
                  {errors?.fullName?.message}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className=" col-span-12 flex flex-col items-center justify-start gap-2 sm:col-span-6">
          <Label className="w-full font-semibold text-[#8459FF]">
            Email Address
          </Label>
          <div className=" flex w-full flex-col gap-2  ">
            <Input
              disabled={disabled}
              {...register("fullName")}
              className="h-12 border-0 border-b-2 border-[#4E23CB] text-lg shadow-none ring-0 focus-visible:ring-0 focus-visible:placeholder:text-black "
              placeholder={user?.email}
            />
            {errors?.fullName && (
              <div>
                <p className="font-semibold text-red-500">
                  {" "}
                  {errors?.fullName?.message}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className=" col-span-12 flex flex-col items-center justify-start gap-2 sm:col-span-6">
          <Label className="w-full font-semibold text-[#8459FF]">
            Phone Number
          </Label>
          <div className=" flex w-full flex-col gap-2  ">
            <Input
              disabled={disabled}
              {...register("fullName")}
              className="h-12 border-0 border-b-2 border-[#4E23CB] text-lg shadow-none ring-0 focus-visible:ring-0 focus-visible:placeholder:text-black "
              placeholder="Phone Number"
            />
            {errors?.fullName && (
              <div>
                <p className="font-semibold text-red-500">
                  {" "}
                  {errors?.fullName?.message}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className=" col-span-12 flex flex-col items-center justify-start gap-2 sm:col-span-6">
          <Label className="w-full font-semibold text-[#8459FF]">
            Location
          </Label>
          <div className=" flex w-full flex-col gap-2  ">
            <Input
              disabled={disabled}
              {...register("fullName")}
              className="h-12 border-0 border-b-2 border-[#4E23CB] text-lg shadow-none ring-0 focus-visible:ring-0 focus-visible:placeholder:text-black "
              placeholder="Location"
              autoComplete="location"
            />
            {errors?.fullName && (
              <div>
                <p className="font-semibold text-red-500">
                  {" "}
                  {errors?.fullName?.message}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className=" col-span-12 flex flex-col items-center justify-start gap-2 sm:col-span-6">
          <Label className="w-full font-semibold text-[#8459FF]">Gender</Label>
          <div className=" flex w-full flex-col gap-2  ">
            <Input
              disabled={disabled}
              {...register("fullName")}
              autoComplete="gender"
              className="h-12 border-0 border-b-2 border-[#4E23CB] text-lg shadow-none ring-0 focus-visible:ring-0 focus-visible:placeholder:text-black "
              placeholder={user?.gender}
            />
            {errors?.fullName && (
              <div>
                <p className="font-semibold text-red-500">
                  {" "}
                  {errors?.fullName?.message}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center py-6">
        <Button className="h-10 bg-[#4E23CB] px-8"> Save Changes </Button>
      </div>
    </div>
  );
};

export default Profile_Form;
