import React from "react";
import Image from "next/image";
import Blog_Card from "@/components/Blog Components/Blog_Card";
import { Button } from "@/components/ui/button";
import getbase64 from "@/lib/getbase64";


const page: React.FC = async () => {
  const remoteImg = 'https://tabodozo.sirv.com/image3.jpg'
  const base64 = await getbase64(remoteImg)
  return (
    <div className=" flex  sm:max-w-screen-3xl sm:px-6  w-full flex-col items-center justify-center ">
      <div className=" relative  sm:px-0 mt-12 h-[16rem] sm:h-[25rem] w-11/12 sm:w-full lg:h-[35rem]">
        <Image
          priority
          placeholder='blur'
          blurDataURL={base64}
          className="rounded-[10px] object-cover"
          fill
          src={remoteImg}
          alt=""
        />
        <div
          className="absolute bottom-0  left-0 right-0 top-0 flex h-full w-full items-end justify-start rounded-[10px] bg-black/30  ">
          <div className="sm:h-[14rem] gap-4 flex sm:block items-start flex-col  w-full px-4 text-white  lg:px-16">
            <div
              className="sm:mb-6 p-2 flex sm:h-[2.5rem] sm:w-[8rem] items-center justify-center rounded-[10px] bg-white font-bold text-black">
              <p className=' text-xs sm:text-lg lg:text-xl'> Featured</p>
            </div>

            <div className="flex py-3 sm:py-0 sm:h-full flex-col gap-2 sm:gap-4 ">
              <h3 className=" sm:mt-12 text-xl sm:text-2xl font-bold md:mt-0 lg:text-4xl">
                A glimpse into the bustle of Lagos Real Estate
              </h3>
              <p className=" text-xs xs:text-sm lg:text-2xl">
                Keep up with the latest news and developments on rea and the
                real estate market activities{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center">
        <div className="mt-8 w-full flex-col items-center  justify-center  py-8 text-center">
          <h3 className=" text-2xl font-bold lg:text-4xl">Newly Posted</h3>
        </div>
        <div className="gap- flex w-full px-4 sm:px-0  flex-col items-center justify-center  gap-8 lg:flex-row">
          <div
            className=" relative h-[11rem] xs:h-[13rem] sm:h-[22rem] w-full lg:mt-12  lg:h-[20rem] lg:w-1/2 xl:h-[25rem]">
            <Image
              priority
              placeholder='blur'
              blurDataURL={base64}

              className="rounded-[10px] object-cover"
              fill
              src={remoteImg}
              alt=""
            />
            <div
              className="absolute bottom-0 left-0 right-0 top-0 flex h-full w-full items-end justify-start rounded-[10px] bg-black/30  ">
              <div
                className="flex h-full w-full flex-col items-start justify-between px-4 sm:px-8  py-6 text-white  lg:px-16">
                <div
                  className=" flex sm:h-[1.5rem] h-[2.5rem] w-[4rem] sm:w-[8rem] items-center justify-center rounded-[10px] bg-[#1BB448] font-bold text-white">
                  New
                </div>

                <div className="flex  flex-col gap-4 ">
                  <p className=" text-base sm:text-2xl lg:text-4xl">
                    Diversify Your Real Estate Investments with Lofty
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className=" relative h-[11rem] xs:h-[13rem] sm:h-[22rem] w-full lg:mt-12  lg:h-[20rem] lg:w-1/2 xl:h-[25rem]">
            <Image
              priority
              placeholder='blur'
              blurDataURL={base64}
              className="rounded-[10px] object-cover"
              fill
              src={remoteImg}
              alt=""
            />
            <div
              className="absolute bottom-0 left-0 right-0 top-0 flex h-full w-full items-end justify-start rounded-[10px] bg-black/30  ">
              <div
                className="flex h-full w-full flex-col items-start justify-between px-4 sm:px-8  py-6 text-white  lg:px-16">
                <div
                  className=" flex sm:h-[1.5rem] h-[2.5rem] w-[4rem] sm:w-[8rem] items-center justify-center rounded-[10px] bg-[#1BB448] font-bold text-white">
                  New
                </div>

                <div className="flex  flex-col gap-4 ">
                  <p className=" text-base sm:text-2xl lg:text-4xl">
                    Diversify Your Real Estate Investments with Lofty
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-12 ">
          <div className="mt-16 w-full  ">
            <h3 className="text-3xl text-center sm:text-start   font-bold">Recents</h3>
          </div>
          <div
            className=" flex px-4 sm:px-0 flex-col sm:grid w-full grid-cols-12 place-items-center content-center justify-items-center  gap-12">
            <Blog_Card blurDataUrl={base64} imageUrl={remoteImg} />
            <Blog_Card blurDataUrl={base64} imageUrl={remoteImg} />
            <Blog_Card blurDataUrl={base64} imageUrl={remoteImg} />s
          </div>


        </div>
      </div>
      <Button
        className="self-center my-4 border-2  border-[#4E23CB] bg-white font-semibold text-[#4E23CB] hover:bg-transparent">
        View More
      </Button>
      <div className="my-32 flex flex-col w-full lg:flex-row lg:w-2/3 items-center justify-start  gap-12 ">
        <h2
          className=' font-semibold text-[#4E23CB]   text-lg  sm:text-xl lg:text-3xl'>Ready
          to get started on your real estate journey?</h2>
        <Button size="lg" variant="ghost" className="border-2 text-sm text-[#4E23CB] border-[#4E23CB] "> Click to sign
          Up </Button>
      </div>
    </div>
  );
};

export default page;
