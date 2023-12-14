"use client";

import Image from "next/image";
import Link from "next/link";
import { RiMenu3Line } from "react-icons/ri";
import { dataHeader } from "./Header.data";
import { useEffect, useState } from "react";
import { MotionTransition } from "../MotionTransition/";
import ThemeSwitcherBtn from "../ThemeSwitcher";

export function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setIsScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <MotionTransition>
      <nav
        className={`flex flex-wrap items-center justify-between max-w-5xl p-4 mx-auto md:py-8 md:fixed md:w-full md:z-50 md:left-0 md:right-0 ${
          isScrolled ? "bg-gray-100 md:py-2" : ""
        }`}
      >
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logo2.png"
            width="150"
            height="40"
            alt="Logo MasyDase"
          />
        </Link>
        <RiMenu3Line
          className="block text-3xl md:hidden cursor-pointer"
          onClick={() => setOpenMobileMenu(!openMobileMenu)}
        />
        <div
          className={`${
            openMobileMenu ? "block" : "hidden"
          } w-full md:block md:w-auto`}
        >
          <div className="flex flex-col p-4 mt-4 md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0">
            {dataHeader.map(({ id, name, idLink }) => (
              <div
                key={id}
                className="px-4 transition-all duration-500 ease-in-out"
              >
                <Link
                  href={idLink}
                  className="text-lg hover:text-cyan-800 dark:hover:text-secondary text-gray-700 dark:text-white"
                >
                  {name}
                </Link>
              </div>
            ))}
            <div className="px-4 py-2 md:px-0 md:py-0">
              <ThemeSwitcherBtn />
            </div>
          </div>
        </div>
      </nav>
    </MotionTransition>
  );
}
