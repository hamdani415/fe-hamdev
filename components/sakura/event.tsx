"use client";

import FadeUp from "../ui/fadeUp";
import { CalendarDays, Clock3, MapPin } from "lucide-react";

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
  const date = new Date(akadDate);

  const day = date.toLocaleDateString("id-ID", {
    weekday: "long",
  });

  const fullDate = date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section
      id="event"
      className="bg-[#FFF9FA] py-24"
    >
      <div className="mx-auto max-w-4xl px-6">

        <FadeUp>

          <div className="text-center">

            <span className="text-sm uppercase tracking-[5px] text-[#D98A9E]">
              Wedding Event
            </span>

            <h2 className="mt-3 font-serif text-5xl text-[#5A4A4A]">
              Save The Date
            </h2>

            <div className="mx-auto mt-5 h-px w-20 bg-pink-200" />

            <p className="mt-8 text-xl font-semibold text-[#5A4A4A]">
              {day}
            </p>

            <p className="mt-2 text-gray-600">
              {fullDate}
            </p>

          </div>

        </FadeUp>

        <div className="relative mx-auto mt-16 max-w-xl">

          <div className="absolute left-5 top-0 h-full w-[2px] bg-pink-200" />

          {/* Akad */}

          <FadeUp>

            <div className="relative mb-14 pl-16">

              <div className="absolute left-0 top-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#E89BAE]">

                <CalendarDays
                  size={18}
                  color="white"
                />

              </div>

              <div className="rounded-3xl border border-pink-100 bg-white p-6 shadow-md">

                <h3 className="font-serif text-3xl text-[#5A4A4A]">
                  Akad Nikah
                </h3>

                <div className="mt-5 flex items-center gap-3">

                  <Clock3 size={18} />

                  {akadTime}

                </div>

                <div className="mt-3 flex items-start gap-3">

                  <MapPin size={18} />

                  <span>{akadLocation}</span>

                </div>

              </div>

            </div>

          </FadeUp>

          {/* Resepsi */}

          <FadeUp delay={0.2}>

            <div className="relative pl-16">

              <div className="absolute left-0 top-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#E89BAE]">

                <CalendarDays
                  size={18}
                  color="white"
                />

              </div>

              <div className="rounded-3xl border border-pink-100 bg-white p-6 shadow-md">

                <h3 className="font-serif text-3xl text-[#5A4A4A]">
                  Resepsi
                </h3>

                <div className="mt-5 flex items-center gap-3">

                  <Clock3 size={18} />

                  {resepsiTime}

                </div>

                <div className="mt-3 flex items-start gap-3">

                  <MapPin size={18} />

                  <span>{resepsiLocation}</span>

                </div>

              </div>

            </div>

          </FadeUp>

        </div>

        {/* Maps */}

        <FadeUp delay={0.3}>

          <div className="mt-16 overflow-hidden rounded-[32px] shadow-xl">

            <iframe
              src={mapsEmbed}
              className="h-[350px] w-full border-0"
              loading="lazy"
            />

          </div>

          <div className="mt-8 text-center">

            <a
              href={maps}
              target="_blank"
              className="inline-flex rounded-full bg-[#E89BAE] px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Buka Google Maps
            </a>

          </div>

        </FadeUp>

      </div>
    </section>
  );
}