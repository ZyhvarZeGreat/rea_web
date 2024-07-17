"use client";
import { Toaster, toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const ToastManager = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const redirected = searchParams.get("redirected");
    if (redirected) {
      toast("You were redirected because you are not authenticated.", {
        className: "text-[1.1rem] font-jakarta",
      });
      const currentPath = window.location.pathname;
      router.replace(currentPath);
    }
  }, [router, searchParams]);

  return <Toaster />;
};

export default ToastManager;
