import Money from "@/app/assets/money.svg";
import Database from "@/app/assets/phone.svg";
import House from "@/app/assets/house2.svg";
import Security from "@/app/assets/lock2.svg";
import Mobile_Database from "@/app/assets/mobile_benefits.svg"
import Mobile_Estate from "@/app/assets/mobile_estate.svg"
import Mobile_House from "@/app/assets/mobile_house.svg"
import Mobile_Security from "@/app/assets/mobile_security.svg"

import getbase64 from "@/lib/getbase64";
import Image from "next/image";
export const Rea_Home_Benefits = async () => {
  const remoteImg = "https://tabodozo.sirv.com/rea-benefits.jpg"
  const base64 = await getbase64("https://tabodozo.sirv.com/rea-benefits.jpg")

  return (
    <div className="flex w-full flex-col items-center justify-center gap-12 text-center xl:gap-24">
      <div className="flex w-full flex-col items-center justify-center gap-6 text-center ">
        <h2 className="text-center text-3xl font-bold lg:text-4xl xl:text-5xl">
          {" "}
          Real estate investing made easy for you
        </h2>
        <p className=" text-base text-[#6d6d6d] lg:text-lg xl:text-2xl ">
          We understand the challenges of traditional real estate investing,
          so we&apos;ve simplified the process for you!
        </p>
      </div>
      <div
        className="relative flex w-full flex-col items-center gap-8   lg:h-[57rem] lg:flex-row   lg:gap-16   xl:px-28 ">
        <div
          className="  flex h-full w-full items-center justify-center self-center justify-self-center lg:hidden xl:justify-start ">
          <Image
            blurDataURL={base64}
            priority
            placeholder='blur'
            sizes="(max-width:768px) 100vw ,
               (max-width:1200px),50vw,33vw
               "

            width={500}
            height={500}
            src={remoteImg}
            alt="hero"
          />
        </div>
        <div className=" relative flex h-full flex-col items-center justify-between gap-12  xl:gap-0 2xl:ml-32">
          <div
            className="flex h-[120px] sm:h-[171px] shadow-lg sm:shadow-none w-full flex-col items-center justify-center self-start rounded-[25px] bg-[#7550DE] xl:w-[500px]">
            <div className="flex w-full items-center  justify-start gap-4 ">
              <Money className='hidden sm:block' />
              <Mobile_Database className='block sm:hidden' />
              <div className="flex flex-col items-start justify-start gap-2 text-left  ">
                <h4 className=" text-lg sm:text-xl font-medium text-white">
                  No Down Payment Required
                </h4>
                <p className=" text-xs sm:text-base text-start text-white">
                  {" "}
                  Start investing with as little as ₦50,000.
                </p>
              </div>
            </div>
          </div>

          <div className="flex h-[120px] sm:h-[171px] shadow-lg sm:shadow-none w-full flex-col items-center justify-center self-start rounded-[25px] bg-black xl:w-[500px]">
            <div className="flex  items-center justify-center gap-5 ">
              <div className="flex  items-center justify-center gap-2  text-center">
                <div className="flex h-full flex-col items-start justify-start gap-4 px-6  text-left">
                  <h4 className=" text-lg sm:text-xl font-medium text-white">
                    Digital and diversified
                  </h4>
                  <p className=" text-xs sm:text-base text-start text-white">
                    {" "}
                    Diversify your investment portfolio with our digital
                    platform.
                  </p>
                </div>
                <Database className='hidden sm:block'  />
                <Mobile_Estate className='block sm:hidden' />
              </div>
            </div>
          </div>
          <div className="absolute hidden h-full w-full items-center justify-start self-center justify-self-center lg:flex ">
            <Image
              blurDataURL={base64}
              priority
              placeholder='blur'
              sizes="(max-width:768px) 100vw ,
               (max-width:1200px),50vw,33vw
               "

              width={500}
              height={500}
              src={remoteImg}
              alt="hero"
            />
          </div>
        </div>
        <div className="flex h-full flex-col items-center justify-center gap-12   xl:gap-0">
          <div className="flex flex-col items-center  justify-between gap-12 sm:h-3/5 xl:gap-0 ">
            <div className="flex h-[120px] sm:h-[171px] shadow-lg sm:shadow-none w-full flex-col items-center justify-center self-end rounded-[25px] bg-black xl:w-[500px]">
              <div className="flex  items-center justify-between  p-5">
                <div className="flex flex-col items-start justify-start gap-4  text-start ">
                  <h4 className=" text-lg sm:text-xl font-medium text-white">
                    Hassle-Free Ownership
                  </h4>
                  <p className=" text-xs sm:text-base text-start text-white">
                    {" "}
                    Enjoy the benefits of property ownership without the
                    headaches.
                  </p>
                </div>
                {" "}
                <House className="ml-10h hidden sm:block" />
                <Mobile_House className='block sm:hidden' />
              </div>
            </div>
            <div className="flex h-[120px] sm:h-[171px] shadow-lg sm:shadow-none w-full  items-center justify-center gap-8 self-end rounded-[25px] bg-[#7550DE] xl:w-[500px]">
              <Security className='hidden sm:block' />
              <Mobile_Security className='block sm:hidden' />
              <div className="flex items-start  justify-start gap-5  p-5">
                <div className="flex flex-col items-start justify-start gap-4  text-start">
                  <h4 className="text-start  text-lg sm:text-xl font-medium text-white">
                    Trusted Experts in Real Estate
                  </h4>
                  <p className=" text-xs sm:text-base text-start text-white">
                    {" "}
                    Benefit from our expertise and guidance every step of
                    the way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};