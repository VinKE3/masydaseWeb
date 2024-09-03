"use client";
import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import { FC, ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("theme");
    }
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      {children}
    </ThemeProvider>
  );
};

export default Providers;
