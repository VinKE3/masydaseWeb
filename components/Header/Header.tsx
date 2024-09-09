"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeSwitcherBtn from "../ThemeSwitcher";
import Link from "next/link";
import { dataHeader } from "./Header.data";
import { FaChevronDown } from "react-icons/fa";

export default function Header() {
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  const toggleSubMenu = (menuId: number) => {
    setOpenMenu(openMenu === menuId ? null : menuId);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <motion.header
      className="fixed w-full top-0 z-50 bg-white dark:bg-black shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-6">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <img
              src="/assets/logo2.png"
              alt="Logo MasyDase"
              className="w-32 h-auto"
            />
          </Link>
        </div>

        {/* Navbar */}
        <div className="flex space-x-8">
          {dataHeader.map((menuItem) => (
            <div key={menuItem.id} className="relative">
              {menuItem.subElements ? (
                <>
                  <button
                    onClick={() => toggleSubMenu(menuItem.id)}
                    className="text-lg font-semibold hover:text-azul dark:hover:text-secondary text-grayDark dark:text-white flex items-center"
                  >
                    {/* Icono */}
                    <menuItem.icon className="inline-block mr-2" />{" "}
                    {menuItem.name}
                    <FaChevronDown className="ml-1" />
                  </button>

                  <AnimatePresence>
                    {openMenu === menuItem.id && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={menuVariants}
                        className="absolute left-0 mt-2 w-40 bg-white dark:bg-black shadow-lg rounded-lg"
                      >
                        {menuItem.subElements.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.idLink}
                            className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link
                  href={menuItem.idLink}
                  className="text-lg font-bold hover:text-azul dark:hover:text-secondary text-grayDark dark:text-white flex items-center"
                >
                  {/* Icono */}
                  <menuItem.icon className="inline-block mr-2" />{" "}
                  {menuItem.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Theme Switcher */}
        <div className="px-4 py-2 md:px-0 md:py-0">
          <ThemeSwitcherBtn />
        </div>
      </nav>
    </motion.header>
  );
}
