import getUserAction from "@/app/actions/getUsers";
import { Profile_Content } from "@/components/Profile Components/Profile_Content";
import ErrorMessage from "@/components/common/ErrorMessage/ErrorMessage";
import React from "react";

type Props = {};
const Profile = async (props: Props) => {

  const user = await getUserAction()
  if(!user){
    return <ErrorMessage/>
    // throw new Error('User not found , please retry')
  }
  return (
    <div className=" no-scrollbar no-scrollbar flex h-full w-full flex-col items-center  justify-center overflow-y-scroll  py-8 font-medium">
      <Profile_Content user={user}/>
    </div>
  );
};

export default Profile;
