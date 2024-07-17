import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import React from "react";
import Income_History_Table, {
  Income_History_Details,
} from "./Income_History_Table";

type Props = {};

const invoices: Income_History_Details[] = [
  {
    assetDetails: "Twin Lux Duplex",
    incomeAmount: "₦40,000.23",
    paymentDate: "12-Jan-2024",
    location:'12 Orchid road, Ikeja',
    shareCount: 30,
    status: "Pending",
  },
  {
    assetDetails: "Twin Lux Duplex",
    incomeAmount: "₦40,000.23",
    paymentDate: "12-Jan-2024",
    location:'12 Orchid road, Ikeja',
    shareCount: 30,
    status: "Funded",
  },
  {
    assetDetails: "Twin Lux Duplex",
    incomeAmount: "₦40,000.23",
    paymentDate: "12-Jan-2024",
    location:'12 Orchid road, Ikeja',
    shareCount: 30,
    status: "Funded",
  },
  {
    assetDetails: "Twin Lux Duplex",
    incomeAmount: "₦40,000.23",
    paymentDate: "12-Jan-2024",
    location:'12 Orchid road, Ikeja',
    shareCount: 30,
    status: "Pending",
  },
  {
    assetDetails: "Twin Lux Duplex",
    incomeAmount: "₦40,000.23",
    paymentDate: "12-Jan-2024",
    location:'12 Orchid road, Ikeja',
    shareCount: 30,
    status: "Declined",
  },
  {
    assetDetails: "Twin Lux Duplex",
    incomeAmount: "₦40,000.23",
    paymentDate: "12-Jan-2024",
    location:'12 Orchid road, Ikeja',
    shareCount: 30,
    status: "Funded",
  },
  {
    assetDetails: "Twin Lux Duplex",
    incomeAmount: "₦40,000.23",
    paymentDate: "12-Jan-2024",
    location:'12 Orchid road, Ikeja',
    shareCount: 30,
    status: "Declined",
  },
  {
    assetDetails: "Twin Lux Duplex",
    incomeAmount: "₦40,000.23",
    paymentDate: "12-Jan-2024",
    location:'12 Orchid road, Ikeja',
    shareCount: 30,
    status: "Funded",
  },
  {
    assetDetails: "Twin Lux Duplex",
    incomeAmount: "₦40,000.23",
    paymentDate: "12-Jan-2024",
    location:'12 Orchid road, Ikeja',
    shareCount: 30,
    status: "Funded",
  },
  {
    assetDetails: "Twin Lux Duplex",
    incomeAmount: "₦40,000.23",
    paymentDate: "12-Jan-2024",
    location:'12 Orchid road, Ikeja',
    shareCount: 30,
    status: "Declined",
  },
  {
    assetDetails: "Twin Lux Duplex",
    incomeAmount: "₦40,000.23",
    paymentDate: "12-Jan-2024",
    location:'12 Orchid road, Ikeja',
    shareCount: 30,
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

const Income_History_Tabs = (props: Props) => {
  return (
    <Tabs
      defaultValue="all"
      className=" flex w-full flex-col items-center justify-center rounded-lg  py-3"
    >
      <TabsList
        defaultValue="all"
        className=" flex w-screen justify-start gap-2 bg-transparent font-semibold    sm:w-full"
      >
        <TabsTrigger
          className=" sm:text-md m-0 rounded-b-none rounded-t-md bg-transparent px-12 text-sm text-black data-[state=active]:border-b-2  data-[state=active]:border-b-[#4E23CB] data-[state=active]:bg-transparent data-[state=active]:bg-white data-[state=active]:text-black   data-[state=active]:shadow-sm"
          value="all"
        >
          All{" "}
          <span className="data-[state=active]:text-[#4E23CB]">
            ({invoices.length})
          </span>
        </TabsTrigger>
        <TabsTrigger
          className=" sm:text-md rounded-b-none rounded-t-md bg-transparent px-4 text-sm text-black  data-[state=active]:border-b-2 data-[state=active]:border-b-[#4E23CB]  data-[state=active]:bg-transparent data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm   sm:px-12"
          value="paid"
        >
          Paid <span className="data">({paid.length})</span>
        </TabsTrigger>
        <TabsTrigger
          className=" sm:text-md rounded-b-none rounded-t-md bg-transparent px-4 text-sm text-black  data-[state=active]:border-b-2 data-[state=active]:border-b-[#4E23CB]  data-[state=active]:bg-transparent data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm   sm:px-12"
          value="pending"
        >
          Pending <span className="data">({pending.length})</span>
        </TabsTrigger>
        <TabsTrigger
          className=" sm:text-md rounded-b-none rounded-t-md bg-transparent px-4 text-sm text-black  data-[state=active]:border-b-2 data-[state=active]:border-b-[#4E23CB]  data-[state=active]:bg-transparent data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm   sm:px-12"
          value="declined"
        >
          Declined <span className="data">({declined.length})</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent className="m-0 w-screen p-0 sm:w-full" value="all">
        <Income_History_Table invoices={invoices} />
      </TabsContent>
      <TabsContent className="m-0 w-screen sm:w-full" value="paid">
        <Income_History_Table invoices={paid} />
      </TabsContent>
      <TabsContent className="m-0 w-screen sm:w-full" value="pending">
        <Income_History_Table invoices={pending} />
      </TabsContent>
      <TabsContent className="m-0 w-screen sm:w-full" value="declined">
        <Income_History_Table invoices={declined} />
      </TabsContent>
    </Tabs>
  );
};

export default Income_History_Tabs;
