"use client";

import Image from "next/image";
import { MotionTransition } from "../MotionTransition";
import { Reveal } from "../Reveal";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BackgroundRadialRight } from "../BackgroundRadialRight";
import { Cloud, MonitorSmartphone, Search, Workflow } from "lucide-react";
import { CardServices } from "./CardServices/CardServices";
import { Star } from "lucide-react";
import { dataCardServices } from "./CardServices/CardServices.data";

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
      {/* <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
        <div className="w-full">
          <div className="flex flex-col w-full mb-10 sm:flex-row">
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <div className="relative h-full ml-0 mr-0 sm:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-sky-500 rounded-lg"></span>
                <div className="relative h-full p-5 bg-slate-100 border-2 border-sky-600 rounded-lg">
                  <div className="flex items-center -mt-1 gap-2">
                    <h3 className="my-2 ml-3 text-lg font-bold text-grayDark">
                      Consultoría y auditoría
                    </h3>
                    <Search className="text-sky-600" />
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-sky-600 uppercase">
                    ------------
                  </p>
                  <p className="mb-2 text-grayDark">
                    Nuestro servicio de auditoría a los estados financieros
                    tiene comopropósito emitir opinión sobre la razonabilidad de
                    los estadosfinancieros. Complementamos nuestra revisión con
                    un exhaustivoanálisis contable, financiero y fiscal de las
                    operaciones.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="relative h-full ml-0 md:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-sky-600 rounded-lg"></span>
                <div className="relative h-full p-5 bg-slate-100 border-2 border-sky-700 rounded-lg">
                  <div className="flex items-center -mt-1 gap-2">
                    <h3 className="my-2 ml-3 text-lg font-bold text-grayDark">
                      Outsourcing contable
                    </h3>
                    <Workflow className="text-sky-700" />
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-sky-700 uppercase">
                    ------------
                  </p>
                  <p className="mb-2 text-grayDark">
                    El Outsourcing Contable es una moderna herramienta de
                    administración, que permite a nuestra firma trabajar en
                    conjuntocon nuestros socios, dejando en manos de
                    especialistas conexperiencia, sus procesos administrativos y
                    contables.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mb-5 sm:flex-row">
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <div className="relative h-full ml-0 mr-0 sm:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-sky-700 rounded-lg"></span>
                <div className="relative h-full p-5 bg-slate-100 border-2 border-sky-800 rounded-lg">
                  <div className="flex items-center -mt-1 gap-2">
                    <h3 className="my-2 ml-3 text-lg font-bold text-grayDark">
                      Alojamiento Cloud
                    </h3>
                    <Cloud className="text-sky-800" />
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-sky-800 uppercase">
                    ------------
                  </p>
                  <p className="mb-2 text-gray-600">
                    Los planes que te ofrecemos, permite que tu nube sea
                    monitoreadopor varios usuarios. La plataforma Cloud Storage,
                    agiliza elalmacenamiento de archivos, bases de datos y
                    sistemas, con laciberseguridad que solo MASYDASE te ofrece.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="relative h-full ml-0 md:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-sky-800 rounded-lg"></span>
                <div className="relative h-full p-5 bg-slate-100 border-2 border-sky-900 rounded-lg">
                  <div className="flex items-center -mt-1 gap-2">
                    <h3 className="my-2 ml-3 text-lg font-bold text-grayDark">
                      Diseño y desarrollo de páginas web
                    </h3>
                    <MonitorSmartphone className="text-sky-900" />
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-sky-900 uppercase">
                    ------------
                  </p>
                  <p className="mb-2 text-gray-600">
                    Los planes que te ofrecemos, permite que tu nube sea
                    monitoreado por varios usuarios. La plataforma Cloud
                    Storage, agiliza el almacenamiento de archivos, bases de
                    datos y sistemas, con la ciberseguridad que solo MASYDASE te
                    ofrece.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="flex flex-wrap justify-center mt-10">
        {dataCardServices.map(({ id, icon, title, text }) => {
          return (
            <div className="" key={id}>
              <CardServices icon={icon} title={title} text={text} />
            </div>
          );
        })}
      </div> */}
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
            src="/assets/cloud3.png"
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
            <h2 className="text-3xl md:text-5xl font-semibold dark:text-white text-grayDark text-center py-2">
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
