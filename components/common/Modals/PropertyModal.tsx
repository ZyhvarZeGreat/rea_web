import React, { useEffect, useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import image from "@/app/assets/image3.jpg";
import Image from "next/image";
import Location from "@/app/assets/location.svg";
import { Button } from "@/components/ui/button";
import { useMutation, useQuery } from "@tanstack/react-query";
import { confirmPin, getWalletBalance, purchaseAsset, withdrawFunds } from "@/lib/queryFunctions";
import Fund_Wallet_Modal from "./Fund_Wallet_Modal";
import { purchaseAssetInterface, Wallet } from "@/components/types/interfaces";
// import { Checkbox, Separator } from "@nextui-org/react";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { AxiosError } from "axios";
// import {Checkbox} from '@/components/ui'

type Props = {
  shareAmount:number
  amount:number
  propertyId:number
};


const PropertyModal = (props: Props) => {
  const [scene, setScene] = useState<
    "Initial" | "Approve" | "Failed" | "Success"
  >("Initial");
  const [pin,setPin]= useState<string>('')
  const [pinConfirmed,setPinConfirmed] = useState<boolean>(false)
  const [checked,setChecked] = useState(false)
  const {
    data: balance,
    error: balanceError,
    isLoading: balanceLoading,
  } = useQuery<Wallet | undefined>({
    queryKey: ["balance"],
    queryFn: () => getWalletBalance(),
    staleTime: 60 * 1000, // 60 seconds
    retry: 3,
  });

  const details = {
    amount:props.amount,
    shares: props?.shareAmount,
    property_id:props.propertyId
  }

  const confirmPinMutation = useMutation({
    mutationFn: () => {
      return confirmPin(pin);
    },
    onSuccess: () => {
      // Handle success
      toast.success("Pin Confirmed", {
        position: "top-right",
        className: "font-jakarta",
      });
      console.log("Pin Confirmed");
    },
    onError: (error: any) => {
      // Handle error
      toast.error("Pin Confirmation Failed", {
        position: "top-right",
        className: "font-jakarta",
      });
      console.error("Pin Confirmation Failed:", error.response);
    },
  });

  
  useEffect(() => {
    if(pin.length === 4) {
      confirmPinMutation.mutate()
    }
    if (confirmPinMutation.isSuccess) {
     setPinConfirmed(true)
    }
  
  }, [checked])
  
  

  const purchaseAssetMutation = useMutation({

    mutationFn: () => {
          console.log(details)
      return purchaseAsset(details);
    },
    onSuccess: () => {
      // Handle success
      toast.success("Purchase Succesful", {
        position: "top-right",
        className: "font-jakarta",
      });
      console.log("Purchase Succesful");
    },
    onError: (error: AxiosError) => {
      // Handle error
      toast.error("Purchase Failed", {
        position: "top-right",
        className: "font-jakarta",
      });
      console.log(error.response?.data)

    },
  });
  const [isSufficient, setIsSufficient] = useState<boolean>(true);
  const [isSelected, setIsSelected] = React.useState(false);
  return (
    <Dialog>
      <DialogTrigger  className="  h-[5rem] w-full rounded-none  flex items-center justify-center   border-2 border-r-0 border-l-0 border-b-0  border-[#4E23CB] bg-transparent  text-2xl font-semibold text-[#4E23CB] hover:bg-[#4E23CB] hover:text-white ">
          Buy
      </DialogTrigger>

      {scene === "Initial" && (
        <DialogContent className="sm:max-w-2xl">
          <div className="flex flex-col items-center justify-center gap-6 px-6 py-4 ">
            <h3 className="text-4xl font-semibold">Terms and Conditions</h3>
            <div className="flex w-full flex-col items-center justify-center gap-8 text-start">
              <p>
                Lorem ipsum dolor sit amet consectetur. Et non gravida imperdiet
                sagittis magna. Vulputate velit interdum suscipit semper mattis
                duis sapien fermentum sit. Nec ut tempus malesuada egestas
                scelerisque. Tincidunt leo vel mattis orci at. Sed velit ac
                auctor facilisis vel cras hendrerit tristique pulvinar. Vitae
                egetndum neque elementum. Id donec vitae sem eu malesuada. Id
                pharetra in elit interdum est et. Aliquet aenean dui sed hac
                pellentesque arcu faucibus. Libero volutpat dictum donec fusce
                donec eget lectus malesuada.
              </p>
              <p>
                ctetur nec luctus laoreet posuere potenti odio gravida
                venenatis. Placerat egestas massa bibendum neque elementum. Id
                donec vitae sem eu malesuada. Id pharetra in elit interdum est
                et. Aliquet aenean dui sed hac pellentesque arcu faucibus.
                Libero volutpat dictum donec fusce donec eget lectus malesuada.
              </p>
            </div>

           <div className="flex items-center justify-center gap-1">
           <Input onChange={()=>{
            setChecked(!checked)
           }} type="checkbox" checked={checked} className="accent-[#4E23CB] rounded-sm h-4 w-4" />
           <p>I accept terms and conditions</p>
           </div>
           
           {/* IF THE CHECK INPUT IS FILLED THEN THE BUTTON IS ENABLED , IF IT ISN'T IT IS DISABLED */}
            
            <Button
            disabled={!checked}
              onClick={() => {
                setScene("Approve");
              }}
             
              className="h-16 w-11/12 rounded-xl  bg-[#4E23CB] text-lg text-white hover:bg-[#4E23CB]/80"
            >
              Accept
            </Button>
            <Button className="h-16 w-11/12 bg-transparent rounded-xl border border-[#EB5757] px-4 text-lg text-[#EB5757] hover:border-[#EB5757] hover:bg-transparent hover:text-[#EB5757]">
            Cancel
            </Button>
          </div>
        </DialogContent>
      )}
      {scene === "Approve" && (
        <DialogContent className="sm:max-w-2xl">
          <div className="flex flex-col items-center justify-center gap-6 px-6 py-4 ">
            <h3 className="text-4xl font-semibold">Buy with Wallet</h3>

            <div className="flex w-full items-center justify-center gap-2">
              <p className="text-base text-[#6d6d6d]">Wallet Balance:</p>
              <div className="flex h-[2.5rem] items-center justify-center rounded-lg bg-[#c2aef3cc] px-3 text-lg font-semibold   text-[#4E23CB] hover:bg-[#c2aef3cc]">
                ₦{Number(balance?.balance).toLocaleString("en-US")}
              </div>
            </div>

            <div className="">
              <Input
               onChange={(e)=>{
                setPin(e.target.value)
               }}
                placeholder="Enter Wallet Pin"
                className="h-[4rem] w-[12rem] border-2 border-[#4E23CB]/60 text-center text-lg "
              />
            </div>
            <div className="flex  w-full items-center justify-center rounded-xl   bg-[#ECE5FF]">
              <div className="relative  rounded-xl">
                <Image
                  className="relative h-[194px] w-full rounded-xl p-4  "
                  src={image}
                  alt=""
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-2 px-4">
                <h3 className=" text-2xl font-medium">Twin Lux Duplex </h3>
                <div className="w-full">
                  <div className="flex items-center gap-2">
                    <Location />
                    <p className="text-base text-[#6d6d6d]">
                      Orchid Estate, Lekki Phase 1
                    </p>
                  </div>
                </div>
                <div className="flex w-full items-center gap-2  py-4 text-base text-[#6D6D6D]">
                  <h3>2 Beds</h3>
                  <Separator className="h-8 w-[0.3px]" orientation="vertical" />
                  <h3>2 Bath</h3>
                  <Separator className="h-8 w-[0.3px]" orientation="vertical" />
                  <h3>459 Sq.ft</h3>
                </div>
              </div>
            </div>
            <div className="mt-2 flex w-full flex-col items-center justify-center gap-4">
              <p className="text-[#6d6d6d]">
                By clicking Buy you agree to Rea&apos;s Terms & Conditions and
                Key Risks{" "}
              </p>
              <div className="flex w-full flex-col gap-4 px-6">
                <Button
                disabled={pinConfirmed}
                  onClick={() => {
                    setScene("Approve");
                    purchaseAssetMutation.mutate()
                  }}
                  className="h-16 w-full rounded-xl bg-[#4E23CB] px-4 text-lg hover:bg-[#4E23CB]/80 "
                >
                  Buy ₦{props.amount.toLocaleString()}
                </Button>
                {isSufficient === Number(balance?.balance) < 0 ? (
                  <Button
                    
                    className="h-16 w-full rounded-xl border border-[#EB5757] px-4 text-lg text-[#EB5757] hover:border-[#EB5757] hover:bg-transparent hover:text-[#EB5757]"
                  >
                    Cancel
                  </Button>
                ) : (
                  <Fund_Wallet_Modal isProperty={true} />
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      )}

      

      {scene === "Success" && (
        <DialogContent className="sm:max-w-2xl">
          <div className="flex flex-col items-center justify-center gap-6 px-6 py-4 ">
            <div className="flex w-full flex-col items-center justify-center gap-4">
              <h3 className="text-4xl font-medium text-[#4E23CB]">
                Congratulations
              </h3>
              <p className="text-lg text-[#6d6d6d]">
                Welcome to the Rea Family
              </p>
            </div>

            <div className="flex w-full flex-col items-center justify-center gap-8 text-start"></div>

            <Button
              onClick={() => {
                setScene("Initial");
              }}
         
              className="h-16 w-11/12 rounded-xl  bg-[#4E23CB] text-lg text-white hover:bg-[#4E23CB]/80"
            >
              See Portfolio
            </Button>
            <DialogClose
              onClick={() => {
                setScene("Initial");
              }}
              className="h-16 w-11/12  rounded-xl border border-transparent text-lg text-[#4E23CB] transition-all duration-300 hover:border-[#4E23CB] hover:bg-transparent hover:text-[#4E23CB]"
            >
              View Other Properties
            </DialogClose>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default PropertyModal;
