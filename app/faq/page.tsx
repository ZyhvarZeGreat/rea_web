import Image from "next/image";
import React from "react";
import Custom_Accordion from "@/components/common/Accordion/Custom_Accordion";
import getbase64 from "@/lib/getbase64";


const FAQ = async () => {
  const remoteImg = 'https://tabodozo.sirv.com/image3.jpg'
  const base64 = await getbase64(remoteImg)
  return (
    <div className="flex w-full flex-col ">

      <div className="relative flex h-[18rem] sm:h-[30rem] w-full items-center justify-center">
        <Image priority placeholder="blur" blurDataURL={base64} className="object-cover" fill alt="" src={remoteImg} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-black/30">
          <p className="hidden">s</p>
        </div>
      </div>

      <div className=" mx-auto my-28 flex w-full flex-col items-center justify-center  px-8 xs:w-[90%]  sm:w-full sm:max-w-screen-lg  sm:px-0 ">
        <div className="w-full ">
          <h3 className=" text-2xl sm:text-3xl font-semibold xl:text-5xl">
            {" "}
            Have Questions ?
          </h3>
        </div>
        <div className=" my-12 flex w-full items-center justify-center">
          <Custom_Accordion />
        </div>
      </div>

    </div>
  );
};

export default FAQ;
