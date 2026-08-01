"use client";

import { motion } from "framer-motion";
import { BriefcaseIcon } from "@heroicons/react/24/solid";

import { EXPERIENCE } from "@/constants";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 px-4"
    >
      <motion.h1
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-6 sm:py-10 md:py-14 text-center"
      >
        Experience
      </motion.h1>

      <div className="w-full max-w-4xl relative">
        {/* Vertical timeline line */}
        <div className="absolute left-[27px] sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#7042f8] via-[#7042f866] to-transparent sm:-translate-x-1/2" />

        <div className="flex flex-col gap-10 sm:gap-14">
          {EXPERIENCE.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={exp.title + index}
                className="relative flex sm:items-center flex-row sm:justify-between"
              >
                {/* Year dot */}
                <motion.div
                  variants={slideInFromTop}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 z-10 flex flex-col items-center gap-1"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#7042f8] bg-[#030014] shadow-[0_0_15px_rgba(112,66,248,0.6)]">
                    <BriefcaseIcon className="h-5 w-5 text-[#b49bff]" />
                  </div>
                </motion.div>

                {/* Spacer for mobile so content clears the dot column */}
                <div className="w-16 sm:hidden shrink-0" />

                {/* Content card */}
                <motion.div
                  variants={
                    isLeft ? slideInFromLeft(0.2 + index * 0.15) : slideInFromRight(0.2 + index * 0.15)
                  }
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={`w-full sm:w-[45%] rounded-lg border border-[#2A0E61] bg-[#0300145e] backdrop-blur-sm p-5 sm:p-6 ${
                    isLeft ? "sm:mr-auto" : "sm:ml-auto"
                  }`}
                >
                  <span className="inline-block text-xs sm:text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-1">
                    {exp.year}
                  </span>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
                    <h2 className="text-base sm:text-xl font-bold text-white">
                      {exp.title}
                    </h2>
                    <span className="text-xs sm:text-sm text-gray-400 whitespace-nowrap">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="mt-1 text-xs sm:text-sm text-gray-400">
                    {exp.company} · {exp.location}
                  </p>
                  <ul className="mt-4 flex flex-col gap-2 list-disc list-inside">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-sm sm:text-base text-gray-300">
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
