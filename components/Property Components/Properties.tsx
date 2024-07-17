"use client";
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import AvailableProperties from "./AvailableProperties";
import FundedProperties from "./FundedProperties";
import { Property } from "../types/interfaces";
type Props = {
  availableProperties: Property[]
   fundedProperties: Property[]
};

const Properties = ({ availableProperties,fundedProperties }: Props) => {
  return (
    <Tabs
      defaultValue="available"
      className=" flex w-full  flex-col items-center justify-center gap-8 "
    >
      <TabsList className="grid  w-full grid-cols-2 font-semibold sm:w-[300px]">
        <TabsTrigger className="text-md" value="available">
          Available
        </TabsTrigger>
        <TabsTrigger className="text-md" value="funded">
          Funded
        </TabsTrigger>
      </TabsList>
      <TabsContent className="w-full " value="available">
        <AvailableProperties properties={availableProperties} />
      </TabsContent>
      <TabsContent className="w-full" value="funded">
        <FundedProperties properties={fundedProperties} />
      </TabsContent>
    </Tabs>
  );
};

export default Properties;
