import Rea_Home_Properties_Carousel_Content from "@/components/Home Components/Rea_Home_Properties_Carousel_Content";
import { Property } from "@/components/types/interfaces";
import { Spinner } from "@/components/common/Loader/Spinner";
import { Suspense } from "react";

type Props = {
  properties: Property[]
}
export default async function Rea_Home_Properties({ properties }: Props) {

  return (
    <div className="flex w-full flex-col items-center justify-center gap-[20px]">
      <h2 className=" text-center text-3xl font-bold lg:text-4xl xl:text-5xl">
        {" "}
        Our featured properties
      </h2>
      <p className="  text-center text-base text-[#6d6d6d] lg:text-lg xl:text-2xl ">
        {" "}
        Explore our curated selection of premium income-generating
        properties.{" "}
      </p>
      <Suspense fallback={<Spinner />}>
        <Rea_Home_Properties_Carousel_Content properties={properties} />
      </Suspense>
    </div>
  );
};
