// import { Warning2 } from "iconsax-react";
import React from "react";
import { Button } from "@/components/ui/button";

type Props = {
  message?: string;
  reset?:()=> void
};
const ErrorMessage = ({ message,reset }: Props) => {
  return (
    <div className="flex col-span-12 w-full flex-col items-center justify-center gap-8">
      {/*<Warning2 variant="Bulk" size={64} color="#4E23CB" />*/}
      <h2 className="text-xl text-center font-bold text-[#4E23CB]">
        {!message ? "An Error Occurred Please Check your Connection" : message}
      </h2>
      {message && reset ? <Button className='h-8 w-24 bg-[#4E23CB] text-white hover:bg-[#4E23CB]/80' onClick={()=>{reset()}}>Retry</Button>: <div></div>}
    </div>
  );
};

export default ErrorMessage;
