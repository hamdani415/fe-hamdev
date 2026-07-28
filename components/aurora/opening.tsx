"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Lock } from "lucide-react";
import { useEffect, useState } from "react";

type OpeningProps = {
  bride: string;
  groom: string;
  guest?: string;
  cover: string;
  date: string;
  onOpen: () => void;
};

export default function Opening({
  bride,
  groom,
  guest,
  cover,
  date,
  onOpen,
}: OpeningProps) {
  const [opened, setOpened] = useState(false);

  const formattedDate = date
    ? new Date(date).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  useEffect(() => {
    document.body.style.overflow = opened ? "auto" : "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [opened]);

  const handleOpen = () => {
    setOpened(true);

    setTimeout(() => {
      onOpen();
    }, 500);
  };

  return (
    <section
      id="home"
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >
      {/* Background */}

      <Image
        src={cover}
        alt="Cover"
        fill
        priority
        className="object-cover"
      />

      {/* Gradient Overlay */}

      <motion.div
        animate={{
          opacity: opened ? 0.45 : 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/75"
      />

      {/* Content */}

      <div className="relative z-20 w-full max-w-5xl px-6 text-center text-white">

        <motion.p
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="text-xs uppercase tracking-[8px] text-white/90 md:text-sm"
        >
          THE WEDDING OF
        </motion.p>

        <motion.h1
          layout
          className="mt-8 font-serif text-5xl leading-tight md:text-6xl lg:text-7xl"
        >
          {groom}
        </motion.h1>

        <motion.p
          layout
          className="my-5 text-4xl text-[#C9A15B]"
        >
          &
        </motion.p>

        <motion.h1
          layout
          className="font-serif text-5xl leading-tight md:text-6xl lg:text-7xl"
        >
          {bride}
        </motion.h1>

        <AnimatePresence mode="wait">

          {!opened ? (

            <motion.div
              key="opening"
              initial={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.5,
              }}
            >

              <p className="mt-14 text-base tracking-wide text-white/80">
                Kepada Yth.
              </p>

              <h2 className="mt-3 font-serif text-3xl text-white md:text-4xl">
                {guest}
              </h2>

              <motion.button
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                onClick={handleOpen}
                className="
                  mt-12
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#C59A59]
                  px-10
                  py-4
                  text-white
                  shadow-xl
                  transition-all
                  hover:bg-[#B58A4B]
                "
              >
                <Lock size={18} />

                Buka Undangan

              </motion.button>

            </motion.div>

          ) : (

            <motion.div
              key="hero"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
            >

              <p className="mt-14 text-xl tracking-wide">
                {formattedDate}
              </p>

              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                className="mt-14 flex flex-col items-center"
              >

                <ChevronDown
                  size={34}
                  className="text-[#D5B16D]"
                />

                <p className="mt-2 text-xs uppercase tracking-[6px] text-white/80">
                  Scroll Down
                </p>

              </motion.div>

            </motion.div>

          )}

        </AnimatePresence>

      </div>

    </section>
  );
}