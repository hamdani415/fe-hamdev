"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type OpeningProps = {
    bride: string;
    groom: string;
    guest?: string;
    cover: string;
    date: string;
    onOpen?: () => void;
};

export default function Opening({
    bride,
    groom,
    guest,
    cover,
    date,
    onOpen,
}: OpeningProps) {

    const formattedDate = date
        ? new Date(date).toLocaleDateString(
            "id-ID",
            {
                day: "numeric",
                month: "long",
                year: "numeric",
            }
        )
        : "";

    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-6 md:px-8 md:py-16"
        >
            {/* Background */}
            <Image
                src={cover}
                alt="Cover"
                fill
                priority
                className="object-cover scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-white/45 backdrop-blur-[3px]" />

            {/* Card */}
            <motion.div
                initial={{
                    opacity: 0,
                    y: 25,
                    scale: 0.96,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                }}
                transition={{
                    duration: 0.8,
                }}
                className="
          relative z-10
          w-full
          max-w-sm
          md:max-w-md
          rounded-[36px]
          border border-pink-100
          bg-white/80
          shadow-2xl
          backdrop-blur-xl

          px-7 py-7
          md:px-10 md:py-12

          text-center
        "
            >
                {/* Heading */}
                <p className="text-xs uppercase tracking-[5px] text-[#C97C90]">
                    The Wedding Of
                </p>

                {/* Foto */}
                <div className="relative mx-auto mt-6 h-40 w-40 md:h-52 md:w-52 overflow-hidden rounded-full border-[5px] border-pink-200 shadow-lg">
                    <Image
                        src={cover}
                        alt="Couple"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Nama */}
                <div className="mt-7 space-y-3">
                    <h1 className="font-serif text-4xl md:text-6xl text-[#5A4A4A]">
                        {groom}
                    </h1>

                    <p className="text-2xl text-[#E89BAE]">
                        ♥
                    </p>

                    <h1 className="font-serif text-4xl md:text-6xl text-[#5A4A4A]">
                        {bride}
                    </h1>
                </div>

                {/* Divider */}
                <div className="mx-auto my-6 h-px w-20 bg-pink-200" />

                {/* Date */}
                <p className="text-sm md:text-base text-[#7B6C6C]">
                    {formattedDate}
                </p>

                {/* Guest */}
                <div className="mt-6">
                    <p className="text-xs uppercase tracking-[2px] text-[#A18A8A]">
                        Kepada Yth.
                    </p>

                    <h2 className="mt-2 text-xl md:text-2xl font-semibold text-[#5A4A4A]">
                        {guest}
                    </h2>
                </div>

                {/* Button */}
                <button
                    onClick={() => {
                        onOpen?.();

                        setTimeout(() => {

                            const section = document.getElementById("couple");

                            if (!section) return;

                            window.scrollTo({
                                top: section.offsetTop,
                                behavior: "smooth",
                            });

                        }, 300);
                    }}
                    className="
            mt-7
            w-full
            rounded-full
            bg-[#E89BAE]
            py-3.5
            font-semibold
            text-white
            transition
            duration-300
            hover:scale-[1.02]
            hover:bg-[#D87893]
          "
                >
                    💌 Buka Undangan
                </button>
            </motion.div>
        </section>
    );
}