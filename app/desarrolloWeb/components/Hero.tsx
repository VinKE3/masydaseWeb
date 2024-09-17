"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { SparklesCore } from "@/components/Sparkles/sparkles";

const Hero = () => {
  const { theme } = useTheme(); // Accede al tema actual

  // Determina el color de las partículas según el tema
  const particleColor = theme === "dark" ? "#FFFFFF" : "#034281";

  return (
    <div className="h-[40rem] w-full bg-slate-100 dark:bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold from-primary to-azul bg-gradient-to-r bg-clip-text text-transparent text-azul block dark:to-sky-100 dark:from-white  relative z-20">
        Desarrollo Web
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-azul to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-azul to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor={particleColor} // Color dinámico según el modo oscuro
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-slate-100 dark:bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
};

export default Hero;
