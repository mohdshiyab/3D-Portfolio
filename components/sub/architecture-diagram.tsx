"use client";

import { motion } from "framer-motion";
import { ArrowDownIcon } from "@heroicons/react/24/solid";

type ArchitectureDiagramProps = {
  steps: readonly string[];
};

export const ArchitectureDiagram = ({ steps }: ArchitectureDiagramProps) => {
  return (
    <div className="w-full flex flex-col items-center gap-1.5">
      {steps.map((step, index) => (
        <div key={step} className="w-full flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            className="w-full max-w-md rounded-xl border border-[#7042f866] bg-gradient-to-r from-[#7042f822] to-[#0ea5e922] backdrop-blur-md px-4 sm:px-5 py-2.5 sm:py-3 text-center shadow-[0_0_20px_-8px_rgba(112,66,248,0.6)]"
          >
            <span className="text-xs sm:text-sm md:text-base font-medium text-gray-100">
              {step}
            </span>
          </motion.div>

          {index !== steps.length - 1 && (
            <ArrowDownIcon className="h-4 w-4 sm:h-5 sm:w-5 text-[#b49bff] my-1 shrink-0" />
          )}
        </div>
      ))}
    </div>
  );
};
