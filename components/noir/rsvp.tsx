"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

interface Props {
    invitationId: number;
}

export default function RSVP({
    invitationId,
}: Props) {

    const [loading, setLoading] = useState(false);

    const [success, setSuccess] = useState(false);

    const [form, setForm] = useState({

        guestName: "",

        attendance: true,

        message: "",

    });

    const submit = async (e: React.FormEvent) => {

        e.preventDefault();

        try {

            setLoading(true);

            await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rsvp/${invitationId}`, {

                method: "POST",

                headers: {

                    "Content-Type": "application/json",

                },

                body: JSON.stringify(form),

            });

            setSuccess(true);

            setForm({

                guestName: "",

                attendance: true,

                message: "",

            });

        } finally {

            setLoading(false);

        }

    };

    return (

        <section id="rsvp" className="relative overflow-hidden bg-[#090909] py-24 text-white">

            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-yellow-500/5 blur-[140px]" />

            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-yellow-500/5 blur-[140px]" />

            <div className="container mx-auto max-w-3xl px-6">

                <motion.div

                    initial={{
                        opacity: 0,
                        y: 40,
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}

                    viewport={{
                        once: true,
                    }}

                    className="text-center"

                >

                    <p className="text-xs uppercase tracking-[0.45em] text-yellow-500">

                        RSVP

                    </p>

                    <h2 className="mt-5 font-serif text-5xl">

                        Konfirmasi Kehadiran

                    </h2>

                    <div className="mx-auto mt-6 h-px w-24 bg-yellow-500" />

                </motion.div>

                <motion.form

                    onSubmit={submit}

                    initial={{
                        opacity: 0,
                        y: 40,
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}

                    viewport={{
                        once: true,
                    }}

                    className="mt-16 space-y-6 rounded-3xl border border-yellow-500/20 bg-[#111111] p-10"

                >

                    <input

                        required

                        placeholder="Nama"

                        value={form.guestName}

                        onChange={(e) =>
                            setForm({
                                ...form,
                                guestName: e.target.value,
                            })
                        }

                        className="w-full rounded-xl border border-yellow-500/20 bg-black px-5 py-4 outline-none focus:border-yellow-500"

                    />

                    <select

                        value={String(form.attendance)}

                        onChange={(e) =>
                            setForm({
                                ...form,
                                attendance: e.target.value === "true",
                            })
                        }

                        className="w-full rounded-xl border border-yellow-500/20 bg-black px-5 py-4 outline-none"

                    >

                        <option value="true">

                            Hadir

                        </option>

                        <option value="false">

                            Tidak Hadir

                        </option>

                    </select>

                    <textarea

                        rows={5}

                        placeholder="Ucapan & Doa"

                        value={form.message}

                        onChange={(e) =>
                            setForm({
                                ...form,
                                message: e.target.value,
                            })
                        }

                        className="w-full rounded-xl border border-yellow-500/20 bg-black px-5 py-4 outline-none focus:border-yellow-500"

                    />

                    <button

                        disabled={loading}

                        className="flex w-full items-center justify-center gap-3 rounded-full bg-yellow-500 py-4 font-medium text-black transition hover:opacity-90"

                    >

                        <Send size={18} />

                        {loading ? "Mengirim..." : "Kirim RSVP"}

                    </button>

                    {success && (

                        <div className="flex items-center justify-center gap-2 text-green-400">

                            <CheckCircle2 size={20} />

                            RSVP berhasil dikirim.

                        </div>

                    )}

                </motion.form>

            </div>

        </section>

    );

}