"use client";

import Link from "next/link";
import { BackgroundRadialLeft } from "../BackgroundRadialLeft";
import { Reveal } from "../Reveal";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BackgroundBeamsWithCollision } from "../BackgroundBeamsCollision/background-beams-with-collision";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/CanvasReveal/canvas-reveal-effect";
import { Star, ShieldCheck, Sparkle } from "lucide-react";
import { EvervaultCard } from "../EvernualtCard/evervault-card";
const Card = ({
  title,
  subtitle,
  icon,
  children,
}: {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem]"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <p className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export function About() {
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
    <div
      className={`${isDark ? "" : "bg-slate-100"} relative px-6 py-20 md:py-24`}
      id="about"
    >
      {isDark && <BackgroundRadialLeft />}
      <BackgroundBeamsWithCollision>
        <h2 className="text-2xl relative z-20 md:text-4xl lg:text-6xl font-bold text-center text-grayDark dark:text-white font-sans tracking-tight">
          Tienes un problema?{" "}
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="absolute left-0 top-[1px] bg-clip-text text-transparent py-4 font-bold from-primary to-azul bg-gradient-to-r text-azul block dark:bg-blueLight  [text-shadow:0_0_rgba(0,0,0,0.1)]">
              <span className="">Encontramos la mejor solución.</span>
            </div>
            <div className="relative bg-clip-text text-transparent py-4 font-bold from-primary to-azul bg-gradient-to-r text-azul block dark:bg-blueLight ">
              <span className="">Encontramos la mejor solución.</span>
            </div>
          </div>
        </h2>
      </BackgroundBeamsWithCollision>
      <div className="flex flex-col items-center text-center mt-10">
        <Reveal>
          <p className="max-w-md mt-0 dark:text-primaryDark text-grayDark md:text-xl">
            En MASYDASE, somos un equipo joven dedicado a la programación de
            sistemas convertidas en soluciones, y que brinda soporte técnico a
            más de 1500 empresas nacionales, desde 1998.
          </p>
        </Reveal>
        <Reveal>
          <div className="my-8">
            <Link
              href="#plans"
              className="px-4 py-3 rounded-md bg-primary text-white hover:bg-azul dark:bg-blueRadial"
            >
              Elige tu plan
            </Link>
          </div>
        </Reveal>
      </div>
      {/* <div className="py-20 flex flex-col lg:flex-row items-center justify-center  w-full gap-4 mx-auto px-8">
        <Card
          title="Misión"
          subtitle="Nuestra misión es adaptarnos a las necesidades de los sistemas de gestión corporativa, ofreciendo soluciones creativas e innovadoras con sistemas flexibles y soporte técnico integrado, personalizado para tu negocio."
          icon={<Star className="w-36 h-36 text-azul dark:text-secondary" />}
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card
          title="Visión"
          subtitle="Aspiramos a ser líderes en el mercado informático, patentando la mayoría de sistemas adaptables a todo tipo de negocios en Perú, fortaleciendo la seguridad de empresas confiadas en nosotros."
          icon={<Sparkle className="w-36 h-36 text-azul dark:text-secondary" />}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card
          title="Valores"
          subtitle="Nuestros valores fundamentales son la responsabilidad, honestidad y respeto, principios que guían nuestro compromiso hacia la excelencia y la integridad en cada solución que brindamos a nuestros clientes."
          icon={
            <ShieldCheck className="w-36 h-36 text-azul dark:text-secondary" />
          }
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div> */}
      <div className="flex gap-10 mt-10">
        <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
          <EvervaultCard text="Misión " />

          <h2 className="dark:text-white text-black mt-4 text-lg font-light">
            Nuestra misión es adaptarnos a las necesidades de los sistemas de
            gestión corporativa, ofreciendo soluciones creativas e innovadoras
            con sistemas flexibles y soporte técnico integrado, personalizado
            para tu negocio.
          </h2>
        </div>
        <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
          <EvervaultCard text="Visión " />

          <h2 className="dark:text-white text-black mt-4 text-lg font-light">
            Aspiramos a ser líderes en el mercado informático, patentando la
            mayoría de sistemas adaptables a todo tipo de negocios en Perú,
            fortaleciendo la seguridad de empresas confiadas en nosotros.
          </h2>
        </div>
        <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
          <EvervaultCard text="Valores " />
          <h2 className="dark:text-white text-black mt-4 text-lg font-light">
            Nuestros valores fundamentales son la responsabilidad, honestidad y
            respeto, principios que guían nuestro compromiso hacia la excelencia
            y la integridad en cada solución que brindamos a nuestros clientes.
          </h2>
        </div>
      </div>
    </div>
  );
}
