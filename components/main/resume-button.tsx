"use client";

import Link from "next/link";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

import { RESUME_LINK } from "@/constants";

export const ResumeButton = () => {
  return (
    <Link
      href={RESUME_LINK}
      download
      target="_blank"
      rel="noreferrer noopener"
      className="group fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-40 flex items-center gap-2 rounded-full border border-[#7042f88b] bg-[#030014]/90 backdrop-blur-md px-4 sm:px-5 py-3 shadow-[0_0_25px_-8px_rgba(112,66,248,0.9)] hover:shadow-[0_0_35px_-6px_rgba(112,66,248,1)] transition-all"
      aria-label="Download Resume"
    >
      <ArrowDownTrayIcon className="h-5 w-5 text-[#b49bff] group-hover:-translate-y-0.5 transition-transform" />
      <span className="hidden sm:inline text-sm font-medium text-white whitespace-nowrap">
        Download Resume
      </span>
    </Link>
  );
};
