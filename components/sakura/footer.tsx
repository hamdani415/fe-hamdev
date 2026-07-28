"use client";

import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { Heart, Globe } from "lucide-react";

interface FooterProps {
    groom: string;
    bride: string;
}

export default function Footer({
    groom,
    bride,
}: FooterProps) {
    return (
        <footer className="bg-[#FDF4F6] border-t border-pink-100">
            <div className="mx-auto max-w-5xl px-6 py-20 text-center">

                <h2 className="font-serif text-5xl text-[#5A4A4A]">
                    Thank You
                </h2>

                <p className="mx-auto mt-6 max-w-xl leading-8 text-gray-600">
                    Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
                    Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu
                    pada hari bahagia kami.
                </p>

                <div className="my-10 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E89BAE] shadow-lg">
                        <Heart
                            fill="white"
                            color="white"
                            size={30}
                        />
                    </div>
                </div>

                <h3 className="font-serif text-4xl text-[#5A4A4A]">
                    {groom}
                </h3>

                <p className="my-2 text-[#D98A9E] text-xl">
                    &
                </p>

                <h3 className="font-serif text-4xl text-[#5A4A4A]">
                    {bride}
                </h3>

                <div className="mx-auto my-12 h-px w-32 bg-pink-200" />

                <p className="text-sm uppercase tracking-[4px] text-[#D98A9E]">
                    Crafted with ❤ by
                </p>

                <h4 className="mt-3 text-2xl font-bold text-[#5A4A4A]">
                    HAMDEV
                </h4>

                <p className="mt-2 text-gray-500">
                    Digital Invitation Studio
                </p>

                <div className="mt-8 flex justify-center gap-5">
                    <Link
                        href="https://instagram.com/hamdev"
                        target="_blank"
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-pink-200 transition hover:bg-pink-100"
                    >
                        <FaInstagram
                            size={20}
                            className="text-[#D98A9E]"
                        />
                    </Link>

                    <Link
                        href="https://hamdev.my.id"
                        target="_blank"
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-pink-200 transition hover:bg-pink-100"
                    >
                        <Globe
                            size={20}
                            className="text-[#D98A9E]"
                        />
                    </Link>
                </div>

                <p className="mt-12 text-sm text-gray-400">
                    © {new Date().getFullYear()} HAMDEV. All Rights Reserved.
                </p>

            </div>
        </footer>
    );
}