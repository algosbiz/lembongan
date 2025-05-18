"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { ButtonGlowing } from "./buttonGlowing";

type TitleLink = { label: string; href: string };

export const PinContainer = ({
  children,
  titles,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  titles?: TitleLink[];
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState("translate(-50%,-50%) rotateX(0deg)");
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleClick = () => {
    if (isMobile) setIsActive((prev) => !prev);
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsActive(true); // trigger animation on hover
      setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsActive(false); // reset on hover leave
      setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
    }
  };

  const getTransform = () => {
    return isActive
      ? "translate(-50%,-50%) rotateX(40deg) scale(0.8)"
      : "translate(-50%,-50%) rotateX(0deg) scale(1)";
  };

  return (
    <div
      className={cn("relative group/pin z-50 cursor-pointer", containerClassName)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{ transform: getTransform() }}
          className="absolute left-1/2 top-1/2 flex justify-start items-start rounded-br-[40px] rounded-bl-sm rounded-tl-sm rounded-tr-sm shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-transparent border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden -translate-x-1/2 -translate-y-1/2"
        >
          <div className={cn("relative z-50", className)}>{children}</div>
        </div>
      </div>

      <PinPerspective titles={titles} isMobile={isMobile} isActive={isActive} />
    </div>
  );
};

export const PinPerspective = ({
  titles,
  isMobile,
  isActive,
}: {
  titles?: TitleLink[];
  isMobile: boolean;
  isActive: boolean;
}) => {
  const visibleClass = isMobile
    ? isActive
      ? "opacity-100 pointer-events-auto"
      : "opacity-0 pointer-events-none"
    : "opacity-0 pointer-events-none group-hover/pin:opacity-100 group-hover/pin:pointer-events-auto";

  const shouldShowEffects = isMobile ? isActive : true;

  // Variants for staggered animation
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      key={isActive ? "active" : "inactive"}
      className={cn(
        "w-96 h-96 flex items-center justify-center z-[60] transition-opacity duration-500",
        visibleClass
      )}
    >
      <div className="w-full h-full flex-none inset-0 relative">
        {/* Buttons - Animated */}
        <motion.div
          className="absolute top-0 inset-x-0 flex justify-center space-x-2 pointer-events-auto"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {titles?.map((item, index) => (
            <motion.div
              key={index}
              className="relative z-10 flex flex-col items-center"
              variants={itemVariants}
            >
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
                containerClassName="lg:w-[150px] mt-9"
                className="py-0 flex items-center px-4 lg:text-xl font-bold mb-5"
              >
                <span className="text-[#dcf106]">{item.label}</span>
              </ButtonGlowing>
            </motion.div>
          ))}
        </motion.div>

        {/* Bubble burst effect */}
        {shouldShowEffects && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial="hidden"
            animate="show"
            variants={containerVariants}
          >
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute rounded-full ${
                  Math.random() > 0.5
                    ? "bg-cyan-300 w-1.5 h-1.5"
                    : "bg-sky-400 w-2 h-2"
                }`}
                initial={{
                  opacity: 0,
                  x: 0,
                  y: 0,
                  scale: 0.5,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  x: [0, (Math.random() - 0.5) * 160],
                  y: [0, (Math.random() - 1.2) * 160],
                  scale: [0.5, 1.5, 0.5],
                }}
                transition={{
                  duration: 1.3,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
                style={{
                  top: "50%",
                  left: "50%",
                }}
              />
            ))}
          </motion.div>
        )}

        {/* Ripple and lines */}
        {shouldShowEffects && (
          <>
            <div
              style={{
                perspective: "1000px",
                transform: "rotateX(70deg) translateZ(0)",
              }}
              className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
            >
              {[0, 2, 4].map((delay, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
                  animate={{ opacity: [0, 1, 0.5, 0], scale: 1 }}
                  transition={{ duration: 6, repeat: Infinity, delay }}
                  className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-full bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
                />
              ))}
            </div>

            <div className="absolute right-1/2 bottom-1/2 translate-y-[14px] w-px h-28 bg-gradient-to-b from-transparent to-cyan-500 blur-[2px]" />
            <div className="absolute right-1/2 bottom-1/2 translate-y-[14px] w-px h-28 bg-gradient-to-b from-transparent to-cyan-500" />
            <div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 translate-y-[14px] w-[4px] h-[4px] rounded-full bg-cyan-600 z-40 blur-[3px]" />
            <div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 translate-y-[14px] w-[2px] h-[2px] rounded-full bg-cyan-300 z-40" />
          </>
        )}
      </div>
    </motion.div>
  );
};

