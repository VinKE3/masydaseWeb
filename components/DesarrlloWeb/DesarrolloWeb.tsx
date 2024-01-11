"use client";

import { Reveal } from "../Reveal";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BackgroundRadialLeft } from "../BackgroundRadialLeft";
import { MotionTransition } from "../MotionTransition";
import { dataDesarrolloWeb } from "./DesarrolloWeb.data";

export function DesarrolloWeb() {
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
      className={`${isDark ? "" : "bg-slate-100"} relative px-6 py-20 md:py-64`}
      id="desarrollo"
    >
      {isDark && <BackgroundRadialLeft />}
      <div className="p-2 mx-auto mb-0 text-center lg:mb-4">
        <div className="flex justify-center">
          <Reveal>
            <h1 className="mb-4 py-2 text-4xl md:text-5xl font-bold from-primary to-azul bg-gradient-to-r bg-clip-text text-transparent text-azul block dark:bg-blueRadial degradedBlue">
              Desarrollo Web, Hosting y Dominio
            </h1>
          </Reveal>
        </div>
        <div className="flex justify-center">
          <Reveal>
            <p className="mb-5 font-semibold text-grayDark dark:bg-blueLight degradedBlue sm:text-xl">
              Todo lo necesario para potenciar tu negocio en internet y llegar a
              más clientes.
            </p>
          </Reveal>
        </div>
        <div className="flex justify-center mb-20">
          <Reveal>
            <p className="text-grayDark dark:text-primaryDark">
              Ofrecemos soluciones de desarrollo web, en conjunto con servicios
              de hosting y dominio para que tu negocio tenga presencia en
              internet.
            </p>
          </Reveal>
        </div>
      </div>
      {dataDesarrolloWeb.map(({ id, title, data, image }) => (
        <div key={id} className="max-w-7xl mx-auto mt-20">
          <div className="flex justify-center">
            <Reveal>
              <h1 className="text-center underline text-3xl xl:text-4xl mb-6 font-bold from-primary to-azul bg-gradient-to-r bg-clip-text text-transparent text-azul block dark:bg-blueRadial degradedBlue">
                {title}
              </h1>
            </Reveal>
          </div>
          <MotionTransition>
            <div className="flex flex-col md:flex-row">
              <div className="mr-0 md:mr-8 mb-6 md:mb-0">
                {/* <Image
                  className="w-2/3 md:w-full mx-auto"
                  src={image.src}
                  alt={image.alt}
                  width="400"
                  height="400"
                /> */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-2/3 md:w-full mx-auto"
                />
              </div>
              <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
                {data.map(({ id, title, description }) => (
                  <div key={id} className="w-full sm:w-1/2 mb-4 px-2 ">
                    <div className="h-full py-4 px-6 border border-cyan-800 border-t-0 border-l-0 rounded-br-xl">
                      <h3 className="mb-5 text-2xl font-semibold text-grayDark dark:bg-blueLight degradedBlue">
                        {title}
                      </h3>
                      <p className="text-base text-grayDark dark:text-primaryDark">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </MotionTransition>
        </div>
      ))}
    </div>
  );
}
