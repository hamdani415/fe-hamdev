"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const portfolio = [
  {
    title: "Aurora",
    image: "/portfolio/1.jpg",
  },
  {
    title: "Serenity",
    image: "/portfolio/2.jpg",
  },
  {
    title: "Golden",
    image: "/portfolio/3.jpg",
  },
  {
    title: "Luxury",
    image: "/portfolio/4.jpg",
  },
];

export default function Portfolio() {
  return (
    <section className="py-28 bg-[#faf8f5]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm">
            Portfolio
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Hasil Karya Kami
          </h2>

          <p className="mt-5 text-gray-500">
            Beberapa preview template yang telah kami buat.
          </p>

        </div>

        <div className="grid gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-4">

          {portfolio.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="overflow-hidden rounded-3xl bg-white shadow hover:shadow-xl transition"
            >

              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={800}
                className="h-[380px] w-full object-cover transition duration-500 hover:scale-105"
              />

              <div className="p-5">

                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}