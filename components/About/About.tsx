"use client";

import Link from "next/link";
import { BackgroundRadialLeft } from "../BackgroundRadialLeft";
import { Reveal } from "../Reveal";
import { dataAbout } from "./About.data";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

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
    <div className="relative px-6 py-20 md:py-64" id="about">
      {isDark && <BackgroundRadialLeft />}
      <div className="grid max-w-5xl mx-auto md:grid-cols-2">
        <div>
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-semibold">
              <span className="block degradedBlue text-grayDark dark:bg-blueLight">
                Nos presentan un problema
              </span>
              <span className="block degradedBlue text-blue dark:text-white">
                nosotros encontramos <br />
                <span className="text-grayDark degradedBlue dark:text-white">
                  la mejor solución
                </span>
              </span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="max-w-md mt-10 dark:text-primaryDark text-gray">
              En MASYDASE, somos un equipo joven dedicado a la programación de
              sistemas convertidas en soluciones, y que brinda soporte técnico a
              más de 350 empresas nacionales, desde 1998.
            </p>
          </Reveal>
          <Reveal>
            <div className="my-8">
              <Link
                href="#plans"
                className="px-4 py-3 rounded-md bg-primary text-white hover:bg-blue dark:bg-blueRadial"
              >
                Elige tu plan
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="grid items-center py-5 md:p-8">
          {dataAbout.map(({ id, icon: Icon, title, description }) => {
            return (
              <Reveal key={id}>
                <div className="grid grid-flow-col gap-5 px-4 py-2 rounded-3xl group hover:bg-slate-100 dark:hover:bg-radialBlack">
                  <Icon className="h-8 w-8 text-blue dark:text-secondary" />
                  <div>
                    <h4 className="dark:text-white font-semibold text-blue">
                      {title}
                    </h4>
                    <p className="dark:text-primaryDark text-grayDark">
                      {description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
