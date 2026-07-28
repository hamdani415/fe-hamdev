"use client";

import Link from "next/link";
import {
    Mail,
    MessageCircle
} from "lucide-react";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
    return (

        <footer className="border-t border-zinc-200 bg-[#fafafa]">

            <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-3">

                <div>

                    <h2 className="text-4xl font-bold">

                        <span className="text-zinc-900">
                            HAM
                        </span>

                        <span className="text-[#D89300]">
                            DEV
                        </span>

                    </h2>

                    <p className="mt-6 max-w-sm leading-8 text-zinc-600">
                        Platform undangan digital modern
                        dengan desain elegan, responsif,
                        dan mudah dibagikan kepada seluruh tamu.
                    </p>

                </div>

                <div>

                    <h3 className="mb-6 text-xl font-semibold text-zinc-900">
                        Menu
                    </h3>

                    <div className="flex flex-col gap-4 text-zinc-600">

                        <Link href="#home" className="hover:text-[#D89300]">
                            Home
                        </Link>

                        <Link href="#template" className="hover:text-[#D89300]">
                            Template
                        </Link>

                        <Link href="#cara-pesan" className="hover:text-[#D89300]">
                            Cara Pesan
                        </Link>

                        <Link href="#faq" className="hover:text-[#D89300]">
                            FAQ
                        </Link>

                    </div>

                </div>

                <div>

                    <h3 className="mb-6 text-xl font-semibold text-zinc-900">
                        Kontak
                    </h3>

                    <div className="space-y-5 text-zinc-600">

                        <a
                           href="https://wa.me/6287815905612"
                            className="flex items-center gap-3 hover:text-[#D89300]"
                        >
                            <MessageCircle size={18} />
                            WhatsApp
                        </a>

                        <a
                            href="mailto:admin@hamdev.id"
                            className="flex items-center gap-3 hover:text-[#D89300]"
                        >
                            <Mail size={18} />
                            admin@hamdev.id
                        </a>

                        <a
                            href="#"
                            className="flex items-center gap-3 hover:text-[#D89300]"
                        >
                            <FaInstagram size={18} />
                            @hamdev.id
                        </a>

                    </div>

                </div>

            </div>

            <div className="border-t border-zinc-200">

                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-zinc-500 md:flex-row">

                    <p>
                        © {new Date().getFullYear()} HAMDEV.
                        All rights reserved.
                    </p>

                    <p>
                        Made with ❤️ in Indonesia
                    </p>

                </div>

            </div>

        </footer>

    );
}