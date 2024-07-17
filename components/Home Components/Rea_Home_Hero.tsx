import Link from "next/link";
import Play from "@/app/assets/hero-play.svg";
import Image from "next/image";
import { generateBlurData } from "@/lib/generateBlurData";

const Rea_Home_Hero = async () => {

  const base64 = await generateBlurData("https://tabodozo.sirv.com/new_hero.png");

  return (
    <div className="flex w-full flex-col gap-8  lg:gap-12 ">
      <div
        className=" mt-14 flex w-full flex-col  items-center justify-between gap-[39px] sm:gap-16   lg:mt-4 lg:h-[45rem]  lg:flex-row lg:gap-0 lg:py-0 xl:py-16">
        <div className="flex w-full flex-col  gap-[10px] sm:gap-4 lg:w-auto">
          <p className="text-base text-[#6D6D6D] font-medium"> Passive Income made </p>
          <div className="flex w-full flex-col items-start gap-[10px] sm:gap-4">
            <h1
              className=" text-[28px] sm:text-[32px] leading-tight sm:leading-auto font-bold text-[#4E23CB] xl:text-5xl ">
              Easy, Smart & <br /> Affordable
            </h1>
            <p className=" text-sm sm:text-base font-medium text-[#6D6D6D] lg:text-xl">
              Invest in prime rental properties from just
              <span className="font-bold text-[#4E23CB]">₦50,000</span> with
              Rea -
              <br className={"hidden sm:block"} /> it&apos;s that simple!
            </p>
          </div>
          <div className="flex w-full gap-6 mt-[28px] sm:mt-0  sm:w-auto">
            <Link
              href="/signup"
              className="  flex px-[15px] px-[10px] sm:h-14 sm:w-36 items-center  justify-center rounded-[10px] bg-black  text-center text-sm sm:text-base font-medium text-white hover:bg-black/90  hover:text-white lg:text-lg"
            >
              {" "}
              Get started
            </Link>
            <Link
              href="/signup"
              className="  flex h-12 items-center justify-center gap-3 bg-transparent text-sm  sm:text-base text-black  hover:bg-white/90 hover:text-black"
            >
              <Play />
              How it works
            </Link>
          </div>
        </div>
        <div
          className="relative flex h-[30rem] sm:h-full basis-full items-center justify-center xl:mt-8 xl:basis-1/2  ">
           <Image
             // placeholder="blur"
             // blurDataURL={base64}
            priority
            sizes="(max-width:768px) 100vw ,
               (max-width:1200px),50vw,33vw
               "
            style={{
              maxWidth: "auto",
              height: "100%"
            }}
             height={500}
            width={500}
              src={"https://tabodozo.sirv.com/new_hero.png"}
            alt="hero"
          />
        </div>
      </div>

      <div className="  my-4 flex w-full flex-col items-center justify-around gap-12 lg:mb-16 lg:flex-row lg:gap-0">
        <div className="flex flex-col items-center gap-2 ">
          <h3 className=" text-[32px] font-bold text-[#4E23CB] lg:text-[40px] ">
            ₦0.7M+
          </h3>
          <p className="text-[20px] font-medium text-[#6d6d6d]">
            Rental Income Paid
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 ">
          <h3 className=" text-[32px] font-bold text-[#4E23CB] lg:text-[40px] ">
            ₦2K+
          </h3>
          <p className="text-[20px] font-medium text-[#6d6d6d]">
            Registered Users
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 ">
          <h3 className=" text-[32px] font-bold text-[#4E23CB] lg:text-[40px] ">
            ₦100M+
          </h3>
          <p className="text-[20px] font-medium text-[#6d6d6d]">
            Property Transactions
          </p>
        </div>
      </div>
    </div>
  );
};
export default Rea_Home_Hero;