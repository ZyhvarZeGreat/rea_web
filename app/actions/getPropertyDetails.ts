'use server'
import {  getPropertyDetails } from "@/lib/queryFunctions";

export default async  function getPropertyDetailsAction(id:string|string[]){
  try {
    const details = await getPropertyDetails(id);
    if(typeof details != "undefined"){
      return details;
    }
  }
  catch(e){
    if(e instanceof Error){
      console.log(e.stack)
    }
  }
}





