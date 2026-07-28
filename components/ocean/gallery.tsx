"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import FadeUp from "../ui/fadeUp";

type Props = {
    images: string[];
};

export default function Gallery({
    images,
}: Props) {

    const [selected, setSelected] =
        useState<string | null>(null);

    return (

        <section
            id="gallery"
            className="bg-white px-6 py-24"
        >

            <div className="mx-auto max-w-6xl">

                <FadeUp>

                    <p className="text-center uppercase tracking-[.35em] text-sky-600">

                        Gallery

                    </p>

                    <h2 className="mt-4 text-center text-5xl font-serif text-sky-900">

                        Our Moments

                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-center text-gray-600">

                        Setiap momen memiliki cerita.
                        Setiap senyum menjadi kenangan
                        yang akan kami simpan selamanya.

                    </p>

                </FadeUp>

                <div className="mt-16 columns-2 gap-5 md:columns-3">

                    {images.map((image, index) => (

                        <FadeUp
                            key={index}
                            delay={index * .05}
                        >

                            <motion.div

                                whileHover={{
                                    scale: 1.03,
                                }}

                                onClick={() =>
                                    setSelected(image)
                                }

                                className="group relative mb-5 cursor-pointer overflow-hidden rounded-[30px]"
                            >

                                <Image
                                    src={image}
                                    alt=""
                                    width={500}
                                    height={700}
                                    className="h-auto w-full transition duration-500 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/30 to-transparent opacity-0 transition group-hover:opacity-100" />

                            </motion.div>

                        </FadeUp>

                    ))}

                </div>

            </div>

            <AnimatePresence>

                {selected && (

                    <motion.div

                        initial={{
                            opacity: 0,
                        }}

                        animate={{
                            opacity: 1,
                        }}

                        exit={{
                            opacity: 0,
                        }}

                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6"
                    >

                        <button

                            onClick={() =>
                                setSelected(null)
                            }

                            className="absolute right-8 top-8 text-white"
                        >

                            <X size={34} />

                        </button>

                        <motion.div

                            initial={{
                                scale: .8,
                            }}

                            animate={{
                                scale: 1,
                            }}

                            exit={{
                                scale: .8,
                            }}

                            className="relative h-[80vh] w-full max-w-5xl"
                        >

                            <Image
                                src={selected}
                                alt=""
                                fill
                                className="object-contain"
                            />

                        </motion.div>

                    </motion.div>

                )}

            </AnimatePresence>

        </section>

    );

}