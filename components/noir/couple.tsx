"use client";

import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

interface CoupleProps {
    groom: {
        name: string;
        father: string;
        mother: string;
        photo: string;
        instagram?: string;
    };
    bride: {
        name: string;
        father: string;
        mother: string;
        photo: string;
        instagram?: string;
    };
}

export default function Couple({
    groom,
    bride,
}: CoupleProps) {

    return (

        <section id="couple" className="relative overflow-hidden bg-[#0b0b0b] py-24 text-white">

            <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-yellow-500/5 blur-[140px]" />

            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-yellow-500/5 blur-[140px]" />

            <div className="container mx-auto max-w-6xl px-6">

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

                    <p className="tracking-[0.35em] uppercase text-yellow-500 text-xs">

                        Bride & Groom

                    </p>

                    <h2 className="mt-5 font-serif text-5xl">

                        The Happy Couple

                    </h2>

                    <div className="mx-auto mt-6 h-px w-28 bg-yellow-500" />

                    <p className="mx-auto mt-8 max-w-xl text-gray-400">

                        Dan di antara tanda-tanda kekuasaan-Nya ialah Dia
                        menciptakan pasangan-pasangan untukmu agar kamu merasa
                        tenteram kepadanya.

                    </p>

                    <p className="mt-4 italic text-yellow-500">

                        QS. Ar-Rum : 21

                    </p>

                </motion.div>

                <div className="grid gap-16 md:grid-cols-2">

                    {/* Groom */}

                    <motion.div

                        initial={{
                            opacity: 0,
                            x: -60,
                        }}

                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}

                        viewport={{
                            once: true,
                        }}

                        className="text-center"

                    >

                        <div className="mx-auto h-72 w-72 overflow-hidden rounded-full border border-yellow-500 p-2">

                            <div className="relative h-full w-full overflow-hidden rounded-full">

                                <Image
                                    src={groom.photo}
                                    alt={groom.name}
                                    fill
                                    className="object-cover transition duration-700 hover:scale-110"
                                />

                            </div>

                        </div>

                        <h2 className="mt-8 font-serif text-5xl">

                            {groom.name}

                        </h2>

                        <div className="mx-auto my-6 h-px w-24 bg-yellow-500" />

                        <p className="text-gray-300">

                            Putra dari

                        </p>

                        <p className="mt-3">

                            {groom.father}

                        </p>

                        <p>

                            &

                        </p>

                        <p>

                            {groom.mother}

                        </p>

                        {groom.instagram && (

                            <a

                                href={groom.instagram}

                                target="_blank"

                                className="mt-8 inline-flex items-center gap-2 rounded-full border border-yellow-500 px-5 py-3 text-yellow-500 transition hover:bg-yellow-500 hover:text-black"

                            >

                                <FaInstagram size={18} />

                                Instagram

                            </a>

                        )}

                    </motion.div>

                    {/* Bride */}

                    <motion.div

                        initial={{
                            opacity: 0,
                            x: 60,
                        }}

                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}

                        viewport={{
                            once: true,
                        }}

                        className="text-center"

                    >

                        <div className="mx-auto h-72 w-72 overflow-hidden rounded-full border border-yellow-500 p-2">

                            <div className="relative h-full w-full overflow-hidden rounded-full">

                                <Image
                                    src={bride.photo}
                                    alt={bride.name}
                                    fill
                                    className="object-cover transition duration-700 hover:scale-110"
                                />

                            </div>

                        </div>

                        <h2 className="mt-8 font-serif text-5xl">

                            {bride.name}

                        </h2>

                        <div className="mx-auto my-6 h-px w-24 bg-yellow-500" />

                        <p className="text-gray-300">

                            Putri dari

                        </p>

                        <p className="mt-3">

                            {bride.father}

                        </p>

                        <p>

                            &

                        </p>

                        <p>

                            {bride.mother}

                        </p>

                        {bride.instagram && (

                            <a

                                href={bride.instagram}

                                target="_blank"

                                className="mt-8 inline-flex items-center gap-2 rounded-full border border-yellow-500 px-5 py-3 text-yellow-500 transition hover:bg-yellow-500 hover:text-black"

                            >

                                <FaInstagram size={18} />

                                Instagram

                            </a>

                        )}

                    </motion.div>

                </div>

            </div>

        </section>

    );

}