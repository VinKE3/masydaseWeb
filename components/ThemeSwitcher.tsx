"use client";

import { useState, useEffect, FC } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

interface ThemeSwitcherBtnProps {
  setOcultar: (value: boolean) => void;
}

const ThemeSwitcherBtn: FC<ThemeSwitcherBtnProps> = ({ setOcultar }) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className="text-dark dark:text-white cursor-pointer transition-all duration-500 ease-in-out"
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
        setOcultar(true);
      }}
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </div>
  );
};

export default ThemeSwitcherBtn;
