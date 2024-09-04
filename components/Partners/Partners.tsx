"use client";
import "swiper/css";

import { dataPartners } from "./Partners.data";
import { CtaDark } from "../CtaDark";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BackgroundRadialLeft } from "../BackgroundRadialLeft";
import { InfiniteMovingCards } from "../InfiniteMoving/infinite-moving-cards";

export function Partners() {
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
      className={`${
        isDark ? " border-t border-primary" : "bg-slate-100"
      } relative px-6 py-20 md:py-35`}
      id="servicios"
    >
      {isDark && <BackgroundRadialLeft />}
      <div className="relative w-full overflow-hidden">
        <div className="rounded-md flex flex-col antialiased  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={dataPartners}
            direction="right"
            speed="slow"
          />
        </div>
        <div className="rounded-md flex flex-col antialiased  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={dataPartners}
            direction="left"
            speed="slow"
          />
        </div>
      </div>
      <CtaDark />
    </div>
  );
}
