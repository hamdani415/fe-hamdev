"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
    bride: string;
    groom: string;
    guest: string;
    date: string;
    cover: string;
    opened: boolean;
    onOpen: () => void;
}

export default function Opening({
    bride,
    groom,
    guest,
    date,
    cover,
    opened,
    onOpen,
}: Props) {

    const [particles, setParticles] = useState<any[]>([]);


    useEffect(() => {

        const data = Array.from({ length: 45 }).map(() => ({
            left: Math.random() * 100,
            duration: 10 + Math.random() * 8,
            delay: Math.random() * 5,
            size: Math.random() * 3 + 1,
            opacity: Math.random() * .6 + .3,
        }));

        setParticles(data);

    }, []);


    return (

        <section
            id="home"
            className="
    relative
    h-screen
    min-h-screen
    flex
    items-center
    justify-center
    overflow-hidden
    px-6
    py-20
    "
        >

            {/* Background */}

            <Image
                src={cover}
                alt="cover"
                fill
                priority
                className="object-cover scale-110"
            />


            {/* Overlay Noir */}

            <div className="
                absolute
                inset-0
                bg-gradient-to-b
                from-black/80
                via-black/70
                to-black
            "/>


            {/* Glow */}

            <div className="absolute inset-0">

                <div className="
                    absolute
                    left-1/2
                    top-0
                    h-80
                    w-80
                    -translate-x-1/2
                    rounded-full
                    bg-yellow-500/10
                    blur-[140px]
                "/>


                <div className="
                    absolute
                    bottom-0
                    left-1/2
                    h-80
                    w-80
                    -translate-x-1/2
                    rounded-full
                    bg-yellow-300/10
                    blur-[140px]
                "/>

            </div>



            {/* Content */}

            <motion.div
                initial={{
                    opacity: 0,
                    y: 30
                }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                className="
    relative
    z-10
    text-center
    translate-y-6
    md:translate-y-10
    "
            >

                <p className="
                text-[11px]
                uppercase
                tracking-[0.45em]
                text-yellow-500
                ">
                    The Wedding Of
                </p>


                <h1 className="
                mt-8
                text-6xl
                font-serif
                text-white
                ">
                    {groom}
                </h1>


                <p className="
                my-3
                text-3xl
                text-yellow-500
                ">
                    &
                </p>


                <h1 className="
                text-6xl
                font-serif
                text-white
                ">
                    {bride}
                </h1>



                <div className="
                mx-auto
                my-8
                h-px
                w-28
                bg-yellow-500
                "/>



                <p className="
                text-sm
                uppercase
                tracking-[0.4em]
                text-gray-300
                ">
                    {date}
                </p>



                <div className="mt-14">

                    <p className="
                    text-xs
                    uppercase
                    tracking-[0.35em]
                    text-gray-400
                    ">
                        Kepada Yth.
                    </p>


                    <h3 className="
                    mt-3
                    text-2xl
                    text-yellow-500
                    ">
                        {guest}
                    </h3>

                </div>



                <button

                    onClick={onOpen}

                    disabled={opened}

                    className="
                    mt-12
                    rounded-full
                    border
                    border-yellow-500
                    bg-yellow-500
                    px-10
                    py-4
                    font-medium
                    text-black
                    transition
                    hover:bg-black
                    hover:text-yellow-500
                    "

                >

                    {opened
                        ? "Undangan Dibuka"
                        : "Buka Undangan"}

                </button>



                <motion.div

                    animate={{
                        y: [0, 8, 0]
                    }}

                    transition={{
                        repeat: Infinity,
                        duration: 1.8
                    }}

                    className="mt-10"

                >

                    <ChevronDown
                        className="mx-auto text-yellow-500"
                    />

                </motion.div>


            </motion.div>


        </section>

    );

}