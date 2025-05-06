"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInRightProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function FadeInRight({ children, delay = 0, className = "" }: FadeInRightProps) {
  return (
    <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay, ease: "easeOut" }} viewport={{ once: true }} className={className}>
      {children}
    </motion.div>
  );
}
