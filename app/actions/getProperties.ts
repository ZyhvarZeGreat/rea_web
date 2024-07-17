'use server'
import { getAvailableProperties } from "@/lib/queryFunctions";
import { AxiosError } from "axios";

  export default async  function getAvailablePropertiesAction(){
  try {
    const availableProperties = await getAvailableProperties();
    if(availableProperties){
      return availableProperties;
    }
  }
  catch(e){
    if(e instanceof AxiosError){
      console.log(e.stack,e.response?.data,e.status,e.code)
    }
  }
}





