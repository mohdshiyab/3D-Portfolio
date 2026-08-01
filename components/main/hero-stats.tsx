"use client";

import { motion } from "framer-motion";

import { HERO_STATS } from "@/constants";
import { fadeIn } from "@/lib/motion";

export const HeroStats = () => {
  return (
    <div className="w-full flex justify-center px-4 -mt-4 sm:-mt-6 lg:-mt-8">
      <motion.div
        variants={fadeIn(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-5xl grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 rounded-2xl border border-[#2A0E61] bg-[#0300145e] backdrop-blur-md px-4 sm:px-6 py-5 sm:py-6 shadow-[0_0_30px_-12px_rgba(112,66,248,0.6)]"
      >
        {HERO_STATS.map((stat, index) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center justify-center text-center gap-1 ${
              index === HERO_STATS.length - 1 ? "col-span-2 sm:col-span-1" : ""
            }`}
          >
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              {stat.value}
            </span>
            <span className="text-[11px] sm:text-xs md:text-sm text-gray-400 whitespace-nowrap">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
