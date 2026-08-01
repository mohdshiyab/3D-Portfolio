"use client";

import { motion } from "framer-motion";
import { TrophyIcon } from "@heroicons/react/24/solid";

import { ACHIEVEMENTS } from "@/constants";
import { slideInFromTop, slideInFromRight } from "@/lib/motion";

export const Achievements = () => {
  return (
    <section
      id="achievements"
      className="flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 px-4"
    >
      <motion.h1
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-6 sm:py-10 md:py-14 text-center"
      >
        Achievements
      </motion.h1>

      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        {ACHIEVEMENTS.map((achievement, index) => (
          <motion.div
            key={achievement.title + index}
            variants={slideInFromRight(0.3 + index * 0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex gap-4 items-start rounded-lg border border-[#2A0E61] bg-[#0300145e] backdrop-blur-sm p-5 sm:p-6"
          >
            <div className="shrink-0 rounded-full bg-[#7042f833] p-2.5">
              <TrophyIcon className="h-5 w-5 sm:h-6 sm:w-6 text-[#b49bff]" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white">
                {achievement.title}
              </h2>
              <p className="mt-1 text-sm sm:text-base text-gray-300">
                {achievement.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
