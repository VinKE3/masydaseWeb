"use client";
import { BackgroundRadialLeft } from "../BackgroundRadialLeft";

import { MotionTransition } from "../MotionTransition";
import { Reveal } from "../Reveal";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Benefits() {
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
    <>
      <div
        className={`${
          isDark ? "" : "bg-slate-100"
        } relative px-6 py-20 md:py-64`}
      >
        {isDark && <BackgroundRadialLeft />}
        <div className="block relative bg-opacity-50 z-40">
          <div className="relative mx-auto h-full px-4 pb-20   md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
              <div className="p-2 mx-auto mb-8 text-center lg:mb-12">
                <div className="flex justify-center">
                  <Reveal>
                    <h1 className="mb-4 text-4xl md:text-5xl font-bold from-primary to-azul bg-gradient-to-r bg-clip-text text-transparent text-azul block dark:bg-blueRadial degradedBlue">
                      Beneficios
                    </h1>
                  </Reveal>
                </div>
                <div className="flex justify-center">
                  <Reveal>
                    <p className="text-grayDark dark:text-primaryDark">
                      Contamos con los mejores beneficios para tu empresa y tus
                      clientes.
                    </p>
                  </Reveal>
                </div>
              </div>
              <MotionTransition>
                <div className="grid grid-cols-1 gap-2 mt-12 sm:grid-cols-3 lg:mt-20">
                  <div className="transition-all duration-1000 dark:bg-cyan-600 dark:hover:bg-cyan-800 bg-white hover:bg-azul  hover:shadow-xl m-2 p-4 relative z-40 group  ">
                    <div className="absolute dark:bg-white dark:group-hover:bg-cyan-600 bg-azul/80 top-0 left-0 w-24 h-1 z-30  transition-all duration-200 group-hover:bg-white group-hover:w-1/2  "></div>
                    <div className="py-2 px-9 relative  ">
                      <h3 className="mt-8 text-lg font-semibold text-grayDark group-hover:text-white dark:text-white">
                        Seguridad y Confiabilidad
                      </h3>
                      <p className="mt-4 text-base text-grayDark dark:text-white group-hover:text-white">
                        Nos preocupamos por la seguridad de tu información, es
                        por eso que nuestro sistema se respalda de manera
                        automática.
                      </p>
                    </div>
                  </div>
                  <div className="transition-all duration-1000 dark:bg-cyan-600 dark:hover:bg-cyan-800 bg-white hover:bg-azul  hover:shadow-xl m-2 p-4 relative z-40 group  ">
                    <div className="absolute dark:bg-white dark:group-hover:bg-cyan-600 bg-azul/80 top-0 left-0 w-24 h-1 z-30  transition-all duration-200 group-hover:bg-white group-hover:w-1/2  "></div>
                    <div className="py-2 px-9 relative  ">
                      <h3 className="mt-8 text-lg font-semibold text-grayDark group-hover:text-white dark:text-white">
                        Soporte y Asesoría Técnica
                      </h3>
                      <p className="mt-4 text-base text-grayDark dark:text-white group-hover:text-white">
                        Contamos con profesionales certificados con el fin de
                        dar apoyo, podemos conectarnos a tu equipo de forma
                        remota mediante TeamViewer.
                      </p>
                    </div>
                  </div>
                  <div className="transition-all duration-1000 dark:bg-cyan-600 dark:hover:bg-cyan-800 bg-white hover:bg-azul  hover:shadow-xl m-2 p-4 relative z-40 group  ">
                    <div className="absolute dark:bg-white dark:group-hover:bg-cyan-600 bg-azul/80 top-0 left-0 w-24 h-1 z-30  transition-all duration-200 group-hover:bg-white group-hover:w-1/2  "></div>
                    <div className="py-2 px-9 relative  ">
                      <h3 className="mt-8 text-lg font-semibold text-grayDark group-hover:text-white dark:text-white">
                        Plataforma Web de Facturas Electrónicas
                      </h3>
                      <p className="mt-4 text-base text-grayDark dark:text-white group-hover:text-white">
                        MASYDASE cuenta con una plataforma web en donde el
                        cliente podrá consultar y descargar sus facturas
                        electrónicas.
                      </p>
                    </div>
                  </div>
                </div>
              </MotionTransition>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
