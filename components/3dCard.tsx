"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3dCard";
import Image from "next/image";


type ThreeDCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt?: string;
  linkText?: string;
  linkHref?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  onImageClick?: (id: number) => void; // ← tambah ini
  popupId?: number;
};

export function ThreeDCard({
  title,
  description,
  imageUrl,
  imageAlt = "thumbnail",
  linkText = "Try now →",
  linkHref = "#",
  buttonText = "Sign up",
  onButtonClick,
  onImageClick, 
  popupId,
}: ThreeDCardProps) {
  return (
    <CardContainer className="inter-var cursor-pointer">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        {/* <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
          {title}
        </CardItem> */}
        {/* <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          {description}
        </CardItem> */}
        <CardItem translateZ="100" className="w-full mt-4">
          <Image src={imageUrl} height="1000" width="1000" className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl" alt={imageAlt} onClick={() => onImageClick?.(popupId!)} />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem translateZ={20} as="a" href={linkHref} target="_blank" className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
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
