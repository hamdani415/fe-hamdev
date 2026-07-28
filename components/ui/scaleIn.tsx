"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    delay?: number;
    className?: string;
};

export default function ScaleIn({
    children,
    delay = 0,
    className,
}: Props) {
    return (
        <motion.div
            className={className}
            initial={{
                opacity: 0,
                scale: .92,
            }}
            whileInView={{
                opacity: 1,
                scale: 1,
            }}
            viewport={{
                once: true,
            }}
            transition={{
                duration: .6,
                delay,
            }}
        >
            {children}
        </motion.div>
    );
}