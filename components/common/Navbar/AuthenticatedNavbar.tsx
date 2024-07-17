"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import MobileNavbar from "./MobileNavbar";
import React, { useEffect, useState } from "react";
import Logo from "@/app/assets/logo.svg";
import Logout from "@/public/logout.png";
import { logout } from "@/app/actions/auth";
import { User, Wallet } from "@/components/types/interfaces";
import Eye from "@/app/assets/eye.svg";
import WalletIcon from "@/app/assets/wallet.svg";
import { useQuery } from "@tanstack/react-query";
import { getWalletBalance } from "@/lib/queryFunctions";
import { Button } from "@/components/ui/button";
import millify from "millify";
import Link from "next/link";
import Image from "next/image";
import Profile from "@/public/profile.png";

type Props = {
  user: User | boolean | undefined;
};

const AuthenticatedNavbar = (props: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [walletActive, setWalletActive] = useState<boolean>();
  const [balanceVisible, setBalanceVisible] = useState<boolean>();

  const {
    data: wallet,
    error: walletError,
    isLoading: walletLoading,
  } = useQuery<Wallet | undefined>({
    queryKey: ["wallet"],
    queryFn: () => getWalletBalance(),
    staleTime: 60 * 1000, // 60 seconds
    retry: 3,
  });
  useEffect(() => {
    const portfolioWalletActive = pathname.includes("/portfolio");
    const profileWalletActive = pathname.includes("/profile");
    if (profileWalletActive || portfolioWalletActive) {
      setWalletActive(true);
    }
    if (props.user === undefined) {
      router.push("/login");
    }
  }, [pathname, walletActive, props.user, router]);

  const handleLogout = async () => {
    const isLoggedOut = await logout();
    if (isLoggedOut) {
      router.push("/");
    }
    console.log("Failed to Logout");
  };

  const walletBalance = Number(wallet?.balance) > 50000 ? millify(Number(wallet?.balance)) : Number(wallet?.balance).toLocaleString("en-US")
  return (
    <nav className=" flex w-full items-center justify-center bg-[#4E23CB]">
      <div className="flex h-[5.5rem] w-full  items-center justify-between    px-6  py-6 xl:max-w-screen-3xl">
        {/* Logo and Navbar */}
        <div className=" flex items-center justify-center text-white">

          <Link prefetch className=" h-auto w-auto   text-xl text-white" href="//">
            <Logo />
          </Link>

        </div>
        <div className=" hidden items-center justify-center gap-12 md:flex   ">
          <div className="flex w-full items-center  md:gap-8 lg:gap-16 xl:gap-24 ">
            <Link prefetch className="px-0 text-xl text-white hover:bg-transparent" href="//">
              Home
            </Link>

            <Link prefetch className="px-0 text-xl text-white hover:bg-transparent" href="/properties">
              Properties
            </Link>

            <Link prefetch className="px-0 text-xl text-white hover:bg-transparent" href="/portfolio">
              Portfolio
            </Link>


          </div>
        </div>

        {walletActive === true && (
          <div className=" hidden h-[40px] w-[230px]  items-center justify-around rounded-lg bg-[#F0EBFF] px-4 sm:flex">
            <WalletIcon />

            {balanceVisible === true ? (
              <p className="text-md font-semibold text-[#6d6d6d]">
                {`${wallet?.currency} ${walletBalance}`}
              </p>
            ) : (
              <p className="text-md self-center font-semibold text-[#6d6d6d]">
                *****
              </p>
            )}

            <Button
              onClick={() => {
                setBalanceVisible(!balanceVisible);
              }}
              variant="link"
              className=" p-0 hover:bg-transparent"
            >
              <Eye />
            </Button>
          </div>
        )}

        <div className=" hidden items-center  justify-center gap-4 md:flex">
          {props?.user && (
            <>
              <div className="flex items-center justify-center gap-3 rounded-lg px-8 py-1 text-lg font-semibold  text-[#6d6d6d]">
                <Link prefetch className="flex items-center justify-center gap-2 p-0 hover:bg-transparent"
                      href="/profile">
                  <span className="text-3xl text-white">
                    {typeof props.user !== "boolean" ? props.user?.first_name :''}
                  </span>
                  <Image className=" cursor-pointer h-[34px] w-[34px]" src={Profile} alt={"profile-img"} />
                </Link>

              </div>

              <div className="flex items-center justify-center gap-6">
                <Button
                  aria-label='logout button'
                  variant="link"
                  onClick={() => {
                    handleLogout();
                  }}
                  className="flex gap-2 p-0 hover:bg-transparent"
                >
                  <span className="text-lg text-white">Logout</span>
                  <Image className=" cursor-pointer h-[18px] w-[18px]" src={Logout} alt={"logout-img"} />
                </Button>
              </div>
            </>
          )}
        </div>
        <div className="flex md:hidden">
          <MobileNavbar
            user={props.user}
            logout={handleLogout}
            isAuthenticated={props.user !== undefined}
          />
        </div>
      </div>
    </nav>
  );
};

export default AuthenticatedNavbar;
