import {getPlaiceholder} from "plaiceholder";


export default async function getbase64(url: string) {
 try{
   const response = await fetch(url);
   if (!response.ok) {
     throw new Error(response.statusText);
   }
   const buffer = await response.arrayBuffer();
   const {base64} = await  getPlaiceholder(Buffer.from(buffer));
   return base64
  }
  catch(e){
   if(e instanceof Error){
     console.log(e.stack)
   }
  }
}