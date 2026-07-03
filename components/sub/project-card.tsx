"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
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
      className="[perspective:1000px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        // the element that actually tilts
        style={cardStyle}
        className="transition-transform duration-200 will-change-transform"
      >
        <Link
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] block"
        >
          <Image
            src={src}
            alt={title}
            width={1000}
            height={1000}
            className="w-full object-contain"
            priority={false}
          />

          <div className="relative p-4">
            <h1 className="text-2xl font-bold text-white">{title}</h1>
            <p className="mt-2 text-gray-300">{description}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
