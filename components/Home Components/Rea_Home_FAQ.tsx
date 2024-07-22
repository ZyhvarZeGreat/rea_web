import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
// import { ChevronDown } from "lucide-react";
import FaqIcon from '@/public/faq.png'
import Image from "next/image";
 const Rea_Home_FAQ = async () => {
  return (

    <div
      className="flex w-full flex-col items-center justify-around gap-8 py-32 sm:max-w-screen-2xl sm:gap-0 lg:flex-row">
      <h3 className="text-3xl font-bold">FAQs</h3>
      <div className=" w-full max-w-screen-lg text-2xl">
        <Accordion
          type="single"
          collapsible
          className="flex w-full flex-col gap-4"
        >
          <AccordionItem
            className="border-b-[1.2px]  px-4 py-1"
            value="item-1"
          >
            <AccordionTrigger className=" text-start text-lg sm:text-xl">
              How does REA work?
              <div className="flex items-center justify-center rounded-full  p-1">
                 <Image className='w-6 h-6'  src={FaqIcon} alt='' />
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="border-b-[1.2px]  px-4 py-1"
            value="item-2"
          >
            <AccordionTrigger className=" text-start text-lg sm:text-xl">
              Is my investment safe with REA?
              <div className="flex items-center justify-center rounded-full  p-1">
              <Image className='w-6 h-6'  src={FaqIcon} alt='' />
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="border-b-[1.2px]  px-4 py-1"
            value="item-3"
          >
            <AccordionTrigger className=" text-start text-lg sm:text-xl">
              What is the minimum investment amount?
              <div className="flex items-center justify-center rounded-full  p-1">
                 <Image className='w-6 h-6'  src={FaqIcon} alt='' />
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              Yes. It&apos;s animated by default, but you can disable it if
              you prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="border-b-[1.2px]  px-4 py-1"
            value="item-4"
          >
            <AccordionTrigger className=" text-start text-lg sm:text-xl">
              How often do I receive returns on my investment?
              <div className="flex items-center justify-center rounded-full  p-1">
                 <Image className='w-6 h-6'  src={FaqIcon} alt='' />
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              Yes. It&apos;s animated by default, but you can disable it if
              you prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
 export default Rea_Home_FAQ