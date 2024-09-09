"use client";
import "swiper/css";
import "swiper/css/effect-cards";
import "./styles.css";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import { MotionTransition } from "../MotionTransition";
import { Reveal } from "../Reveal";
import { dataCards } from "./ChooseYourCards.data";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BackgroundRadialLeft } from "../BackgroundRadialLeft";
import { StickyScroll } from "../StickyScrollReveal/sticky-scroll-reveal";

export function ChooseYourCards() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [hasMounted, setHasMounted] = useState(false);
  const content = [
    {
      title: "E-MasyComercial",
      description:
        "Te ayuda a resolver la gestión de pedidos, ágil relación con tus clientes y simplifcar el proceso de facturaciónTe ayudo a agilizar los procesos logísticos de compra-venta, con módulos de almacenamiento y facturación electrónica.",
      content: (
        <Image
          src="/assets/card1.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="E-MasyComercial demo"
        />
      ),
    },
    {
      title: "E-MasyFarma",
      description:
        "Te ayuda a controlar el inventario de los fármacos, mejorar el proceso de compra-venta y facturación electrónica.Te ayudo a agilizar los procesos logísticos de compra-venta, con módulos de almacenamiento y facturación electrónica.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/assets/card2.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="E-MasyComercial demo"
          />
        </div>
      ),
    },
    {
      title: "E-MasyMarket",
      description:
        "Te ayudo a agilizar los procesos logísticos de compra-venta, con módulos de almacenamiento y facturación electrónica.Te ayudo a agilizar los procesos logísticos de compra-venta, con módulos de almacenamiento y facturación electrónica.",
      content: (
        <Image
          src="/assets/card3.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="E-MasyComercial demo"
        />
      ),
    },
    {
      title: "Version control",
      description:
        "Te ayudo a agilizar los procesos logísticos de compra-venta, con módulos de almacenamiento y facturación electrónica. Te ayudo a agilizar los procesos logísticos de compra-venta, con módulos de almacenamiento y facturación electrónica.",
      content: (
        <Image
          src="/assets/card4.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="E-MasyComercial demo"
        />
      ),
    },
  ];
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <div
      className={`${isDark ? "" : "bg-slate-100"} relative px-6 py-20 md:py-40`}
      id="tarjetas"
    >
      {isDark && <BackgroundRadialLeft />}
      <div className="max-w-7xl mx-auto">
        <div className="p-2 mx-auto mb-0 text-center lg:mb-4">
          <div className="flex justify-center">
            <Reveal>
              <h1 className="mb-4 py-2 text-4xl md:text-5xl font-bold from-primary to-azul bg-gradient-to-r bg-clip-text text-transparent text-azul block dark:bg-blueRadial degradedBlue">
                Sistemas Coorporativos
              </h1>
            </Reveal>
          </div>
          <div className="flex justify-center">
            <Reveal>
              <p className="mb-5 font-semibold text-grayDark dark:bg-blueLight degradedBlue sm:text-xl">
                Elige el que mejor se adapte a tus necesidades
              </p>
            </Reveal>
          </div>
        </div>
        {/* <div className="px-5 mt-6 md:mt-0">
          <MotionTransition>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              {dataCards.map(({ image, id }) => (
                <SwiperSlide key={id}>
                  <img src={image} alt="Card" className="w-full h-full" />
                </SwiperSlide>
              ))}
            </Swiper>
          </MotionTransition>
        </div> */}
      </div>
      <div className="max-w-7xl mx-auto">
        <StickyScroll content={content} />
      </div>
    </div>
  );
}
