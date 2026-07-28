"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

interface Props {
    images: string[];
}

export default function Gallery({
    images,
}: Props) {

    const [selected, setSelected] = useState<string | null>(null);

    return (

        <section id="gallery" className="relative overflow-hidden bg-black py-24">

            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-yellow-500/5 blur-[150px]" />

            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-yellow-500/5 blur-[150px]" />

            <div className="container mx-auto max-w-7xl px-6">

                <motion.div

                    initial={{
                        opacity: 0,
                        y: 40,
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}

                    viewport={{
                        once: true,
                    }}

                    className="mb-16 text-center"

                >

                    <p className="text-xs uppercase tracking-[0.4em] text-yellow-500">

                        Gallery

                    </p>

                    <h2 className="mt-5 font-serif text-5xl text-white">

                        Our Memories

                    </h2>

                    <div className="mx-auto mt-6 h-px w-24 bg-yellow-500" />

                </motion.div>

                <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">

                    {images.map((image, index) => (

                        <motion.div

                            key={index}

                            initial={{
                                opacity: 0,
                                y: 40,
                            }}

                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}

                            viewport={{
                                once: true,
                            }}

                            whileHover={{
                                scale: 1.03,
                            }}

                            className="mb-5 cursor-pointer overflow-hidden rounded-3xl border border-yellow-500/20"

                            onClick={() => setSelected(image)}

                        >

                            <div className="relative aspect-[4/5]">

                                <Image
                                    src={image}
                                    alt=""
                                    fill
                                    className="object-cover transition duration-700 hover:scale-110"
                                />

                            </div>

                        </motion.div>

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

                        className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 p-5"

                    >

                        <button

                            onClick={() => setSelected(null)}

                            className="absolute right-6 top-6 rounded-full border border-yellow-500 p-3 text-yellow-500"

                        >

                            <X />

                        </button>

                        <motion.div

                            initial={{
                                scale: .9,
                            }}

                            animate={{
                                scale: 1,
                            }}

                            className="relative h-[80vh] w-full max-w-4xl"

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