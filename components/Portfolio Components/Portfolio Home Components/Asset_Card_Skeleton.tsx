import TextSkeleton from "@/components/common/Skeletons/TextSkeleton";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

type Props = {};
const arr = Array.from({ length: 8 }, (_, index) => index);

const Asset_Card_Skeleton = (props: Props) => {
  return (
    <>
      {arr.map((item, i) => {
        return (
          <Skeleton
            key={i}
            className=" z-0 col-span-12 flex  w-full animate-none  items-center justify-center  xs:col-span-10 xs:ml-24  sm:col-span-9 sm:ml-40   md:col-span-6   md:ml-0   xl:col-span-4   2xl:col-span-3 "
          >
            <Card className="w-full bg-white shadow-lg">
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
                      <TextSkeleton className="flex w-[7rem]  items-center justify-between gap-2 rounded-lg  bg-gray-200 px-3 py-1.5 font-medium text-muted">
                        <TextSkeleton className=" h-[10px] w-[10px]  border-spacing-3 rounded-full bg-slate-500 outline outline-2 outline-offset-2 outline-slate-500 ">
                          <p className="hidden">s</p>
                        </TextSkeleton>
                        <TextSkeleton className="h-6 w-1/2   bg-gray-200 px-6" />
                      </TextSkeleton>
                    </div>
                  </div>
                  <div className=" flex w-full items-center justify-between px-1 font-bold">
                    <TextSkeleton className="h-4 w-12   bg-gray-200" />
                    <TextSkeleton className="h-2 w-2 rounded-full  bg-gray-200" />
                    <TextSkeleton className="h-4 w-12   bg-gray-200" />
                    <TextSkeleton className="h-2 w-2 rounded-full  bg-gray-200" />
                    <TextSkeleton className="h-4 w-12   bg-gray-200" />
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

export default Asset_Card_Skeleton;
