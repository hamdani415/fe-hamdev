"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { Heart } from "lucide-react";
import FadeUp from "../ui/fadeUp";

type Person = {
  name: string;
  father: string;
  mother: string;
  photo: string;
  instagram: string;
};

type CoupleProps = {
  groom: Person;
  bride: Person;
};

function PersonCard({
  person,
  label,
}: {
  person: Person;
  label: string;
}) {
  return (
    <FadeUp>
      <div className="rounded-[32px] border border-pink-100 bg-white p-8 text-center shadow-lg">

        <div className="relative mx-auto h-36 w-36 overflow-hidden rounded-full border-4 border-pink-200">
          <Image
            src={person.photo}
            alt={person.name}
            fill
            className="object-cover"
          />
        </div>

        <p className="mt-6 text-xs uppercase tracking-[4px] text-[#D98A9E]">
          {label}
        </p>

        <h3 className="mt-2 font-serif text-4xl text-[#5A4A4A]">
          {person.name}
        </h3>

        <p className="mt-6 leading-8 text-gray-600">
          Putra dari
          <br />
          <span className="font-semibold">
            {person.father}
          </span>
          <br />
          &
          <br />
          <span className="font-semibold">
            {person.mother}
          </span>
        </p>

        <Link
          href={person.instagram}
          target="_blank"
          className="mx-auto mt-7 inline-flex items-center gap-2 rounded-full border border-pink-200 px-5 py-3 text-[#D67F96] transition hover:bg-pink-50"
        >
          <FaInstagram size={18} />
          Instagram
        </Link>

      </div>
    </FadeUp>
  );
}

export default function Couple({
  groom,
  bride,
}: CoupleProps) {
  return (
    <section
      id="couple"
      className="bg-[#FFF9FA] py-20 md:py-28"
    >
      <div className="mx-auto max-w-4xl px-6">

        <FadeUp>

          <div className="text-center">

            <span className="text-sm uppercase tracking-[5px] text-[#D98A9E]">
              Bride & Groom
            </span>

            <h2 className="mt-3 font-serif text-5xl text-[#5A4A4A]">
              Mempelai
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-8 text-gray-600">
              Dengan memohon rahmat dan ridho Allah SWT,
              kami mengundang Bapak/Ibu/Saudara/i
              untuk hadir pada hari bahagia kami.
            </p>

          </div>

        </FadeUp>

        <div className="mt-16">

          <PersonCard
            person={groom}
            label="The Groom"
          />

          <div className="my-10 flex justify-center">

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E89BAE] shadow-lg">

              <Heart
                fill="white"
                color="white"
                size={28}
              />

            </div>

          </div>

          <PersonCard
            person={bride}
            label="The Bride"
          />

        </div>

      </div>
    </section>
  );
}