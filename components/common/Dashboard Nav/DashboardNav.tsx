'use client'
import { useRouter } from "next/navigation";
import React from "react";

const DashboardNav = () => {
  const router = useRouter();
  return (
    <div className=" rounded-[25px] bg-white flex w-full sm:max-w-sm items-center justify-center">
      <div className=" flex items-center justify-between gap-8 rounded-lg bg-white px-3 py-3  text-[#4E23CB]">
        <button
          className="text-lg font-semibold  hover:bg-transparent "
          onClick={() => {
            router.push("/properties");
          }}
          
        >
          Properties
        </button>
        <button
          className="text-lg font-semibold hover:bg-transparent "
          onClick={() => {
            router.push("/faq");
          }}
          
        >
          FAQs
        </button>
        <button
          className="text-lg font-semibold hover:bg-transparent "
          onClick={() => {
            router.push("/about");
          }}
          
        >
          About Us
        </button>
      </div>
    </div>
  );
};

export default DashboardNav;
