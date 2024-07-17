import Properties from "@/components/Property Components/Properties";
import React, { Suspense } from "react";
import Logo from "@/app/assets/property_logo.svg";
import { getAvailableProperties, getFundedProperties } from "@/lib/queryFunctions";
import { Spinner } from "@/components/common/Loader/Spinner";
import ErrorMessage from "@/components/common/ErrorMessage/ErrorMessage";

;



const PropertiesHome = async () => {
  const availablePropertiesPromise =  getAvailableProperties()
  const fundedPropertiesPromise =  getFundedProperties()
  const [availableProperties,fundedProperties] = await Promise.all([availablePropertiesPromise,fundedPropertiesPromise])

  if (!availableProperties || !fundedProperties){
    console.log(availableProperties,fundedProperties)
    if (process.env.NODE_ENV !== "production") {
      throw new Error("failed to fetch properties please retry ");

    } else return <ErrorMessage />;
  }


  return (
    <div className="flex w-full  flex-col bg-[#ECE5FF]">

      <div className=" flex h-[15rem] items-center justify-around rounded-b-xl  bg-[#4E23CB] text-center  lg:h-[20rem] lg:text-start  ">
        <div className="  mb-6 flex w-full flex-col gap-4 self-end  px-6 py-6 lg:px-28">
          <h2 className="w-full text-4xl text-white lg:text-6xl  ">
            Properties
          </h2>
          <p className=" text-xl text-white lg:text-2xl ">
            We source the best and luxurious properties from the best and <br />
            top real estate developers
          </p>
        </div>
        <div className="hidden h-[20rem] lg:block ">
          <Logo className="h-full py-4 " />
        </div>
      </div>

      <div className=" mt-24 flex w-full max-w-screen-3xl  items-center justify-center self-center  px-6">
        <Suspense fallback={<Spinner />}>
          <Properties fundedProperties={fundedProperties} availableProperties={availableProperties} />
        </Suspense>
      </div>

    </div>
  );
};

export default PropertiesHome;
