"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export default function FadeLeft({
  children,
  delay = 0,
  className,
}: Props) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        x: -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: .7,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}