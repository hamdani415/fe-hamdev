"use client";

import { motion } from "framer-motion";
import { ChevronDown, Waves } from "lucide-react";
import Image from "next/image";

interface Props {
    bride: string;
    groom: string;
    guest: string;
    date: string;
    cover: string;
    opened: boolean;
    onOpen: () => void;
}

export default function Opening({
    bride,
    groom,
    guest,
    date,
    cover,
    opened,
    onOpen,
}: Props) {
    
    return (

        <motion.section
            id="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .8 }}
            className="relative flex h-screen overflow-hidden bg-sky-100"
        >

            {/* Background */}

            <Image
                src={cover}
                alt="cover"
                fill
                priority
                className="object-cover"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-b from-sky-200/30 via-sky-100/55 to-white/90" />

            {/* Sun */}

            <motion.div
                animate={{
                    y: [0, -12, 0],
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 7,
                }}
                className="absolute left-1/2 top-14 h-44 w-44 -translate-x-1/2 rounded-full bg-yellow-300/70 blur-3xl"
            />

            {/* Birds */}

            <motion.div
                animate={{
                    x: [-300, 500],
                    y: [0, -20, 20],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear",
                }}
                className="absolute top-20 z-10 text-3xl"
            >
                🕊️ 🕊️ 🕊️
            </motion.div>

            {/* Bubble */}

            <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">

                {Array.from({ length: 18 }).map((_, i) => (

                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-white/40 backdrop-blur-md"
                        style={{
                            width: 8 + i,
                            height: 8 + i,
                            left: `${(i * 7) % 100}%`,
                            bottom: -60,
                        }}
                        animate={{
                            y: -900,
                            opacity: [0, 1, .6, 0],
                        }}
                        transition={{
                            duration: 10 + i,
                            repeat: Infinity,
                            delay: i * .4,
                            ease: "linear",
                        }}
                    />

                ))}

            </div>

            {/* Content */}

            <div className="relative z-30 flex h-full w-full flex-col items-center justify-center px-6 text-center">

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .8 }}
                    className="text-xs uppercase tracking-[.45em] text-sky-700"
                >
                    Beach Wedding
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: .2 }}
                    className="mt-8 text-6xl font-serif text-sky-950 md:text-7xl"
                >
                    {groom}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: .4 }}
                    className="my-3 text-3xl text-sky-500"
                >
                    &
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: .6 }}
                    className="text-6xl font-serif text-sky-950 md:text-7xl"
                >
                    {bride}
                </motion.h1>

                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 140 }}
                    transition={{ delay: .8 }}
                    className="mt-8 h-[2px] bg-sky-500"
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-6 uppercase tracking-[.35em] text-sky-700"
                >
                    {date}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 }}
                    className="mt-14"
                >

                    <p className="text-xs uppercase tracking-[.35em] text-sky-600">

                        Kepada Yth.

                    </p>

                    <h2 className="mt-3 text-3xl font-semibold text-sky-900">

                        {guest}

                    </h2>

                </motion.div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: .95 }}
                    onClick={onOpen}
                    className="relative z-40 mt-14 flex items-center gap-3 rounded-full bg-sky-500 px-10 py-4 font-medium text-white shadow-2xl"
                >

                    <Waves size={20} />

                    Buka Undangan

                </motion.button>

                <motion.div
                    animate={{
                        y: [0, 10, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                    }}
                    className="absolute bottom-10"
                >

                    <ChevronDown
                        size={30}
                        className="text-sky-600"
                    />

                </motion.div>

            </div>

            {/* Ombak */}

            <div className="pointer-events-none absolute bottom-0 left-0 z-20 h-44 w-full overflow-hidden">

                <motion.svg
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                    className="absolute bottom-0 h-full w-[220%]"
                    animate={{
                        x: [-120, 0, -120],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 12,
                        ease: "easeInOut",
                    }}
                >
                    <path
                        fill="#ffffff"
                        d="M0,192L60,181.3C120,171,240,149,360,149.3C480,149,600,171,720,192C840,213,960,235,1080,229.3C1200,224,1320,192,1380,176L1440,160L1440,320L0,320Z"
                    />
                </motion.svg>

                <motion.svg
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                    className="absolute bottom-0 h-full w-[220%] opacity-50"
                    animate={{
                        x: [0, -120, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 18,
                        ease: "easeInOut",
                    }}
                >
                    <path
                        fill="#bdefff"
                        d="M0,224L60,202.7C120,181,240,139,360,149.3C480,160,600,224,720,234.7C840,245,960,203,1080,176C1200,149,1320,139,1380,138.7L1440,139L1440,320L0,320Z"
                    />
                </motion.svg>

            </div>

        </motion.section>

    );

}