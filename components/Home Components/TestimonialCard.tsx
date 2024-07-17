import React from "react";
import { Card } from "@/components/ui/card";
import { CarouselItem } from "../ui/carousel";

type Props = {
  rating: number;
  content: string;
  platform: React.ReactNode;
  person: string;
};

const TestimonialCard = (props: Props) => {
  const arr = new Array(5).fill(`${props.rating}`);

  return (
    <CarouselItem className="relative flex basis-full items-center justify-center   sm:block  sm:w-[18.5rem] sm:pl-8 md:basis-1/2">
      <Card className="flex w-full flex-col  items-start justify-center gap-2 rounded-2xl p-6 shadow-lg xs:gap-4  sm:h-[19rem] sm:gap-6 sm:p-8">
        <div className="flex w-full  flex-col  items-start justify-center gap-2 ">
          <div className="flex w-full gap-2 ">
            {arr.map((item, i) => {
              return (
                <svg
                  key={i}
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
                    fill="#FFB800"
                  />
                </svg>
              );
            })}
          </div>
          <div className="flex flex-col items-center justify-start text-start">
            <p className=" text-base text-[#4E23CB] sm:text-lg">
              {props.content}
            </p>
          </div>
        </div>

        <div className="flex w-full items-center justify-between">
          <h3 className=" text-xl font-semibold sm:text-2xl ">
            {props.person}
          </h3>
          {props.platform}
        </div>
      </Card>
    </CarouselItem>
  );
};

export default TestimonialCard;
