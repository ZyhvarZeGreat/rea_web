import { getPlaiceholder } from "plaiceholder";
import { StaticImport } from "next/dist/shared/lib/get-img-props";


const generateBlurUrl = async (src: URL | string ) => {
  const buffer = await fetch(src).then(async (res) => {
    if(res.status === 200 ){
    return Buffer.from(await res.arrayBuffer());
    }

  }).catch((err)=>{
    console.log(err)
  })
if (buffer){
  const { base64 } = await getPlaiceholder(buffer);
  return base64
}

else return false


};
export default generateBlurUrl