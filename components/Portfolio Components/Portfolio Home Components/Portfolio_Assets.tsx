import { Input } from "@/components/ui/input";
// import { Search } from "lucide-react";
import React, { Suspense } from "react";
import Asset_Cards from "./Asset_Cards";

import Asset_Card_Skeleton from "./Asset_Card_Skeleton";

// type Props = {
//   portfolio:Portfolio;
//
// };

const Portfolio_Assets = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 rounded-lg px-2 py-6 lg:px-8">
      <div className="relative flex w-full  py-6 ">
        <Input
          className=" w-full rounded-lg bg-[#d9d9d9] px-10 py-1 font-bold md:w-1/2 lg:w-1/3"
          placeholder="Search Assets"
        />
        <div className=" absolute bottom-0 left-0 right-0 top-0  flex w-[4rem] items-center justify-start px-2 ">
          {/*<Search className="z-20" />*/}
        </div>
      </div>

      <div className=" grid w-full grid-cols-12 flex-col place-content-center place-items-center  items-center justify-center justify-items-center gap-8 pb-6">

        <Suspense fallback={<Asset_Card_Skeleton />}>
          <Asset_Cards />
        </Suspense>



      </div>
    </div>
  );
};

export default Portfolio_Assets;
