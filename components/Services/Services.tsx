"use client";

import Image from "next/image";
import { MotionTransition } from "../MotionTransition";
import { Reveal } from "../Reveal";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BackgroundRadialRight } from "../BackgroundRadialRight";
import { dataServices } from "./Services.data";
import { AnimatedText } from "../AnimatedText";
import { TextParallaxContentM } from "../TextParallaxContent/TextParallaxContent";

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
      <TextParallaxContentM />
    </div>
  );
}
