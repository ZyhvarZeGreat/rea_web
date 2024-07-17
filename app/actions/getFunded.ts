import { getFundedProperties } from "@/lib/queryFunctions";
import { AxiosError } from "axios";

export default async  function getFundedPropertiesAction(){
  try {
    const fundedProperties = await getFundedProperties();
    if(typeof fundedProperties!= "undefined"){
      return fundedProperties;
    }
  }
  catch(e){
    if(e instanceof AxiosError){
      console.log(e.stack,e.response)
    }
  }
}