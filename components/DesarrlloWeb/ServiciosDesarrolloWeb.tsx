"use client";

import { MotionTransition } from "../MotionTransition";
import { Reveal } from "../Reveal";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BackgroundRadialRight } from "../BackgroundRadialRight";
import { Check } from "lucide-react";
import { dataServiciosDesarrolloWeb } from "./ServiciosDesarrolloWeb.data";
import Link from "next/link";

export function ServiciosDesarrolloWeb() {
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
    <div className="relative p-4 py-20 md:py-64">
      {isDark && <BackgroundRadialRight />}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <Reveal>
              <h2 className="text-lg font-semibold leading-8 tracking-tight text-grayDark dark:text-primaryDark">
                Todo lo que necesitas para tu negocio
              </h2>
            </Reveal>
            <Reveal>
              <p className="mt-2 text-3xl font-bold tracking-tight from-primary to-azul bg-gradient-to-r bg-clip-text text-transparent text-azul block dark:bg-blueRadial degradedBlue">
                En un solo lugar
              </p>
            </Reveal>
            <Reveal>
              <p className="mt-6 text-base leading-7 text-grayDark dark:text-primaryDark">
                Contamos con un plan de desarrollo web que se adapta a tus
                necesidades, ya sea que necesites una página web para tu negocio
                o un blog para compartir tus ideas, nosotros te ayudamos a
                conseguirlo. Ofrecemos un servicio de hosting y dominio para que
                no tengas que preocuparte por nada. Además, te ofrecemos un
                servicio de mantenimiento para que tu página web esté siempre al
                día.
              </p>
            </Reveal>
            <div className="flex mt-8">
              <Link
                href="#contact"
                className="flex items-center justify-center mt-auto bg-primary hover:bg-azul  text-white dark:bg-blueRadial border-0 py-2 px-4 focus:outline-none rounded"
              >
                Consultar plan
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {dataServiciosDesarrolloWeb.map(({ id, title, description }) => (
              <MotionTransition key={id}>
                <div className="relative pl-9">
                  <div className="font-semibold text-gray-900 flex flex-row gap-2">
                    <Check
                      className="absolute top-1 left-0 h-5 w-5 text-azul dark:text-cyan-500"
                      size={24}
                    />
                    <h2 className="font-bold tracking-tight from-primary to-azul bg-gradient-to-r bg-clip-text text-transparent text-azul block dark:bg-blueRadial degradedBlue">
                      {title}
                    </h2>
                  </div>
                  <p className="mt-2 text-grayDark dark:text-primaryDark">
                    {description}
                  </p>
                </div>
              </MotionTransition>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
