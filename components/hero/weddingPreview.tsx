"use client";

import { motion } from "framer-motion";

export default function WeddingPreview() {
  return (
    <motion.div
      animate={{
        y: [0, -250, 0],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="bg-[#faf8f5]"
    >
      {/* Cover */}
      <section className="flex h-[500px] flex-col items-center justify-center px-6 text-center">

        <p className="text-xs uppercase tracking-[4px] text-gray-500">
          Wedding Invitation
        </p>

        <h2 className="mt-6 text-4xl font-bold">
          Andi
        </h2>

        <p className="my-3 text-yellow-600 text-2xl">&</p>

        <h2 className="text-4xl font-bold">
          Siti
        </h2>

        <p className="mt-8 text-gray-500">
          10 Oktober 2026
        </p>

        <button className="mt-10 rounded-full bg-yellow-600 px-6 py-3 text-white">
          Buka Undangan
        </button>

      </section>

      {/* Countdown */}

      <section className="flex h-[350px] flex-col items-center justify-center bg-white">

        <h3 className="text-2xl font-semibold">
          Countdown
        </h3>

        <div className="mt-8 flex gap-4">

          <div className="rounded-xl bg-[#faf8f5] p-5 shadow">

            <h4 className="text-2xl font-bold">
              120
            </h4>

            <p>Hari</p>

          </div>

          <div className="rounded-xl bg-[#faf8f5] p-5 shadow">

            <h4 className="text-2xl font-bold">
              08
            </h4>

            <p>Jam</p>

          </div>

        </div>

      </section>

      {/* Gallery */}

      <section className="flex h-[400px] items-center justify-center">

        <div className="grid grid-cols-2 gap-3 p-4">

          <div className="h-32 rounded-xl bg-yellow-200"></div>
          <div className="h-32 rounded-xl bg-yellow-100"></div>
          <div className="h-32 rounded-xl bg-yellow-100"></div>
          <div className="h-32 rounded-xl bg-yellow-200"></div>

        </div>

      </section>

    </motion.div>
  );
}