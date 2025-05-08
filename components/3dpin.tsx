"use client";

import React from "react";
import Image from "next/image";
import { PinContainer } from "./ui/3dPin";

type AnimatedPinProps = {
  titles: { label: string; href: string }[];
  heading: string;
  description?: string;
  imageSrc: string;
  imageAlt?: string;
  iconSrc?: string;
};

export function AnimatedPin({ titles, heading, description, imageSrc, imageAlt = "background image", iconSrc }: AnimatedPinProps) {
  return (
    <div className="h-full z-10  flex items-center justify-center">
      <PinContainer titles={titles}>
        <div className="relative w-[650px] h-[22rem] rounded-br-xl overflow-hidden shadow-lg">
          {/* Background Image */}
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${imageSrc})` }} aria-hidden="true" />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />
          {/* Text Content */}
          <div className="relative z-10 h-full flex items-end justify-start px-6 pb-6">
            <div>
              {iconSrc && <Image src={iconSrc} width={40} height={40} alt="icon" className="mb-2" />}
              <h3 className="text-white text-2xl font-light mb-2">{heading}</h3>

              {description && <p className="text-gray-300 text-sm mt-2">{description}</p>}
            </div>
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
