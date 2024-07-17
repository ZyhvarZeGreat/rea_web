"use client";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import image from "@/app/assets/image3.jpg";
import Location from "@/app/assets/location.svg";
import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Wallet } from "@/components/types/interfaces";
import { getWalletBalance } from "@/lib/queryFunctions";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const PropertyDrawer = () => {
  const router = useRouter();
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
  const [scene, setScene] = useState<
    "Initial" | "Approve" | "Failed" | "Success"
  >("Initial");
  const [isSufficient, setIsSufficient] = useState<boolean>(true);
  return (
    <Drawer>
      <DrawerTrigger
        className={"flex sm:hidden h-auto fixed bottom-0 mb-4 z-10 left-0 right-0    w-4/5 mx-auto  items-center justify-center"}>
        <div
          className=" h-[4rem] w-full rounded-[10px] w-[80%] flex items-center justify-center   border-none      text-2xl font-semibold  bg-[#4E23CB] text-white ">
          <p>Buy</p>
        </div>
      </DrawerTrigger>

      {scene === "Initial" && (
        <DrawerContent className=" h-auto sm:max-w-2xl">
          <div className="flex flex-col items-center justify-center gap-6 px-6 py-4 ">
            <h3 className="text-2xl text-center font-semibold">Terms and Conditions</h3>
            <div className="flex w-full text-center flex-col items-center justify-center gap-8 text-start">
              <p>
                Lorem ipsum dolor sit amet consectetur. Et non gravida imperdiet
                sagittis magna. Vulputate velit interdum suscipit semper mattis
                duis sapien fermentum sit. Nec ut tempus malesuada egestas
                scelerisque. Tincidunt leo vel mattis orci at. Sed velit ac
                auctor facilisis vel cras hendrerit tristique pulvinar. Vitae
                egetndum neque elementum. Id donec vitae sem eu malesuada. Id
                pharetra in elit interdum est et. Aliquet aenean dui sed hac
                pellentesque arcu faucibus. Libero volutpat dictum donec fusce
                donec eget lectus malesuada.
              </p>
              <p>
                ctetur nec luctus laoreet posuere potenti odio gravida
                venenatis. Placerat egestas massa bibendum neque elementum. Id
                donec vitae sem eu malesuada. Id pharetra in elit interdum est
                et. Aliquet aenean dui sed hac pellentesque arcu faucibus.
                Libero volutpat dictum donec fusce donec eget lectus malesuada.
              </p>
            </div>
            {/*<Checkbox*/}
            {/*  radius="sm"*/}
            {/*  classNames={{*/}
            {/*    base: cn(*/}
            {/*      "flex items-center  justify-center w-full",*/}

            {/*      "cursor-pointer  p-4  border-transparent",*/}
            {/*    ),*/}
            {/*  }}*/}
            {/*  isSelected={isSelected}*/}
            {/*  onValueChange={setIsSelected}*/}
            {/*>*/}
            {/*  <p>I accept terms and conditions</p>*/}
            {/*</Checkbox>*/}
            <Button
              onClick={() => {
                setScene("Approve");
              }}
              className="h-16 w-11/12 rounded-xl  bg-[#4E23CB] text-lg text-white hover:bg-[#4E23CB]/80"
            >
              Accept
            </Button>
            <DrawerClose


              className="h-16 w-11/12 text-[#EB5757] rounded-xl border bg-transparent  border-[#EB5757] text-lg  transition-all duration-300 hover:border-danger hover:bg-transparent"

            >
              Decline
            </DrawerClose>
          </div>
        </DrawerContent>
      )}
      {scene === "Approve" && (
        <DrawerContent className=" h-auto sm:max-w-2xl">
          <div className="flex h-[80%] flex-col items-center justify-center gap-6 px-6 py-4 ">
            <h3 className="text-4xl font-semibold">Buy with Wallet</h3>

            <div className="flex w-full items-center justify-center gap-2">
              <p className="text-base text-[#6d6d6d]">Wallet Balance:</p>
              <div
                className="flex h-[2.5rem] items-center justify-center rounded-lg bg-[#c2aef3cc] px-3 text-lg font-semibold   text-[#4E23CB] hover:bg-[#c2aef3cc]">
                ₦{Number(balance?.balance).toLocaleString("en-US")}
              </div>
            </div>

            <div className="">
              <Input
                placeholder="Enter Wallet Pin"
                className="h-[4rem] w-[12rem] border-2 border-[#4E23CB]/60 text-center text-lg "
              />
            </div>
            <div className="flex flex-col  w-full items-center justify-center rounded-xl   bg-[#ECE5FF]">
              <div className="relative  rounded-xl">
                <Image
                  className="relative h-[154px] w-full rounded-xl p-4  "
                  src={image}
                  alt=""
                />
              </div>
              <div className="flex flex-col items-start justify-start  px-4">
                <h3 className=" text-2xl font-medium">Twin Lux Duplex </h3>
                <div className="w-full">
                  <div className="flex items-center gap-2">
                    <Location />
                    <p className="text-base text-[#6d6d6d]">
                      Orchid Estate, Lekki Phase 1
                    </p>
                  </div>
                </div>
                <div className="flex w-full items-center gap-2  py-4 text-base text-[#6D6D6D]">
                  <h3>2 Beds</h3>
                  <Separator className="h-8 w-[0.3px]" orientation="vertical" />
                  <h3>2 Bath</h3>
                  <Separator className="h-8 w-[0.3px]" orientation="vertical" />
                  <h3>459 Sq.ft</h3>
                </div>
              </div>
            </div>
            <div className="mt-2 flex w-full flex-col items-center justify-center gap-4">
              <p className="text-[#6d6d6d] text-center">
                By clicking Buy you agree to Rea&apos;s Terms & Conditions and
                Key Risks{" "}
              </p>
              <div className="flex w-full flex-col gap-4 px-6">
                <Button
                  onClick={() => {
                    setScene("Success");
                  }}
                  className="h-16 w-full rounded-xl bg-[#4E23CB] px-4 text-lg hover:bg-[#4E23CB]/80 "
                >
                  Buy ₦100,000
                </Button>
                {isSufficient === Number(balance?.balance) < 0 ? (
                  <Button
                    variant={"ghost"}
                    className="h-16 w-full rounded-xl border border-[#EB5757] px-4 text-lg text-[#EB5757] hover:border-[#EB5757] hover:bg-transparent hover:text-[#EB5757]"
                  >
                    Cancel
                  </Button>
                ) : (
                  <Link className=" border-[#4E23CB] py-2 text-center text-[#4E23CB]" href="/portfolio/fund-wallet">
                    Fund Wallet
                  </Link>
                )}
              </div>
            </div>
          </div>
        </DrawerContent>
      )}


      {scene === "Success" && (
        <DrawerContent className=" h-auto sm:max-w-2xl">
          <div className="flex flex-col items-center justify-center gap-6 px-6 py-4 ">
            <div className="flex w-full flex-col items-center justify-center gap-4">
              <h3 className="text-4xl font-medium text-[#4E23CB]">
                Congratulations
              </h3>
              <p className="text-lg text-[#6d6d6d]">
                Welcome to the Rea Family
              </p>
            </div>

            <div className="flex w-full flex-col items-center justify-center gap-8 text-start"></div>

            <Button
              onClick={() => {
                router.push("/portfolio");
              }}

              className="h-16 w-11/12 rounded-xl  bg-[#4E23CB] text-lg text-white hover:bg-[#4E23CB]/80"
            >
              See Portfolio
            </Button>
            <DrawerClose
              onClick={() => {
                router.push("/properties");
              }}
              className="h-16 w-11/12  rounded-xl border border-transparent text-lg text-[#4E23CB] transition-all duration-300 hover:border-[#4E23CB] hover:bg-transparent hover:text-[#4E23CB]"
            >
              View Other Properties
            </DrawerClose>
          </div>
        </DrawerContent>
      )}
    </Drawer>
  );
};