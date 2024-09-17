"use client";
import React from "react";
import { HeroParallax } from "@/components/HeroParallax/hero-parallax";
import { products } from "@/components/HeroParallax/hero-parallax.data";

const Parallax = () => {
  return <HeroParallax products={products} />;
};

export default Parallax;
