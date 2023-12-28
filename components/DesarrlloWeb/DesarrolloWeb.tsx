"use client";

import { Reveal } from "../Reveal";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BackgroundRadialLeft } from "../BackgroundRadialLeft";

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
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-3xl xl:text-4xl mb-6 font-bold from-primary to-azul bg-gradient-to-r bg-clip-text text-transparent text-azul block dark:bg-blueRadial degradedBlue">
          Desarrollo Web
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="mr-0 md:mr-8 mb-6 md:mb-0">
            <Image
              className="w-1/2 md:w-full mx-auto"
              src="/assets/dw.png"
              alt="can_help_banner"
              width="400"
              height="400"
            />
          </div>
          <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-cyan-800 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="mb-5 text-2xl font-semibold text-grayDark dark:bg-blueLight degradedBlue">
                  Responsive Design
                </h3>
                <p className="text-base text-grayDark dark:text-primaryDark">
                  La capacidad de adaptarse a diferentes tamaños de pantalla y
                  dispositivos, garantizando una experiencia de usuario
                  consistente.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-cyan-800 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="mb-5 text-2xl font-semibold text-grayDark dark:bg-blueLight degradedBlue">
                  Seguridad
                </h3>
                <p className="text-base text-grayDark dark:text-primaryDark">
                  Implementación de medidas de seguridad, como certificados SSL,
                  para proteger la información del usuario y garantizar la
                  integridad del sitio.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-cyan-800 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="mb-5 text-2xl font-semibold text-grayDark dark:bg-blueLight degradedBlue">
                  Optimización para Motores de Búsqueda (SEO)
                </h3>
                <p className="text-base text-grayDark dark:text-primaryDark">
                  Integración de prácticas de SEO para mejorar la visibilidad en
                  los motores de búsqueda y aumentar el tráfico orgánico.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-cyan-800 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="mb-5 text-2xl font-semibold text-grayDark dark:bg-blueLight degradedBlue">
                  Interactividad y Experiencia del Usuario (UX)
                </h3>
                <p className="text-base text-grayDark dark:text-primaryDark">
                  Enfoque en la creación de interfaces atractivas y la mejora de
                  la experiencia del usuario a través de interactividad y
                  navegación intuitiva.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-32">
        <h1 className="text-center text-3xl xl:text-4xl mb-6 font-bold from-primary to-azul bg-gradient-to-r bg-clip-text text-transparent text-azul block dark:bg-blueRadial degradedBlue">
          Hosting
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="mr-0 md:mr-8 mb-6 md:mb-0">
            <Image
              className="w-1/2 md:w-full mx-auto"
              src="/assets/hosting.png"
              alt="can_help_banner"
              width="400"
              height="400"
            />
          </div>
          <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-cyan-800 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="mb-5 text-2xl font-semibold text-grayDark dark:bg-blueLight degradedBlue">
                  Fiabilidad y Disponibilidad
                </h3>
                <p className="text-base text-grayDark dark:text-primaryDark">
                  Garantizar una alta disponibilidad del servidor y un tiempo de
                  actividad confiable para que el sitio esté accesible en todo
                  momento.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-cyan-800 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="mb-5 text-2xl font-semibold text-grayDark dark:bg-blueLight degradedBlue">
                  Rendimiento y Velocidad
                </h3>
                <p className="text-base text-grayDark dark:text-primaryDark">
                  Proporcionar recursos suficientes y optimización para
                  garantizar tiempos de carga rápidos y un rendimiento eficiente
                  del sitio.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-cyan-800 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="mb-5 text-2xl font-semibold text-grayDark dark:bg-blueLight degradedBlue">
                  Soporte Técnico
                </h3>
                <p className="text-base text-grayDark dark:text-primaryDark">
                  Ofrecer un equipo de soporte técnico eficiente y disponible
                  las 24 horas para abordar problemas y consultas de los
                  clientes.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-cyan-800 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="mb-5 text-2xl font-semibold text-grayDark dark:bg-blueLight degradedBlue">
                  Escalabilidad
                </h3>
                <p className="text-base text-grayDark dark:text-primaryDark">
                  La capacidad de escalar los recursos del servidor según sea
                  necesario para manejar el crecimiento del tráfico y la demanda
                  del sitio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-32">
        <h1 className="text-center text-3xl xl:text-4xl mb-6 font-bold from-primary to-azul bg-gradient-to-r bg-clip-text text-transparent text-azul block dark:bg-blueRadial degradedBlue">
          Dominio
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="mr-0 md:mr-8 mb-6 md:mb-0">
            <Image
              className="w-1/2 md:w-full mx-auto"
              src="/assets/dom.png"
              alt="can_help_banner"
              width="400"
              height="400"
            />
          </div>
          <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-cyan-800 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="mb-5 text-2xl font-semibold text-grayDark dark:bg-blueLight degradedBlue">
                  Registro y Renovación Sencilla
                </h3>
                <p className="text-base text-grayDark dark:text-primaryDark">
                  Proceso fácil y transparente para registrar y renovar nombres
                  de dominio, evitando complicaciones administrativas
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-cyan-800 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="mb-5 text-2xl font-semibold text-grayDark dark:bg-blueLight degradedBlue">
                  Privacidad del Dominio (Whois Privacy)
                </h3>
                <p className="text-base text-grayDark dark:text-primaryDark">
                  Ofrecer opciones de privacidad del dominio para proteger la
                  información personal del propietario del dominio en las
                  consultas Whois.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-cyan-800 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="mb-5 text-2xl font-semibold text-grayDark dark:bg-blueLight degradedBlue">
                  Transferibilidad
                </h3>
                <p className="text-base text-grayDark dark:text-primaryDark">
                  Facilitar el proceso de transferir el dominio a otro
                  registrador si el cliente así lo desea, brindando flexibilidad
                  y control.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-cyan-800 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="mb-5 text-2xl font-semibold text-grayDark dark:bg-blueLight degradedBlue">
                  Gestión de DNS
                </h3>
                <p className="text-base text-grayDark dark:text-primaryDark">
                  Proporcionar herramientas intuitivas para la gestión de
                  registros DNS, permitiendo a los usuarios controlar la
                  configuración de su dominio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
