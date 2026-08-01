"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TrophyIcon } from "@heroicons/react/24/solid";

import { FEATURED_PROJECT, HACKATHON_GALLERY } from "@/constants";
import { fadeIn, slideInFromTop, zoomIn } from "@/lib/motion";

export const HackathonGallery = () => {
  return (
    <section
      id="hackathon-gallery"
      className="flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 px-4"
    >
      <motion.h1
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-6 sm:py-10 md:py-14 text-center"
      >
        Hackathon Gallery
      </motion.h1>

      <motion.div
        variants={fadeIn(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-4xl text-center mb-10"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-white">
          {HACKATHON_GALLERY.event}
        </h2>
        <p className="mt-1 text-sm sm:text-base text-gray-400">
          {HACKATHON_GALLERY.subtitle} · {HACKATHON_GALLERY.team}
        </p>
        <p className="cursive text-lg sm:text-xl text-gray-300 mt-4 max-w-2xl mx-auto">
          &ldquo;{HACKATHON_GALLERY.quote}&rdquo;
        </p>
        <p className="mt-4 text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
          {HACKATHON_GALLERY.story}
        </p>
      </motion.div>

      {/* Certificate -> Award -> Project flow */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        <motion.div
          variants={zoomIn(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col rounded-xl border border-[#2A0E61] bg-[#0300145e] backdrop-blur-sm overflow-hidden"
        >
          <div className="relative w-full aspect-[4/3]">
            <Image
              src={HACKATHON_GALLERY.images.certificate}
              alt="SRINATHON 2.0 certificate of achievement"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-sm sm:text-base font-bold text-white">Certificate</h3>
            <p className="mt-1 text-xs sm:text-sm text-gray-400">
              Certificate of Achievement, Computer Science Track — SRINATHON 2.0.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={zoomIn(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col rounded-xl border border-[#2A0E61] bg-[#0300145e] backdrop-blur-sm overflow-hidden"
        >
          <div className="relative w-full aspect-[4/3]">
            <Image
              src={HACKATHON_GALLERY.images.prize}
              alt="First prize envelopes from Thaniya Technologies and Swizosoft"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-sm sm:text-base font-bold text-white">Award</h3>
            <ul className="mt-1 flex flex-col gap-1">
              {HACKATHON_GALLERY.wins.map((win) => (
                <li key={win.theme} className="text-xs sm:text-sm text-gray-400">
                  <span className="text-[#b49bff] font-medium">1st Prize</span> ·{" "}
                  {win.theme} ({win.sponsor})
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          variants={zoomIn(0.45)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col rounded-xl border border-[#2A0E61] bg-[#0300145e] backdrop-blur-sm overflow-hidden"
        >
          <div className="relative w-full aspect-[4/3]">
            <Image
              src={FEATURED_PROJECT.image}
              alt="Automated Health Management System project"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-sm sm:text-base font-bold text-white">Project</h3>
            <p className="mt-1 text-xs sm:text-sm text-gray-400">
              Built on the momentum from this win, later expanded into the{" "}
              <Link
                href={`/case-study/${FEATURED_PROJECT.caseStudySlug}`}
                className="text-[#b49bff] hover:underline"
              >
                Automated Health Management System
              </Link>
              .
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={fadeIn(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-8 flex items-center gap-2 rounded-full border border-[#7042f866] bg-[#7042f81a] px-5 py-2.5"
      >
        <TrophyIcon className="h-4 w-4 text-[#b49bff]" />
        <span className="text-xs sm:text-sm text-gray-200">
          Double First Prize against nearly 300 competing teams
        </span>
      </motion.div>
    </section>
  );
};
