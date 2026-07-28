"use client";

import { motion } from "framer-motion";
import Button from "../ui/button";
import MockupPhone from "./MocckupPhone";
import WeddingPreview from "./weddingPreview";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#faf8f5]">

      <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-yellow-300/20 blur-[120px]" />
      <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-yellow-200/20 blur-[120px]" />

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-16 px-6 pt-32 lg:flex-row">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
          className="max-w-xl text-center lg:text-left"
        >

          <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm text-yellow-700">
            ✨ Digital Wedding Invitation
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight lg:text-7xl">

            Buat Momen
            <span className="block text-yellow-600">
              Pernikahanmu
            </span>

            Lebih Elegan.

          </h1>

          <p className="mt-8 text-lg leading-9 text-gray-600">

            Undangan digital modern dengan desain premium,
            responsif, musik, countdown,
            galeri foto, RSVP,
            dan masih banyak lagi.

          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <Button href="#template">
              Lihat Template
            </Button>

            <Button variant="outline" href="https://wa.me/6287815905612">
              WhatsApp
            </Button>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
        >
          <MockupPhone>

            <WeddingPreview />

          </MockupPhone>

        </motion.div>

      </div>

    </section>
  );
}