"use client";

import { motion } from "framer-motion";

import { TESTIMONIALS } from "@/constants";
import { slideInFromTop, zoomIn } from "@/lib/motion";

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 px-4"
    >
      <motion.h1
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-6 sm:py-10 md:py-14 text-center"
      >
        What Clients Say
      </motion.h1>

      <div className="w-full max-w-3xl flex flex-col gap-6">
        {TESTIMONIALS.map((testimonial, index) => (
          <motion.div
            key={testimonial.name + index}
            variants={zoomIn(0.15 * index)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative rounded-xl border border-[#2A0E61] bg-[#0300145e] backdrop-blur-sm p-6 sm:p-8"
          >
            <span className="absolute -top-4 left-6 text-5xl text-[#7042f8] select-none">
              &ldquo;
            </span>
            <p className="text-sm sm:text-lg text-gray-200 leading-relaxed italic">
              {testimonial.quote}
            </p>
            <div className="mt-5 flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold">
                {testimonial.name.charAt(0)}
              </span>
              <div>
                <p className="text-sm sm:text-base font-semibold text-white">
                  {testimonial.name}
                </p>
                <p className="text-xs sm:text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
