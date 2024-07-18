import UnAuthenticatedNavbar from "@/components/common/Navbar/UnAuthenticatedNavbar";

import AuthenticatedNavbar from "@/components/common/Navbar/AuthenticatedNavbar";
import { getUsers } from "@/lib/queryFunctions";


const Navbar = async  () => {

  //  const user = await getUsers()

    return (
    <div className=" ">
      {/* <UnAuthenticatedNavbar />
      { user&& user ?    (
        <AuthenticatedNavbar user={user} />
      ) : (
        <UnAuthenticatedNavbar />
      )} */}
            <UnAuthenticatedNavbar />
    </div>
  );
};

export default Navbar;
