import Rea_Home_Hero from "@/components/Home Components/Rea_Home_Hero";
import { Rea_Home_Slider } from "@/components/Home Components/Rea_Home_Slider";
import { Rea_Home_Testimonials } from "@/components/Home Components/Rea_Home_Testimonials";
import Rea_Home_CTA from "@/components/Home Components/Rea_Home_CTA";
import Rea_Home_FAQ from "@/components/Home Components/Rea_Home_FAQ";
import Rea_Home_Properties from "@/components/Home Components/Rea_Home_Properties";
import { Rea_Home_Benefits } from "@/components/Home Components/Rea_Home_Benefits";
import Navbar from "@/components/common/Navbar/Navbar";
import React from "react";
import Footer from "@/components/common/Footer/Footer";
import { getUnsignedProperties } from "@/lib/queryFunctions";
import ErrorMessage from "@/components/common/ErrorMessage/ErrorMessage";


export default async function Home() {
  const properties = await getUnsignedProperties();


  return (
    <main className=" w-full">
      <Navbar />
      <div
        className="flex w-full flex-col items-center justify-center gap-24 px-6  sm:max-w-screen-3xl lg:gap-36 xl:mx-auto">


          <Rea_Home_Hero />
     




          <Rea_Home_Slider />


        {properties && <Rea_Home_Properties properties={properties} />}


        <Rea_Home_Benefits />
        <Rea_Home_Testimonials />
        <Rea_Home_CTA />
        <Rea_Home_FAQ/>
      </div>
      <Footer />
    </main>
  );
}
