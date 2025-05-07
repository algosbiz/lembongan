"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
          className="absolute left-1/2 p-4 top-1/2 flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-black border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden"
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
      <div className="w-full h-full -mt-7 flex-none inset-0">
        {/* Render multiple link buttons */}
        <div className="absolute top-0 inset-x-0 flex justify-center space-x-2">
          {titles?.map((item, index) => (
            <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="relative z-10 pointer-events-auto rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 hover:bg-zinc-800 transition">
              <span className="text-white text-xs font-bold">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};


