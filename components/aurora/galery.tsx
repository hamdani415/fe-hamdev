"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";
import ScaleIn from "../ui/scaleIn";

type GalleryProps = {
  images: string[];
};

export default function Gallery({
  images,
}: GalleryProps) {
  const [selected, setSelected] =
    useState<string | null>(null);

  return (
    <section
      id="gallery"
      className="bg-[#FFFDF8] py-24"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Title */}

        <div className="text-center">

          <span className="text-sm uppercase tracking-[5px] text-[#B08D57]">
            Gallery
          </span>

          <h2 className="mt-3 font-serif text-5xl">
            Our Moments
          </h2>

          <div className="mx-auto mt-5 h-[2px] w-20 bg-[#B08D57]" />

        </div>

        {/* Gallery */}

        <div className="mt-16 columns-2 gap-5 md:columns-3">

          {images.map((image, index) => (

            <ScaleIn
              key={index}
              delay={index * 0.08}
              className="mb-5 break-inside-avoid"
            >

              <button
                onClick={() => setSelected(image)}
                className="group block w-full overflow-hidden rounded-[30px]"
              >

                <Image
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  width={700}
                  height={900}
                  className="h-auto w-full object-cover transition duration-500 group-hover:scale-110"
                />

              </button>

            </ScaleIn>

          ))}

        </div>

      </div>

      {/* Lightbox */}

      {selected && (

        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-5"
        >

          <button className="absolute right-6 top-6 text-white">

            <X size={36} />

          </button>

          <Image
            src={selected}
            alt=""
            width={1400}
            height={1800}
            className="max-h-[90vh] w-auto rounded-3xl object-contain"
          />

        </div>

      )}

    </section>
  );
}