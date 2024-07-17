import { Property } from "@/components/types/interfaces";
import { generateBlurData } from "@/lib/generateBlurData";

/**
 // * modifiying the image urls object with including blurHash
 // * @param {*} data
 // * @returns a json object including imgUrl and blurDataUrl
 // */
const getResources = async (data: Property) => {
  const resources = await Promise.all(
    data?.images.map(async ({ image }) => {

      const blurHash = await generateBlurData(image);
      return {
        _id: (Math.random()).toFixed(),
        imgUrl: image,
        blurHash: blurHash
      };
    })
  );
  console.log("Resources:", resources);
  return resources;
};
export default getResources;