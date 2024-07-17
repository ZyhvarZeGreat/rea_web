import { Carousel, CarouselContent } from "@/components/ui/carousel";

import { Property } from "@/components/types/interfaces";

import { Rea_Home_Properties_Carousel_Item } from "@/components/Home Components/Rea_Home_Properties_Carousel_Item";

type Props = {
  properties : Property[]
}


export const Rea_Home_Properties_Carousel_Content = (props:Props) => {
  const { properties } = props
  return (

    <Carousel
      orientation="horizontal"
      className="   w-full gap-y-8  py-[70px]   lg:gap-y-12"
    >

      <CarouselContent>
        {properties?.map((property: Property, i: number) => {
          return (
            <Rea_Home_Properties_Carousel_Item key={i} property={property} />
          );
        })}
      </CarouselContent>


    </Carousel>


  );
};

export default Rea_Home_Properties_Carousel_Content