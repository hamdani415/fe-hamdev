"use client";

import { CalendarDays, Clock3, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import FadeUp from "../ui/fadeUp";

type Props = {
    akadDate: string;

    akadTime: string;
    akadLocation: string;

    resepsiTime: string;
    resepsiLocation: string;

    maps: string;
    mapsEmbed: string;
};

export default function Event({
    akadDate,
    akadTime,
    akadLocation,
    resepsiTime,
    resepsiLocation,
    maps,
    mapsEmbed,
}: Props) {

    const target = new Date(akadDate).getTime();

    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });


    useEffect(() => {

        const updateCountdown = () => {

            const now = Date.now();

            const distance = target - now;


            if (distance <= 0) {

                setTime({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                });

                return;

            }


            setTime({

                days: Math.floor(
                    distance / (1000 * 60 * 60 * 24)
                ),

                hours: Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) /
                    (1000 * 60 * 60)
                ),

                minutes: Math.floor(
                    (distance % (1000 * 60 * 60)) /
                    (1000 * 60)
                ),

                seconds: Math.floor(
                    (distance % (1000 * 60)) /
                    1000
                ),

            });

        };


        updateCountdown();


        const interval = setInterval(
            updateCountdown,
            1000
        );


        return () => clearInterval(interval);


    }, [target]);



    return (

        <section
            id="event"
            className="bg-gradient-to-b from-sky-50 via-white to-sky-50 px-6 py-24"
        >

            <div className="mx-auto max-w-6xl">


                {/* TITLE */}

                <FadeUp>

                    <p className="text-center uppercase tracking-[.35em] text-sky-600">

                        Save The Date

                    </p>


                    <h2 className="mt-4 text-center text-5xl font-serif text-sky-900">

                        Wedding Event

                    </h2>

                </FadeUp>



                {/* COUNTDOWN */}

                <FadeUp delay={0.2}>

                    <div className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-4">


                        {[
                            ["Hari", time.days],
                            ["Jam", time.hours],
                            ["Menit", time.minutes],
                            ["Detik", time.seconds],

                        ].map(([label, value]) => (

                            <div
                                key={String(label)}
                                className="rounded-3xl bg-white py-8 text-center shadow-xl"
                            >

                                <h3 className="text-4xl font-bold text-sky-800">

                                    {value}

                                </h3>


                                <p className="mt-2 text-sm uppercase tracking-widest text-sky-600">

                                    {label}

                                </p>


                            </div>

                        ))}


                    </div>


                </FadeUp>





                {/* EVENT CARD */}


                <div className="mt-16 grid gap-10 lg:grid-cols-2">



                    {/* AKAD */}

                    <FadeUp>


                        <div className="rounded-[40px] bg-white p-10 shadow-xl">


                            <CalendarDays
                                size={42}
                                className="mx-auto text-sky-500"
                            />


                            <h3 className="mt-6 text-center text-3xl font-serif text-sky-900">

                                Akad Nikah

                            </h3>



                            <div className="mt-10 space-y-6">


                                <div className="flex items-center gap-4">

                                    <Clock3 className="text-sky-500" />

                                    <span>
                                        {akadTime}
                                    </span>

                                </div>



                                <div className="flex items-start gap-4">


                                    <MapPin className="mt-1 text-sky-500" />


                                    <span>
                                        {akadLocation}
                                    </span>


                                </div>


                            </div>


                        </div>


                    </FadeUp>





                    {/* RESEPSI */}


                    <FadeUp delay={0.2}>


                        <div className="rounded-[40px] bg-white p-10 shadow-xl">


                            <CalendarDays
                                size={42}
                                className="mx-auto text-cyan-500"
                            />


                            <h3 className="mt-6 text-center text-3xl font-serif text-sky-900">

                                Resepsi

                            </h3>




                            <div className="mt-10 space-y-6">


                                <div className="flex items-center gap-4">


                                    <Clock3 className="text-cyan-500" />


                                    <span>
                                        {resepsiTime}
                                    </span>


                                </div>




                                <div className="flex items-start gap-4">


                                    <MapPin className="mt-1 text-cyan-500" />


                                    <span>
                                        {resepsiLocation}
                                    </span>


                                </div>


                            </div>


                        </div>


                    </FadeUp>



                </div>





                {/* MAP */}


                <FadeUp delay={0.3}>


                    <div className="mt-16 overflow-hidden rounded-[40px] shadow-xl">


                        <iframe
                            src={mapsEmbed}
                            width="100%"
                            height="450"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                        />


                    </div>




                    <div className="mt-8 text-center">


                        <a
                            href={maps}
                            target="_blank"
                            className="inline-flex rounded-full bg-sky-500 px-8 py-4 font-medium text-white transition hover:bg-sky-600"
                        >

                            📍 Lihat Lokasi

                        </a>


                    </div>


                </FadeUp>



            </div>


        </section>

    );
}