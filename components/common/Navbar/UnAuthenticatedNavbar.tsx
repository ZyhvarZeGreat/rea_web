"use client";
import MobileNavbar from "./MobileNavbar";
import React from "react";
import Logo from "@/app/assets/logo.svg";
import Link from "next/link";

const UnAuthenticatedNavbar = () => {

  return (
    <nav className=" flex w-full items-center justify-center bg-[#4E23CB]">
      <div className="flex h-28 w-full items-center justify-between  px-6  py-6 xl:max-w-screen-3xl">
        <div className=" flex items-center justify-center text-white">
          <Link
            href='/'
            className="px-0 text-xl text-white"

          >
            <Logo />
          </Link>
        </div>
        <div className=" hidden items-center justify-center gap-12 text-lg text-white  md:flex xl:gap-24">
          <Link
            href='/properties'
            className="px-0 text-xl text-white"

          >
            Properties
          </Link>
          <Link
            href='/about'
            className="px-0 text-xl text-white"

          >
            About
          </Link>
          <Link
            href='/faq'
            className="px-0 text-xl text-white"

          >
            FAQs
          </Link>
          <Link
            href='/blog'
            className="px-0 text-xl text-white"

          >
            Blog
          </Link>

          <Link
            // legacyBehavior
            href={'/login'}
            className="bg-white rounded-md  px-6 py-2 text-lg text-black hover:bg-white/90 hover:text-black"
          >
            Login
          </Link>
        </div>
        <div className="flex md:hidden">
          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
};

export default UnAuthenticatedNavbar;
