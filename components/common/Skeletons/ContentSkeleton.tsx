import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import React from "react";
cn;
type Props = {
  className?: string;
  children?: React.ReactNode;
};

const ContentSkeleton = (props: Props) => {
  return (
    <Skeleton className={`${cn(props.className)}`}>{props.children}</Skeleton>
  );
};

export default ContentSkeleton;
