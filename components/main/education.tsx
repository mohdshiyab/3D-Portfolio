"use client";

import { motion } from "framer-motion";
import { AcademicCapIcon } from "@heroicons/react/24/solid";

import { EDUCATION } from "@/constants";
import { slideInFromTop, slideInFromLeft } from "@/lib/motion";

export const Education = () => {
  return (
    <section
      id="education"
      className="flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 px-4"
    >
      <motion.h1
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-6 sm:py-10 md:py-14 text-center"
      >
        Education
      </motion.h1>

      <div className="w-full max-w-4xl flex flex-col gap-5 sm:gap-6">
        {EDUCATION.map((edu, index) => (
          <motion.div
            key={edu.institution + index}
            variants={slideInFromLeft(0.3 + index * 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 rounded-lg border border-[#2A0E61] bg-[#0300145e] backdrop-blur-sm p-5 sm:p-6"
          >
            <div className="shrink-0 rounded-full bg-[#7042f833] p-3 w-fit">
              <AcademicCapIcon className="h-6 w-6 sm:h-7 sm:w-7 text-[#b49bff]" />
            </div>
            <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
              <div>
                <h2 className="text-base sm:text-xl font-bold text-white">
                  {edu.institution}
                </h2>
                <p className="mt-1 text-sm sm:text-base text-gray-300">
                  {edu.course}
                </p>
              </div>
              <span className="text-xs sm:text-sm text-gray-400 whitespace-nowrap">
                {edu.duration}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
