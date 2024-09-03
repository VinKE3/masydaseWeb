"use client";
import { BackgroundRadialRight } from "../BackgroundRadialRight";
import { MotionTransition } from "../MotionTransition";
import { Reveal } from "../Reveal";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function FacturationSystem() {
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
      className={`${isDark ? "" : ""} relative px-6 py-20 md:py-64`}
      id="facturacion"
    >
      <section className="container mx-auto antialiased px-6">
        {isDark && <BackgroundRadialRight />}
        <div className="p-2 mx-auto mb-8 text-center lg:mb-12">
          <div className="flex justify-center">
            <Reveal>
              <h1 className="mb-4 text-4xl md:text-5xl font-bold from-primary to-azul bg-gradient-to-r bg-clip-text text-transparent text-azul block dark:bg-blueRadial degradedBlue">
                Soluciones de Facturación Electrónica
              </h1>
            </Reveal>
          </div>
          <div className="flex justify-center">
            <Reveal>
              <p className="mb-5 font-semibold text-grayDark dark:bg-blueLight degradedBlue sm:text-xl">
                UBL 2.1 – OSE NUBEFACT – LLAMA.PE
              </p>
            </Reveal>
          </div>
          <div className="flex justify-center mb-20">
            <Reveal>
              <p className="text-grayDark dark:text-primaryDark">
                Te asesoramos siempre y agilizamos tu gestión empresarial con
                sistemas simples de integrar de fácil manejo.
              </p>
            </Reveal>
          </div>
        </div>
        <MotionTransition>
          <section className="grid lg:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-20 md:gap-40">
            <article
              className="mx-auto max-w-sm shadow-xl bg-cover bg-center transform duration-500 hover:-translate-y-2 cursor-pointer group"
              style={{
                backgroundImage: "url(/assets/erp.jpg)",
              }}
            >
              <div className="bg-black bg-opacity-60 min-h-150 px-10 flex flex-wrap flex-col pt-64 hover:bg-opacity-80 transform duration-300">
                <h1 className="text-white dark:bg-blueLight degradedBlue font-bold text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                  Sistema de Integración
                  <br />
                  ERP
                </h1>
                <div className="w-16 h-2 bg-primary dark:bg-secondary rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300"></div>
                <p className="opacity-0 mb-5 text-white text-xl group-hover:opacity-80 transform duration-500">
                  Para empresas con sistema de facturación que quieran potenciar
                  sus procesos de emisión de comprobantes electrónicos.
                </p>
              </div>
            </article>
            <article
              className="mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-150 transform duration-500 hover:-translate-y-2 cursor-pointer group"
              style={{
                backgroundImage: "url(/assets/sistema.jpg)",
              }}
            >
              <div className="bg-black bg-opacity-60 min-h-150 px-10 flex flex-wrap flex-col pt-64  hover:bg-opacity-80 transform duration-300 ">
                <h1 className="text-white dark:bg-blueLight degradedBlue font-bold text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                  Sistema de Facturación Electrónica Web
                </h1>
                <div className="w-16 h-2 bg-primary dark:bg-secondary rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300"></div>
                <p className="opacity-0 mb-5 text-white text-xl group-hover:opacity-80 transform duration-500">
                  Para empresas que no tienen sistema de facturación, tenemos la
                  solución perfecta que se adapta a sus necesidades.
                </p>
              </div>
            </article>
            <article
              className="mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-150 transform duration-500 hover:-translate-y-2 cursor-pointer group"
              style={{
                backgroundImage: "url(/assets/gestion.jpg)",
              }}
            >
              <div className="bg-black bg-opacity-60 min-h-150 px-10 flex flex-wrap flex-col pt-64  hover:bg-opacity-80 transform duration-300">
                <h1 className="text-white dark:bg-blueLight degradedBlue font-bold text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                  Sistema de <br /> Gestión <br /> Comercial
                </h1>
                <div className="w-16 h-2 bg-primary dark:bg-secondary rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300"></div>
                <p className="opacity-0 mb-5 text-white text-xl group-hover:opacity-80 transform duration-500">
                  Para empresas que quieran agilizar sus procesos de gestión de
                  ventas, de forma rápida y eficiente con un sistema de fácil
                  manejo.
                </p>
              </div>
            </article>
          </section>
        </MotionTransition>
      </section>
    </div>
  );
}
