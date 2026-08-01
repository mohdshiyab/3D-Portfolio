"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-10 lg:gap-6 px-5 sm:px-10 lg:px-20 mt-28 sm:mt-32 lg:mt-40 w-full max-w-7xl mx-auto z-[20]"
    >
      <div className="w-full lg:w-1/2 flex flex-col gap-5 justify-center items-center lg:items-start text-center lg:text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
       <p>I&apos;m Shiyab</p>      </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 sm:gap-6 mt-4 sm:mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-[600px] w-full lg:w-auto h-auto"
        >
          <span>
            Mohammad {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Shiyabuddeen
            </span>{" "}
            {/* digital solutions. */}
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg text-gray-400 my-3 sm:my-5 max-w-[600px] px-1 sm:px-0"
        >
          I&apos;m Mohammad Shiyabuddeen, a Full Stack Developer passionate about building scalable web applications with clean design and seamless functionality. I specialize in modern web technologies and was proud to co-lead my team to a double First Prize victory at SRINATHON 2.0. Beyond coding, I create engaging visuals through videography, video editing, and graphic design.
        </motion.p>

        {/* <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn more
        </motion.a> */}
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center"
      >
<img
  src="/Hero.png"
  alt="work icons"
  width={400}
  height={400}
  className="select-none rounded-3xl w-[220px] sm:w-[300px] lg:w-[400px] h-auto max-w-full"
/>
      </motion.div>
    </motion.div>
  );
};
