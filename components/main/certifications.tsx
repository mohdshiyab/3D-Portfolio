"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

import { CERTIFICATIONS, CERTIFICATIONS_LINK } from "@/constants";
import { slideInFromTop, zoomIn } from "@/lib/motion";

export const Certifications = () => {
  return (
    <section
      id="certifications"
      className="flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 px-4"
    >
      <motion.h1
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-6 sm:py-10 md:py-14 text-center"
      >
        Certifications
      </motion.h1>

      <div className="w-full max-w-4xl grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
        {CERTIFICATIONS.map((cert, index) => (
          <motion.div
            key={cert.name}
            variants={zoomIn(0.1 * index)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center gap-2 rounded-xl border border-[#2A0E61] bg-[#0300145e] backdrop-blur-sm p-5 sm:p-6 hover:border-[#7042f8] hover:shadow-[0_0_20px_-6px_rgba(112,66,248,0.7)] transition"
          >
            <span className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#7042f833]">
              <CheckBadgeIcon className="h-6 w-6 text-[#b49bff]" />
            </span>
            <span className="text-sm sm:text-base text-white font-semibold text-center">
              {cert.name}
            </span>
          </motion.div>
        ))}
      </div>

      <Link
        href={CERTIFICATIONS_LINK}
        target="_blank"
        rel="noreferrer noopener"
        className="mt-8 text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-medium hover:underline"
      >
        View all certifications on LinkedIn →
      </Link>
    </section>
  );
};
