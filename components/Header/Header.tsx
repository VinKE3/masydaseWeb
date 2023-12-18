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
        className={`flex flex-wrap items-center justify-between max-w-7xl p-4 mx-auto ${
          isScrolled ? "py-4" : "py-8"
        } fixed w-full z-50 left-0 right-0 ${
          isScrolled ? "bg-slate-50 dark:bg-black" : ""
        }`}
      >
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logo2.png"
            width={150}
            height={40}
            alt="Logo MasyDase"
          />
        </Link>
        <RiMenu3Line
          className="block text-3xl md:hidden cursor-pointer"
          onClick={() => setOpenMobileMenu(!openMobileMenu)}
        />
        <div
          className={`${
            openMobileMenu
              ? "block dark:bg-black mt-4 bg-slate-50 rounded-xl"
              : "hidden"
          } w-full md:block md:w-auto`}
        >
          <div className="flex flex-col p-4 mt-4 md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            {dataHeader.map(({ id, name, idLink }) => (
              <div
                key={id}
                className="px-4 transition-all duration-500 ease-in-out"
              >
                <Link
                  href={idLink}
                  className="text-lg hover:text-primary dark:hover:text-secondary text-grayDark dark:text-white"
                  onClick={() => setOpenMobileMenu(false)}
                >
                  {name}
                </Link>
              </div>
            ))}
            <div className="px-4 py-2 md:px-0 md:py-0">
              <ThemeSwitcherBtn setOcultar={() => setOpenMobileMenu(false)} />
            </div>
          </div>
        </div>
      </nav>
    </MotionTransition>
  );
}
