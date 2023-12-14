"use client";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { BackgroundRadialRight } from "../BackgroundRadialRight";
import { MotionTransition } from "../MotionTransition";
import { Reveal } from "../Reveal";
import { Pagination } from "swiper/modules";
import { dataCards } from "./ChooseYourCards.data";
import Image from "next/image";

export function ChooseYourCards() {
  return (
    <div className="relative px-6 py-20 md:py-64" id="tarjetas">
      <BackgroundRadialRight />
      <div className="block max-w-5xl mx-auto md:grid md:grid-cols-2">
        <Reveal>
          <h2 className="text-5xl font-semibold">
            Elige el sistema Coorporativo
            <span className="block degradedBlue bg-blueLight">
              que se adapte mejor a tus necesidades
            </span>
          </h2>
        </Reveal>
        <div className="px-5 mt-6 md:mt-0">
          <MotionTransition>
            <Swiper
              pagination={true}
              modules={[Pagination]}
              className="mySwiper"
            >
              {dataCards.map(({ image, id }) => (
                <SwiperSlide key={id}>
                  <Image
                    src={image}
                    alt="Credit Card"
                    width="400"
                    height="300"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </MotionTransition>
        </div>
      </div>
    </div>
  );
}
