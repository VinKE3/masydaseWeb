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
      <div className="p-2 mx-auto mb-0 text-center lg:mb-4">
        <div className="flex justify-center">
          <Reveal>
            <h1 className="mb-4 py-2 text-4xl md:text-5xl font-bold from-primary to-azul bg-gradient-to-r bg-clip-text text-transparent text-azul block dark:bg-blueRadial degradedBlue">
              Soluciones de Negocio
            </h1>
          </Reveal>
        </div>
        <div className="flex justify-center">
          <Reveal>
            <p className="mb-5 font-semibold text-grayDark dark:bg-blueLight degradedBlue sm:text-xl">
              Llegamos para hacerte la vida más fácil
            </p>
          </Reveal>
        </div>
        <div className="flex justify-center mb-20">
          <Reveal>
            <p className="text-grayDark dark:text-primaryDark">
              Todo lo que necesitas para tu negocio, en un solo lugar y con el{" "}
              <br /> respaldo de MasyDase.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mt-10 flex flex-col-reverse max-w-7xl mx-auto md:flex-row place-content-evenly">
        <MotionTransition className="flex-1 p-6 md:p-8">
          <Image
            src="/assets/consultoria.png"
            alt="consultoria"
            width="480"
            height={411}
            className="w-full h-auto"
          />
        </MotionTransition>
        <div className="flex flex-col items-center justify-center p-6 md:p-8">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-semibold dark:text-white text-grayDark text-center">
              Consultoría y auditoría
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
      <div className="flex flex-col-reverse max-w-7xl mx-auto md:flex-row place-content-evenly mt-10">
        <MotionTransition className="flex-1 p-6 md:p-8">
          <Image
            src="/assets/outsor.png"
            alt="outsor"
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
      <div className="flex flex-col-reverse max-w-7xl mx-auto md:flex-row place-content-evenly mt-|0">
        <MotionTransition className="flex-1 p-6 md:p-8">
          <Image
            src="/assets/cloud3.png"
            alt="cloud"
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
      <div className="flex flex-col-reverse max-w-7xl mx-auto md:flex-row place-content-evenly mt-10">
        <MotionTransition className="flex-1 p-6 md:p-8">
          <Image
            src="/assets/vpss.png"
            alt="vps"
            width="480"
            height={411}
            className="w-full h-auto"
          />
        </MotionTransition>
        <div className="flex flex-col items-center justify-center p-6 md:p-8">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-semibold dark:text-white text-grayDark text-center">
              Servidor <br />
              VPS
            </h2>
          </Reveal>
          <Reveal>
            <p className="max-w-md mt-10 text-grayDark dark:text-primaryDark text-center">
              Ofrecemos un servicio VPS con un rendimiento superior respaldado
              por servidores potentes y recursos de calidad, garantiza un tiempo
              de actividad del 99.9%, proporcionamos una interfaz fácil de usar
              y soporte técnico garantizado. Destacamos por las medidas de
              seguridad avanzadas, opciones de escalabilidad y tarifas
              competitivas. Implementanmos mejoras constantes para mandatener a
              nuestros clientes satisfechos.
            </p>
          </Reveal>
        </div>
      </div>
      {/* <div className="flex flex-col-reverse max-w-7xl mx-auto md:flex-row place-content-evenly">
        <MotionTransition className="flex-1 p-6 md:p-8">
          <Image
            src="/assets/control-business.png"
            alt="diseñoWeb"
            width="480"
            height={411}
            className="w-full h-auto"
          />
        </MotionTransition>
        <div className="flex flex-col items-center justify-center p-6 md:p-8">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-semibold dark:text-white text-grayDark text-center py-2">
              Diseño y desarrollo <br />
              de páginas web
            </h2>
          </Reveal>
          <Reveal>
            <p className="max-w-md mt-10 text-grayDark dark:text-primaryDark text-center">
              MASYDASE fusiona la creatividad y la funcionalidad para ofrecerte
              una presencia digital única y efectiva, nos destacamos por nuestra
              dedicación a la excelencia y la personalización. Nuestro equipo de
              expertos no solo posee habilidades técnicas avanzadas, sino que
              también comprende la importancia de plasmar la identidad y visión
              de tu marca en cada línea de código y diseño. Desde sitios web
              elegantes y minimalistas hasta plataformas interactivas y
              completamente personalizadas, nos esforzamos por superar tus
              expectativas y destacar tu negocio en línea. Confía en nosotros
              para convertir tu visión en una experiencia digital cautivadora y
              funcional.
            </p>
          </Reveal>
        </div>
      </div> */}
    </div>
  );
}
