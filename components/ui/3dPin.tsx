"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { ButtonGlowing, MovingBorder } from "./buttonGlowing";

type TitleLink = { label: string; href: string };

export const PinContainer = ({ children, titles, className, containerClassName }: { children: React.ReactNode; titles?: { label: string; href: string }[]; className?: string; containerClassName?: string }) => {
  const [transform, setTransform] = useState("translate(-50%,-50%) rotateX(0deg)");

  const onMouseEnter = () => setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  const onMouseLeave = () => setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");

  return (
    <div className={cn("relative group/pin z-50 cursor-pointer", containerClassName)} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div style={{ perspective: "1000px", transform: "rotateX(70deg) translateZ(0deg)" }} className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2">
        <div
          style={{ transform }}
          className="absolute left-1/2 p-0 top-1/2 flex justify-start items-start rounded-br-3xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-transparent border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden"
        >
          <div className={cn("relative z-50", className)}>{children}</div>
        </div>
      </div>
      <PinPerspective titles={titles} />
    </div>
  );
};



export const PinPerspective = ({ titles }: { titles?: { label: string; href: string }[] }) => {
  return (
    <motion.div className="w-96 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
      <div className="w-full h-full -mt-0 flex-none inset-0 relative">
        {/* Multiple links */}

        <div className="absolute top-0 inset-x-0 flex justify-center space-x-2 pointer-events-auto">
          {titles?.map((item, index) => (
            <div className="relative z-10 flex flex-col items-center">
              <div className="absolute -top-8">
                <Image src="/map.png" alt="Logo" width={60} height={60} />
              </div>

              <ButtonGlowing
                as={Link}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                borderRadius="9999px"
                duration={3000}
                containerClassName="w-fit mt-8" // ruang untuk gambar di atas
                className="py-1 px-4 text-sm font-bold"
              >
                <span className="text-white">{item.label}</span>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40" />
              </ButtonGlowing>
            </div>
          ))}
        </div>

        {/* Keep the animation effects */}
        <div style={{ perspective: "1000px", transform: "rotateX(70deg) translateZ(0)" }} className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2">
          {[0, 2, 4].map((delay, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
              animate={{ opacity: [0, 1, 0.5, 0], scale: 1 }}
              transition={{ duration: 6, repeat: Infinity, delay }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            />
          ))}
        </div>

        {/* Lines and dots */}
        <>
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40" />
          <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
          <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40" />
        </>
      </div>
    </motion.div>
  );
};



