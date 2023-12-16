"use client";
import "swiper/css";
import { BackgroundRadialRight } from "../BackgroundRadialRight";
import { Swiper, SwiperSlide } from "swiper/react";
import { dataPartners } from "./Partners.data";
import Image from "next/image";
import { CtaDark } from "../CtaDark";
import { useTheme } from "next-themes";

export function Partners() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <div className="relative py-20 md:py-64" id="servicios">
      <BackgroundRadialRight />
      <div className="relative w-full overflow-hidden">
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 10,
              spaceBetween: 15,
            },
          }}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          loop={true}
          speed={2000}
        >
          <div className="absolute flex">
            {dataPartners.map(({ id, image }) => (
              <SwiperSlide
                key={id}
                className="flex items-center slider-horizontal"
              >
                <Image
                  src={`/assets/${image}`}
                  alt="Parteners"
                  width={70}
                  height={70}
                  className="h-[60px] w-[120px] object-contain"
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>

      <CtaDark />
    </div>
  );
}
