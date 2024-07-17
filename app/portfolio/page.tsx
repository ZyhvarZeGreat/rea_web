"use client";
import {
  Portfolio_Assets,
  Portfolio_Breakdown,
  Wallet_Balance
} from "@/components/Portfolio Components/Portfolio Home Components";
import React, { useState } from "react";
import DashboardNav from "@/components/common/Dashboard Nav/DashboardNav";
import { Button } from "@/components/ui/button";

import { getMetrics, getOrders } from "@/lib/queryFunctions";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "@/components/common/Loader/Spinner";


type Props = {};

const Portfolio = (props: Props) => {
  const [showAssets, setShowAssets] = useState(false);
  const {
    data: metrics,
    error: metricsError,
    isLoading: metricsLoading
  } = useQuery<any | undefined>({
    queryKey: ["metrics"],
    queryFn: () => getMetrics(),
    staleTime: 60 * 1000, // 60 seconds
    retry: 10
  });

  const {
    data: orders,
    error: ordersError,
    isLoading: ordersLoading
  } = useQuery<any | undefined>({
    queryKey: ["metrics"],
    queryFn: () => getOrders(),
    staleTime: 60 * 1000, // 60 seconds
    retry: 10,
  });
  if (metricsLoading) {
    return <div className="h-screen w-screen  flex items-center justify-center">
      <Spinner />
    </div>;
  }
  if (metricsError) {
    throw new Error();
    // return (
    //   <div className="flex h-screen w-screen items-center justify-center">
    //     <ErrorMessage message={metricsError.message} />
    //   </div>
    // );
  }
  console.log(metrics);

  return (
    <div className=" flex w-full items-center justify-center  bg-[#f0efef] px-2 ">
      <div className="flex xs:p-4 w-full flex-col items-center justify-center  sm:max-w-screen-3xl sm:px-6 ">
        <div className=" mt-4 flex w-full grid-cols-12 flex-col sm:gap-8 sm:mt-16 lg:grid">
          <div className=" col-span-12 sm:col-span-7">
            <Portfolio_Breakdown
              metrics={metrics}
              showAssets={showAssets}
              setShowAssets={setShowAssets}
            />
          </div>
          <div className="  lg:col-span-5">
            <Wallet_Balance isIsolated={false} isHidden={false} />
          </div>
          {showAssets && (
            <div className="col-span-12 flex w-full items-center justify-center sm:col-span-12  ">
              <Portfolio_Assets
                // metrics={metrics}
              />
            </div>
          )}
        </div>

        <div className="hidden w-full items-center justify-center  sm:flex sm:py-12">
          <Button className="border-2  border-[#4E23CB] bg-white font-semibold text-[#4E23CB] hover:bg-transparent">
            More Properties
          </Button>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-8 py-4 sm:py-8">
          <DashboardNav />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
