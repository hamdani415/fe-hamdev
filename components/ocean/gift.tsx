"use client";

import { Copy, Gift as GiftIcon, MapPin } from "lucide-react";
import { useState } from "react";
import FadeUp from "../ui/fadeUp";

type Props = {
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
}: Props) {

    const [copied, setCopied] = useState(false);

    const copy = async () => {

        await navigator.clipboard.writeText(accountNumber);

        setCopied(true);

        setTimeout(() => {

            setCopied(false);

        }, 2000);

    };

    return (

        <section
            id="gift"
            className="bg-gradient-to-b from-white via-sky-50 to-white px-6 py-24"
        >

            <div className="mx-auto max-w-5xl">

                <FadeUp>

                    <p className="text-center uppercase tracking-[.35em] text-sky-600">

                        Wedding Gift

                    </p>

                    <h2 className="mt-4 text-center text-5xl font-serif text-sky-900">

                        Send Your Blessing

                    </h2>

                    <p className="mx-auto mt-6 max-w-xl text-center text-gray-600">

                        Kehadiran dan doa restu Anda merupakan hadiah terindah
                        bagi kami. Namun apabila ingin memberikan tanda kasih,
                        dapat melalui rekening berikut.

                    </p>

                </FadeUp>

                <FadeUp delay={.2}>

                    <div className="mt-16 rounded-[40px] border border-white/40 bg-white/60 p-10 shadow-2xl backdrop-blur-xl">

                        <div className="flex justify-center">

                            <div className="rounded-full bg-sky-100 p-5">

                                <GiftIcon
                                    size={34}
                                    className="text-sky-600"
                                />

                            </div>

                        </div>

                        <h3 className="mt-8 text-center text-3xl font-serif text-sky-900">

                            {bank}

                        </h3>

                        <p className="mt-3 text-center text-xl tracking-widest text-sky-700">

                            {accountNumber}

                        </p>

                        <p className="mt-3 text-center text-gray-600">

                            a.n {accountName}

                        </p>

                        <div className="mt-8 flex justify-center">

                            <button
                                onClick={copy}
                                className="flex items-center gap-2 rounded-full bg-sky-500 px-7 py-3 text-white transition hover:bg-sky-600"
                            >

                                <Copy size={18} />

                                {copied ? "Berhasil Disalin" : "Salin Nomor"}

                            </button>

                        </div>

                    </div>

                </FadeUp>

                {address && (

                    <FadeUp delay={.4}>

                        <div className="mt-10 rounded-[40px] bg-white p-10 shadow-xl">

                            <div className="flex justify-center">

                                <MapPin
                                    size={36}
                                    className="text-sky-500"
                                />

                            </div>

                            <h3 className="mt-5 text-center text-2xl font-serif text-sky-900">

                                Kirim Kado

                            </h3>

                            <p className="mt-6 whitespace-pre-line text-center leading-8 text-gray-600">

                                {address}

                            </p>

                        </div>

                    </FadeUp>

                )}

            </div>

        </section>

    );

}