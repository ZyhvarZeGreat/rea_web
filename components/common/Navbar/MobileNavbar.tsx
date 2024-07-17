"use client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetTrigger } from "@/components/ui/sheet";
import { useRouter } from "next/navigation";
import Logo from "@/app/assets/mobile-logo.svg";
import AuthLogo from "@/app/assets/mobile_nav_logo.svg";
import { User } from "@/components/types/interfaces";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import NavButton from "@/public/Nav-Button.png";
import Close from "@/public/close.png";
import AuthClose from "@/public/auth-close.png";
import Profile from "@/public/profile.png";

type Props = {
  isAuthenticated?: boolean;
  user?: User | boolean | undefined;
  logout?: () => void;
};

const MobileNavbar = (props: Props) => {
  const router = useRouter();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="  data-[hover=true]:bg-transparent">
          <Image className=" cursor-pointer h-[35px] w-[35px]" src={NavButton} alt={"nav-button"} />
        </div>
      </SheetTrigger>

      {props.isAuthenticated ? (
        <>
          <SheetContent
            className="no-scrollbar  fixed flex h-full w-full flex-col  items-center  justify-start overflow-y-scroll  bg-[#18005C] p-0 text-white">
            <div className=" mt-4 flex w-full flex-col items-start justify-start gap-12  px-6  py-4">
              <div
                className="flex w-full flex-col items-center  justify-end gap-3 rounded-lg   text-lg font-semibold  text-[#6d6d6d]">
                <SheetClose
                  className="flex border-transparent focus:outline-none  w-full items-center py-6 justify-start text-white">
                  <Image className=" cursor-pointer h-[15px] w-[15px]" src={AuthClose} alt={"close-button"} />
                </SheetClose>
                <div className="flex w-full items-center justify-end px-4 py-6 ">


                  <SheetClose>
                    <Link


                      href="/profile"
                      aria-label="Profile Button"

                      className="flex items-center justify-center gap-3 bg-transparent p-0 data-[hover=true]:bg-transparent"
                    >
                      <span className=" text-[32px] text-white sm:text-3xl">
                         {typeof props.user !== "boolean" ? props.user?.first_name : ""}
                      </span>
                      <Image className=" cursor-pointer h-[34px] w-[34px]" src={Profile} alt={"profile-img"} />
                    </Link
                    >
                  </SheetClose>
                </div>
              </div>
              <div
                className=" flex w-full  -mt-8  flex-col items-start justify-center gap-10 text-base text-white sm:gap-12 sm:text-lg">
                <SheetClose asChild>
                  <Link


                    aria-label="Link to Portfolio "
                    href="/portfolio"
                    className="px-4 text-xl text-white sm:text-2xl"

                  >
                    Portfolio
                  </Link
                  >
                </SheetClose>

                <SheetClose asChild>
                  <Link


                    href="/portfolio/wallet-balance"
                    aria-label="Link to Wallet "
                    className="px-4 text-xl text-white sm:text-2xl"

                  >
                    Wallet
                  </Link
                  >
                </SheetClose>

                <SheetClose asChild>
                  <Link


                    aria-label="Link to Properties "
                    className="px-4 text-xl text-white sm:text-2xl"
                    href="/properties"
                  >
                    Properties
                  </Link
                  >
                </SheetClose>

                <SheetClose asChild>
                  <Link
                    aria-label="Link to Notifications "
                    href="//"
                    className=" px-4 text-xl text-white sm:text-2xl"
                  >
                    Notifications
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link
                    aria-label="Link to Profile "
                    href="/profile"
                    className=" px-4 text-xl text-white sm:text-2xl"

                  >
                    Profile
                  </Link>
                </SheetClose>
              </div>
            </div>
            <SheetFooter className="flex w-full  items-center justify-center rounded-t-xl  bg-[#18005C] p-0">
              <div className="flex w-full flex-col items-center justify-center gap-16   py-8">
                <div className="flex w-full flex-col gap-4 px-6">
                  <SheetClose asChild>
                    <Button
                      onClick={() => {
                        if (props.logout) {
                          props.logout();
                        }
                      }}
                      className="flex rounded-[10px] w-full items-center justify-center gap-3 border border-[#4E23CB] bg-transparent px-6 py-3 text-xl text-white sm:py-8 sm:text-base "
                    >
                      <p>Logout</p>
                      {/*<Logout />*/}
                    </Button>
                  </SheetClose>
                </div>
                <div className=" flex w-full items-center justify-end">
                  <AuthLogo />
                </div>
              </div>
            </SheetFooter>
          </SheetContent>
        </>
      ) : (
        <SheetContent
          className="no-scrollbar fixed flex h-full w-full  flex-col  justify-start overflow-y-scroll  bg-[#F0EBFF] p-0">
          <div className="mt-12 flex w-full flex-col items-start justify-start gap-4  px-6  py-4">
            <SheetClose
              className="flex border-transparent focus:outline-none  w-full items-center py-6 justify-end text-white">
              <Image className=" cursor-pointer h-[15px] w-[15px]" src={Close} alt={"close-button"} />
            </SheetClose>
            <div className=" flex w-full  flex-col items-start justify-center gap-12 text-lg text-white">
              <SheetClose asChild>
                <Link
                  aria-label="Link to Home "
                  href="//"
                  className="bg-transparent px-4 text-base text-[#18005C] font-semibold "
                >
                  Home
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link
                  href="/properties"
                  className="bg-transparent px-4 text-base text-[#18005C] font-semibold "
                >
                  Properties
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link
                  href="/about"
                  className="bg-transparent px-4 text-base text-[#18005C] font-semibold "

                >
                  About
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link
                  href="/faq"
                  className="bg-transparent px-4 text-base text-[#18005C] font-semibold "

                >
                  FAQs
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link
                  href="/blog"
                  className="bg-transparent px-4 text-base text-[#18005C] font-semibold "

                >
                  Blog
                </Link>
              </SheetClose>
            </div>
          </div>
          <SheetFooter className="flex w-full  items-center justify-center rounded-t-xl  bg-[#18005C] p-0">
            <div className="flex h-[25rem] w-full flex-col items-center justify-center gap-24  px-6">
              <div className="flex w-full flex-col gap-4">
                <SheetClose asChild>
                  <Link href="/login"

                        className="w-full flex items-center justify-center border rounded-[10px] border-[#4E23CB] bg-transparent px-6 h-12 text-base text-white "
                  >
                    Login
                  </Link
                  >
                </SheetClose>

                <SheetClose asChild>
                  <Link


                    href="/signup"

                    className="w-full h-12 flex items-center justify-center border bg-transparent bg-white px-6 rounded-[10px] text-base text-black  hover:bg-white/90 hover:text-black"
                  >
                    Create Account
                  </Link
                  >
                </SheetClose>
              </div>
              <div className="flex items-center justify-center">
                <Logo />
              </div>
            </div>
          </SheetFooter>
        </SheetContent>
      )}
    </Sheet>
  );
};

export default MobileNavbar;
