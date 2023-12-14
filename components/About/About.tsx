"use client";

import Link from "next/link";
import { BackgroundRadialLeft } from "../BackgroundRadialLeft";
import { Reveal } from "../Reveal";
import { dataAbout } from "./About.data";
import Image from "next/image";

export function About() {
  return (
    <div className="relative px-6 py-20 md:py-64" id="about">
      <BackgroundRadialLeft />
      <div className="grid max-w-5xl mx-auto md:grid-cols-2">
        <div>
          <Reveal>
            <h2 className="text-5xl font-semibold">
              <span className="block degradedBlue text-cyan-600 dark:bg-blueLight">
                Nos presentan un problema
              </span>
              <span className="block degradedBlue text-gray-600 dark:text-white">
                nosotros encontramos <br />
                la mejor solución
              </span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="max-w-md mt-10 dark:text-primaryDark text-gray-600">
              En MASYDASE, somos un equipo joven dedicado a la programación de
              sistemas convertidas en soluciones, y que brinda soporte técnico a
              más de 350 empresas nacionales, desde 1998.
            </p>
          </Reveal>
          <Reveal>
            <div className="my-8">
              <Link
                href="#plans"
                className="px-4 py-3 rounded-md bg-cyan-500 text-white hover:bg-cyan-700 dark:bg-blueRadial"
              >
                Elige tu plan
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="grid items-center py-5 md:p-8">
          {dataAbout.map(({ id, icon, title, description }) => (
            <Reveal key={id}>
              <div className="grid grid-flow-col gap-5 px-4 py-2 rounded-3xl group hover:bg-gray-200 dark:hover:bg-radialBlack">
                <Image
                  src={`/assets/${icon}.png`}
                  alt={title}
                  width={40}
                  height={40}
                />
                <div>
                  <h4 className="dark:text-primary font-semibold text-gray-700">
                    {title}
                  </h4>
                  <p className="dark:text-primaryDark ">{description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
