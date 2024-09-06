"use client";
import { BackgroundRadialLeft } from "../BackgroundRadialLeft";

import { MotionTransition } from "../MotionTransition";
import { Reveal } from "../Reveal";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { dataBenefits } from "./Benefits.data";
import { PinContainer } from "../3dPin/3d-pin";

export default function Benefits() {
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
    <>
      <div className={`${isDark ? "" : "bg-slate-100"} relative px-6 py-20 `}>
        {isDark && <BackgroundRadialLeft />}
        <div className="block relative bg-opacity-50 z-40">
          <div className="relative mx-auto h-full px-4 pb-20   md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
              <div className="p-2 mx-auto mb-8 text-center lg:mb-12">
                <div className="flex justify-center">
                  <Reveal>
                    <h1 className="mb-4 text-4xl md:text-5xl font-bold from-primary to-azul bg-gradient-to-r bg-clip-text text-transparent text-azul block dark:bg-blueRadial degradedBlue">
                      Beneficios
                    </h1>
                  </Reveal>
                </div>
                <div className="flex justify-center">
                  <Reveal>
                    <p className="text-grayDark dark:text-primaryDark">
                      Contamos con los mejores beneficios para tu empresa y tus
                      clientes.
                    </p>
                  </Reveal>
                </div>
              </div>
              <MotionTransition>
                <div className="grid grid-cols-1 gap-2 mt-12  md:grid-cols-2 lg:grid-cols-3 lg:mt-20">
                  {dataBenefits.map(({ id, title, description }) => {
                    return (
                      <div className="h-[30rem] w-full flex items-center justify-center ">
                        <PinContainer title="Ver Planes" href="#planes">
                          <div
                            key={id}
                            className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[27rem]"
                          >
                            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-lg  text-grayDark dark:text-white">
                              {title}
                            </h3>
                            <div className="text-base !m-0 !p-0 font-normal">
                              <span className="text-base text-grayDark dark:text-white">
                                {description}
                              </span>
                            </div>
                            <div className="flex flex-1 w-full h-[2px] rounded-lg mt-4 transition-all duration-1000 dark:bg-blueRadial from-primary to-azul bg-gradient-to-r  hover:shadow-xl" />
                          </div>
                        </PinContainer>
                      </div>
                    );
                  })}
                </div>
              </MotionTransition>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
