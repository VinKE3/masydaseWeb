import Image from "next/image";
import { Reveal } from "../Reveal";
import { footerData, footerSocialNetworks } from "./Footer.data";
import Link from "next/link";

export function Footer() {
  return (
    <>
      {/* <div className="max-w-5xl p-6 mx-auto mt-10 md:-mt-40">
        <div className="justify-between md:flex">
          <div>
            <Image
              src="/assets/logo2.png"
              width={200}
              height={40}
              alt="Logo Bank"
            />
            <Reveal>
              <p className="mt-5 text-gray-500 dark:text-primaryDark max-w-[250px]">
                Transformando ideas en soluciones agiles de confianza
              </p>
            </Reveal>
          </div>
          {footerData.map(({ id, title, links }) => (
            <div key={id}>
              <h4 className="mt-8 text-lg md:mt-0">
                <Reveal>{title}</Reveal>
              </h4>
              {links.map(({ id, name, link }) => (
                <Link
                  key={id}
                  href={link}
                  className="block mt-4 text-gray-500 hover:text-gray-700 dark:text-primaryDark dark:hover:text-white"
                >
                  <Reveal>{name}</Reveal>
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="border-[#3F3E45] border-[1px] my-7" />

        <div className="items-center justify-between md:flex">
          <div className="my-3">
            <Reveal>2023 MasyDase. All Rights Reserved.</Reveal>
          </div>
          <div className="flex gap-5">
            {footerSocialNetworks.map(({ id, icon, link }) => (
              <Link key={id} href={link} className="text-2xl">
                {icon}
              </Link>
            ))}
          </div>
        </div>
      </div> */}
      <div className="max-w-5xl p-6 mx-auto mt-10 md:-mt-40">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="sm:col-span-1">
            <Image
              src="/assets/logo2.png"
              width={200}
              height={40}
              alt="Logo Bank"
            />
            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm text-grayDark dark:text-primaryDark">
                Somos un equipo joven dedicado a la programación de sistemas
                convertidas en soluciones, y que brinda soporte técnico a más de
                350 empresas nacionales, desde 1998.
              </p>
            </div>
          </div>
          <div className="space-y-2 text-sm sm:col-span-1">
            <p className="text-base font-bold tracking-wide from-primary to-blue bg-gradient-to-r bg-clip-text text-transparent dark:bg-blueRadial degradedBlue">
              Contacto
            </p>
            <div className="flex flex-col text-grayDark dark:text-primaryDark">
              <div className="flex gap-2">
                <a
                  href="tel:850-123-5021"
                  aria-label="Our phone"
                  title="Our phone"
                  className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
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
                href="mailto:info@lorem.mail"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                ventas@masydase.com
              </a>
              <a
                href="mailto:info@lorem.mail"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                sistemas@masydase.com
              </a>
              <a
                href="mailto:info@lorem.mail"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                nfo@masydase.com
              </a>
            </div>
          </div>
          <div className="space-y-2 text-sm sm:col-span-1">
            <p className="text-base font-bold tracking-wide from-primary to-blue bg-gradient-to-r bg-clip-text text-transparent dark:bg-blueRadial degradedBlue">
              Soluciones de Negocios
            </p>
            <div className="flex gap-10">
              <div className="flex flex-col text-grayDark dark:text-primaryDark">
                <div className="flex flex-col">
                  <a
                    href="tel:850-123-5021"
                    aria-label="Our phone"
                    title="Our phone"
                    className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  >
                    E - MASY Comercials
                  </a>
                  <a
                    href="tel:850-123-5021"
                    aria-label="Our phone"
                    title="Our phone"
                    className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  >
                    E - MASY Farma
                  </a>
                  <a
                    href="tel:850-123-5021"
                    aria-label="Our phone"
                    title="Our phone"
                    className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  >
                    E - MASY Market
                  </a>
                  <a
                    href="tel:850-123-5021"
                    aria-label="Our phone"
                    title="Our phone"
                    className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  >
                    Utilcon 2020.02
                  </a>
                </div>
                <div></div>
              </div>
              <div className="flex flex-col text-grayDark dark:text-primaryDark">
                <div className="flex flex-col">
                  <a
                    href="tel:850-123-5021"
                    aria-label="Our phone"
                    title="Our phone"
                    className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  >
                    Diseño Web
                  </a>

                  <a
                    href="tel:850-123-5021"
                    aria-label="Our phone"
                    title="Our phone"
                    className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  >
                    Alojamiento CLOUD
                  </a>

                  <a
                    href="tel:850-123-5021"
                    aria-label="Our phone"
                    title="Our phone"
                    className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  >
                    Consultoría y Auditoría
                  </a>
                  <a
                    href="tel:850-123-5021"
                    aria-label="Our phone"
                    title="Our phone"
                    className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  >
                    Outsourcing contable
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-gray-600">
            © Copyright 2024 MasyDase. All rights reserved.
          </p>
          <div className="flex gap-5">
            {footerSocialNetworks.map(({ id, icon, link }) => (
              <Link key={id} href={link} className="text-2xl">
                {icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
