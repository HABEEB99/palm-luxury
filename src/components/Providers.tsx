"use client";

import { ThemeProvider } from "next-themes";
import React from "react";
import { Toaster } from "react-hot-toast";
import { type ThemeProviderProps } from "next-themes/dist/types";

const Providers = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      {...props}
    >
      <Toaster />
      {children}
    </ThemeProvider>
  );
};

export default Providers;
