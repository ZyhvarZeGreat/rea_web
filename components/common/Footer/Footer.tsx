"use client";
import Link from "next/link";
import React from "react";
import Logo from "@/app/assets/footer_logo.svg";
import Instagram from "@/app/assets/instagram.svg";
import Linkedin from "@/app/assets/linkedin.svg";
import Twitter from "@/app/assets/twitter.svg";

import { Separator } from "@/components/ui/separator";

const Footer: React.FC = () => {
  return (
    <footer className=" flex w-full items-center justify-around  bg-[#18005C] px-6 py-12 text-white lg:h-[30rem]">
      <div className=" flex h-full max-w-xl flex-col items-center justify-center gap-4 lg:max-w-screen-3xl lg:px-4">
        <div className="flex w-full flex-col   justify-between gap-x-72  lg:flex-row ">
          <div className="flex w-full flex-row justify-between">
            <div className="flex flex-col gap-2  py-8 text-2xl text-white xs:py-2">
              <Link className="font-bold" href="/">
                Rea
              </Link>
              <Link
                className="text-base text-[#D9D9D9] sm:text-[#6D6D6D]"
                href="/properties"
              >
                Properties
              </Link>
              <Link
                className="text-base text-[#D9D9D9] sm:text-[#6D6D6D]"
                href="/about"
              >
                About
              </Link>
              <Link
                className="text-base text-[#D9D9D9] sm:text-[#6D6D6D]"
                href="/faq"
              >
                FAQs
              </Link>
              <Link
                className="text-base text-[#D9D9D9] sm:text-[#6D6D6D]"
                href="/blog"
              >
                Blog
              </Link>
            </div>

            <div className="flex flex-col items-center justify-start gap-4 self-center xs:items-start xs:justify-center ">
              <h3 className="text-xl font-semibold lg:text-3xl">
                Connect with us
              </h3>
              <div className="mr-12 flex gap-8">
                <div className="flex items-center justify-center">
                  <Twitter />
                </div>
                <div className="flex items-center justify-center">
                  <Instagram />
                </div>
                <div className="flex items-center justify-center">
                  <Linkedin />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex-col items-start justify-start xs:justify-between lg:flex lg:flex-row">
            <div className="flex w-full flex-col    gap-6 self-start  py-12 xs:w-auto xs:gap-4  xs:self-center sm:gap-1">
              <div className="">
                <span>© 2023 Rea. All rights reserved</span>
              </div>

              <div className="flex w-full gap-2">
                <Link href="/">Terms of use</Link>
                <Separator
                  className="h-8 w-[0.3px] bg-[#999999]"
                  orientation="vertical"
                />
                <Link href="/">Key Risks</Link>
                <Separator
                  className="h-8 w-[0.3px] bg-[#999999]"
                  orientation="vertical"
                />
                <Link href="/">Privacy Policies</Link>
              </div>
            </div>

            <div>
              <Logo />
            </div>
          </div>
        </div>
        <Separator className="w-full bg-[#999]" />
        <div className=" divide divide-y-2 divide-white text-start text-lg  sm:text-center lg:text-2xl">
          <span className=" text-left  text-[#6D6D6D] lg:text-xl">
            Rea platform consists of the website, web platform and mobile app.
            By using Rea, you agree to be bound by the Terms & Conditions,
            Cookie Notice and Privacy Policy. All investments through Rea carry
            risk and are not guaranteed. Please read Key Risks before investing.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
