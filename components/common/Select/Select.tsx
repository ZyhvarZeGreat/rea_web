import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React from "react";

type Props = {
  data?: {};
};

const CustomSelect = (props: Props) => {
  return (
    <Select>
      <SelectTrigger className=" hidden sm:block sm:w-[180px]">
        <SelectValue placeholder="Date" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">March 2024</SelectItem>
        <SelectItem value="system">May 2024</SelectItem>
        <SelectItem value="dark">April 2024</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default CustomSelect;
