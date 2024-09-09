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
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
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
      title: "Real time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
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
      title: "Version control",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
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
      title: "Running out of content",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
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
      <div className="max-w-7xl mx-auto p-1">
        <StickyScroll content={content} />
      </div>
    </div>
  );
}
