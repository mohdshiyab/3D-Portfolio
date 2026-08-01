"use client";

import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

import { WHY_HIRE_ME } from "@/constants";
import { slideInFromTop, zoomIn } from "@/lib/motion";

export const WhyHireMe = () => {
  return (
    <section
      id="why-hire-me"
      className="flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 px-4"
    >
      <motion.h1
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-6 sm:py-10 md:py-14 text-center"
      >
        Why Hire Me?
      </motion.h1>

      <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-4">
        {WHY_HIRE_ME.map((point, index) => (
          <motion.div
            key={point}
            variants={zoomIn(0.1 * index)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center gap-3 rounded-lg border border-[#2A0E61] bg-[#0300145e] backdrop-blur-sm px-5 py-4 hover:border-[#7042f8] transition"
          >
            <CheckCircleIcon className="h-5 w-5 sm:h-6 sm:w-6 text-[#b49bff] shrink-0" />
            <span className="text-sm sm:text-base text-gray-200 font-medium">
              {point}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
