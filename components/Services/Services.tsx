"use client";

import Image from "next/image";
import { MotionTransition } from "../MotionTransition";
import { Reveal } from "../Reveal";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BackgroundRadialRight } from "../BackgroundRadialRight";

export function Services() {
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
    <div className="relative p-4 py-20 md:py-64" id="services">
      {isDark && <BackgroundRadialRight />}
      <h2 className="text-4xl md:text-5xl py-2 font-bold text-center from-primary to-blue bg-gradient-to-r bg-clip-text text-transparent text-blue block dark:bg-blueRadial degradedBlue mb-3 md:mb-24">
        Soluciones de Negocio
      </h2>
      <div className="mt-10 flex flex-col-reverse max-w-7xl mx-auto md:flex-row place-content-evenly">
        <MotionTransition className="flex-1 p-6 md:p-8">
          <Image
            src="/assets/consultoria.png"
            alt="Control Business"
            width="480"
            height={411}
            className="w-full h-auto"
          />
        </MotionTransition>
        <div className="flex flex-col items-center justify-center p-6 md:p-8">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-semibold dark:text-white text-grayDark text-center">
              Consultoría <br />y auditoría
            </h2>
          </Reveal>
          <Reveal>
            <p className="max-w-md mt-10 text-grayDark dark:text-primaryDark text-center">
              Nuestro servicio de auditoría a los estados financieros tiene como
              propósito emitir opinión sobre la razonabilidad de los estados
              financieros. Complementamos nuestra revisión con un exhaustivo
              análisis contable, financiero y fiscal de las operaciones. Nuestro
              servicio siempre va acompañado de un Informe de Control Interno.
            </p>
          </Reveal>
        </div>
      </div>
      <div className="flex flex-col-reverse max-w-7xl mx-auto md:flex-row place-content-evenly">
        <MotionTransition className="flex-1 p-6 md:p-8">
          <Image
            src="/assets/outsor.png"
            alt="Control Business"
            width="480"
            height={411}
            className="w-full h-auto"
          />
        </MotionTransition>
        <div className="flex flex-col items-center justify-center p-6 md:p-8">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-semibold dark:text-white text-grayDark text-center">
              Outsourcing <br />
              contable
            </h2>
          </Reveal>
          <Reveal>
            <p className="max-w-md mt-10 text-grayDark dark:text-primaryDark text-center">
              El Outsourcing Contable es una moderna herramienta de
              administración, que permite a nuestra firma trabajar en conjunto
              con nuestros socios, dejando en manos de especialistas con
              experiencia, sus procesos administrativos y contables. Entregando
              confianza en la toma de decisiones y permitiéndole focalizar su
              tiempo y recursos en las actividades de mayor valor para su
              negocio.
            </p>
          </Reveal>
        </div>
      </div>
      <div className="flex flex-col-reverse max-w-7xl mx-auto md:flex-row place-content-evenly">
        <MotionTransition className="flex-1 p-6 md:p-8">
          <Image
            src="/assets/cloud2.png"
            alt="Control Business"
            width="480"
            height={411}
            className="w-full h-auto"
          />
        </MotionTransition>
        <div className="flex flex-col items-center justify-center p-6 md:p-8">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-semibold dark:text-white text-grayDark text-center">
              Alojamiento <br />
              CLOUD
            </h2>
          </Reveal>
          <Reveal>
            <p className="max-w-md mt-10 text-grayDark dark:text-primaryDark text-center">
              Los planes que te ofrecemos, permite que tu nube sea monitoreado
              por varios usuarios. La plataforma Cloud Storage, agiliza el
              almacenamiento de archivos, bases de datos y sistemas, con la
              ciberseguridad que solo MASYDASE te ofrece.
            </p>
          </Reveal>
        </div>
      </div>
      <div className="flex flex-col-reverse max-w-7xl mx-auto md:flex-row place-content-evenly">
        <MotionTransition className="flex-1 p-6 md:p-8">
          <Image
            src="/assets/control-business.png"
            alt="Control Business"
            width="480"
            height={411}
            className="w-full h-auto"
          />
        </MotionTransition>
        <div className="flex flex-col items-center justify-center p-6 md:p-8">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-semibold dark:text-white text-grayDark text-center">
              Diseño y desarrollo <br />
              de páginas web
            </h2>
          </Reveal>
          <Reveal>
            <p className="max-w-md mt-10 text-grayDark dark:text-primaryDark text-center">
              Los planes que te ofrecemos, permite que tu nube sea monitoreado
              por varios usuarios. La plataforma Cloud Storage, agiliza el
              almacenamiento de archivos, bases de datos y sistemas, con la
              ciberseguridad que solo MASYDASE te ofrece.
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
