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

export function ChooseYourCards() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [hasMounted, setHasMounted] = useState(false);
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <div
      className={`${isDark ? "" : "bg-slate-100"} relative px-6 py-20 md:py-64`}
      id="tarjetas"
    >
      {isDark && <BackgroundRadialLeft />}
      <div className="block max-w-7xl mx-auto md:grid md:grid-cols-2">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-semibold text-grayDark dark:text-white">
            Elige el sistema Coorporativo
            <span className="block degradedBlue dark:bg-blueLight text-azul">
              que se adapte mejor a tus necesidades
            </span>
          </h2>
        </Reveal>
        <div className="px-5 mt-6 md:mt-0">
          <MotionTransition>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              {dataCards.map(({ image, id }) => (
                <SwiperSlide key={id}>
                  {/* <Image src={image} alt="Card" width="400" height="300" /> */}
                  <img src={image} alt="Card" className="w-full h-full" />
                </SwiperSlide>
              ))}
            </Swiper>
          </MotionTransition>
        </div>
      </div>
    </div>
  );
}
