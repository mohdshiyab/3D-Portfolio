"use client";

import type { ComponentType } from "react";
import { motion } from "framer-motion";
import {
  CloudIcon,
  CubeIcon,
  CircleStackIcon,
  ArrowPathIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/solid";

import { CURRENTLY_LEARNING } from "@/constants";
import { slideInFromTop, zoomIn } from "@/lib/motion";

const ICONS: Record<string, ComponentType<{ className?: string }>> = {
  Docker: CubeIcon,
  Kubernetes: CircleStackIcon,
  AWS: CloudIcon,
  "CI/CD": ArrowPathIcon,
  "System Design": Square3Stack3DIcon,
};

export const CurrentlyLearning = () => {
  return (
    <section
      id="currently-learning"
      className="flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 px-4"
    >
      <motion.h1
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-6 sm:py-10 md:py-14 text-center"
      >
        Currently Learning
      </motion.h1>

      <p className="max-w-2xl text-center text-sm sm:text-base text-gray-400 -mt-6 mb-8 sm:mb-10">
        Sharpening my DevOps and system-design skills so I can ship and scale
        production-ready applications end to end.
      </p>

      <div className="w-full max-w-4xl flex flex-wrap justify-center gap-4 sm:gap-5">
        {CURRENTLY_LEARNING.map((item, index) => {
          const Icon = ICONS[item.name] ?? Square3Stack3DIcon;
          return (
            <motion.div
              key={item.name}
              variants={zoomIn(0.15 * index)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center gap-3 rounded-full border border-[#2A0E61] bg-[#0300145e] backdrop-blur-sm px-5 sm:px-6 py-3 hover:border-[#7042f8] hover:shadow-[0_0_20px_-6px_rgba(112,66,248,0.7)] transition"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#7042f833]">
                <Icon className="h-4 w-4 text-[#b49bff]" />
              </span>
              <span className="text-sm sm:text-base text-gray-200 font-medium whitespace-nowrap">
                {item.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
