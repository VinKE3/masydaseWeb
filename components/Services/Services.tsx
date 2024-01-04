"use client";

import Image from "next/image";
import { MotionTransition } from "../MotionTransition";
import { Reveal } from "../Reveal";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BackgroundRadialRight } from "../BackgroundRadialRight";
import { dataServices } from "./Services.data";

export function Services() {
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
    <div className="relative p-4 py-20 md:py-64" id="services">
      {isDark && <BackgroundRadialRight />}
      <div className="p-2 mx-auto mb-0 text-center lg:mb-4">
        <div className="flex justify-center">
          <Reveal>
            <h1 className="mb-4 py-2 text-4xl md:text-5xl font-bold from-primary to-azul bg-gradient-to-r bg-clip-text text-transparent text-azul block dark:bg-blueRadial degradedBlue">
              Soluciones de Negocio
            </h1>
          </Reveal>
        </div>
        <div className="flex justify-center">
          <Reveal>
            <p className="mb-5 font-semibold text-grayDark dark:bg-blueLight degradedBlue sm:text-xl">
              Llegamos para hacerte la vida más fácil
            </p>
          </Reveal>
        </div>
        <div className="flex justify-center mb-20">
          <Reveal>
            <p className="text-grayDark dark:text-primaryDark">
              Todo lo que necesitas para tu negocio, en un solo lugar y con el{" "}
              <br /> respaldo de MasyDase.
            </p>
          </Reveal>
        </div>
      </div>
      {dataServices.map(({ id, title, title2, description, image }) => (
        <div
          key={id}
          className="flex flex-col-reverse max-w-7xl mx-auto md:flex-row place-content-evenly"
        >
          <MotionTransition className="flex-1 p-6 md:p-8">
            <Image
              src={image.src}
              alt={image.alt}
              width="480"
              height={411}
              className="w-full h-auto"
            />
          </MotionTransition>
          <div className="flex flex-col items-center justify-center p-6 md:p-8">
            <Reveal>
              <h2 className="text-3xl py-2 md:text-5xl font-semibold dark:text-white text-grayDark text-center">
                {title} <br /> {title2}
              </h2>
            </Reveal>
            <Reveal>
              <p className="max-w-md mt-5 text-grayDark dark:text-primaryDark text-center">
                {description}
              </p>
            </Reveal>
          </div>
        </div>
      ))}
    </div>
  );
}
