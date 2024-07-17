import Sidebar from "@/components/Profile Components/Profile_Sidebar";

import { Button } from "@/components/ui/button";
import Navbar from "@/components/common/Navbar/Navbar";

type Props = {
  children: React.ReactNode;
};
const Layout = (props: Props) => {

  return (
    <div className="flex h-screen w-full flex-col   bg-[#f0efef] ">
      <Navbar />
      <div className="no-scrollbar flex  h-full overflow-y-scroll">
        <Sidebar
          baseUrl="/profile"
        />
        <div className="  no-scrollbar flex  h-full w-full basis-full flex-col items-center justify-center  gap-6 self-center px-2 xs:px-4 xs:px-8 sm:px-12  lg:basis-10/12 lg:px-6 ">
          {props.children}
          <div className=" mb-6 flex w-full items-center justify-around rounded-xl bg-white py-2  font-semibold sm:max-w-md ">
            <Button className=" text-sm sm:text-lg text-[#4E23CB] " variant="link">
              Properties
            </Button>
            <Button className=" text-sm sm:text-lg text-[#4E23CB] " variant="link">
              About Us
            </Button>
            <Button className=" text-sm sm:text-lg text-[#4E23CB] " variant="link">
              FAQ
            </Button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Layout;
