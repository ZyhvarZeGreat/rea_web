import React from "react";
import Link from "next/link";

const CTA = () => {
  return (
    <div className=" flex w-full items-center justify-center">
      <div className="flex w-full flex-col items-center justify-center  gap-4 rounded-xl bg-[#4E23CB] px-[41px] py-[28px]  sm:py-[35px] text-white sm:w-11/12 lg:h-[25rem]  lg:w-[80%] lg:gap-6 lg:px-[70px] lg:py-0  xl:max-w-screen-3xl">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <h3 className="text-3xl font-bold capitalize sm:text-4xl lg:text-6xl">
            ready to get started ?
          </h3>
          <p className="px-6 text-center text-white">
            Join us today!. Whether you&apos;re looking to diversify your investment portfolio or generate passive income, REA is here to help you achieve your goals.
          </p>
        </div>

        <Link href="/signup" className="bg-white py-3 px-6 rounded-[10px] text-black hover:bg-white/80">
          {" "}
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default CTA;
