"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

type ButtonProps = {
  message: string;
  conditionalMessage?: string;
};

export function ActionButton(props: ButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" aria-disabled={pending}>
      {pending ? props.conditionalMessage : props.message}
    </Button>
  );
}
