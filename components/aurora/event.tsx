"use client";

import { CalendarDays, Clock3, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import FadeUp from "../ui/fadeUp";

type EventProps = {
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
    mapsEmbed
}: EventProps) {
    const target = new Date(akadDate).getTime();

    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = Date.now();

            const distance = target - now;

            if (distance <= 0) return;

            setTime({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) /
                    (1000 * 60 * 60)
                ),
                minutes: Math.floor(
                    (distance % (1000 * 60 * 60)) /
                    (1000 * 60)
                ),
                seconds: Math.floor(
                    (distance % (1000 * 60)) / 1000
                ),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [target]);

    return (
        <section id="event" className="bg-[#F8F3EC] py-24">
            <FadeUp>
                <div className="mx-auto max-w-6xl px-6">

                    {/* Title */}

                    <div className="text-center">

                        <span className="tracking-[5px] uppercase text-[#B08D57] text-sm">
                            Wedding Event
                        </span>

                        <h2 className="mt-3 text-5xl font-serif">
                            Save The Date
                        </h2>

                        <div className="mx-auto mt-5 h-[2px] w-20 bg-[#B08D57]" />

                    </div>

                    {/* Countdown */}

                    <div className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-4">

                        {[
                            ["Hari", time.days],
                            ["Jam", time.hours],
                            ["Menit", time.minutes],
                            ["Detik", time.seconds],
                        ].map(([label, value]) => (
                            <div
                                key={label}
                                className="rounded-3xl bg-white p-8 text-center shadow-lg"
                            >
                                <h3 className="text-5xl font-bold text-[#B08D57]">
                                    {value}
                                </h3>

                                <p className="mt-2 text-gray-500">
                                    {label}
                                </p>
                            </div>
                        ))}

                    </div>

                    {/* Event */}

                    <div className="mt-20 grid gap-10 md:grid-cols-2">

                        {/* Akad */}

                        <div className="rounded-[32px] bg-white p-10 shadow-lg">

                            <CalendarDays className="mx-auto text-[#B08D57]" size={40} />

                            <h3 className="mt-5 text-center text-3xl font-serif">
                                Akad Nikah
                            </h3>

                            <div className="mt-8 space-y-5">

                                <div className="flex gap-3">

                                    <Clock3 />

                                    <span>{akadTime}</span>

                                </div>

                                <div className="flex gap-3">

                                    <MapPin />

                                    <span>{akadLocation}</span>

                                </div>

                            </div>

                        </div>

                        {/* Resepsi */}

                        <div className="rounded-[32px] bg-white p-10 shadow-lg">

                            <CalendarDays className="mx-auto text-[#B08D57]" size={40} />

                            <h3 className="mt-5 text-center text-3xl font-serif">
                                Resepsi
                            </h3>

                            <div className="mt-8 space-y-5">

                                <div className="flex gap-3">

                                    <Clock3 />

                                    <span>{resepsiTime}</span>

                                </div>

                                <div className="flex gap-3">

                                    <MapPin />

                                    <span>{resepsiLocation}</span>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Maps */}

                    <div className="mt-24">

                        <div className="text-center">

                            <span className="tracking-[5px] uppercase text-[#B08D57] text-sm">
                                Wedding Location
                            </span>

                            <h2 className="mt-3 text-4xl font-serif">
                                Lokasi Acara
                            </h2>

                            <div className="mx-auto mt-5 h-[2px] w-20 bg-[#B08D57]" />

                        </div>

                        {/* Google Maps */}

                        <div className="mt-12 overflow-hidden rounded-[30px] border border-[#E8DCC8] bg-white shadow-xl">

                            <iframe
                                src={mapsEmbed}
                                width="100%"
                                height="420"
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                            />

                        </div>

                        {/* Card Alamat */}

                        <div className="mt-10 flex justify-center">

                            <a
                                href={maps}
                                target="_blank"
                                className="rounded-full bg-[#B08D57] px-8 py-4 text-white transition duration-300 hover:scale-105 hover:bg-[#9A7745]"
                            >
                                📍 Buka Google Maps
                            </a>

                        </div>

                    </div>

                </div>

            </FadeUp>

        </section>
    );
}