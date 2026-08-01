import Link from "next/link";

import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] sm:p-[20px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-col sm:flex-row items-center justify-around flex-wrap gap-8 sm:gap-4">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="min-w-[160px] h-auto flex flex-col items-center justify-start"
            >
              <h3 className="font-bold text-[16px]">{column.title}</h3>
              {column.data.map(({ icon: Icon, name, link }) => (
                <Link
                  key={`${column.title}-${name}`}
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex flex-row items-center my-[15px]"
                >
                  {Icon && <Icon />}
                  <span className="text-[15px] ml-[6px]">{name}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="w-full h-px max-w-4xl bg-[#2A0E61] my-[10px]" />

        <div className="text-[14px] sm:text-[15px] text-center text-gray-300">
          Designed &amp; Developed by{" "}
          <span className="font-semibold text-white">Mohammad Shiyabuddeen</span>
        </div>

        <div className="mt-[6px] mb-[6px] text-[12px] sm:text-[13px] text-center text-gray-500">
          Built with Next.js · Tailwind CSS · Framer Motion · TypeScript
        </div>

        <div className="mb-[20px] text-[13px] sm:text-[15px] text-center text-gray-400">
          &copy; Mohammad Shiyabuddeen {new Date().getFullYear()} Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};
