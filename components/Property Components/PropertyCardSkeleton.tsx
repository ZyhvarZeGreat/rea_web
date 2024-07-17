import TextSkeleton from "@/components/common/Skeletons/TextSkeleton";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

type Props = {};
const arr = Array.from({ length: 6 }, (_, index) => index);

const Property_Card_Skeleton = (props: Props) => {
  return (
    <>
      {arr.map((item, i) => {
        return (
          <Skeleton
            key={i}
            className=" col-span-12 w-full  sm:col-span-10  sm:ml-14   md:col-span-6 md:ml-0  xl:col-span-4 2xl:w-[90%]"
          >
            <Card className="w-full rounded-[25px] bg-white shadow-lg">
              <CardContent className="h-[25rem] w-full p-0">
                <TextSkeleton className="relative flex h-[60%] w-full items-center justify-center overflow-hidden  bg-gray-200 ">
                  <div className="  absolute bottom-0 left-0 right-0 top-0 h-full w-full"></div>
                </TextSkeleton>
                <div className="flex h-[40%] flex-col items-center justify-around rounded-lg px-4 py-2">
                  <div className="flex  w-full items-center justify-between">
                    <div className="flex w-full flex-col items-start gap-2 ">
                      <TextSkeleton className="h-6 w-2/5  bg-gray-200" />
                      <TextSkeleton className="h-6 w-3/5  bg-gray-200" />
                    </div>

                    <div className="flex items-center justify-center">
                      <TextSkeleton className="flex w-[7rem]  items-center justify-between gap-2 rounded-lg  bg-gray-200 px-3 py-1.5 font-medium text-muted"></TextSkeleton>
                    </div>
                  </div>
                  <div className=" flex w-full items-center justify-between px-1 font-bold">
                    <TextSkeleton className="flex w-full  items-center justify-between gap-2 rounded-[25px] bg-gray-200 px-8 py-4 font-medium text-muted" />
                    {/* <TextSkeleton className="h-4 w-12   bg-gray-200" />

                    <TextSkeleton className="h-4 w-12   bg-gray-200" />

                    <TextSkeleton className="h-4 w-12   bg-gray-200" /> */}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Skeleton>
        );
      })}
    </>
  );
};

export default Property_Card_Skeleton;
