import getAvailablePropertiesAction from "@/app/actions/getProperties";
import { Property_Details_Content } from "@/components/Property Components/Property_Details_Content";
import getPropertyDetailsAction from "@/app/actions/getPropertyDetails";

type Props = {
  params:{property_details:string[]}
}

const PropertyDetails = async ({params:{property_details}}: Props) => {


  const availablePropertiesPromise =  getAvailablePropertiesAction()
  const detailsPromise = await getPropertyDetailsAction(property_details)
  const [properties,details] = await Promise.all([availablePropertiesPromise,detailsPromise])

  if(!details || !properties){
    throw new Error()
  }

  return (
    <div className="flex w-full flex-col relative justify-center gap-8 mt-12  text-lg font-medium sm:items-center  ">

      <Property_Details_Content details={details} properties={properties} />

    </div>
  );
};

export default PropertyDetails;
