"use client";

import { useState } from "react";
import FadeUp from "../ui/fadeUp";
import { usePublicRsvp } from "@/hooks/usePublicRSVP";
type Props = {
    invitationId: number;
};

export default function RSVP({
    invitationId,
}: Props) {

    const {
        rsvp,
        saveRsvp,
        page,
        totalPage,
        setPage,
    } = usePublicRsvp(invitationId);

    const [name, setName] = useState("");

    const [attendance, setAttendance] =
        useState("Hadir");

    const [message, setMessage] =
        useState("");

    const [loading, setLoading] =
        useState(false);

    const handleSubmit = async (
        e: React.FormEvent
    ) => {

        e.preventDefault();

        if (!name || !message) return;

        try {

            setLoading(true);

            await saveRsvp({

                guestName: name,

                attendance:
                    attendance === "Hadir",

                message,

            });

            setName("");

            setAttendance("Hadir");

            setMessage("");

        } finally {

            setLoading(false);

        }

    };

    return (
        <section
            id="rsvp"
            className="bg-[#FFF9FA] py-24"
        >
            <div className="mx-auto max-w-5xl px-6">

                <FadeUp>

                    <div className="text-center">

                        <span className="text-sm uppercase tracking-[5px] text-[#D98A9E]">
                            RSVP
                        </span>

                        <h2 className="mt-3 font-serif text-5xl text-[#5A4A4A]">
                            Doa & Ucapan
                        </h2>

                        <p className="mx-auto mt-5 max-w-xl leading-8 text-gray-600">
                            Kehadiran dan doa restu Anda merupakan kebahagiaan terbesar bagi kami.
                        </p>

                    </div>

                </FadeUp>

                <div className="mt-16 grid gap-10 lg:grid-cols-2">

                    {/* FORM */}

                    <FadeUp>

                        <form
                            onSubmit={handleSubmit}
                            className="rounded-[30px] border border-pink-100 bg-white p-8 shadow-lg"
                        >

                            <input
                                value={name}
                                onChange={(e) =>
                                    setName(e.target.value)
                                }
                                placeholder="Nama"
                                className="mb-5 w-full rounded-xl border border-pink-200 px-4 py-3 outline-none focus:border-[#E89BAE]"
                            />

                            <select
                                value={attendance}
                                onChange={(e) =>
                                    setAttendance(e.target.value)
                                }
                                className="mb-5 w-full rounded-xl border border-pink-200 px-4 py-3 outline-none"
                            >
                                <option>
                                    Hadir
                                </option>

                                <option>
                                    Tidak Hadir
                                </option>

                            </select>

                            <textarea
                                rows={5}
                                value={message}
                                onChange={(e) =>
                                    setMessage(e.target.value)
                                }
                                placeholder="Tulis ucapan..."
                                className="mb-6 w-full rounded-xl border border-pink-200 px-4 py-3 outline-none focus:border-[#E89BAE]"
                            />

                            <button
                                disabled={loading}
                                className="w-full rounded-full bg-[#E89BAE] py-3 font-semibold text-white transition hover:bg-[#D97992] disabled:opacity-50"
                            >
                                {loading
                                    ? "Mengirim..."
                                    : "Kirim Ucapan"}
                            </button>

                        </form>

                    </FadeUp>

                    {/* LIST */}

                    <FadeUp delay={0.15}>

                        <div className="space-y-5">

                            {rsvp.map((item) => (

                                <div
                                    key={item.id}
                                    className="rounded-[24px] border border-pink-100 bg-white p-5 shadow"
                                >

                                    <div className="flex items-center gap-3">

                                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E89BAE] font-bold text-white">

                                            {item.guestName
                                                .charAt(0)
                                                .toUpperCase()}

                                        </div>

                                        <div>

                                            <h3 className="font-semibold text-[#5A4A4A]">
                                                {item.guestName}
                                            </h3>

                                            <p className="text-sm text-gray-400">

                                                {item.attendance
                                                    ? "Hadir"
                                                    : "Tidak Hadir"}

                                            </p>

                                        </div>

                                    </div>

                                    <p className="mt-4 leading-7 text-gray-600">
                                        {item.message}
                                    </p>

                                </div>

                            ))}

                            {/* Pagination */}

                            <div className="mt-8 flex justify-center gap-3">

                                <button
                                    disabled={page === 1}
                                    onClick={() =>
                                        setPage(page - 1)
                                    }
                                    className="rounded-lg border px-4 py-2 disabled:opacity-50"
                                >
                                    Prev
                                </button>

                                <span className="flex items-center">

                                    {page} / {totalPage}

                                </span>

                                <button
                                    disabled={
                                        page === totalPage
                                    }
                                    onClick={() =>
                                        setPage(page + 1)
                                    }
                                    className="rounded-lg border px-4 py-2 disabled:opacity-50"
                                >
                                    Next
                                </button>

                            </div>

                        </div>

                    </FadeUp>

                </div>

            </div>

        </section>
    );
}