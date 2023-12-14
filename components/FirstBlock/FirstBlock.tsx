"use client";
import Link from "next/link";
import { BackgroundRadialRight } from "../BackgroundRadialRight";
import { MotionTransition } from "../MotionTransition";
import Image from "next/image";
import { Reveal } from "../Reveal";

export function FirstBlock() {
  return (
    <div className="relative p-4 md:py-40">
      <BackgroundRadialRight />
      <div className="grid max-w-5xl mx-auto md:grid-cols-2">
        <div>
          <Reveal>
            <h1 className="text-4xl text-gray-600 dark:text-white font-semibold">
              Transformamos
              <br />
              ideas en
              <span className="block text-cyan-800 degradedBlue dark:bg-blueLight">
                soluciones ágiles
              </span>
              de confianza
            </h1>
          </Reveal>
          <Reveal>
            <p className="max-w-md mt-10 dark:text-primaryDark text-gray-600">
              Nuestro equipo de expertos en tecnología y finanzas, te ayudarán a
              transformar tu negocio y a mejorar tus procesos de facturación
              para que puedas enfocarte en lo que realmente importa.
            </p>
          </Reveal>
          <Reveal>
            <div className="my-8">
              <Link
                href="#contact"
                className="px-4 py-3 rounded-md text-white bg-cyan-600 hover:bg-cyan-700 dark:bg-blueRadial"
              >
                Contactanos
              </Link>
            </div>
          </Reveal>
        </div>
        <MotionTransition className="flex items-center justify-center">
          <Image
            src="/assets/cerebro2.png"
            alt="Card"
            width={450}
            height={450}
            className="h-auto w-72 md:w-full"
          />
        </MotionTransition>
      </div>
    </div>
  );
}
