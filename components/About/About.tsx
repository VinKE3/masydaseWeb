"use client";

import Link from "next/link";
import { BackgroundRadialLeft } from "../BackgroundRadialLeft";
import { Reveal } from "../Reveal";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BackgroundBeamsWithCollision } from "../BackgroundBeamsCollision/background-beams-with-collision";
import { dataAbout } from "./About.data";
import { Meteors } from "../Meteors/meteors";
import { Button } from "../MovingBorder/moving-border";
import ThemeSwitcherBtn from "../ThemeSwitcher";

export function About() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }
  return (
    <div
      className={`${isDark ? "" : "bg-slate-100"} relative px-6 py-20 md:py-24`}
      id="nosotros"
    >
      {isDark && <BackgroundRadialLeft />}

      <div className="flex justify-center">
        <Reveal>
          <h1 className="mb-4 text-4xl md:text-5xl font-bold from-primary to-azul bg-gradient-to-r bg-clip-text text-transparent text-azul block dark:bg-blueRadial degradedBlue">
            Tienes un problema? Encontramos la mejor Solución.
          </h1>
        </Reveal>
      </div>
      <div className="flex flex-col items-center text-center mt-10">
        <Reveal>
          <p className="max-w-md mt-0 dark:text-primaryDark text-grayDark md:text-xl">
            En MASYDASE, somos un equipo joven dedicado a la programación de
            sistemas convertidas en soluciones, y que brinda soporte técnico a
            más de 1500 empresas nacionales, desde 1998.
          </p>
        </Reveal>
        <Reveal>
          <div className="my-8">
            <Link href="#plans">
              <Button borderRadius="1.75rem" className=" ">
                Contáctanos
              </Button>
            </Link>
          </div>
        </Reveal>
      </div>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto p-4">
        {dataAbout.map(({ id, title, description }) => {
          return (
            <div key={id} className="w-full relative max-w-xs">
              <div className="absolute inset-0 h-full w-full rounded-full blur-3xl" />
              <div className="relative shadow-xl  border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-2 w-2 text-black dark:text-gray-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                    />
                  </svg>
                </div>
                <h1 className="font-bold text-xl text-primary dark:text-white mb-4 relative z-50">
                  {title}
                </h1>
                <p className="font-normal text-base dark:text-primaryDark text-grayDark mb-4 relative z-50">
                  {description}
                </p>
                <Meteors number={20} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
