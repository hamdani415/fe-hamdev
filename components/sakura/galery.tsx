"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FadeUp from "../ui/fadeUp";

type GalleryProps = {
  images: string[];
};

export default function Gallery({
  images,
}: GalleryProps) {
  return (
    <section
      id="gallery"
      className="bg-[#FFF9FA] py-24"
    >
      <div className="mx-auto max-w-6xl px-6">

        <FadeUp>

          <div className="text-center">

            <span className="text-sm uppercase tracking-[5px] text-[#D98A9E]">
              Gallery
            </span>

            <h2 className="mt-3 font-serif text-5xl text-[#5A4A4A]">
              Our Moments
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-8 text-gray-600">
              Setiap perjalanan memiliki cerita,
              dan setiap cerita memiliki kenangan
              yang ingin kami abadikan bersama.
            </p>

          </div>

        </FadeUp>

        {/* Masonry */}

        <div className="mt-16 columns-2 gap-5 md:columns-3">

          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: .5,
                delay: index * .08,
              }}
              className="mb-5 break-inside-avoid"
            >
              <div className="group overflow-hidden rounded-[28px]">

                <Image
                  src={image}
                  alt={`Gallery ${index}`}
                  width={700}
                  height={900}
                  className="h-auto w-full object-cover transition duration-500 group-hover:scale-110"
                />

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}