import React from "react";
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "../ui/carousel";
import TestimonialCard from "./TestimonialCard";
// import { ArrowLeft, ArrowRight } from "iconsax-react";
import TrustPilot from "@/app/assets/trustpilot.svg";
import Twitter from "@/app/assets/twitter.svg";

const Testimonials = () => {
  const carouselItems = [
    {
      rating: 5,
      content:
        "The accessibility and ease of their platform have simplified what I thought was an exclusive market. Being part of Rea has not only diversified my investment portfolio but has also given me confidence in the real estate market.",
      platform: <Twitter />,
      person: "Clement Hunsu",
    },
    {
      rating: 5,
      content:
        "“Rea has completely transformed my perspective on real estate investment. With just 50,000 Naira, I ventured into fractional ownership and now own a share in multiple high-value properties.”",
      platform: <TrustPilot />,
      person: "Rotimi Taylor",
    },
    {
      rating: 5,
      content:
        "The accessibility and ease of their platform have simplified what I thought was an exclusive market. Being part of Rea has not only diversified my investment portfolio but has also given me confidence in the real estate market.",
      platform: <Twitter />,
      person: "Zach Bello",
    },
    {
      rating: 5,
      content:
        "The accessibility and ease of their platform have simplified what I thought was an exclusive market. Being part of Rea has not only diversified my investment portfolio but has also given me confidence in the real estate market.",
      platform: <TrustPilot />,
      person: "Zeus",
    },
  ];
  return (
    <div className=" flex  items-center justify-center ">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="  h-full w-full xs:max-w-screen-xl "
      >
        <CarouselContent className=" -ml-[0.05px]  w-full">
          {carouselItems.map((item, i) => {
            return <TestimonialCard key={i} {...item} />;
          })}
        </CarouselContent>
        <div
          className=" absolute bottom-0 left-0 right-0 top-0 z-50 mx-auto  hidden h-full w-[90%] lg:w-[80%] xs:block lg:w-full   ">
          <CarouselPrevious>
            {/*<ArrowLeft />*/}
          </CarouselPrevious>
          <CarouselNext>
            {/*<ArrowRight />*/}
          </CarouselNext>
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonials;
