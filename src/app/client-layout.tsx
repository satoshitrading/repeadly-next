'use client';

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

const queryClient = new QueryClient();

export default function ClientLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <TooltipProvider>
      <QueryClientProvider client={queryClient}>
        {children}
        <Toaster />
        <Sonner />
      </QueryClientProvider>
    </TooltipProvider>
  );
}