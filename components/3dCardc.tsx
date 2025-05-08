"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3dCard";
import Image from "next/image";
import { Button } from "./ui/button";

type ThreeDCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt?: string;
  linkText?: string;
  linkHref?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  onImageClick?: (id: number) => void;
  popupId?: number;
};

export function ThreeDCardC({ title, description, imageUrl, imageAlt = "thumbnail", linkText = "Try now →", linkHref = "#", buttonText = "Sign up", onButtonClick, onImageClick, popupId }: ThreeDCardProps) {
  return (
    <CardContainer className="inter-var cursor-pointer">
      <CardBody className="bg-gradient-to-tl from-[#3eb8bf] to-[#021f29] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-full rounded-xl p-6 border">
        {/* Background Image Section with Text Overlay */}
        <CardItem translateZ="100" className="relative w-full h-60 mt-4 rounded-br-2xl overflow-hidden" onClick={() => onImageClick?.(popupId!)}>
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }} aria-hidden="true" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 h-full flex flex-col justify-end p-4 text-white">
            <Button className="bg-[#ff0000]  text-white text-xs font-bold">Sign up</Button>
          </div>
        </CardItem>

        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-20">
          <CardItem translateZ={20} as="a" href={linkHref} target="_blank" className="px-4 py-2 rounded-xl  text-sm font-normal text-white">
            {linkText}
          </CardItem>
          <CardItem translateZ={20} as="button" onClick={onButtonClick} className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
            {buttonText}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
