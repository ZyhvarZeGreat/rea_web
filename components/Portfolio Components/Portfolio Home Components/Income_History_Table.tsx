"use client";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

import React, { ChangeEvent } from "react";

export type Income_History_Details = {
  assetDetails: string;
  incomeAmount: string;
  paymentDate: string;
  shareCount: number;
  location: string,
  status: "Funded" | "Pending" | "Declined";
};

type Props = {
  invoices: Income_History_Details[];
};

const tabs = [
  { key: "status", label: "Status" },
  { key: "date", label: "Date" },
  { key: "shares", label: "Shares" },
];

const Income_History_Table = (props: Props) => {
  const [value, setValue] = React.useState("date");

  const handleSelectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(value);
    setValue(e.target.value);
  };

  return (
    <Table className="  h-full w-full text-base font-medium text-[#6D6D6D]">
      <TableHeader className="w-full flex items-center justify-start border-b border-b-[#6d6d6d]/40">
        <TableRow className=" w-screen  sm:w-full  flex  items-start justify-around ">
          <TableHead
            className=" col-span-4  w-2/3 text-sm xs:w-[230px]  sm:w-[280px] flex h-full  items-center justify-start  py-4 text-sm sm:col-span-3 w-1/3 text-sm xs:w-[230px]  sm:w-[280px] sm:text-base">
            Asset Details
          </TableHead>
          <TableHead
            className=" col-span-4  w-1/3 text-sm xs:w-[230px]  sm:w-[280px] flex h-full items-center justify-start  py-4 text-sm sm:col-span-3 w-1/3 text-sm xs:w-[230px]  sm:w-[280px]  sm:justify-center sm:text-base  ">
            <div className="w-[200px] text-center flex items-center justify-center">
              <p className="block sm:hidden"> Inv Amount</p>
              <p className=" hidden sm:block"> Investment Amount</p>
            </div>
          </TableHead>

          <TableHead
            className=" col-span-4  w-1/3 text-sm xs:w-[230px]  sm:w-[280px] flex h-full  items-center justify-center  py-4 sm:col-span-2 sm:hidden">
            <div className=" w-full  text-centerflex items-center justify-center">
              {" "}
              {/*<Select*/}
              {/*  aria-label="tab"*/}
              {/*  // className="max-w-xs bg-[#F0EBFF] font-semibold"*/}
              {/*  onChange={handleSelectionChange}*/}
              {/*>*/}
              {/*  {tabs.map((tab) => (*/}
              {/*    <SelectItem key={tab.key}>{tab.label}</SelectItem>*/}
              {/*  ))}*/}
              {/*</Select>*/}
            </div>
          </TableHead>
          <TableHead
            className=" col-span-4  w-1/3 text-sm xs:w-[230px]  sm:w-[280px]  hidden h-full items-center justify-center py-4  sm:col-span-3 w-1/3 text-sm xs:w-[230px]  sm:w-[280px]  sm:flex">
            <div className=" w-full text-center flex items-center justify-center">Date </div>
          </TableHead>

          <TableHead
            className=" col-span-4  w-1/3 text-sm xs:w-[230px]  sm:w-[280px] hidden h-full items-center justify-center py-4  sm:col-span-3 w-1/3 text-sm xs:w-[230px]  sm:w-[280px]  ">
            <div className=" w-full  text-centerflex items-center justify-center">
              No of Shares
            </div>
          </TableHead>

          <TableHead
            className=" col-span-4  w-1/3 text-sm xs:w-[230px]  sm:w-[280px]  hidden h-full items-center justify-center py-4  sm:col-span-3 w-1/3 text-sm xs:w-[230px]  sm:w-[280px]  sm:flex">
            <div className=" w-full  text-center flex items-center justify-center">
               Status
            </div>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="no-scrollbar flex h-[23rem] w-full flex-col  gap-2 overflow-y-scroll">
        {props.invoices.map((invoice, i) => {
          const statusStyle = cn(
            " py-1.5 rounded-[8px] w-[14rem] text-center  ",
            invoice.status === "Funded" && "text-[#009C48] bg-[#E3FFF0]",
            invoice.status === "Pending" && "text-black bg-[#ECECEC]",
            invoice.status === "Declined" && "bg-[#FFD9D9] text-[#EA1313]",
          );
          return (
            <TableRow className="flex  items-start justify-around w-screen sm:w-full  border-0" key={i}>
              <TableCell
                className="col-span-3 w-2/3 text-sm xs:w-[230px]  sm:w-[280px] flex justify-center  flex-col gap-2 text-sm font-semibold text-black sm:col-span-2 sm:text-base">
                <h2 className='font-semibold'>{invoice.assetDetails}</h2>
                <p>{invoice.location}</p>
              </TableCell>
              <TableCell
                className=" col-span-3 w-1/3 text-sm xs:w-[230px]  sm:w-[280px] flex justify-center gap-2 text-sm  font-semibold   sm:text-base ">
                <div className="w-[200px] text-center flex items-center justify-center">
                  {invoice.incomeAmount}
                </div>
              </TableCell>
              <TableCell
                className={cn(
                  " col-span-3 w-1/3 text-sm xs:w-[230px]  sm:w-[280px] items-center justify-center gap-2 text-sm font-semibold   sm:flex  sm:text-base ",
                  value === "date" ? "flex" : "hidden ",
                )}
              >
                <div className="w-[200px] text-center flex items-center justify-center">
                  {invoice.paymentDate}
                </div>
              </TableCell>
              <TableCell
                className={cn(
                  "  col-span-3 w-1/3 text-sm xs:w-[230px]  sm:w-[280px] sm:hidden items-center justify-center gap-2  text-sm font-semibold  sm:col-span-2   sm:text-base ",
                  value === "shares" ? "flex" : "hidden ",
                )}
              >
                <div className="w-[200px] text-center flex items-center justify-center">
                  {invoice.shareCount}
                </div>
              </TableCell>
              <TableCell
                className={cn(
                  "  col-span-3 w-1/3 text-sm xs:w-[230px]  sm:w-[280px]  items-center justify-center gap-2  text-sm font-semibold  sm:flex  sm:text-base ",
                  value === "status" ? "flex" : "hidden ",
                )}
              >
                <div className="flex w-full items-center justify-center ">
                  <p className={statusStyle}>{invoice.status}</p>
                </div>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default Income_History_Table;
