"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Palette,
  Smartphone,
  MessageCircle,
} from "lucide-react";

const items = [
  {
    icon: Zap,
    title: "Proses Cepat",
    desc: "Undangan dapat selesai dalam hitungan menit.",
  },
  {
    icon: Palette,
    title: "Desain Premium",
    desc: "Template modern dan elegan untuk hari spesialmu.",
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    desc: "Tampil sempurna di Android maupun iPhone.",
  },
  {
    icon: MessageCircle,
    title: "Free Revisi",
    desc: "Revisi ringan tanpa biaya tambahan.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-28 bg-white">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm text-yellow-700">
            Kenapa HAMDEV?
          </span>

          <h2 className="mt-6 text-4xl font-bold">
            Kenapa Memilih HAMDEV?
          </h2>

          <p className="mt-4 text-gray-500">
            Kami membuat undangan digital yang cepat,
            elegan, dan memberikan pengalaman terbaik
            untuk tamu undanganmu.
          </p>

        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {items.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                }}
                transition={{
                  duration: .25,
                }}
                className="rounded-3xl border border-gray-100 bg-[#faf8f5] p-8 shadow-sm hover:shadow-xl"
              >

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500 text-white">

                  <Icon size={28} />

                </div>

                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-500">
                  {item.desc}
                </p>

              </motion.div>
            );

          })}

        </div>

      </div>

    </section>
  );
}