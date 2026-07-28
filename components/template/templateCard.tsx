"use client";

import Image from "next/image";
import Button from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  image: string;
  demo: string;
};

export default function TemplateCard({
  title,
  image,
  demo,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-2xl"
    >
      {/* Preview */}
      <div className="relative overflow-hidden">

        <Image
          src={image}
          alt={title}
          width={600}
          height={900}
          className="h-[420px] w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition group-hover:opacity-100">

          <Button
            href={demo}
            className="gap-2"
          >
            Live Demo
            <ArrowUpRight size={18} />
          </Button>

        </div>

      </div>

      {/* Content */}

      <div className="p-6">

        <h3 className="text-2xl font-semibold">
          {title}
        </h3>

        <p className="mt-2 text-gray-500">
          Elegant Digital Invitation
        </p>

        <div className="mt-6 flex gap-3">

          <Button href={demo}>
            Demo
          </Button>

          <Button
            variant="outline"
            href="https://wa.me/628123456789"
          >
            Pesan
          </Button>

        </div>

      </div>
    </motion.div>
  );
}