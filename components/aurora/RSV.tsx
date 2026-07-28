"use client";

import { Send } from "lucide-react";
import { useState } from "react";

import FadeUp from "../ui/fadeUp";
import { usePublicRsvp } from "@/hooks/usePublicRSVP";

interface Props {
    invitationId: number;
}

export default function RSVP({
    invitationId,
}: Props) {

    const {
        rsvp,
        loading,
        saveRsvp,
        page,
        totalPage,
        setPage,
    } = usePublicRsvp(invitationId);

    const [form, setForm] = useState({

        guestName: "",

        attendance: true,

        message: "",

    });

    const submit = async () => {

        if (!form.guestName.trim()) {

            return alert("Nama wajib diisi");

        }

        await saveRsvp(form);

        setForm({

            guestName: "",

            attendance: true,

            message: "",

        });

        alert("Ucapan berhasil dikirim");

    };

    return (

        <section
            id="rsvp"
            className="bg-[#F8F3EC] py-24"
        >

            <FadeUp>

                <div className="mx-auto max-w-5xl px-6">

                    {/* TITLE */}

                    <div className="text-center">

                        <span className="text-sm uppercase tracking-[5px] text-[#B08D57]">

                            Wishes

                        </span>

                        <h2 className="mt-3 text-5xl font-serif">

                            Ucapan & Doa

                        </h2>

                        <div className="mx-auto mt-5 h-[2px] w-20 bg-[#B08D57]" />

                        <p className="mx-auto mt-8 max-w-2xl leading-8 text-gray-600">

                            Berikan doa dan ucapan terbaik untuk kedua mempelai.

                        </p>

                    </div>

                    {/* FORM */}

                    <div className="mt-16 rounded-[32px] bg-white p-8 shadow-xl">

                        <div className="space-y-6">

                            <input

                                value={form.guestName}

                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        guestName: e.target.value,
                                    })
                                }

                                placeholder="Nama"

                                className="w-full rounded-2xl border p-4 outline-none focus:border-[#B08D57]"

                            />

                            <select

                                value={
                                    form.attendance
                                        ? "hadir"
                                        : "tidak"
                                }

                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        attendance:
                                            e.target.value === "hadir",
                                    })
                                }

                                className="w-full rounded-2xl border p-4 outline-none focus:border-[#B08D57]"

                            >

                                <option value="hadir">

                                    Hadir

                                </option>

                                <option value="tidak">

                                    Tidak Hadir

                                </option>

                            </select>

                            <textarea

                                rows={5}

                                value={form.message}

                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        message: e.target.value,
                                    })
                                }

                                placeholder="Tulis ucapan..."

                                className="w-full resize-none rounded-2xl border p-4 outline-none focus:border-[#B08D57]"

                            />

                            <button

                                onClick={submit}

                                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#B08D57] py-4 text-white transition hover:bg-[#9A7745]"

                            >

                                <Send size={18} />

                                Kirim Ucapan

                            </button>

                        </div>

                    </div>

                    {/* LIST */}

                    <div className="mt-16 space-y-6">

                        {

                            loading ?

                                (

                                    <p className="text-center">

                                        Loading...

                                    </p>

                                )

                                :

                                rsvp.length === 0 ?

                                    (

                                        <div className="rounded-3xl bg-white p-10 text-center shadow-lg">

                                            Belum ada ucapan.

                                        </div>

                                    )

                                    :

                                    rsvp.map((item) => (

                                        <div

                                            key={item.id}

                                            className="rounded-[30px] bg-white p-6 shadow-lg"

                                        >

                                            <div className="flex justify-between">

                                                <div>

                                                    <h3 className="font-semibold">

                                                        {item.guestName}

                                                    </h3>

                                                    <p className="text-sm text-[#B08D57]">

                                                        {

                                                            item.attendance

                                                                ? "Hadir"

                                                                : "Tidak Hadir"

                                                        }

                                                    </p>

                                                </div>

                                                <p className="text-sm text-gray-400">

                                                    {

                                                        new Date(item.createdAt)
                                                            .toLocaleDateString("id-ID")

                                                    }

                                                </p>

                                            </div>

                                            <p className="mt-5 leading-8 text-gray-600">

                                                {item.message}

                                            </p>

                                        </div>

                                    ))

                        }

                    </div>

                    {/* PAGINATION */}

                    {

                        totalPage > 1 && (

                            <div className="mt-10 flex justify-center gap-3">

                                <button

                                    disabled={page === 1}

                                    onClick={() =>
                                        setPage(page - 1)
                                    }

                                    className="rounded-xl border px-4 py-2 disabled:opacity-50"

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

                                    className="rounded-xl border px-4 py-2 disabled:opacity-50"

                                >

                                    Next

                                </button>

                            </div>

                        )

                    }

                </div>

            </FadeUp>

        </section>

    );

}