 'use client'
 // @ts-ignore
import LazyLoad from 'react-lazyload';
import Testimonials from "@/components/Home Components/Testimonials";
 import PageLoader from "@/components/common/Loader/PageLoader";

export const Rea_Home_Testimonials = async () => {
  return (
    <div className="flex  w-full flex-col items-center justify-center gap-16 text-center">
      <h2 className="text-center text-2xl font-bold sm:text-3xl lg:text-4xl">
        {" "}
        What our customers are saying
      </h2>

      <div className="relative w-full ">
       <LazyLoad fallback={<PageLoader/>}>
         <Testimonials />
       </LazyLoad>
      </div>
    </div>
  );
};