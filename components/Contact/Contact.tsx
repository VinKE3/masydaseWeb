"use client";

import { MotionTransition } from "../MotionTransition";
import { FaPhoneAlt, FaClock } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BackgroundRadialLeft } from "../BackgroundRadialLeft";
export function Contact() {
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
    <div className="relative px-6 py-20 md:py-32" id="contact">
      {isDark && <BackgroundRadialLeft />}
      <div className="max-w-5xl mx-auto">
        <MotionTransition>
          <div className="my-12 mx-auto px-2 md:px-4">
            <section className="mb-32">
              <div className="flex justify-center">
                <div className="text-center md:max-w-xl lg:max-w-3xl">
                  <h2 className="mb-12 px-6 text-4xl md:text-5xl p-4 from-primary to-blue bg-gradient-to-r bg-clip-text text-transparent font-bold dark:bg-blueRadial degradedBlue">
                    Contactanos
                  </h2>
                </div>
              </div>
              <div className="flex flex-wrap">
                <form className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                  <div className="mb-3 w-full">
                    <label
                      className="block font-medium mb-[2px] text-grayDark dark:bg-blueRadial degradedBlue"
                      htmlFor="name"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="px-2 py-2 border w-full outline-none rounded-md dark:text-white text-gray-950"
                      id="name"
                      placeholder="Nombre"
                    />
                  </div>

                  <div className="mb-3 w-full">
                    <label
                      className="block font-medium mb-[2px] text-grayDark dark:bg-blueRadial degradedBlue"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="px-2 py-2 border w-full outline-none rounded-md dark:text-white text-gray-950"
                      id="email"
                      placeholder="Ingrese su email"
                    />
                  </div>

                  <div className="mb-3 w-full">
                    <label
                      className="block font-medium mb-[2px] text-grayDark dark:bg-blueRadial degradedBlue"
                      htmlFor="mensaje"
                    >
                      Mensaje
                    </label>
                    <textarea
                      className="px-2 py-2 border rounded-[5px] w-full outline-none dark:text-white text-gray-950"
                      name="mensaje"
                      id="mensaje"
                      placeholder="Ingrese su mensaje"
                    ></textarea>
                  </div>

                  <button
                    type="button"
                    className="mb-6 inline-block w-full rounded  dark:bg-blueRadial bg-primary hover:bg-blue px-6 py-2.5 font-medium uppercase leading-normal  text-white hover:shadow-md"
                  >
                    Enviar
                  </button>
                </form>

                <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                  <div className="flex flex-wrap">
                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                      <div className="flex items-start">
                        <div className="shrink-0">
                          <div className="inline-block rounded-md bg-teal-400-100 p-4 text-primary">
                            <FaPhoneAlt className="h-6 w-6" />
                          </div>
                        </div>
                        <div className="ml-6 grow">
                          <p className="mb-2 font-bold dark:text-white text-blue">
                            Soporte Tecnico
                          </p>
                          <p className="dark:text-primaryDark text-grayDark ">
                            (01)2873208
                          </p>
                          <p className="dark:text-primaryDark text-grayDark ">
                            (01)7765066
                          </p>
                          <p className="dark:text-primaryDark text-grayDark ">
                            (+51)987351513
                          </p>
                          <p className="dark:text-primaryDark text-grayDark ">
                            (+51)984799203
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                      <div className="flex items-start">
                        <div className="shrink-0">
                          <div className="inline-block rounded-md bg-teal-400-100 p-4 text-primary">
                            <IoHomeSharp className="h-6 w-6" />
                          </div>
                        </div>
                        <div className="ml-6 grow">
                          <p className="mb-2 font-bold dark:text-white text-blue">
                            Dirección
                          </p>
                          <p className="dark:text-primaryDark text-gray-500 ">
                            Villa el Salvador, Grupo 13 Mza. C Lote. 9 Sec. 3
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                      <div className="align-start flex">
                        <div className="shrink-0">
                          <div className="inline-block rounded-md bg-teal-400-100 p-4 text-primary">
                            <IoMdMail className="h-6 w-6" />
                          </div>
                        </div>
                        <div className="ml-6 grow">
                          <p className="mb-2 font-bold dark:text-white text-blue">
                            Emails
                          </p>
                          <div className="flex flex-col">
                            <a
                              href="mailto:ventas@masydase.com"
                              className="dark:text-primaryDark text-grayDark"
                            >
                              ventas@masydase.com
                            </a>
                            <a
                              href="mailto:soporte@masydase.com"
                              className="dark:text-primaryDark text-grayDark"
                            >
                              soporte@masydase.com
                            </a>
                            <a
                              href="mailto:info@masydase.com"
                              className="dark:text-primaryDark text-grayDark"
                            >
                              info@masydase.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                      <div className="align-start flex">
                        <div className="shrink-0">
                          <div className="inline-block rounded-md bg-teal-400-100 p-4 text-primary">
                            <FaClock className="h-6 w-6" />
                          </div>
                        </div>
                        <div className="ml-6 grow">
                          <p className="mb-2 font-bold dark:text-white text-blue">
                            Horario de atención
                          </p>
                          <p className="dark:text-primaryDark text-grayDark">
                            Lunes a Viernes: 9 am a 7 pm
                          </p>
                          <p className="dark:text-primaryDark text-grayDark">
                            Sábados: 9 am a 12 pm
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </MotionTransition>
      </div>
    </div>
  );
}
