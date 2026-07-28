"use client";

import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import FadeUp from "../ui/fadeUp";

type Person = {
    name: string;
    father: string;
    mother: string;
    photo: string;
    instagram?: string;
};

type Props = {
    groom: Person;
    bride: Person;
};

export default function Couple({
    groom,
    bride,
}: Props) {

    return (

        <section
            id="couple"
            className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50 to-white px-6 py-24"
        >

            {/* Blur */}

            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-sky-200/30 blur-[120px]" />

            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-200/30 blur-[120px]" />

            <div className="relative mx-auto max-w-6xl">

                <FadeUp>

                    <p className="text-center uppercase tracking-[.35em] text-sky-600">

                        Bride & Groom

                    </p>

                    <h2 className="mt-4 text-center text-5xl font-serif text-sky-900">

                        We Found Love

                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-center text-gray-600">

                        Dengan memohon rahmat dan ridho Allah SWT,
                        kami mengundang Bapak/Ibu/Saudara/i
                        untuk hadir dalam acara pernikahan kami.

                    </p>

                </FadeUp>

                <div className="mt-20 grid gap-20 lg:grid-cols-2">

                    {/* Groom */}

                    <FadeUp>

                        <div className="text-center">

                            <div className="relative mx-auto h-72 w-72">

                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-300 to-cyan-200 p-1">

                                    <div className="relative h-full w-full overflow-hidden rounded-full bg-white">

                                        <Image
                                            src={groom.photo}
                                            alt={groom.name}
                                            fill
                                            className="object-cover"
                                        />

                                    </div>

                                </div>

                            </div>

                            <h3 className="mt-8 text-4xl font-serif text-sky-900">

                                {groom.name}

                            </h3>

                            <p className="mt-4 text-gray-600">

                                Putra dari

                            </p>

                            <p className="mt-2 font-semibold text-sky-800">

                                {groom.father}

                            </p>

                            <p className="text-sky-800">

                                &

                            </p>

                            <p className="font-semibold text-sky-800">

                                {groom.mother}

                            </p>

                            {groom.instagram && (

                                <a
                                    href={groom.instagram}
                                    target="_blank"
                                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-white transition hover:bg-sky-600"
                                >

                                    <FaInstagram size={18} />

                                    Instagram

                                </a>

                            )}

                        </div>

                    </FadeUp>

                    {/* Bride */}

                    <FadeUp delay={0.2}>

                        <div className="text-center">

                            <div className="relative mx-auto h-72 w-72">

                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-300 to-sky-200 p-1">

                                    <div className="relative h-full w-full overflow-hidden rounded-full bg-white">

                                        <Image
                                            src={bride.photo}
                                            alt={bride.name}
                                            fill
                                            className="object-cover"
                                        />

                                    </div>

                                </div>

                            </div>

                            <h3 className="mt-8 text-4xl font-serif text-sky-900">

                                {bride.name}

                            </h3>

                            <p className="mt-4 text-gray-600">

                                Putri dari

                            </p>

                            <p className="mt-2 font-semibold text-sky-800">

                                {bride.father}

                            </p>

                            <p className="text-sky-800">

                                &

                            </p>

                            <p className="font-semibold text-sky-800">

                                {bride.mother}

                            </p>

                            {bride.instagram && (

                                <a
                                    href={bride.instagram}
                                    target="_blank"
                                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-white transition hover:bg-sky-600"
                                >

                                    <FaInstagram size={18} />

                                    Instagram

                                </a>

                            )}

                        </div>

                    </FadeUp>

                </div>

            </div>

        </section>

    );

}