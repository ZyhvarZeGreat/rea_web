"use client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import Location from "@/app/assets/location.svg";
import Rented from "@/app/assets/rented.svg";
import Current from "@/app/assets/current.svg";
import Revenue from "@/app/assets/revenue.svg";
import { Card, CardContent } from "@/components/ui/card";
import HourGlass from "@/app/assets/time.svg";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Property } from "@/components/types/interfaces";
import useAuthStore from "@/components/store/useAuthStore";
import DocumentDownload from "@/public/document-download.png";
import DocumentText from "@/public/document-text.png";
import LazyLoad from "react-lazy-load";
import { BackButton } from "@/components/common/BackButton";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PropertyDrawer } from "@/components/common/Modals/PropertyDrawer";
import { Slider } from "@/components/ui/slider";
import { CSSTransition } from "react-transition-group";
import PropertyModal from "@/components/common/Modals/PropertyModal";
import { Input } from "../ui/input";
import ModalClose from '@/public/modal-close.png'
import ArrowSwap from '@/public/arrow-swap.png'
type Props ={
  details:Property
  properties:Property[]
}

export const Property_Details_Content = ({details,properties}:Props) => {
  const { loginState } = useAuthStore();
  const router = useRouter();

  const [animate, setAnimate] = useState<boolean>(false);
  const [sliderValue, setSliderValue] = useState<number | undefined>(
    0,
  );
  const [propertySliderValue, setPropertySliderValue] = useState<number>(
    0
  );
  const [calculatorValue, setCalculatorValue] = useState<
    number | undefined
  >(0);

  const [imagesSet, setImagesSet] = useState<any>([]);

  const propertyValuation= ( (Number(details.costs?.total_costs_per_share) * Number(propertySliderValue)).toFixed(2)).toLocaleString()

  const sliderValuation= ( (Number(details.costs?.total_costs_per_share) * Number(sliderValue)).toFixed(2)).toLocaleString()




  return (
    <>
      <div className="flex items-center justify-start w-full px-8">
        <BackButton />
      </div>
      <PropertyDrawer />
      <div className="w-full">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className=" block h-full w-full bg-transparent sm:hidden"
        >
          <CarouselContent className="  -ml-[0.05px] h-[20rem] w-full bg-transparent">
            {details.images.map((item: any, i: number) => {
              return (

                  <CarouselItem
                    key={i}
                    className="relative h-full  w-[20rem] basis-full pl-[1px]">
                    <Image className=" object-cover" fill src={item.image} alt="" />
                  </CarouselItem>

              );
            })}
          </CarouselContent>
          <div className="absolute bottom-0 left-0 right-0  top-0 z-50 mx-auto h-full    w-[70%]">
            <CarouselPrevious />
            <CarouselNext />


          </div>
        </Carousel>
        <div
          className=" hidden  h-[15rem] grid-cols-12 grid-rows-6  gap-8 rounded-full sm:grid sm:h-[25rem] lg:h-[30rem] xl:h-[40rem]">
          <div className="relative col-span-12 row-span-6  sm:row-span-6 md:col-span-6">
            {details && (
              <Image
                src={details?.images[0].image}
                className=" object-cover sm:rounded-xl "
                alt=""
                fill
                placeholder="empty"
                sizes="(max-width:768px) 100vw ,
               (max-width:1200px),50vw,33vw
               "
                // blurDataURL={imagesSet[0]?.image.blurDataUrl}
              />
            )}
          </div>
          <div className="relative col-span-12 hidden sm:col-span-6  sm:row-span-3 md:block">
            {details && (
              <Image
                src={details?.images[1].image}
                className="rounded-xl object-cover "
                alt=""
                fill
                placeholder="empty"
                sizes="(max-width:768px) 100vw ,
               (max-width:1200px),50vw,33vw
               "
                // blurDataURL={imagesSet[1]?.image.blurDataUrl}
              />
            )}
          </div>
          <div className="relative col-span-6 row-span-3  hidden md:block xl:col-span-3">
            {details && (
              <Image
                src={details?.images[2].image}
                className="rounded-xl object-cover "
                alt=""
                fill
                placeholder="empty"
                sizes="(max-width:768px) 100vw ,
               (max-width:1200px),50vw,33vw
               "
                // blurDataURL={imagesSet[2]?.image.blurDataUrl}
              />
            )}
          </div>
          <div className="relative col-span-3 row-span-3   hidden xl:block ">
            {details && (
              <Image
                src={details?.images[3].image}
                className="rounded-xl object-cover "
                alt=""
                fill
                placeholder="empty"
                sizes="(max-width:768px) 100vw ,
               (max-width:1200px),50vw,33vw
               "
                // blurDataURL={imagesSet[3]?.image.blurDataUrl}
              />
            )}
          </div>
        </div>
      </div>


      <div
        className=" relative flex w-full flex-col-reverse items-center justify-center gap-16   font-medium sm:mt-4 sm:justify-between sm:gap-0  md:mt-12 lg:flex-row lg:items-start">
        <div className="flex w-full  flex-col items-center justify-center gap-4 sm:mt-4 lg:items-start  lg:self-start">
          <h3 className=" text-4xl font-bold sm:text-6xl"> {details?.name}</h3>
          <div className="w-full">
            <div className="flex items-center justify-center gap-2 sm:mt-4 lg:justify-start">
              <Location />
              <p className="text-2xl text-[#6d6d6d]">{details?.location}</p>
            </div>
            <div className="flex w-full flex-col px-2 py-[18px] lg:w-3/5">
              <div
                className="flex w-full items-center justify-center gap-2 py-4 text-lg text-[#6D6D6D] lg:items-start lg:justify-start">
                <h3>2 Beds</h3>
                <Separator className="h-8 w-[0.3px]" orientation="vertical" />
                <h3>2 Bath</h3>
                <Separator className="h-8 w-[0.3px]" orientation="vertical" />
                <h3>459 Sq.ft</h3>
              </div>
              <Separator className="h-[0.4px] w-full" />
              <div className="flex flex-col items-center gap-10 py-8 sm:items-start">
                <div
                  className="flex flex-col items-center justify-center gap-4 text-center  sm:flex-row sm:text-start lg:items-start">
                  <Rented />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-semibold text-black">
                      Rented
                    </h3>
                    <p className="text-lg text-[#6d6d6d]">
                      Currently occupied and professionally managed by our team
                    </p>
                  </div>
                </div>
                <div
                  className="flex flex-col items-center justify-center gap-4 text-center  sm:flex-row sm:text-start lg:items-start">
                  <Current />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-semibold text-black">
                      Current rent is ₦40,750 per month
                    </h3>
                    <p className="text-lg text-[#6d6d6d]">
                      Distributed monthly among all investors after standard
                      charges and fees
                    </p>
                  </div>
                </div>
                <div
                  className="flex flex-col items-center justify-center gap-4 text-center  sm:flex-row sm:text-start lg:items-start">
                  <Revenue />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-semibold text-black">
                      7.54% annual gross yield
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {loginState ? (
          <Card className="mt-4 flex w-[45rem] self-start py-8 shadow-lg">
            <CardContent className="flex w-full flex-col items-center justify-center gap-5 text-lg">
              <div className="flex flex-col items-center justify-center gap-6">
                <h4 className="text-2xl font-semibold"> Property Price </h4>
                <p className="text-[32px] font-semibold text-[#4E23CB]">
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
                <div className="flex w-full items-center justify-between py-4">
                  <p className="text-[#EB5757] ">Closed August 25th </p>
                  <p>205 investors</p>
                </div>
                <Separator className="w-full" />
              </div>
              <div className="flex w-full flex-col gap-6">
                <div className="flex w-full items-center justify-between px-4">
                  <p>Projected Annual Return</p>
                  <p className="font-semibold text-black">20%</p>
                </div>
                <div className="flex w-full items-center justify-between px-4">
                  <p>Projected Rental Yield</p>
                  <p className="font-semibold text-black">9%</p>
                </div>
                {" "}
                <div className="flex w-full items-center justify-between px-4">
                  <p>Capital Appreciation</p>
                  <p className="font-semibold text-black">30%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card
            className="xl:max-w-auto relative -mt-16 w-[90%] self-center border-2  border-[#4E23CB] pt-6  shadow-lg sm:mt-8 sm:w-full  sm:max-w-xl md:w-[45rem] xl:self-start">
            <CardContent className="flex w-full flex-col items-center justify-center gap-5 text-lg">
              <div className="flex flex-col items-center justify-center gap-6">
                <h4 className=" text-xl  font-semibold sm:text-2xl">
                  {" "}
                  Property Price{" "}
                </h4>
                <p className="text-[32px] font-semibold text-[#4E23CB]">
                  ₦{Number(details?.costs?.total_costs).toLocaleString("en-US")}
                </p>
              </div>
              <div className="flex w-full items-center justify-center pt-2 text-center">
                <span className="w-full rounded-full border border-black bg-[#1BB448] py-1 text-white">
                  {" "}
                  100% funded{" "}
                </span>
              </div>
              <div className="flex w-full flex-col">
                <div className="flex w-full items-center justify-between py-4">
                  <div className="flex items-center gap-2">
                    <HourGlass />
                    <p className=" ">{details.costs?.days_left} days left </p>
                  </div>
                  <p>
                    {" "}
                    <span className="font-semibold text-[#4E23CB]">
                      {details.costs?.total_units}
                    </span>{" "}
                    shares available{" "}
                  </p>
                </div>
                <Separator className="w-full" />
              </div>
              <div className="flex w-full flex-col gap-4 sm:gap-6">
                <div className="flex w-full items-center justify-between px-4">
                  <p>Projected Annual Return</p>
                  <p className="font-semibold text-black">20%</p>
                </div>
                <div className="flex w-full items-center justify-between px-4">
                  <p>Projected Rental Yield</p>
                  <p className="font-semibold text-black">9%</p>
                </div>
                {" "}
                <div className="flex w-full items-center justify-between px-4">
                  <p>Capital Appreciation</p>
                  <p className="font-semibold text-black">30%</p>
                </div>
              </div>
            </CardContent>
            <div className=" hidden  flex-col w-full items-center justify-center border-t-2 border-t-[#4E23CB] sm:flex">
              <Button
                onClick={() => {
                  setAnimate(!animate);
                }}
                className="h-full w-full rounded-none bg-transparent py-5 text-2xl font-semibold text-[#4E23CB] hover:bg-[#4E23CB] hover:text-white "
              >
                Buy{" "}
              </Button>
              <CSSTransition in={animate} timeout={300}>
                {(state: string) => (
                  <div
                    className={cn(`box h-[70%]  bg-white flex flex-col items-center justify-center gap-8  absolute w-full bottom-0  shadow-lg rounded transition-transform duration-300 ${
                      state === "entering"
                        ? "opacity-0 translate-y-32  "
                        : state === "entered"
                          ? "opacity-100 translate-y-0 transform scale-100"
                          : state === "exiting"
                            ? " translate-y-32 "
                            : state === "exiting" ? "opacity-0 hidden transform translate-y-32":"opacity-0 transform hidden translate-y-32"
                    }`, )}
                  >
                    <div className="w-full bg-[#ECE5FF] flex items-center justify-between px-8">
                      <h3> Slide to enter share amount</h3>
                      <Button onClick={() => {
                        setAnimate(!animate);
                      }} variant="ghost" className="hover:bg-transparent p-2">
                       <Image alt='' src={ModalClose} className="h-3 w-3"/>
                      </Button>
                    </div>
                    <div className={"w-full flex flex-col items-center gap-4 justify-center px-8"}>
                      <p className={"self-start text-base text-"}>{details?.costs?.total_units} {`${ Number(details?.costs?.total_units) <= 1 ? 'share':'shares'}`}</p>
                      <Slider
                   defaultValue={[0]}
                        step={1}
                        max={details?.costs && Number(details.costs.total_units)}     min={0}
                        onValueChange={(value:any) => {
                          setPropertySliderValue(value);
                        }}
                        className={"w-full"} />
                    </div>
                    <div className={"w-full flex flex-col items-center gap-4 justify-center px-8"}>
                      
                    <Input 
                     className="w-[12rem] h-[4rem] border-2 text-center text-lg text-[#4E23CB] border-[#4E23CB]" 
                     value={` ₦${propertyValuation}`} 
                     placeholder="Enter share amount"  
                     />

                     <div className="w-full flex items-center justify-center gap-2">
                       <p className="text-base text-[#4E23CB] font-bold">1 share</p>
                       <Image alt='' src={ArrowSwap} className="h-4 w-4"/>
                       <p className="text-base text-[#4E23CB] font-bold">₦{details?.costs?.total_units}</p>
                     </div>

                    </div>
                    <PropertyModal propertyId={details.id} shareAmount={propertySliderValue} amount={Number(propertyValuation)} />
                  </div>
                )}
              </CSSTransition>
            </div>

          </Card>
        )}
      </div>
      <div className=" mt-32 flex w-full flex-col gap-40 ">
        <div
          className="flex w-full   flex-col items-center justify-start gap-6  sm:justify-center lg:w-2/5 lg:items-start">
          <h2 className="text-[40px] font-semibold">Property Overview</h2>
          <div className=" flex flex-col gap-4 text-base text-[#6D6D6D]">
            <p>{details?.description}</p>
          </div>
        </div>
        <div className=" flex flex-col items-center gap-4 lg:items-start  ">
          <h3 className=" text-2xl font-semibold lg:text-3xl">Financials</h3>
          <div
            className={cn(
              "relative flex w-full flex-col  items-center justify-center gap-10 rounded-lg  sm:flex-row lg:justify-start xl:w-1/2 ",
              loginState && "p-4 shadow-lg "
            )}
          >
            <div
              className="flex w-[24rem]  flex-col items-center justify-around gap-6 rounded-lg bg-[#ECE5FF] p-4 py-6">
              <div className="flex w-full flex-col gap-2">
                <h3 className="font-semibold">Property</h3>
                <Separator className="w-full" />
              </div>
              <div className="flex w-full flex-col gap-3 py-1">
                <div className="flex w-full items-center justify-between">
                  <p>Property Price</p>
                  <p>₦69,000,745</p>
                </div>
                <div className="flex w-full items-center justify-between">
                  <p>Transaction Costs</p>
                  <p>₦{details?.costs?.broker_fees}</p>
                </div>
                <div className="flex w-full items-center justify-between">
                  <p>Rea Fee</p>
                  <p>{details?.costs?.rea_charges}%</p>
                </div>
              </div>
              <div className="flex w-full flex-col gap-2">
                <Separator className="w-full" />
                <div className="flex w-full items-center justify-between">
                  <p>Investment Costs</p>
                  <p className="font-semibold text-[#4E23CB]">₦69,000,745</p>
                </div>
              </div>
            </div>
            <div
              className="flex w-[24rem]  flex-col items-center justify-around gap-6 rounded-lg bg-[#ECE5FF] p-4 py-6">
              <div className="flex w-full flex-col gap-2">
                <h3 className="font-semibold">Rental Income Year 1</h3>
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
                  <p className="font-semibold text-[#4E23CB]">₦1,390,000</p>
                </div>
              </div>
            </div>
            {loginState && (
              <div
                className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-white/30 backdrop-blur-sm ">
                <div className="flex flex-col gap-2">
                  <div className=" flex  gap-2">
                    <Link
                      className="font-semibold text-[#4E23CB]"
                      href="/signup"
                    >
                      Sign Up
                    </Link>{" "}
                    or{" "}
                    <Link
                      className="font-semibold text-[#4E23CB]"
                      href="/login"
                    >
                      Login
                    </Link>
                    to view
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center gap-4 lg:items-start lg:justify-start  ">
          <h3 className=" text-2xl font-semibold lg:text-3xl">
            Calculate Your Investment
          </h3>
          <div
            className={cn(
              "relative flex  w-max gap-10 rounded-lg ",
              loginState && "p-3 shadow-lg "
            )}
          >
            <div className="flex  flex-col  items-center justify-around gap-6 rounded-lg p-4  py-6 sm:w-[35rem]">
              <div className="flex w-full flex-col gap-12 py-1">
                <div className="flex  w-full flex-col items-center justify-between gap-4">
                  <LazyLoad className={"w-full"}>
                    <div className="flex w-full flex-col gap-6">
                    
                      <div className={"w-full"}>
                        <Slider
                          defaultValue={[0]}
                          max={50}
                          step={1}
                          min={0}
                          onValueChange={(value:any) => {
                            setSliderValue(value);
                          }}
                          aria-label={`₦${sliderValue?.toLocaleString()}`}
                          className={"w-full"} />
                      </div>
                      <div className=" flex w-full items-center justify-between text-[#8459FF]">
                        <div className="">{sliderValue} {sliderValue && sliderValue > 1 ? 'shares':"share"} </div>
                        <div className="flex items-center justify-between">
                          ₦{sliderValuation}
                        </div>
                      </div>
                     
                    </div>
                  </LazyLoad>

                </div>
                <div className="flex w-full items-center justify-between">
                  <div className="flex flex-col gap-2">
                    <p>Total Return on Investments</p>
                    <p className="text-[#8459FF]">10%</p>
                  </div>
                  <div className="flex flex-col justify-end gap-2 text-right">
                    <p>Annual Rental</p>
                    <p className="text-[#8459FF]"> ₦52,000</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between">
                  <div className="flex flex-col gap-2">
                    <p>Total Return on Investments</p>
                    <p className="text-[#8459FF]">10%</p>
                  </div>
                  <div className="flex flex-col gap-2 text-right">
                    <p>Annual Rental</p>
                    <p className="text-[#8459FF]">
                      ₦600,000 <span className="text-[#29CC97]">(+15%)</span>
                    </p>
                  </div>
                </div>
                <div className="center flex w-full flex-col items-center gap-2">
                  <p>Total Projected Volume after 5 years</p>
                  <p className="font-medium text-[#8459FF]">
                    ₦115,000,000 <span className="text-[#29CC97]">(+42%)</span>
                  </p>
                </div>
              </div>
            </div>
            {loginState && (
              <div
                className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-white/30 backdrop-blur-sm ">
                <div className="flex flex-col gap-2">
                  <div className=" flex  gap-2">
                    <Link
                      className="font-semibold text-[#4E23CB]"
                      href="/signup"
                    >
                      Sign Up
                    </Link>{" "}
                    or{" "}
                    <Link
                      className="font-semibold text-[#4E23CB]"
                      href="/login"
                    >
                      Login
                    </Link>
                    to view
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className=" flex flex-col items-center gap-4 lg:items-start  ">
          <h3 className=" text-2xl font-semibold lg:text-3xl">Location</h3>
          <p>{details?.location}</p>
          <div
            className={cn(
              "relative flex w-full  gap-10 rounded-lg xl:w-1/2 ",
              loginState && "p-4 shadow-lg "
            )}
          >
            <div className="flex w-[35rem]  flex-col items-center justify-around gap-6 rounded-lg  p-4 py-6"></div>
            {loginState && (
              <div
                className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-white/30 backdrop-blur-sm ">
                <div className="flex flex-col gap-2">
                  <div className=" flex  gap-2">
                    <Link
                      className="font-semibold text-[#4E23CB]"
                      href="/signup"
                    >
                      Sign Up
                    </Link>{" "}
                    or{" "}
                    <Link
                      className="font-semibold text-[#4E23CB]"
                      href="/login"
                    >
                      Login
                    </Link>
                    to view
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className=" flex flex-col items-center gap-4 lg:items-start  ">
          <h3 className=" text-2xl font-semibold lg:text-3xl">
            Property Documents
          </h3>
          <div
            className={cn(
              "relative flex w-full gap-10 rounded-lg  px-4 sm:px-0 xl:w-1/2 ",
              loginState && "p-4 shadow-lg "
            )}
          >
            {" "}
            <div
              className="flex w-full flex-col items-center  justify-around gap-8 rounded-lg p-4 text-[#494949]   lg:w-[30rem]">
              {/*{details?.costs?.docs.length === 0  && <div>*/}
              {/*  <ErrorMessage message='No Documents Available' />*/}
              {/*</div>}*/}
              {details?.costs?.docs && details?.costs?.docs.map(({ docs }, i) => {
                return (
                  <div
                    key={i}
                    className="flex w-full items-center justify-between  border-b border-b-[#9C9898] py-2"
                  >
                    <div className="flex gap-2">
                      <Image className="h-6 w-auto" src={DocumentText} alt={""} />
                      <Link href={`${docs}`}> Get Your Documents</Link>
                    </div>
                    <Image className="h-6 w-auto" src={DocumentDownload} alt={""} />
                  </div>
                );
              })}
            </div>
            {loginState && (
              <div
                className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-white/30 backdrop-blur-sm ">
                <div className="flex flex-col gap-2">
                  <div className=" flex  gap-2">
                    <Link
                      className="font-semibold text-[#4E23CB]"
                      href="/signup"
                    >
                      Sign Up
                    </Link>{" "}
                    or{" "}
                    <Link
                      className="font-semibold text-[#4E23CB]"
                      href="/login"
                    >
                      Login
                    </Link>
                    to view
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className=" flex flex-col items-center gap-4 lg:items-start  ">
          <h3 className=" text-2xl font-semibold lg:text-3xl">
            Funding Timeline
          </h3>
          <div
            className={cn(
              "relative flex w-full gap-10 rounded-lg  px-4 sm:px-0 xl:w-1/2 ",
              loginState && "p-4 shadow-lg "
            )}
          >
            <div
              className="flex w-full flex-col items-center  justify-around gap-8 rounded-lg p-4 text-[#494949]   lg:w-[30rem]">
              <ol className="relative flex flex-col gap-16  border-s-[2px] border-gray-200 dark:border-gray-700">
                <li className=" ms-6">
                  <span
                    className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900"></span>
                  <span className="text-sm text-[#6d6d6d]">
                    {" "}
                    {details?.costs?.timeline}
                  </span>
                  <h3 className="mb-1 flex items-center text-xl font-semibold text-gray-900 dark:text-white">
                    Project Funded
                  </h3>
                </li>
                <li className=" ms-6">
                  <span
                    className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900"></span>
                  <span className="text-sm text-[#6d6d6d]">
                    {" "}
                    December 26th, 2023
                  </span>
                  <h3 className="mb-1 flex items-center text-xl font-semibold text-gray-900 dark:text-white">
                    SPV formation and title deed distribution
                  </h3>
                </li>
                <li className=" ms-6">
                  <span
                    className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900"></span>
                  <span className="text-sm text-[#6d6d6d]">
                    {" "}
                    January 26th, 2024
                  </span>
                  <h3 className="mb-1 flex items-center text-xl font-semibold text-gray-900 dark:text-white">
                    Expected first rental payment
                  </h3>
                </li>
              </ol>
            </div>
            {loginState && (
              <div
                className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-white/30 backdrop-blur-sm ">
                <div className="flex flex-col gap-2">
                  <div className=" flex  gap-2">
                    <Link
                      className="font-semibold text-[#4E23CB]"
                      href="/signup"
                    >
                      Sign Up
                    </Link>{" "}
                    or{" "}
                    <Link
                      className="font-semibold text-[#4E23CB]"
                      href="/login"
                    >
                      Login
                    </Link>
                    to view
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className=" flex px-8 flex-col gap-16  ">
          <h3 className=" text-2xl font-semibold lg:text-3xl">
            Similar Properties
          </h3>
          {/*<AvailableProperties properties={properties} />*/}
        </div>

        <div className="flex w-full px-4 items-center justify-center py-8">
          <Button
            onClick={() => {
              router.push("properties");
            }}
            className="self-center border-2  border-[#4E23CB] bg-white font-semibold text-[#4E23CB] hover:bg-transparent"
          >
            More Properties
          </Button>
        </div>
      </div>
    </>
  );
};