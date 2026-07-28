"use client";

import { Heart } from "lucide-react";

type Props = {
    groom: string;
    bride: string;
};

export default function Footer({
    groom,
    bride,
}: Props) {

    return (

        <footer className="relative overflow-hidden bg-gradient-to-b from-sky-700 via-sky-800 to-slate-900 px-6 py-24 text-white">

            <div className="absolute inset-0 opacity-20">

                <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-cyan-400 blur-[120px]" />

                <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-sky-300 blur-[120px]" />

            </div>

            <div className="relative mx-auto max-w-4xl text-center">

                <p className="uppercase tracking-[.4em] text-sky-300">

                    Thank You

                </p>

                <h2 className="mt-6 text-5xl font-serif">

                    {groom}

                    <span className="mx-4 text-cyan-300">

                        &

                    </span>

                    {bride}

                </h2>

                <p className="mx-auto mt-8 max-w-xl leading-8 text-sky-100">

                    Merupakan suatu kehormatan dan kebahagiaan
                    bagi kami apabila Bapak / Ibu / Saudara / i
                    berkenan hadir untuk memberikan doa restu
                    pada hari bahagia kami.

                </p>

                <div className="mt-12 flex justify-center">

                    <Heart
                        size={34}
                        className="fill-cyan-300 text-cyan-300"
                    />

                </div>

                <p className="mt-8 text-sm tracking-widest text-sky-200">

                    MADE WITH 🤍 BY

                </p>

                <h3 className="mt-2 text-2xl font-semibold text-cyan-300">

                    HAMDEV

                </h3>

                <div className="mt-12 border-t border-white/20 pt-8 text-sm text-sky-200">

                    © {new Date().getFullYear()} HAMDEV.
                    All Rights Reserved.

                </div>

            </div>

        </footer>

    );

}