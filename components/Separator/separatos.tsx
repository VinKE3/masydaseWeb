"use client";

import { motion } from "framer-motion";

export const Separator = () => {
  return (
    <div className="relative w-[70%] h-1 bg-gray-800 overflow-hidden mx-auto">
      <motion.div
        className="absolute top-0 left-0 h-full w-[200%] bg-gradient-to-r from-transparent via-primary to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className="absolute inset-0 flex justify-between">
        {[...Array(10)].map((_, index) => (
          <motion.div
            key={index}
            className="h-full w-1 bg-white dark:bg-blueLight  rounded-full opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatDelay: 0.1 * index,
            }}
          />
        ))}
      </div>
    </div>
  );
};
