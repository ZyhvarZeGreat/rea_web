import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import Country from "@/app/assets/country.svg";
import Image from "next/image";
import ImageUrl from "@/app/assets/image3.jpg";
import { Dialog, DialogContent, DialogFooter, DialogTrigger } from "@/components/ui/dialog";

import { Portfolio } from "@/components/types/interfaces";
import { Separator } from "@/components/ui/separator";
// import { Separator, Progress } from "@nextui-org/react";
// import { Document, DocumentDownload } from "iconsax-react";
import Link from "next/link";
import { DialogDescription } from "@radix-ui/react-dialog";

type Props = { data?: Portfolio };

const Asset_Cards = ({ data }: Props) => {
  const arr = Array.from({ length: 8 }, (_, index) => index);
  console.log(data);
  return (
    <>
      {arr.map((item, i) => {
        return (
          <div
            key={i}
            className=" col-span-12 flex   w-full  items-center justify-center  xs:col-span-10 xs:ml-24  sm:col-span-10 sm:ml-32   md:col-span-6   md:ml-0   xl:col-span-4   2xl:col-span-3 "
          >
            <Card className="w-full shadow-lg">
              {/*THIS OVERLAY IS FOR  THE TABLETS AND DESKTOPS*/}
              <Dialog>
                <DialogTrigger className="hidden w-full xs:block ">
                  <CardContent className="h-[25rem] w-full p-0">
                    <div className="relative flex h-[60%] items-center justify-center overflow-hidden ">
                      <div className="  absolute bottom-0 left-0 right-0 top-0 h-full w-full">
                        <div className=" z-30 ml-4 mt-4 flex w-[5rem]  items-center justify-center gap-1 rounded-md   py-1 font-semibold">
                          {" "}
                          <Country /> Lagos
                        </div>
                        <Image
                          className=" rounded-t-lg transition-all duration-500 hover:scale-110 hover:rounded-none "
                          src={ImageUrl}
                          fill
                          alt=""
                          objectFit="cover"
                        />
                      </div>
                    </div>
                    <div className="flex h-[40%] flex-col items-center justify-around rounded-lg px-4 py-2">
                      <div className="flex  w-full items-center justify-between">
                        <div className="flex flex-col items-start gap-1 ">
                          <h3 className=" text-lg font-bold xs:text-2xl ">
                            Twin Lux Duplex
                          </h3>
                          <p className="text-[#6D6D6D]">
                            12 Orchid Road, Lekki
                          </p>
                        </div>

                        <div className="flex items-center justify-center">
                          <div className="flex items-center justify-center gap-2 rounded-lg bg-[#05C75F] px-3 py-1.5 font-medium text-white">
                            <div className=" h-[10px] w-[10px] border-spacing-3 rounded-full bg-white outline outline-2 outline-offset-2   ">
                              <p className="hidden">s</p>
                            </div>
                            Rented
                          </div>
                        </div>
                      </div>
                      <div className=" flex w-full items-center justify-between px-1 font-bold">
                        <div>2 Bed</div>
                        <div className="h-2 w-2 rounded-full bg-[#818181]">
                          <p className="hidden">s</p>
                        </div>
                        <div>2 Bath</div>
                        <div className="h-2 w-2 rounded-full bg-[#818181]">
                          <p className="hidden">s</p>
                        </div>
                        <div>459 Sq.ft</div>
                      </div>
                    </div>
                  </CardContent>
                </DialogTrigger>
                <DialogContent className=" scrollbar-thin scrollbar-track-rounded-full scrollbar-thumb-rounded-full   scrollbar-thumb-[#8459FF] scrollbar-track-[#D9D9D9]  no-scrollbar hidden h-[70%]  overflow-x-hidden overflow-y-scroll xs:block  xl:max-w-4xl">
                  <div className="flex h-full w-full flex-col gap-16 bg-white px-4">
                    <div className="flex w-full items-start justify-between">
                      <div className="mt-6 flex flex-col gap-6">
                        <div className="flex flex-col">
                          <h3 className="text-3xl font-semibold">
                            Ace Glow VI
                          </h3>
                          <p> St.Joe Boulevard, Victoria Island </p>
                        </div>

                        <div className=" flex w-full items-center justify-between px-1 font-bold">
                          <div>2 Bed</div>
                          <div className="h-2 w-2 rounded-full bg-[#818181]">
                            <p className="hidden">s</p>
                          </div>
                          <div>2 Bath</div>
                          <div className="h-2 w-2 rounded-full bg-[#818181]">
                            <p className="hidden">s</p>
                          </div>
                          <div>459 Sq.ft</div>
                        </div>

                        <div className="flex gap-2">
                          <div className="flex items-center justify-center">
                            <div className="flex items-center justify-center gap-2 rounded-lg bg-[#05C75F] px-3 py-1.5 font-medium text-white">
                              <div className=" h-[10px] w-[10px] border-spacing-3 rounded-full bg-white outline outline-2 outline-offset-2   ">
                                <p className="hidden">s</p>
                              </div>
                              Rented
                            </div>
                          </div>
                          <div className="">
                            <p>
                              You have <span>20 shares</span>
                            </p>
                          </div>
                        </div>

                        <div className="">
                          <p>
                            Your Share Value: <span>₦10,631,911.23</span>
                          </p>
                        </div>

                        <div className="">
                          <p> Current Rent is ₦200,667 per month </p>
                        </div>
                      </div>

                      <Card className=" mt-4  w-[350px] self-start py-2 shadow-lg">
                        <CardContent className="flex w-full flex-col items-center justify-center gap-3 text-lg">
                          <div className="flex flex-col items-center justify-center gap-4">
                            <h4 className="text-lg font-semibold">
                              {" "}
                              Property Price{" "}
                            </h4>
                            <p className="text-xl font-semibold text-[#4E23CB]">
                              ₦69,000,745
                            </p>
                          </div>
                          <div className="flex w-full items-center justify-center pt-2 text-center">
                            <span className="w-full rounded-full border border-black bg-[#1BB448] py-1 text-white">
                              {" "}
                              100% funded{" "}
                            </span>
                          </div>
                          <div className="flex w-full flex-col">
                            <div className="flex w-full items-center justify-between py-4 text-sm">
                              <p className="text-[#EB5757] ">
                                Closed August 25th{" "}
                              </p>
                              <p>205 investors</p>
                            </div>
                            <Separator className=" bg-black/50" />
                          </div>
                          <div className="flex w-full flex-col gap-6">
                            <div className="flex w-full items-center justify-between  text-sm">
                              <p>Projected Annual Return</p>
                              <p className="font-semibold text-black">20%</p>
                            </div>
                            <div className="flex w-full items-center justify-between  text-sm">
                              <p>Projected Rental Yield</p>
                              <p className="font-semibold text-black">9%</p>
                            </div>{" "}
                            <div className="flex w-full items-center justify-between  text-sm">
                              <p>Capital Appreciation</p>
                              <p className="font-semibold text-black">30%</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="flex w-full   flex-col items-center justify-start gap-6   sm:items-start sm:justify-center">
                      <h2 className=" text-lg font-semibold ">
                        Property Overview
                      </h2>
                      <div className=" flex flex-col gap-4 text-base text-[#6D6D6D]">
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Voluptatem blanditiis architecto odio deserunt
                          dolorum libero sequi fugit fugiat, inventore est
                          dolore nesciunt, eos nam similique incidunt commodi!
                          Exercitationem recusandae consequuntur, non numquam
                          vero repellendus commodi quidem iure similique rem
                          necessitatibus?
                        </p>
                      </div>
                    </div>

                    <div className="flex w-full flex-col  items-center justify-center gap-6 text-center   ">
                      <h2 className="text-lg font-semibold">
                        Building Details
                      </h2>
                      {/*<div className=" flex w-full grid-cols-12 flex-col items-center justify-center gap-4 text-base text-[#6D6D6D] lg:grid">*/}
                      {/*  <Progress*/}
                      {/*    label="Building Structure"*/}
                      {/*    value={100}*/}
                      {/*    maxValue={100}*/}
                      {/*    formatOptions={{ style: "percent" }}*/}
                      {/*    radius="none"*/}
                      {/*    showValueLabel={true}*/}
                      {/*    classNames={{*/}
                      {/*      base: "max-w-md  lg:col-span-6",*/}
                      {/*      track: "h-2 rounded-[2px]",*/}

                      {/*      indicator: "bg-[#4E23CB]",*/}
                      {/*      label:*/}
                      {/*        "tracking-wider text-sm font-medium text-[#6d6d6d]",*/}
                      {/*      value: "text-foreground/60",*/}
                      {/*    }}*/}
                      {/*  />*/}
                      {/*  <Progress*/}
                      {/*    label="Security"*/}
                      {/*    value={100}*/}
                      {/*    maxValue={100}*/}
                      {/*    formatOptions={{ style: "percent" }}*/}
                      {/*    radius="none"*/}
                      {/*    showValueLabel={true}*/}
                      {/*    classNames={{*/}
                      {/*      base: "max-w-md  lg:col-span-6",*/}
                      {/*      track: "h-2 rounded-[2px]",*/}
                      {/*      indicator: "bg-[#4E23CB]",*/}
                      {/*      label:*/}
                      {/*        "tracking-wider text-sm font-medium text-[#6d6d6d]",*/}
                      {/*      value: "text-foreground/60",*/}
                      {/*    }}*/}
                      {/*  />*/}
                      {/*  <Progress*/}
                      {/*    label="Power"*/}
                      {/*    value={80}*/}
                      {/*    maxValue={100}*/}
                      {/*    formatOptions={{ style: "percent" }}*/}
                      {/*    radius="none"*/}
                      {/*    showValueLabel={true}*/}
                      {/*    classNames={{*/}
                      {/*      base: "max-w-md  lg:col-span-6",*/}
                      {/*      track: "h-2 rounded-[2px]",*/}

                      {/*      indicator: "bg-[#4E23CB]",*/}
                      {/*      label:*/}
                      {/*        "tracking-wider text-sm font-medium text-[#6d6d6d]",*/}
                      {/*      value: "text-foreground/60",*/}
                      {/*    }}*/}
                      {/*  />*/}
                      {/*  <Progress*/}
                      {/*    label="Internet Connectivity"*/}
                      {/*    value={100}*/}
                      {/*    maxValue={100}*/}
                      {/*    formatOptions={{ style: "percent" }}*/}
                      {/*    radius="none"*/}
                      {/*    showValueLabel={true}*/}
                      {/*    classNames={{*/}
                      {/*      base: "max-w-md  lg:col-span-6",*/}
                      {/*      track: "h-2 rounded-[2px]",*/}

                      {/*      indicator: "bg-[#4E23CB]",*/}
                      {/*      label:*/}
                      {/*        "tracking-wider text-sm font-medium text-[#6d6d6d]",*/}
                      {/*      value: "text-foreground/60",*/}
                      {/*    }}*/}
                      {/*  />*/}
                      {/*</div>*/}
                    </div>
                    <div className=" flex flex-col items-center gap-4 text-center  ">
                      <h3 className=" text-lg font-semibold ">
                        Property Documents
                      </h3>
                      <div
                        className={
                          "relative flex w-full gap-10 rounded-lg  px-4 sm:px-0 xl:w-1/2 "
                        }
                      >
                        {" "}
                        <div className="flex w-full flex-col items-center  justify-around gap-8 rounded-lg p-4 text-[#494949]  ">
                          <div className="flex w-full items-center justify-between  border-b border-b-[#9C9898] py-2">
                            <div className="flex gap-2">
                              {/*<Document />*/}
                              <Link href={"#"}> Get Your Documents</Link>
                            </div>
                            {/*<DocumentDownload variant="Bulk" color="#8459FF" />*/}
                          </div>
                          <div className="flex w-full items-center justify-between  border-b border-b-[#9C9898] py-2">
                            <div className="flex gap-2">
                              {/*<Document />*/}
                              <Link href={"#"}> Get Your Documents</Link>
                            </div>
                            {/*<DocumentDownload variant="Bulk" color="#8459FF" />*/}
                          </div>
                          <div className="flex w-full items-center justify-between  border-b border-b-[#9C9898] py-2">
                            <div className="flex gap-2">
                              {/*<Document />*/}
                              <Link href={"#"}> Get Your Documents</Link>
                            </div>
                            {/*<DocumentDownload variant="Bulk" color="#8459FF" />*/}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" flex flex-col items-center gap-4  ">
                      <h3 className="  text-lg font-semibold">Financials</h3>
                      <div className="w-fulll relative flex w-full  flex-col items-center justify-center gap-10  rounded-lg sm:flex-row ">
                        <div className="flex w-[24rem]  flex-col items-center justify-around gap-6 rounded-lg  p-4 py-6">
                          <div className="flex w-full flex-col gap-2">
                            <h3 className="font-bold">Property</h3>
                            <Separator className="w-full" />
                          </div>
                          <div className="flex w-full flex-col gap-3 py-1">
                            <div className="flex w-full items-center justify-between">
                              <p>Property Price</p>
                              <p>₦69,000,745</p>
                            </div>
                            <div className="flex w-full items-center justify-between">
                              <p>Transaction Costs</p>
                              <p>₦0.00</p>
                            </div>
                            <div className="flex w-full items-center justify-between">
                              <p>Rea Fee</p>
                              <p>15%</p>
                            </div>
                          </div>
                          <div className="flex w-full flex-col gap-2">
                            <Separator className="w-full" />
                            <div className="flex w-full items-center justify-between">
                              <p>Investment Costs</p>
                              <p className="font-semibold text-[#4E23CB]">
                                ₦69,000,745
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex w-[24rem]  flex-col items-center justify-around gap-6 rounded-lg  p-4 py-6">
                          <div className="flex w-full flex-col gap-2">
                            <h3 className="font-bold">Rental Income Year 1</h3>
                            <Separator className="w-full" />
                          </div>
                          <div className="flex w-full flex-col gap-3 py-1">
                            <div className="flex w-full items-center justify-between">
                              <p>Annual gross rent</p>
                              <p>₦1,500,000</p>
                            </div>
                            <div className="flex w-full items-center justify-between">
                              <p>Service Charges</p>
                              <p>₦10,000</p>
                            </div>
                            <div className="flex w-full items-center justify-between">
                              <p>Mgt & Maintenance</p>
                              <p>₦100,000</p>
                            </div>
                          </div>
                          <div className="flex w-full flex-col gap-2">
                            <Separator className="w-full" />
                            <div className="flex w-full items-center justify-between">
                              <p>Annual Net Income</p>
                              <p className="font-semibold text-[#4E23CB]">
                                ₦1,390,000
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <DialogFooter className="flex w-full items-center justify-center  py-4">
                    <DialogDescription className="w-full text-center">
                      <p className="text-[#6d6d6d]">
                        Note: The property information on this page is subject
                        to change dependent on market activity
                      </p>
                    </DialogDescription>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

                {/*THIS OVERLAY IS FOR THE MOBILE VIEW THE ONE ABOVE IS FOR TABLETS AND DESKTOPS*/}

              <Dialog>
                <DialogTrigger className="block w-full xs:hidden">
                  <CardContent className="h-[25rem] w-full p-0">
                    <div className="relative flex h-[60%] items-center justify-center overflow-hidden ">
                      <div className="  absolute bottom-0 left-0 right-0 top-0 h-full w-full">
                        <div className=" z-30 ml-4 mt-4 flex w-[5rem]  items-center justify-center gap-1 rounded-md   py-1 font-semibold">
                          {" "}
                          <Country /> Lagos
                        </div>
                        <Image
                          className=" rounded-t-lg transition-all duration-500 hover:scale-110 hover:rounded-none "
                          src={ImageUrl}
                          fill
                          alt=""
                          objectFit="cover"
                        />
                      </div>
                    </div>
                    <div className="flex h-[40%] flex-col items-center justify-around rounded-lg px-4 py-2">
                      <div className="flex  w-full items-center justify-between">
                        <div className="flex flex-col items-start gap-1 ">
                          <h3 className=" text-lg font-bold xs:text-2xl ">
                            Twin Lux Duplex
                          </h3>
                          <p className="text-[#6D6D6D]">
                            12 Orchid Road, Lekki
                          </p>
                        </div>

                        <div className="flex items-center justify-center">
                          <div className="flex items-center justify-center gap-2 rounded-lg bg-[#05C75F] px-3 py-1.5 font-medium text-white">
                            <div className=" h-[10px] w-[10px] border-spacing-3 rounded-full bg-white outline outline-2 outline-offset-2   ">
                              <p className="hidden">s</p>
                            </div>
                            Rented
                          </div>
                        </div>
                      </div>
                      <div className=" flex w-full items-center justify-between px-1 font-bold">
                        <div>2 Bed</div>
                        <div className="h-2 w-2 rounded-full bg-[#818181]">
                          <p className="hidden">s</p>
                        </div>
                        <div>2 Bath</div>
                        <div className="h-2 w-2 rounded-full bg-[#818181]">
                          <p className="hidden">s</p>
                        </div>
                        <div>459 Sq.ft</div>
                      </div>
                    </div>
                  </CardContent>
                </DialogTrigger>

                <DialogContent className=" scrollbar-thin scrollbar-track-rounded-full scrollbar-thumb-rounded-full scrollbar-thumb-[#8459FF]   scrollbar-track-[#D9D9D9] no-scrollbar  block h-screen   overflow-x-hidden overflow-y-scroll   xl:max-w-4xl">
                  <div className="flex h-full w-full flex-col gap-16 bg-white px-4">
                    <div className="flex w-full flex-col items-start justify-center gap-6">
                      <div className="mt-6 flex flex-col gap-6">
                        <div className="flex flex-col">
                          <h3 className="text-3xl font-semibold">
                            Ace Glow VI
                          </h3>
                          <p> St.Joe Boulevard, Victoria Island </p>
                        </div>

                        <div className=" flex w-full items-center justify-between px-1 font-bold">
                          <div>2 Bed</div>
                          <div className="h-2 w-2 rounded-full bg-[#818181]">
                            <p className="hidden">s</p>
                          </div>
                          <div>2 Bath</div>
                          <div className="h-2 w-2 rounded-full bg-[#818181]">
                            <p className="hidden">s</p>
                          </div>
                          <div>459 Sq.ft</div>
                        </div>

                        <div className="flex gap-2">
                          <div className="flex items-center justify-center">
                            <div className="flex items-center justify-center gap-2 rounded-lg bg-[#05C75F] px-3 py-1.5 font-medium text-white">
                              <div className=" h-[10px] w-[10px] border-spacing-3 rounded-full bg-white outline outline-2 outline-offset-2   ">
                                <p className="hidden">s</p>
                              </div>
                              Rented
                            </div>
                          </div>
                          <div className="flex items-center">
                            <p>
                              You have <span className='text-[#4E23CB] font-semibold'>20 shares</span>
                            </p>
                          </div>
                        </div>

                        <div className="">
                          <p>
                            Your Share Value: <span className='text-[#4E23CB] font-semibold'>₦10,631,911.23</span>
                          </p>
                        </div>

                        <div className="shadow-md rounded-[10px] py-2 px-2 ">
                          <p> Current Rent is <span className='text-[#4E23CB] font-semibold'>₦200,667 per month</span> </p>
                        </div>
                      </div>

                      <div className="flex w-full items-center justify-center">
                        <Card className=" mt-4 flex w-full  sm:w-10/12 items-center justify-center    py-2 shadow-lg">
                          <CardContent className="flex w-full   flex-col items-center justify-between gap-3 text-lg">
                            <div className="flex flex-col items-center justify-center gap-4">
                              <h4 className="text-lg font-semibold">
                                {" "}
                                Property Price{" "}
                              </h4>
                              <p className="text-xl font-semibold text-[#4E23CB]">
                                ₦69,000,745
                              </p>
                            </div>
                            <div className="flex w-full items-center justify-center pt-2 text-center">
                              <span className="w-full rounded-full border border-black bg-[#1BB448] py-1 text-white">
                                {" "}
                                100% funded{" "}
                              </span>
                            </div>
                            <div className="flex w-full flex-col">
                              <div className="flex w-full items-center justify-between py-4 text-sm">
                                <p className="text-[#EB5757] ">
                                  Closed August 25th{" "}
                                </p>
                                <p>205 investors</p>
                              </div>
                              <Separator className=" bg-black/50" />
                            </div>
                            <div className="flex w-full flex-col gap-6">
                              <div className="flex w-full items-center justify-between  text-sm">
                                <p>Projected Annual Return</p>
                                <p className="font-semibold text-black">20%</p>
                              </div>
                              <div className="flex w-full items-center justify-between  text-sm">
                                <p>Projected Rental Yield</p>
                                <p className="font-semibold text-black">9%</p>
                              </div>{" "}
                              <div className="flex w-full items-center justify-between  text-sm">
                                <p>Capital Appreciation</p>
                                <p className="font-semibold text-black">30%</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    <div className="flex w-full   flex-col items-center justify-start gap-6   sm:items-start sm:justify-center">
                      <h2 className=" text-lg font-semibold ">
                        Property Overview
                      </h2>
                      <div className=" flex flex-col gap-4 text-base text-[#6D6D6D]">
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Voluptatem blanditiis architecto odio deserunt
                          dolorum libero sequi fugit fugiat, inventore est
                          dolore nesciunt, eos nam similique incidunt commodi!
                          Exercitationem recusandae consequuntur, non numquam
                          vero repellendus commodi quidem iure similique rem
                          necessitatibus?
                        </p>
                      </div>
                    </div>

                    <div className="flex w-full flex-col  items-center justify-center gap-6 text-center   ">
                      <h2 className="text-lg font-semibold">
                        Building Details
                      </h2>
                      {/*<div className=" flex w-full grid-cols-12 flex-col items-center justify-center gap-4 text-base text-[#6D6D6D] lg:grid">*/}
                      {/*  <Progress*/}
                      {/*    label="Building Structure"*/}
                      {/*    value={100}*/}
                      {/*    maxValue={100}*/}
                      {/*    formatOptions={{ style: "percent" }}*/}
                      {/*    radius="none"*/}
                      {/*    showValueLabel={true}*/}
                      {/*    classNames={{*/}
                      {/*      base: "max-w-md  lg:col-span-6",*/}
                      {/*      track: "h-2 rounded-[2px]",*/}

                      {/*      indicator: "bg-[#4E23CB]",*/}
                      {/*      label:*/}
                      {/*        "tracking-wider text-sm font-medium text-[#6d6d6d]",*/}
                      {/*      value: "text-foreground/60",*/}
                      {/*    }}*/}
                      {/*  />*/}
                      {/*  <Progress*/}
                      {/*    label="Security"*/}
                      {/*    value={100}*/}
                      {/*    maxValue={100}*/}
                      {/*    formatOptions={{ style: "percent" }}*/}
                      {/*    radius="none"*/}
                      {/*    showValueLabel={true}*/}
                      {/*    classNames={{*/}
                      {/*      base: "max-w-md  lg:col-span-6",*/}
                      {/*      track: "h-2 rounded-[2px]",*/}
                      {/*      indicator: "bg-[#4E23CB]",*/}
                      {/*      label:*/}
                      {/*        "tracking-wider text-sm font-medium text-[#6d6d6d]",*/}
                      {/*      value: "text-foreground/60",*/}
                      {/*    }}*/}
                      {/*  />*/}
                      {/*  <Progress*/}
                      {/*    label="Power"*/}
                      {/*    value={80}*/}
                      {/*    maxValue={100}*/}
                      {/*    formatOptions={{ style: "percent" }}*/}
                      {/*    radius="none"*/}
                      {/*    showValueLabel={true}*/}
                      {/*    classNames={{*/}
                      {/*      base: "max-w-md  lg:col-span-6",*/}
                      {/*      track: "h-2 rounded-[2px]",*/}

                      {/*      indicator: "bg-[#4E23CB]",*/}
                      {/*      label:*/}
                      {/*        "tracking-wider text-sm font-medium text-[#6d6d6d]",*/}
                      {/*      value: "text-foreground/60",*/}
                      {/*    }}*/}
                      {/*  />*/}
                      {/*  <Progress*/}
                      {/*    label="Internet Connectivity"*/}
                      {/*    value={100}*/}
                      {/*    maxValue={100}*/}
                      {/*    formatOptions={{ style: "percent" }}*/}
                      {/*    radius="none"*/}
                      {/*    showValueLabel={true}*/}
                      {/*    classNames={{*/}
                      {/*      base: "max-w-md  lg:col-span-6",*/}
                      {/*      track: "h-2 rounded-[2px]",*/}

                      {/*      indicator: "bg-[#4E23CB]",*/}
                      {/*      label:*/}
                      {/*        "tracking-wider text-sm font-medium text-[#6d6d6d]",*/}
                      {/*      value: "text-foreground/60",*/}
                      {/*    }}*/}
                      {/*  />*/}
                      {/*</div>*/}
                    </div>
                    <div className=" flex flex-col items-center gap-4 text-center  ">
                      <h3 className=" text-lg font-semibold ">
                        Property Documents
                      </h3>
                      <div
                        className={
                          "relative flex w-full gap-10 rounded-lg  px-4 sm:px-0 xl:w-1/2 "
                        }
                      >
                        {" "}
                        <div className="flex w-full flex-col items-center  justify-around gap-8 rounded-lg p-4 text-[#494949]  ">
                          <div className="flex w-full items-center justify-between  border-b border-b-[#9C9898] py-2">
                            <div className="flex gap-2">
                              {/*<Document />*/}
                              <Link href={"#"}> Get Your Documents</Link>
                            </div>
                            {/*<DocumentDownload variant="Bulk" color="#8459FF" />*/}
                          </div>
                          <div className="flex w-full items-center justify-between  border-b border-b-[#9C9898] py-2">
                            <div className="flex gap-2">
                              {/*<Document />*/}
                              <Link href={"#"}> Get Your Documents</Link>
                            </div>
                            {/*<DocumentDownload variant="Bulk" color="#8459FF" />*/}
                          </div>
                          <div className="flex w-full items-center justify-between  border-b border-b-[#9C9898] py-2">
                            <div className="flex gap-2">
                              {/*<Document />*/}
                              <Link href={"#"}> Get Your Documents</Link>
                            </div>
                            {/*<DocumentDownload variant="Bulk" color="#8459FF" />*/}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" flex flex-col items-center gap-4  ">
                      <h3 className="  text-lg font-semibold">Financials</h3>
                      <div className="w-fulll relative flex w-full  flex-col items-center justify-center gap-10  rounded-lg sm:flex-row ">
                        <div className="flex w-[24rem]  flex-col items-center justify-around gap-6 rounded-lg  p-4 py-6">
                          <div className="flex w-full flex-col gap-2">
                            <h3 className="font-bold">Property</h3>
                            <Separator className="w-full" />
                          </div>
                          <div className="flex w-full flex-col gap-3 py-1">
                            <div className="flex w-full items-center justify-between">
                              <p>Property Price</p>
                              <p>₦69,000,745</p>
                            </div>
                            <div className="flex w-full items-center justify-between">
                              <p>Transaction Costs</p>
                              <p>₦0.00</p>
                            </div>
                            <div className="flex w-full items-center justify-between">
                              <p>Rea Fee</p>
                              <p>15%</p>
                            </div>
                          </div>
                          <div className="flex w-full flex-col gap-2">
                            <Separator className="w-full" />
                            <div className="flex w-full items-center justify-between">
                              <p>Investment Costs</p>
                              <p className="font-semibold text-[#4E23CB]">
                                ₦69,000,745
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex w-[24rem]  flex-col items-center justify-around gap-6 rounded-lg  p-4 py-6">
                          <div className="flex w-full flex-col gap-2">
                            <h3 className="font-bold">Rental Income Year 1</h3>
                            <Separator className="w-full" />
                          </div>
                          <div className="flex w-full flex-col gap-3 py-1">
                            <div className="flex w-full items-center justify-between">
                              <p>Annual gross rent</p>
                              <p>₦1,500,000</p>
                            </div>
                            <div className="flex w-full items-center justify-between">
                              <p>Service Charges</p>
                              <p>₦10,000</p>
                            </div>
                            <div className="flex w-full items-center justify-between">
                              <p>Mgt & Maintenance</p>
                              <p>₦100,000</p>
                            </div>
                          </div>
                          <div className="flex w-full flex-col gap-2">
                            <Separator className="w-full" />
                            <div className="flex w-full items-center justify-between">
                              <p>Annual Net Income</p>
                              <p className="font-semibold text-[#4E23CB]">
                                ₦1,390,000
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </Card>
          </div>
        );
      })}
    </>
  );
};

export default Asset_Cards;
