"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import Country from "@/app/assets/country.svg";
import Link from "next/link";
import { Property } from "@/components/types/interfaces";
import { useEffect, useState } from "react";
import getResources from "@/lib/getBlurResources";
import useAuthStore from "@/components/store/useAuthStore";
import ArrowRight from "@/public/arrow_right.png";
import ArrowLeft from "@/public/arrow_left.png";

type  Props ={
  property:Property
}
export const Rea_Home_Properties_Carousel_Item = ({property}:Props) => {
  const { loginState } = useAuthStore();
  const [imagesSet, setImagesSet] = useState<any>([]);


  useEffect(() => {
    const modifyData = async () => {
      const dataWithBlurHash = await getResources(property);

      return dataWithBlurHash;
    };


    modifyData().then((res) => {
      setImagesSet(res);
    }).catch((err) => {
      console.log(err);
    });
  }, [property]);



  return (

      <CarouselItem
        className=" w-full basis-full  sm:col-span-10  md:ml-14  md:basis-1/2 md:col-span-6   lg:ml-0 lg:basis-1/3  xl:col-span-4 2xl:w-[90%]"
    >
      <Card>
        <CardContent className=" rounded-[25px] bg-transparent p-0">
          <div className="relative flex h-[60%] items-center justify-center  bg-transparent ">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className=" h-full w-full bg-transparent"
            >
              <CarouselContent className=" rounded-t-25px -ml-[0.05px] h-[17rem] w-full bg-transparent">
                {imagesSet?.map(((item: any, i: number) => {
                  return (
                    <>
                      <CarouselItem
                        key={i}
                        className="relative h-full  w-[20rem] basis-full pl-[1px]"
                      >
                        <Image
                          priority
                          className="rounded-t-md object-cover"
                          fill
                          sizes="(max-width:768px) 100vw ,
               (max-width:1200px),50vw,33vw
               "
                          placeholder={'blur'}
                          blurDataURL={item.blurHash}
                          src={item.imgUrl}
                          alt=""
                        />
                      </CarouselItem>
                    </>
                  );
                }))}
              </CarouselContent>
              <div className="absolute bottom-0 left-0 right-0  top-0 z-50 mx-auto h-full    w-[70%]">
                <CarouselPrevious>
                  <Image className="h-[7.4px] w-[12px]" src={ArrowLeft} alt="" />
                </CarouselPrevious>
                <CarouselNext>
                  <Image className="h-[7.4px] w-[12px]" src={ArrowRight} alt="" />
                </CarouselNext>
              </div>
            </Carousel>
            <div className="  absolute bottom-0 left-0 right-0 top-0 h-full w-full">
              <div
                className="z-[10000px] ml-4 mt-4 flex  w-[5rem] items-center justify-center gap-1 rounded-md bg-[#F4F4F4] py-1 font-semibold">
                {" "}
                <Country /> {property?.state}
              </div>
            </div>
          </div>
          <Link
            href={`/properties/${property?.id}`}
            className="flex h-[40%] flex-col items-center justify-around px-6  pt-[26px] "
          >
            <div className="flex  w-full items-center justify-between">
              <div className="flex flex-col gap-[6px]">
                <h3 className="text-2xl font-bold ">
                  {property?.name}
                </h3>
                <p className="text-[#6D6D6D]">
                  {property?.location}
                </p>
              </div>

              {/*<div className="flex items-center justify-center">*/}
              {/*  <span*/}
              {/*    className="rounded-sm bg-[#DAD6D6] p-1 text-base font-medium">{property?.costs.total_numbers_of_investors}{" "}investors*/}
              {/*                </span>*/}
              {/*</div>*/}
            </div>
            <div
              className="flex items-center justify-center py-[10px] text-2xl font-semibold text-[#4E23CB]">
              <h3 className="text-2xl font-bold">
                ₦69,000,745
              </h3>
            </div>
            <div className="flex w-full items-center justify-center py-4 text-center">
                              <span className="w-full rounded-full border border-black bg-[#1BB448] py-1 text-white">
                                {" "}
                                100% funded{" "}
                              </span>
            </div>
          </Link>

          {loginState && (
                          <div className="w-full px-5 pb-4">
                            <div className=" flex items-center  justify-center gap-8 rounded-2xl bg-[#D9D9D9] py-2  text-[#6d6d6d] ">
                              <div className="flex flex-col items-center justify-center ">
                                <h4 className="text-lg font-semibold text-black ">
                                  30
                                </h4>
                                <p className="text-base">Days Left</p>
                              </div>
                              <div className="flex flex-col items-center justify-center">
                                <h4 className="text-lg font-semibold text-black ">
                                  7%
                                </h4>
                                <p className="text-base">Annual Return</p>
                              </div>
                              <div className="flex flex-col items-center justify-center">
                                <h4 className="text-lg font-semibold text-black ">
                                  42%
                                </h4>
                                <p className="text-base">Appreciation</p>
                              </div>
                            </div>
                          </div>
          )}
        </CardContent>
      </Card>
      </CarouselItem>
  );
};