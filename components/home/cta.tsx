"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTA() {
    return (
        <section className="bg-white px-6 py-28">

            <div className="mx-auto max-w-6xl overflow-hidden rounded-[40px] bg-gradient-to-r from-[#D89300] to-[#F3B637] p-[1px]">

                <div className="rounded-[40px] bg-white px-8 py-16 text-center md:px-16">

                    <span className="rounded-full bg-[#D89300]/10 px-4 py-2 text-sm font-medium text-[#D89300]">
                        HAMDEV Wedding Invitation
                    </span>

                    <h2 className="mx-auto mt-8 max-w-3xl text-4xl font-bold leading-tight text-zinc-900 md:text-5xl">
                        Siap Membuat
                        <span className="text-[#D89300]">
                            {" "}Undangan Digital{" "}
                        </span>
                        Impianmu?
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
                        Pilih template favoritmu, isi data pengantin,
                        lalu bagikan ke seluruh tamu hanya dengan satu link.
                    </p>

                    <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

                        <Link
                            href="#template"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D89300] px-8 py-4 font-semibold text-white transition hover:scale-105"
                        >
                            Lihat Template
                            <ArrowRight size={20} />
                        </Link>

                        <a
                            href="https://wa.me/6287815905612"
                            target="_blank"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 px-8 py-4 font-semibold text-zinc-700 transition hover:border-[#D89300] hover:text-[#D89300]"
                        >
                            <MessageCircle size={20} />
                            Konsultasi Gratis
                        </a>

                    </div>

                </div>

            </div>

        </section>
    );
}