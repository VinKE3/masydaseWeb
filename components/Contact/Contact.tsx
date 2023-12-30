"use client";
import { MotionTransition } from "../MotionTransition";
import { FaPhoneAlt, FaClock } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BackgroundRadialRight } from "../BackgroundRadialRight";
import { sendEmail } from "@/actions/sendEmail";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "@/validations/userSchema";

type inputs = {
  name: "";
  email: "";
  mensaje: "";
};

export function Contact() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [hasMounted, setHasMounted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    formState: { isSubmitSuccessful },
  } = useForm<inputs>({
    resolver: zodResolver(userSchema),
  });

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      const titulo = "Mensaje enviado correctamente";
      toast.success(titulo, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        toastId: "toastTipoCambio",
      });
    }
  }, [isSubmitSuccessful, reset]);

  if (!hasMounted) {
    return null;
  }

  const onSubmit: SubmitHandler<inputs> = async (data) => {
    // le paso los datos a la funcion que envia el email
    try {
      await sendEmail(data);
      // const titulo = "Mensaje enviado correctamente";
      // toast.success(titulo, {
      //   position: "bottom-right",
      //   autoClose: 3000,
      //   hideProgressBar: true,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "colored",
      //   toastId: "toastTipoCambio",
      // });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative px-6 py-20 md:py-32" id="contact">
      <ToastContainer />
      {isDark && <BackgroundRadialRight />}
      <div className="max-w-7xl mx-auto">
        <MotionTransition>
          <section className="mb-32">
            <div className="flex justify-center">
              <div className="text-center md:max-w-xl lg:max-w-3xl">
                <h2 className="mb-12 px-6 text-4xl md:text-5xl p-4 from-primary to-azul bg-gradient-to-r bg-clip-text text-transparent font-bold dark:bg-blueRadial degradedBlue">
                  Contactanos
                </h2>
              </div>
            </div>

            <div
              id="map"
              className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat"
            >
              <iframe
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=-12.214624850405903,%20-76.93663358688356+(masydase)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="100%"
                height="480"
                style={{
                  border: 0,
                }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div className="container px-6 md:px-12">
              <div className="block rounded-lg dark:bg-black bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-grayDark">
                <div className="flex flex-wrap">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6"
                  >
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
                        {...register("name")}
                      />
                      {
                        //@ts-ignore
                        errors.name && (
                          <span className="text-red-500">
                            {errors.name.message}
                          </span>
                        )
                      }
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
                        {...register("email")}
                      />
                      {
                        //@ts-ignore
                        errors.email && (
                          <span className="text-red-500">
                            {errors.email.message}
                          </span>
                        )
                      }
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
                        id="mensaje"
                        placeholder="Ingrese su mensaje"
                        rows={4}
                        {...register("mensaje")}
                      ></textarea>
                      {
                        //@ts-ignore
                        errors.mensaje && (
                          <span className="text-red-500">
                            {errors.mensaje.message}
                          </span>
                        )
                      }
                    </div>

                    <button
                      type="submit"
                      className="mb-6 inline-block w-full rounded  dark:bg-blueRadial bg-primary hover:bg-azul px-6 py-2.5 font-medium uppercase leading-normal  text-white hover:shadow-md"
                    >
                      {
                        //@ts-ignore
                        !isSubmitSuccessful ? "Enviar" : "Email enviado"
                      }
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
                            <p className="mb-2 font-bold dark:text-white text-azul">
                              Soporte Tecnico
                            </p>
                            <p className="dark:text-primaryDark text-grayDark ">
                              (+51)987351513
                            </p>
                            <p className="dark:text-primaryDark text-grayDark ">
                              (+51)984799203
                            </p>
                            <p className="dark:text-primaryDark text-grayDark ">
                              (+51)936072443
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
                            <p className="mb-2 font-bold dark:text-white text-azul">
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
                            <p className="mb-2 font-bold dark:text-white text-azul">
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
                            <p className="mb-2 font-bold dark:text-white text-azul">
                              Horario de atención
                            </p>
                            <p className="dark:text-primaryDark text-grayDark">
                              Lunes a Viernes: 8 am a 6 pm
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
              </div>
            </div>
          </section>
        </MotionTransition>
      </div>
    </div>
  );
}
