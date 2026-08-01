"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

import { AVAILABLE_FOR, CONTACT_INFO } from "@/constants";
import { fadeIn, slideInFromTop, zoomIn } from "@/lib/motion";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 px-4"
    >
      <motion.h1
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-6 sm:py-10 md:py-14 text-center"
      >
        Let&apos;s Connect
      </motion.h1>

      <motion.div
        variants={fadeIn(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-3xl rounded-2xl border border-[#2A0E61] bg-[#0300145e] backdrop-blur-md p-6 sm:p-10 flex flex-col items-center gap-8"
      >
        {/* Available for */}
        <div className="w-full flex flex-col items-center gap-4">
          <p className="text-sm sm:text-base text-gray-400 uppercase tracking-wide">
            Available for
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {AVAILABLE_FOR.map((item, index) => (
              <motion.span
                key={item}
                variants={zoomIn(0.1 * index)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-full border border-[#7042f866] bg-gradient-to-r from-[#7042f81a] to-[#0ea5e91a] px-5 py-2 text-sm sm:text-base text-white font-medium"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-[#2A0E61]" />

        {/* Contact details */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href={`mailto:${CONTACT_INFO.email}`}
            className="flex items-center gap-3 rounded-lg border border-[#2A0E61] px-4 py-3 hover:border-[#7042f8] hover:bg-[#7042f81a] transition"
          >
            <EnvelopeIcon className="h-5 w-5 text-[#b49bff] shrink-0" />
            <span className="text-sm text-gray-200 break-all">{CONTACT_INFO.email}</span>
          </Link>

          <Link
            href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-3 rounded-lg border border-[#2A0E61] px-4 py-3 hover:border-[#7042f8] hover:bg-[#7042f81a] transition"
          >
            <PhoneIcon className="h-5 w-5 text-[#b49bff] shrink-0" />
            <span className="text-sm text-gray-200">{CONTACT_INFO.phone}</span>
          </Link>

          <div className="flex items-center gap-3 rounded-lg border border-[#2A0E61] px-4 py-3">
            <MapPinIcon className="h-5 w-5 text-[#b49bff] shrink-0" />
            <span className="text-sm text-gray-200">{CONTACT_INFO.location}</span>
          </div>

          <Link
            href={CONTACT_INFO.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-3 rounded-lg border border-[#2A0E61] px-4 py-3 hover:border-[#7042f8] hover:bg-[#7042f81a] transition"
          >
            <RxLinkedinLogo className="h-5 w-5 text-[#b49bff] shrink-0" />
            <span className="text-sm text-gray-200">LinkedIn</span>
          </Link>

          <Link
            href={CONTACT_INFO.github}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-3 rounded-lg border border-[#2A0E61] px-4 py-3 hover:border-[#7042f8] hover:bg-[#7042f81a] transition sm:col-span-2"
          >
            <RxGithubLogo className="h-5 w-5 text-[#b49bff] shrink-0" />
            <span className="text-sm text-gray-200">GitHub</span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};
