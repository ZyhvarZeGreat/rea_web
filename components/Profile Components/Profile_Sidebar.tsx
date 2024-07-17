"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
// import { Additem, Book, Briefcase, User } from "iconsax-react";
// import { X } from "lucide-react";

interface SidebarProps {
  baseUrl: string;
}
interface MenuItemProps {
  route: string;
  icon?: React.ReactNode;
  name: string;
}

const Sidebar = ({ baseUrl }: SidebarProps) => {
  const pathname = usePathname() ?? "";
const [sidebarOpen, setSidebarOpen] = useState(false);
  // MENU ITEM COMPONENT
  // TAKES A NEXT LINK AND USES THE PATHNAME TO SET THE ACTIVE LINK STYLE
  const MenuItem = ({ route, icon, name }: MenuItemProps) => {
    // Highlight menu item based on currently displayed route
    const colorClass =
      pathname === route ||
      pathname === `${route}/[details]` ||
      pathname === `${route}/[details][make-offer]`
        ? " bg-[#F0EBFF] font-realtext text-[#40048f] text-sm font-medium font-semibold  "
        : "";

    return (
      <Link
        href={route}
        onClick={() => {
          setSidebarOpen(!sidebarOpen);
        }}
        className={cn(
          "  text-foundation-black-100 flex w-[15rem] items-start justify-start gap-1 rounded-md px-2 py-5 pl-6 text-sm  font-medium [&>*]:my-auto ",
          colorClass,
        )}
      >
        <div className="flex w-[30px] text-xl [&>*]:mx-auto">{icon}</div>
        <div className="font-regular font-realtext text-sm">{name}</div>
      </Link>
    );
  };
  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  let storedSidebarExpanded = "true";
  const [sidebarExpanded, setSidebarExpanded] = useState(
    false ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (!sidebarOpen || key !== "Escape") return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`dark:bg-boxdark font-realtext text-foundation-black-200 absolute left-0 top-0  z-50 hidden h-full   basis-2/12 flex-col items-end justify-center   bg-white  bg-opacity-100 py-2 font-extralight duration-300 ease-linear lg:static lg:flex lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } border-r border-gray-300`}
    >
      <div className="no-scrollbar flex h-full w-full flex-col items-center justify-start overflow-y-auto  py-6 duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 px-4 py-4 lg:mt-4 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <ul className="mb-6 flex flex-col gap-10">
              {/* <!-- Menu Item Dashboard --> */}
              {/* CHANGED THE MENU ITEMS AND IMPLEMENTED FILE BASED ROUTING */}
              <React.Fragment>
                <MenuItem
                  route={`${baseUrl}` || `${baseUrl}/[slug]`}
                  name="My Profile"
                  // icon={<Book className="h-5 w-5" />}
                />
                {/* <!-- Dropdown Menu End --> */}
              </React.Fragment>

              {/* <!-- Menu Item Dashboard --> */}

              {/* <!-- Menu Item Calendar --> */}
              <li>
                <MenuItem
                  route={`${baseUrl}/favorites`}
                  name="Favorites"
                  // icon={
                  //   <Additem
                  //     className="h-5 w-5"
                  //     color={
                  //       pathname === `${baseUrl}/favorites`
                  //         ? "#40048F"
                  //         : " #8a8a8a"
                  //     }
                  //   />
                  // }
                />
              </li>
              {/* <!-- Menu Item Calendar --> */}

              {/* <!-- Menu Item Profile --> */}
              <li>
                <MenuItem
                  route={`${baseUrl}/account-settings`}
                  name="Account Settings"
                  // icon={
                  //   <Briefcase
                  //     className="h-5 w-5"
                  //     color={
                  //       pathname === `${baseUrl}/account-settings`
                  //         ? "#40048F"
                  //         : " #8a8a8a"
                  //     }
                  //   />
                  // }
                />
              </li>

              <li>
                <MenuItem
                  route={`${baseUrl}/help-center`}
                  name="Help Center"
                  // icon={
                  //   <User
                  //     className="h-5 w-5"
                  //     color={
                  //       pathname === `${baseUrl}/help-center`
                  //         ? "#40048F"
                  //         : " #8a8a8a"
                  //     }
                  //   />
                  // }
                />
              </li>
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
