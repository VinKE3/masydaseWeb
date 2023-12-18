import Image from "next/image";
import { Reveal } from "../Reveal";
import { footerData, footerSocialNetworks } from "./Footer.data";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  const copyright = year > 2020 ? `2020 - ${year}` : "2020";

  return (
    <>
      <footer>
        <div className="bg-gray-800 py-4 text-gray-400">
          <div className="container px-4 mx-auto">
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
                <p className="text-base text-grayDark dark:text-primaryDark">
                  Somos un equipo joven dedicado a la programación de sistemas
                  convertidas en soluciones, y que brinda soporte técnico a más
                  de 350 empresas nacionales, desde 1998.
                </p>
              </div>

              <div className="px-4 my-4 w-full sm:w-auto">
                <div>
                  <h2 className="inline-block text-2xl pb-4 mb-4 dark:pb-4 dark:mb-4 border-b-4 dark:border-white border-grayDark from-primary to-blue bg-gradient-to-r bg-clip-text text-transparent dark:bg-blueRadial degradedBlue">
                    Contacto
                  </h2>
                </div>
                <div className="flex flex-col text-grayDark dark:text-primaryDark">
                  <div className="flex gap-2">
                    <a
                      href="tel:850-123-5021"
                      aria-label="Our phone"
                      title="Our phone"
                      className="transition-colors duration-300"
                    >
                      (+51)987351513
                    </a>
                    <span>/</span>
                    <a
                      href="tel:850-123-5021"
                      aria-label="Our phone"
                      title="Our phone"
                      className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                      (+51)984799203
                    </a>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="tel:850-123-5021"
                      aria-label="Our phone"
                      title="Our phone"
                      className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                      (01)2873208
                    </a>
                    <span>/</span>
                    <a
                      href="tel:850-123-5021"
                      aria-label="Our phone"
                      title="Our phone"
                      className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                      (01)7765066
                    </a>
                  </div>
                </div>
                <div className="flex flex-col text-gray dark:text-primaryDark">
                  <a
                    href="mailto:ventas@masydase.com"
                    aria-label="ventasMail"
                    title="ventasMail"
                    className="transition-colors duration-300 "
                  >
                    ventas@masydase.com
                  </a>
                  <a
                    href="mailto:sistemas@masydase.com"
                    aria-label="sistemasMail"
                    title="sistemasMail"
                    className="transition-colors duration-300 "
                  >
                    sistemas@masydase.com
                  </a>
                  <a
                    href="mailto:info@lorem.mail"
                    aria-label="infoMail"
                    title="infoMail"
                    className="transition-colors duration-300 "
                  >
                    info@masydase.com
                  </a>
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
                    <p className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
                      E - MASY Comercials.
                    </p>
                    <p className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
                      E - MASY Farma.
                    </p>
                    <p className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
                      E - MASY Market.
                    </p>
                    <p className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
                      Utilcon 2020.02.
                    </p>
                  </div>
                  <div className="flex flex-col text-grayDark dark:text-primaryDark">
                    <div className="flex flex-col">
                      <p className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
                        Diseño Web.
                      </p>
                      <p className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
                        Alojamiento CLOUD.
                      </p>
                      <p className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
                        Consultoría y Auditoría.
                      </p>
                      <p className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
                        Outsourcing contable.
                      </p>
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
                <div className="flex gap-5">
                  {footerSocialNetworks.map(({ id, icon, link }) => (
                    <Link key={id} href={link} className="text-2xl">
                      {icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-4 text-gray-100">
          <div className="container mx-auto px-4">
            <div className="-mx-4 flex flex-wrap justify-between">
              <div className="px-4 w-full text-center sm:w-auto sm:text-left">
                Copyright © {copyright} MasyDase. All Rights Reserved.
              </div>
              <div className="px-4 w-full text-center sm:w-auto sm:text-left">
                Made with ❤️ by{" "}
                <span className="from-primary to-blue bg-gradient-to-r bg-clip-text text-transparent dark:bg-blueRadial degradedBlue">
                  VinKE
                </span>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
