"use client";

import Link from "next/link";
import { MotionTransition } from "../MotionTransition";
import { CheckIcon } from "./CheckIcon";
import { XIcon } from "./XIcon";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BackgroundRadialRight } from "../BackgroundRadialRight";
import { Reveal } from "../Reveal";

export function Plans() {
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
    <div className="relative px-6 py-20" id="planes">
      {isDark && <BackgroundRadialRight />}
      <div className="max-w-7xl mx-auto">
        <div className="p-2 mx-auto mb-0 text-center lg:mb-4">
          <div className="flex justify-center">
            <Reveal>
              <h1 className="mb-4 py-2 text-4xl md:text-5xl font-bold from-primary to-azul bg-gradient-to-r bg-clip-text text-transparent text-azul block dark:bg-blueRadial degradedBlue">
                Planes Empresariales
              </h1>
            </Reveal>
          </div>
          <div className="flex justify-center">
            <Reveal>
              <p className="mb-5 font-semibold text-grayDark dark:bg-blueLight degradedBlue sm:text-xl">
                Nos adaptamos a las necesidades de MYPES, PYMES y grandes
                empresas.
              </p>
            </Reveal>
          </div>
        </div>
        <MotionTransition>
          <section className="text-white body-font overflow-hidden">
            <div className=" px-5 py-12 mx-auto flex flex-wrap">
              <div className="flex w-full flex-wrap lg:border border-grayDark rounded-lg">
                <div className="lg:w-1/3 lg:mt-px w-full mb-10 lg:mb-0 border-2 border-grayDark lg:border-none rounded-lg lg:rounded-none">
                  <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
                    <h2 className="text-3xl md:text-4xl from-primary to-azul bg-gradient-to-r bg-clip-text text-transparent text-azul block dark:bg-blueRadial degradedBlue font-medium leading-none mb-4 mt-2">
                      Plan Básico
                    </h2>
                    <span className="text-sm text-grayDark dark:text-white">
                      Hasta 400 comprabantes al mes
                    </span>
                    <h2 className="text-3xl md:text-4xl from-primary to-azul bg-gradient-to-r bg-clip-text text-transparent text-azul dark:bg-blueRadial degradedBlue font-medium flex items-center justify-center leading-none mb-2 mt-6">
                      S/69.90
                      <span className="from-primary to-azul bg-gradient-to-r bg-clip-text text-transparent text-azul block dark:bg-blueRadial degradedBlue text-base ml-1">
                        /Mes
                      </span>
                    </h2>
                    <h5 className="text-grayDark underline dark:text-white text-xs">
                      No Incluye IGV
                    </h5>
                  </div>
                  <h1 className="text-center h-12 flex items-center justify-center">
                    <p className="dark:text-primaryDark text-grayDark px-2">
                      Facturas Electronicas
                    </p>
                    <CheckIcon />
                  </h1>
                  <h1 className="text-center h-12 flex items-center justify-center">
                    <p className="dark:text-primaryDark text-grayDark px-2">
                      Boletas de venta Electronicas
                    </p>
                    <CheckIcon />
                  </h1>
                  <h1 className="text-grayDark text-center h-12 flex items-center justify-center">
                    <p className="dark:text-primaryDark text-grayDark px-2">
                      Notas de Credito Electronicas
                    </p>
                    <CheckIcon />
                  </h1>
                  <h1 className="text-grayDark text-center h-12 flex items-center justify-center">
                    <p className="dark:text-primaryDark text-grayDark px-2">
                      Notas de Débito Electronicas
                    </p>
                    <CheckIcon />
                  </h1>
                  <h1 className="text-grayDark text-center h-12 flex items-center justify-center">
                    <p className="dark:text-primaryDark text-grayDark px-2">
                      Guias de Remision
                    </p>
                    <XIcon />
                  </h1>
                  <h1 className="text-grayDark text-center h-12 flex items-center justify-center">
                    <p className="dark:text-primaryDark text-grayDark px-2">
                      Certificado Digital
                    </p>
                    <XIcon />
                  </h1>
                </div>
                <div className="lg:w-1/3 lg:-mt-px w-full mb-10 lg:mb-0 border-grayDark dark:border-primaryDark border-2 rounded-lg relative">
                  <span className="bg-azul dark:bg-blueRadial text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                    POPULAR
                  </span>
                  <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
                    <h2 className="text-3xl md:text-4xl from-primary to-azul bg-gradient-to-r bg-clip-text text-transparent text-azul block dark:bg-blueRadial degradedBlue font-medium leading-none mb-4 mt-2">
                      Plan MYPE
                    </h2>
                    <span className="text-sm text-grayDark dark:text-white">
                      Hasta 1000 comprabantes al mes
                    </span>
                    <h2 className="text-3xl md:text-4xl from-primary to-azul bg-gradient-to-r bg-clip-text text-transparent text-azul dark:bg-blueRadial degradedBlue font-medium flex items-center justify-center leading-none mb-2 mt-6">
                      S/118
                      <span className="from-primary to-azul bg-gradient-to-r bg-clip-text text-transparent text-azul block dark:bg-blueRadial degradedBlue text-base ml-1">
                        /Mes
                      </span>
                    </h2>
                    <h5 className="text-grayDark underline dark:text-white text-xs">
                      Incluye IGV
                    </h5>
                  </div>
                  <h1 className="text-center h-12 flex items-center justify-center">
                    <p className="dark:text-primaryDark text-grayDark px-2">
                      Facturas Electronicas
                    </p>
                    <CheckIcon />
                  </h1>
                  <h1 className="text-center h-12 flex items-center justify-center">
                    <p className="dark:text-primaryDark text-grayDark px-2">
                      Boletas de venta Electronicas
                    </p>
                    <CheckIcon />
                  </h1>
                  <h1 className="text-grayDark text-center h-12 flex items-center justify-center">
                    <p className="dark:text-primaryDark text-grayDark px-2">
                      Notas de Credito Electronicas
                    </p>
                    <CheckIcon />
                  </h1>
                  <h1 className="text-grayDark text-center h-12 flex items-center justify-center">
                    <p className="dark:text-primaryDark text-grayDark px-2">
                      Notas de Débito Electronicas
                    </p>
                    <CheckIcon />
                  </h1>
                  <h1 className="text-grayDark text-center h-12 flex items-center justify-center">
                    <p className="dark:text-primaryDark text-grayDark px-2">
                      Guias de Remision
                    </p>
                    <XIcon />
                  </h1>
                  <h1 className="text-grayDark text-center h-12 flex items-center justify-center">
                    <p className="dark:text-primaryDark text-grayDark px-2">
                      Certificado Digital
                    </p>
                    <XIcon />
                  </h1>
                </div>
                <div className="lg:w-1/3 w-full lg:mt-px border-2 border-grayDark lg:border-none rounded-lg lg:rounded-none mb-5">
                  <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
                    <h2 className="text-3xl md:text-4xl from-primary to-azul bg-gradient-to-r bg-clip-text text-transparent text-azul block dark:bg-blueRadial degradedBlue font-medium leading-none mb-4 mt-2">
                      Plan Premium
                    </h2>
                    <span className="text-sm text-grayDark dark:text-white">
                      Comprobantes Ilimitados
                    </span>
                    <h2 className="text-3xl md:text-4xl from-primary to-azul bg-gradient-to-r bg-clip-text text-transparent text-azul dark:bg-blueRadial degradedBlue font-medium flex items-center justify-center leading-none mb-2 mt-6">
                      S/177
                      <span className="from-primary to-azul bg-gradient-to-r bg-clip-text text-transparent text-azul block dark:bg-blueRadial degradedBlue text-base ml-1">
                        /Mes
                      </span>
                    </h2>
                    <h5 className="text-grayDark underline dark:text-white text-xs">
                      Incluye IGV
                    </h5>
                  </div>
                  <h1 className="text-center h-12 flex items-center justify-center">
                    <p className="dark:text-primaryDark text-grayDark px-2">
                      Facturas Electronicas
                    </p>
                    <CheckIcon />
                  </h1>
                  <h1 className="text-center h-12 flex items-center justify-center">
                    <p className="dark:text-primaryDark text-grayDark px-2">
                      Boletas de venta Electronicas
                    </p>
                    <CheckIcon />
                  </h1>
                  <h1 className="text-grayDark text-center h-12 flex items-center justify-center">
                    <p className="dark:text-primaryDark text-grayDark px-2">
                      Notas de Credito Electronicas
                    </p>
                    <CheckIcon />
                  </h1>
                  <h1 className="text-grayDark text-center h-12 flex items-center justify-center">
                    <p className="dark:text-primaryDark text-grayDark px-2">
                      Notas de Débito Electronicas
                    </p>
                    <CheckIcon />
                  </h1>
                  <h1 className="text-grayDark text-center h-12 flex items-center justify-center">
                    <p className="dark:text-primaryDark text-grayDark px-2">
                      Guias de Remision
                    </p>
                    <CheckIcon />
                  </h1>
                  <h1 className="text-grayDark text-center h-12 flex items-center justify-center">
                    <p className="dark:text-primaryDark text-grayDark px-2">
                      Certificado Digital
                    </p>
                    <XIcon />
                  </h1>
                </div>
              </div>
            </div>
          </section>
          <div className="flex items-center justify-center h-full">
            <Link
              href="#contact"
              className="flex items-center justify-center mt-auto bg-primary hover:bg-azul  text-white dark:bg-blueRadial border-0 py-2 px-4 focus:outline-none rounded"
            >
              Consulta por tu plan
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
        </MotionTransition>
      </div>
    </div>
  );
}
