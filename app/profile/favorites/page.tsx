"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { BackButton } from "@/components/common/BackButton";

const Favorites = () => {
  const router = useRouter();
  return (
    <div className="px-6 sm:px-0">
      <BackButton />
    </div>
  );
};

export default Favorites;
