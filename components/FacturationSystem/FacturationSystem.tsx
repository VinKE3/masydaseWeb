"use client";
import { BackgroundRadialRight } from "../BackgroundRadialRight";
import { MotionTransition } from "../MotionTransition";
import { Reveal } from "../Reveal";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/3dCard/3d-card";
import Image from "next/image";

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
          <section className="grid lg:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-10 md:gap-40">
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  Sistema de Integración ERP
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Para empresas con sistema de facturación que quieran potenciar
                  sus procesos de emisión de comprobantes electrónicos.
                </CardItem>
                <CardItem
                  translateZ="100"
                  rotateX={20}
                  rotateZ={-10}
                  className="w-full mt-4"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  Sistema de Facturación Electrónica Web
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Para empresas que no tienen sistema de facturación, tenemos la
                  solución perfecta que se adapta a sus necesidades.
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  Sistema de Gestión Comercial
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Para empresas que quieran agilizar sus procesos de gestión de
                  ventas, de forma rápida y eficiente con un sistema de fácil
                  manejo.
                </CardItem>
                <CardItem
                  translateZ="100"
                  rotateX={20}
                  rotateZ={10}
                  className="w-full mt-4"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </section>
        </MotionTransition>
      </section>
    </div>
  );
}
