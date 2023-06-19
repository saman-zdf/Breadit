"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, ReactNode } from "react";

interface RQueryProvidersProps {
  children: ReactNode;
}

const RQueryProviders: FC<RQueryProvidersProps> = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default RQueryProviders;
