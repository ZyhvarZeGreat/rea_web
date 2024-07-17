"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { BackButton } from "@/components/common/BackButton";

const HelpCenter = () => {
  const router = useRouter();
  return (
    <div>
      <BackButton />
    </div>
  );
};

export default HelpCenter;
