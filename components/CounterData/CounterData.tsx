"use client";
import CountUp from "react-countup";
import { MotionTransition } from "../MotionTransition";
import { dataCounter } from "./CounterData.data";
import { useEffect, useState } from "react";

export function CounterData() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <MotionTransition className="lg:max-w-4xl xl:max-w-7xl py-10 mx-auto px-4">
      <div id="counter" className="justify-between md:flex">
        {isMounted &&
          dataCounter.map(({ id, startNumber, endNumber, text }) => (
            <div
              key={id}
              className="text-grayDark dark:text-white py-5 text-2xl text-center "
            >
              +
              <CountUp
                className="text-grayDark dark:text-white"
                start={startNumber}
                end={endNumber}
                duration={1.5}
                enableScrollSpy
              />{" "}
              <span className="degradedBlue dark:bg-blueLight text-primary">
                {text}
              </span>
            </div>
          ))}
      </div>
    </MotionTransition>
  );
}
