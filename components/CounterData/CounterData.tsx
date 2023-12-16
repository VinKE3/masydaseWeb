"use client";
import CountUp from "react-countup";
import { MotionTransition } from "../MotionTransition";
import { dataCounter } from "./CounterData.data";

export function CounterData() {
  return (
    <MotionTransition className="lg:max-w-4xl xl:max-w-5xl py-10 mx-auto md:py-64">
      <div className="justify-between md:flex">
        {dataCounter.map(({ id, startNumber, endNumber, text }) => (
          <div
            key={id}
            className="text-grayDark dark:text-white py-5 text-2xl text-center md:text-left"
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
