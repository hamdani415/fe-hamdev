"use client";

import { Copy, Gift as GiftIcon } from "lucide-react";
import { useState } from "react";
import FadeUp from "../ui/fadeUp";

type GiftProps = {
    bank: string;
    accountNumber: string;
    accountName: string;

    address?: string;
};

export default function Gift({
    bank,
    accountNumber,
    accountName,
    address,
}: GiftProps) {
    const [copied, setCopied] = useState("");

    const copyText = async (text: string, type: string) => {
        await navigator.clipboard.writeText(text);

        setCopied(type);

        setTimeout(() => {
            setCopied("");
        }, 2000);
    };

    return (
        <section id="gift" className="bg-[#FFFDF8] py-24">
            <FadeUp>
                <div className="mx-auto max-w-5xl px-6">

                    {/* Title */}

                    <div className="text-center">

                        <span className="text-sm uppercase tracking-[5px] text-[#B08D57]">
                            Wedding Gift
                        </span>

                        <h2 className="mt-3 text-5xl font-serif">
                            Tanda Kasih
                        </h2>

                        <div className="mx-auto mt-5 h-[2px] w-20 bg-[#B08D57]" />

                        <p className="mx-auto mt-8 max-w-2xl leading-8 text-gray-600">
                            Doa restu merupakan hadiah terindah bagi kami.
                            Namun apabila Bapak/Ibu/Saudara berkenan memberikan tanda kasih,
                            dapat melalui informasi berikut.
                        </p>

                    </div>

                    <div className="mt-16 space-y-8">

                        {/* Rekening */}

                        <div className="flex flex-col items-center text-center">

                            <div className="rounded-full bg-[#B08D57]/10 p-5">
                                <GiftIcon
                                    size={30}
                                    className="text-[#B08D57]"
                                />
                            </div>

                            <p className="mt-6 text-gray-500">
                                {bank}
                            </p>

                            <h3 className="mt-2 text-3xl font-bold tracking-wide">
                                {accountNumber}
                            </h3>

                            <p className="mt-2 text-gray-600">
                                a.n {accountName}
                            </p>

                            <button
                                onClick={() => copyText(accountNumber, "rekening")}
                                className="mt-8 rounded-full bg-[#B08D57] px-8 py-3 text-white transition hover:bg-[#9A7745]"
                            >
                                Salin Nomor Rekening
                            </button>

                            {copied === "rekening" && (
                                <p className="mt-4 text-green-600">
                                    ✓ Nomor rekening berhasil disalin
                                </p>
                            )}

                        </div>

                        {/* Alamat */}

                        {address && (
                            <div className="text-center">

                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#B08D57]/10">

                                    📦

                                </div>

                                <h3 className="mt-5 text-3xl font-serif">
                                    Kirim Hadiah
                                </h3>

                                <p className="mx-auto mt-6 max-w-xl leading-8 text-gray-600">
                                    {address}
                                </p>

                                <button
                                    onClick={() => copyText(address, "alamat")}
                                    className="mt-8 rounded-full border border-[#B08D57] px-8 py-3 text-[#B08D57] transition hover:bg-[#B08D57] hover:text-white"
                                >
                                    Salin Alamat
                                </button>

                            </div>
                        )}

                    </div>

                </div>
            </FadeUp>


        </section>
    );
}