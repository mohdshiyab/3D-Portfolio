"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowTopRightOnSquareIcon,
  DocumentTextIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";
import { RxGithubLogo } from "react-icons/rx";

import { ArchitectureDiagram } from "@/components/sub/architecture-diagram";
import { FEATURED_PROJECT } from "@/constants";
import { fadeIn, slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

export const FeaturedProject = () => {
  return (
    <section
      id="featured-project"
      className="flex flex-col items-center justify-center py-10 sm:py-14 px-4"
    >
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="Welcome-box py-[8px] px-[16px] border border-[#7042f88b] opacity-[0.9] mb-5"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <span className="Welcome-text text-[13px] font-medium">
          {FEATURED_PROJECT.badge}
        </span>
      </motion.div>

      <div className="w-full max-w-6xl rounded-2xl border border-[#2A0E61] bg-[#0300145e] backdrop-blur-md p-5 sm:p-8 lg:p-10 shadow-[0_0_40px_-15px_rgba(112,66,248,0.7)]">
        {/* Title */}
        <motion.div
          variants={fadeIn(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug">
            🏥 {FEATURED_PROJECT.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-medium">
            {FEATURED_PROJECT.tagline}
          </p>
        </motion.div>

        {/* Screenshot + description */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
          <motion.div
            variants={slideInFromLeft(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full lg:w-1/2 rounded-xl overflow-hidden border border-[#2A0E61] shadow-lg"
          >
            <Image
              src={FEATURED_PROJECT.image}
              alt={FEATURED_PROJECT.title}
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
              priority={false}
            />
          </motion.div>

          <motion.div
            variants={slideInFromRight(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex flex-col gap-5"
          >
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              {FEATURED_PROJECT.description}
            </p>

            <div className="flex flex-col gap-3">
              <div className="rounded-lg border border-[#2A0E61] bg-[#7042f81a] p-4">
                <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                  🚀 Problem
                </h3>
                <p className="text-xs sm:text-sm text-gray-300">
                  {FEATURED_PROJECT.problem}
                </p>
              </div>
              <div className="rounded-lg border border-[#2A0E61] bg-[#0ea5e91a] p-4">
                <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                  💡 Solution
                </h3>
                <p className="text-xs sm:text-sm text-gray-300">
                  {FEATURED_PROJECT.solution}
                </p>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3 mt-1">
              <Link
                href={FEATURED_PROJECT.liveDemo}
                target="_blank"
                rel="noreferrer noopener"
                className="button-primary flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-white transition"
              >
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                Live Demo
              </Link>
              <Link
                href={FEATURED_PROJECT.github}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 rounded-lg border border-[#2A0E61] px-4 py-2 text-sm text-white hover:bg-[#7042f81a] transition"
              >
                <RxGithubLogo className="h-4 w-4" />
                GitHub
              </Link>
              <Link
                href={`/case-study/${FEATURED_PROJECT.caseStudySlug}`}
                className="flex items-center gap-2 rounded-lg border border-[#2A0E61] px-4 py-2 text-sm text-white hover:bg-[#0ea5e91a] transition"
              >
                <DocumentTextIcon className="h-4 w-4" />
                Case Study
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Tech stack */}
        <motion.div
          variants={fadeIn(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10"
        >
          <h3 className="text-lg sm:text-xl font-bold text-white mb-4 text-center">
            🛠 Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {FEATURED_PROJECT.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#7042f866] bg-[#7042f81a] px-3 sm:px-4 py-1.5 text-xs sm:text-sm text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Architecture */}
        <motion.div
          variants={fadeIn(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10"
        >
          <h3 className="text-lg sm:text-xl font-bold text-white mb-6 text-center">
            🧩 System Architecture
          </h3>
          <ArchitectureDiagram steps={FEATURED_PROJECT.architecture} />
        </motion.div>

        {/* Features */}
        <motion.div
          variants={fadeIn(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10"
        >
          <h3 className="text-lg sm:text-xl font-bold text-white mb-4 text-center">
            ✨ Key Features
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {FEATURED_PROJECT.features.map((feature) => (
              <div
                key={feature}
                className="rounded-lg border border-[#2A0E61] bg-[#03001480] p-3 sm:p-4 text-xs sm:text-sm text-gray-300"
              >
                {feature}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recognition */}
        <motion.div
          variants={fadeIn(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 rounded-lg border border-[#7042f866] bg-gradient-to-r from-[#7042f81a] to-[#0ea5e91a] p-4 sm:p-5 text-center"
        >
          <h3 className="text-sm sm:text-base font-bold text-white mb-1">
            🏆 Recognition
          </h3>
          <p className="text-xs sm:text-sm text-gray-300">
            {FEATURED_PROJECT.recognition}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
