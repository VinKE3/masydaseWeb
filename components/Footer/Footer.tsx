"use client";
import Image from "next/image";
import { Reveal } from "../Reveal";
import { footerSocialNetworks } from "./Footer.data";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  const copyright = year > 1998 ? `1998 - ${year}` : "2024";

  return (
    <footer className="relative dark:bg-black bg-slate-100" id="footer">
      <div className=" py-4">
        <div className="container px-6 md:px-4 mx-auto">
          <div className="-mx-4 flex flex-wrap justify-between">
            <div className="px-4 my-4 w-full xl:w-1/5">
              <div className="mb-6">
                <Image
                  src="/assets/logo2.png"
                  width={200}
                  height={40}
                  alt="Logo MasyDase"
                />
              </div>
              <Reveal>
                <p className="text-base text-grayDark dark:text-primaryDark">
                  Somos un equipo joven dedicado a la programación de sistemas
                  convertidas en soluciones, y que brinda soporte técnico a más
                  de 350 empresas nacionales, desde 1998.
                </p>
              </Reveal>
            </div>

            <div className="px-4 my-4 w-full sm:w-auto">
              <div>
                <h2 className="inline-block text-2xl pb-4 mb-4 dark:pb-4 dark:mb-4 border-b-4 dark:border-white border-grayDark from-primary to-blue bg-gradient-to-r bg-clip-text text-transparent dark:bg-blueRadial degradedBlue">
                  Contacto
                </h2>
              </div>
              <div className="flex flex-col text-grayDark dark:text-primaryDark ">
                <div className="flex gap-2 ">
                  <Reveal>
                    <a
                      href="tel:850-123-5021"
                      aria-label="Our phone"
                      title="Our phone"
                      className="transition-colors duration-300 dark:hover:text-white hover:text-blue"
                    >
                      (+51)987351513
                    </a>
                    <span>/</span>
                    <a
                      href="tel:850-123-5021"
                      aria-label="Our phone"
                      title="Our phone"
                      className="transition-colors duration-300 dark:hover:text-white hover:text-blue"
                    >
                      (+51)984799203
                    </a>
                  </Reveal>
                </div>
                <div className="flex gap-2">
                  <Reveal>
                    <a
                      href="tel:850-123-5021"
                      aria-label="Our phone"
                      title="Our phone"
                      className="transition-colors duration-300 dark:hover:text-white hover:text-blue"
                    >
                      (01)2873208
                    </a>
                    <span>/</span>
                    <a
                      href="tel:850-123-5021"
                      aria-label="Our phone"
                      title="Our phone"
                      className="transition-colors duration-300 dark:hover:text-white hover:text-blue"
                    >
                      (01)7765066
                    </a>
                  </Reveal>
                </div>
              </div>
              <div className="flex flex-col text-gray dark:text-primaryDark">
                <Reveal>
                  <a
                    href="mailto:ventas@masydase.com"
                    aria-label="ventasMail"
                    title="ventasMail"
                    className="transition-colors duration-300 dark:hover:text-white hover:text-blue"
                  >
                    ventas@masydase.com
                  </a>
                </Reveal>
                <Reveal>
                  {" "}
                  <a
                    href="mailto:sistemas@masydase.com"
                    aria-label="sistemasMail"
                    title="sistemasMail"
                    className="transition-colors duration-300 dark:hover:text-white hover:text-blue"
                  >
                    sistemas@masydase.com
                  </a>
                </Reveal>
                <Reveal>
                  <a
                    href="mailto:info@lorem.mail"
                    aria-label="infoMail"
                    title="infoMail"
                    className="transition-colors duration-300 dark:hover:text-white hover:text-blue"
                  >
                    info@masydase.com
                  </a>
                </Reveal>
              </div>
            </div>
            <div className="px-4 my-4 w-full sm:w-auto">
              <div>
                <h2 className="inline-block text-2xl pb-4 mb-4 dark:pb-4 dark:mb-4 border-b-4 dark:border-white border-grayDark from-primary to-blue bg-gradient-to-r bg-clip-text text-transparent dark:bg-blueRadial degradedBlue">
                  Soluciones de Negocios
                </h2>
              </div>
              <div className="flex gap-6">
                <div className="flex flex-col text-grayDark dark:text-primaryDark">
                  <Reveal>
                    {" "}
                    <p className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
                      E - MASY Comercials.
                    </p>
                  </Reveal>
                  <Reveal>
                    {" "}
                    <p className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
                      E - MASY Farma.
                    </p>
                  </Reveal>
                  <Reveal>
                    {" "}
                    <p className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
                      E - MASY Market.
                    </p>
                  </Reveal>
                  <Reveal>
                    {" "}
                    <p className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
                      Utilcon 2020.02.
                    </p>
                  </Reveal>
                </div>
                <div className="flex flex-col text-grayDark dark:text-primaryDark">
                  <div className="flex flex-col">
                    <Reveal>
                      {" "}
                      <p className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
                        Diseño Web.
                      </p>
                    </Reveal>
                    <Reveal>
                      {" "}
                      <p className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
                        Alojamiento CLOUD.
                      </p>
                    </Reveal>
                    <Reveal>
                      <p className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
                        Consultoría y Auditoría.
                      </p>
                    </Reveal>
                    <Reveal>
                      <p className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
                        Outsourcing contable.
                      </p>
                    </Reveal>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
              <div>
                <h2 className="inline-block text-2xl pb-4 mb-4 dark:pb-4 dark:mb-4 border-b-4 dark:border-white border-grayDark from-primary to-blue bg-gradient-to-r bg-clip-text text-transparent dark:bg-blueRadial degradedBlue">
                  Contactanos en Redes
                </h2>
              </div>
              <Reveal>
                <div className="flex gap-5 text-grayDark dark:text-primaryDark">
                  {footerSocialNetworks.map(({ id, icon, link }) => (
                    <Link
                      key={id}
                      href={link}
                      className="text-2xl transition-colors duration-300 dark:hover:text-white hover:text-blue"
                    >
                      {icon}
                    </Link>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 text-gray-100">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap justify-between">
            <Reveal>
              <div className="px-4 w-full text-center sm:w-auto sm:text-left text-base text-grayDark dark:text-primaryDark">
                Copyright © {copyright} MasyDase. All Rights Reserved.
              </div>
            </Reveal>

            <div className="flex items-center justify-center px-4 w-full text-center sm:w-auto sm:text-left gap-2">
              <div>Made with ❤️ by </div>
              <Reveal>
                <span className="from-primary to-blue bg-gradient-to-r bg-clip-text text-transparent dark:bg-blueRadial degradedBlue">
                  VinKE.
                </span>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
