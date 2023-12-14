"use client";

import Image from "next/image";
import { MotionTransition } from "../MotionTransition";
import { Reveal } from "../Reveal";

export function Services() {
  return (
    <div className="p-4 py-20 md:py-64" id="services">
      <h2 className="text-5xl font-bold text-center text-gray-600 block dark:bg-blueRadial degradedBlue mb-24">
        Soluciones de Negocio
      </h2>
      <div className="flex flex-col-reverse max-w-5xl mx-auto md:flex-row place-content-evenly">
        <MotionTransition className="flex-1 p-6 md:p-8">
          <Image
            src="/assets/consultoria.png"
            alt="Control Business"
            width="580"
            height={411}
            className="w-full h-auto"
          />
        </MotionTransition>
        <div className="flex-1 p-6 md:p-8">
          <Reveal>
            <h2 className="text-5xl font-semibold dark:bg-blueRadial degradedBlue text-gray-600">
              Consultoría <br />y auditoría
            </h2>
          </Reveal>
          <Reveal>
            <p className="max-w-md mt-10 text-gray-500 dark:text-primaryDark">
              Nuestro servicio de auditoría a los estados financieros tiene como
              propósito emitir opinión sobre la razonabilidad de los estados
              financieros. Complementamos nuestra revisión con un exhaustivo
              análisis contable, financiero y fiscal de las operaciones. Nuestro
              servicio siempre va acompañado de un Informe de Control Interno.
            </p>
          </Reveal>
        </div>
      </div>
      <div className="flex flex-col-reverse max-w-5xl mx-auto md:flex-row place-content-evenly">
        <MotionTransition className="flex-1 p-6 md:p-8">
          <Image
            src="/assets/outsor.png"
            alt="Control Business"
            width="580"
            height={411}
            className="w-full h-auto"
          />
        </MotionTransition>
        <div className="flex-1 p-6 md:p-8">
          <Reveal>
            <h2 className="text-5xl font-semibold dark:bg-blueRadial degradedBlue text-gray-600">
              Outsourcing <br />
              contable
            </h2>
          </Reveal>
          <Reveal>
            <p className="max-w-md mt-10 text-gray-500 dark:text-primaryDark">
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
      <div className="flex flex-col-reverse max-w-5xl mx-auto md:flex-row place-content-evenly">
        <MotionTransition className="flex-1 p-6 md:p-8">
          <Image
            src="/assets/cloud2.png"
            alt="Control Business"
            width="580"
            height={411}
            className="w-full h-auto"
          />
        </MotionTransition>
        <div className="flex-1 p-6 md:p-8">
          <Reveal>
            <h2 className="text-5xl font-semibold dark:bg-blueRadial degradedBlue text-gray-600">
              Alojamiento <br />
              CLOUD
            </h2>
          </Reveal>
          <Reveal>
            <p className="max-w-md mt-10 text-gray-500 dark:text-primaryDark">
              Los planes que te ofrecemos, permite que tu nube sea monitoreado
              por varios usuarios. La plataforma Cloud Storage, agiliza el
              almacenamiento de archivos, bases de datos y sistemas, con la
              ciberseguridad que solo MASYDASE te ofrece.
            </p>
          </Reveal>
        </div>
      </div>
      <div className="flex flex-col-reverse max-w-5xl mx-auto md:flex-row place-content-evenly">
        <MotionTransition className="flex-1 p-6 md:p-8">
          <Image
            src="/assets/control-business.png"
            alt="Control Business"
            width="580"
            height={411}
            className="w-full h-auto"
          />
        </MotionTransition>
        <div className="flex-1 p-6 md:p-8">
          <Reveal>
            <h2 className="text-5xl font-semibold dark:bg-blueRadial degradedBlue text-gray-600">
              Diseño y desarrollo <br />
              de páginas web
            </h2>
          </Reveal>
          <Reveal>
            <p className="max-w-md mt-10 text-gray-500 dark:text-primaryDark">
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
