"use client";
import Link from "next/link";
import { BackgroundRadialRight } from "../BackgroundRadialRight";
import { MotionTransition } from "../MotionTransition";
import Image from "next/image";
import { Reveal } from "../Reveal";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function FirstBlock() {
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
    <div className="relative p-4 md:py-40">
      {isDark && <BackgroundRadialRight />}
      <div className="grid max-w-7xl mx-auto md:grid-cols-2">
        <div>
          <Reveal>
            <h1 className="text-4xl md:text-5xl text-grayDark dark:text-white font-semibold">
              Transformamos
              <br />
              ideas en
              <span className="block text-azul degradedBlue dark:bg-blueLight">
                soluciones ágiles
              </span>
              de confianza
            </h1>
          </Reveal>
          <Reveal>
            <p className="max-w-md mt-10 dark:text-primaryDark text-grayDark">
              Nuestro equipo de expertos en tecnología y finanzas, te ayudarán a
              transformar tu negocio y a mejorar tus procesos de facturación
              para que puedas enfocarte en lo que realmente importa.
            </p>
          </Reveal>
          <Reveal>
            <div className="my-8">
              <Link
                href="#contact"
                className="px-4 py-3 rounded-md text-white bg-primary hover:bg-azul dark:bg-blueRadial"
              >
                Contáctanos
              </Link>
            </div>
          </Reveal>
        </div>
        <MotionTransition className="flex items-center justify-center">
          {isDark ? (
            // <Image
            //   src="/assets/cerebro2.png"
            //   alt="Card"
            //   width={450}
            //   height={450}
            //   className="h-auto w-72 md:w-full"
            // />
            <img
              src="/assets/cerebro2.png"
              alt="Card"
              className="h-auto w-72 md:w-full"
            />
          ) : (
            // <Image
            //   src="/assets/cerebro.webp"
            //   alt="Card"
            //   width={450}
            //   height={450}
            //   className="h-auto w-72 md:w-full"
            // />
            <img
              src="/assets/cerebro.webp"
              alt="Card"
              className="h-auto w-72 md:w-full"
            />
          )}
        </MotionTransition>
      </div>
    </div>
  );
}
