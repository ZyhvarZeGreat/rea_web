"use client";
import React from "react";
import { Input } from "@/components/ui/input";
// import { Search } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Income_History_Table, {
  Income_History_Details
} from "@/components/Portfolio Components/Portfolio Home Components/Income_History_Table";

type Props = {};

const PortfolioStatus = (props: Props) => {

  const invoices: Income_History_Details[] = [
    {
      assetDetails: "Twin Lux Duplex",
      incomeAmount: "₦40,000.23",
      paymentDate: "12-Jan-2024",
      shareCount: 30,
      location:'12 Orchid Road,Victoria Island',
      status: "Pending",
    },
    {
      assetDetails: "Twin Lux Duplex",
      incomeAmount: "₦40,000.23",
      paymentDate: "12-Jan-2024",
      shareCount: 20,
      status: "Funded",
      location:'12 Orchid Road,Victoria Island',
    },
    {
      assetDetails: "Twin Lux Duplex",
      incomeAmount: "₦40,000.23",
      paymentDate: "12-Jan-2024",
      shareCount: 30,
      location:'12 Orchid Road,Victoria Island',
      status: "Funded",
    },
    {
      assetDetails: "Twin Lux Duplex",
      incomeAmount: "₦40,000.23",
      paymentDate: "12-Jan-2024",
      shareCount: 40,
      location:'12 Orchid Road,Victoria Island',
      status: "Pending",
    },
    {
      assetDetails: "Twin Lux Duplex",
      incomeAmount: "₦40,000.23",
      paymentDate: "12-Jan-2024",
      shareCount: 30,
      location:'12 Orchid Road,Victoria Island',
      status: "Declined",
    },
    {
      assetDetails: "Twin Lux Duplex",
      incomeAmount: "₦40,000.23",
      paymentDate: "12-Jan-2024",
      shareCount: 25,
      location:'12 Orchid Road,Victoria Island',
      status: "Funded",
    },
    {
      assetDetails: "Twin Lux Duplex",
      incomeAmount: "₦40,000.23",
      paymentDate: "12-Jan-2024",
      shareCount: 30,
      location:'12 Orchid Road,Victoria Island',
      status: "Declined",
    },
    {
      assetDetails: "Twin Lux Duplex",
      incomeAmount: "₦40,000.23",
      paymentDate: "12-Jan-2024",
      shareCount: 28,
      location:'12 Orchid Road,Victoria Island',
      status: "Funded",
    },
    {
      assetDetails: "Twin Lux Duplex",
      incomeAmount: "₦40,000.23",
      paymentDate: "12-Jan-2024",
      shareCount: 30,
      location:'12 Orchid Road,Victoria Island',
      status: "Funded",
    },
    {
      assetDetails: "Twin Lux Duplex",
      incomeAmount: "₦40,000.23",
      paymentDate: "12-Jan-2024",
      shareCount: 6,
      location:'12 Orchid Road,Victoria Island',
      status: "Declined",
    },
    {
      assetDetails: "Twin Lux Duplex",
      incomeAmount: "₦40,000.23",
      paymentDate: "12-Jan-2024",
      shareCount: 73,
      location:'12 Orchid Road,Victoria Island',
      status: "Pending",
    },
  ];

  const pending = invoices.filter((invoice) => {
    return invoice.status === "Pending";
  });
  const paid = invoices.filter((invoice) => {
    return invoice.status === "Funded";
  });
  const declined = invoices.filter((invoice) => {
    return invoice.status === "Declined";
  });

  return (
    <div className=" w-full px-4 py-8  text-sm sm:max-w-screen-2xl sm:px-0 sm:text-base ">
      {" "}
      <div className="relative flex h-[3.4rem] w-full sm:w-3/5 items-center justify-center rounded-lg     ">
        <Input
          className=" w-full rounded-lg bg-[#d9d9d9] px-10 py-3 font-bold"
          placeholder="Search Transactions..."
        />
        <div className=" absolute bottom-0 left-0 right-0 top-0  flex w-[4rem] items-center justify-start px-2 ">
          {/*<Search className="z-20" />*/}
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <Tabs
          defaultValue="all"
          className=" flex w-full flex-col items-center justify-center rounded-lg  py-3"
        >
          <TabsList
            defaultValue="all"
            className=" flex w-full    justify-start  gap-2  bg-transparent  py-8    font-semibold"
          >
            <TabsTrigger
              className="text-md m-0 w-[60px] rounded-b-none rounded-t-md  bg-transparent text-black data-[state=active]:border-b-2 data-[state=active]:border-b-[#4E23CB]  data-[state=active]:bg-transparent data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm   sm:w-1/3 sm:px-12"
              value="all"
            >
              All{" "}
              <span className="data-[state=active]:text-[#4E23CB]">
                ({invoices.length})
              </span>
            </TabsTrigger>
            <TabsTrigger
              className="text-md w-[60px] rounded-b-none rounded-t-md bg-transparent px-12 text-black  data-[state=active]:border-b-2 data-[state=active]:border-b-[#4E23CB]  data-[state=active]:bg-transparent data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm   sm:w-1/3 sm:px-12"
              value="funded"
            >
              Funded <span className="data">({paid.length})</span>
            </TabsTrigger>
            <TabsTrigger
              className="text-md w-[60px] rounded-b-none rounded-t-md bg-transparent px-12 text-black  data-[state=active]:border-b-2 data-[state=active]:border-b-[#4E23CB]  data-[state=active]:bg-transparent data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm   sm:w-1/3 sm:px-12"
              value="pending"
            >
              Pending <span className="data">({declined.length})</span>
            </TabsTrigger>
            <TabsTrigger
              className="text-md w-[60px] rounded-b-none rounded-t-md bg-transparent px-12 text-black  data-[state=active]:border-b-2 data-[state=active]:border-b-[#4E23CB]  data-[state=active]:bg-transparent data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm   sm:w-1/3 sm:px-12"
              value="declined"
            >
              Declined <span className="data">({pending.length})</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent className="m-0 w-full p-0" value="all">
            <Income_History_Table invoices={invoices} />
          </TabsContent>
          <TabsContent className="m-0 w-full" value="funded">
            <Income_History_Table invoices={paid} />
          </TabsContent>
          <TabsContent className="m-0 w-full" value="pending">
            <Income_History_Table invoices={pending} />
          </TabsContent>
          <TabsContent className="m-0 w-full" value="declined">
            <Income_History_Table invoices={declined} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PortfolioStatus;
