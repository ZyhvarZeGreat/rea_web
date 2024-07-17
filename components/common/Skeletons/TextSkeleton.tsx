import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import React from "react";
Skeleton;
type Props = {
  children?: React.ReactNode;
  className?: string;
};

const TextSkeleton = (props: Props) => {
  return (
    <Skeleton
      className={cn("h-8 w-1/2 animate-pulse bg-white", `${props.className}`)}
    >
      {props.children}
    </Skeleton>
  );
};

export default TextSkeleton;
