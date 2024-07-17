"use client";
import {
  QueryClient,
  QueryClientProvider as NextQueryClientProvider,
} from "@tanstack/react-query";
import React from "react";
import { PropsWithChildren } from "react";
type Props = {};
const queryClient = new QueryClient();
const QueryClientProvider = ({ children }: PropsWithChildren) => {
  return (
    <NextQueryClientProvider client={queryClient}>
      {children}
    </NextQueryClientProvider>
  );
};

export default QueryClientProvider;
