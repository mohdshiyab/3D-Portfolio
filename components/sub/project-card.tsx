"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ArrowTopRightOnSquareIcon, DocumentTextIcon } from "@heroicons/react/24/solid";
import { RxGithubLogo } from "react-icons/rx";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  liveDemo?: string;
  caseStudySlug?: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  liveDemo,
  caseStudySlug,
}: ProjectCardProps) => {
  // style applied to the inner card that tilts
  const [cardStyle, setCardStyle] = useState<React.CSSProperties>({
    transform: "rotateX(0deg) rotateY(0deg) scale(1)",
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // mouse X within card
    const y = e.clientY - rect.top;  // mouse Y within card

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Adjust divisors to control tilt intensity (bigger number = gentler tilt)
    const rotateX = ((y - centerY) / 18) * -1;
    const rotateY = (x - centerX) / 18;

    setCardStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`,
      transformStyle: "preserve-3d",
      transition: "transform 150ms ease-out",
      willChange: "transform",
    });
  };

  const handleMouseLeave = () => {
    setCardStyle({
      transform: "rotateX(0deg) rotateY(0deg) scale(1)",
      transformStyle: "preserve-3d",
      transition: "transform 200ms ease",
      willChange: "transform",
    });
  };

  return (
    // Perspective needs to be on a parent of the element being transformed
    <div
      className="[perspective:1000px] h-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        // the element that actually tilts
        style={cardStyle}
        className="h-full transition-transform duration-200 will-change-transform"
      >
        <div className="relative h-full flex flex-col overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#0300145e] backdrop-blur-sm">
          <Image
            src={src}
            alt={title}
            width={1000}
            height={1000}
            className="w-full object-contain"
            priority={false}
          />

          <div className="relative p-4 flex flex-col flex-1">
            <h1 className="text-xl sm:text-2xl font-bold text-white">{title}</h1>
            <p className="mt-2 text-sm sm:text-base text-gray-300 flex-1">
              {description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {liveDemo && (
                <Link
                  href={liveDemo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="button-primary flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs sm:text-sm text-white transition"
                >
                  <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5" />
                  Live Demo
                </Link>
              )}
              {caseStudySlug && (
                <Link
                  href={`/case-study/${caseStudySlug}`}
                  className="flex items-center gap-1.5 rounded-md border border-[#2A0E61] px-3 py-1.5 text-xs sm:text-sm text-white hover:bg-[#0ea5e91a] transition"
                >
                  <DocumentTextIcon className="h-3.5 w-3.5" />
                  Case Study
                </Link>
              )}
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-1.5 rounded-md border border-[#2A0E61] px-3 py-1.5 text-xs sm:text-sm text-white hover:bg-[#7042f81a] transition"
              >
                <RxGithubLogo className="h-3.5 w-3.5" />
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
