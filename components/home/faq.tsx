"use client";

const faq = [
    {
        q: "Berapa lama pengerjaannya?",
        a: "Mulai 5-15 menit setelah data lengkap diterima.",
    },
    {
        q: "Apakah bisa request musik sendiri?",
        a: "Bisa, cukup kirim file musik yang diinginkan.",
    },
    {
        q: "Apakah bisa revisi?",
        a: "Bisa, revisi ringan gratis sebelum undangan dibagikan.",
    },
   
    {
        q: "Hosting aktif berapa lama?",
        a: "Hosting aktif selama 60 hari.",
    },
    {
        q: "Bagaimana cara pemesanan?",
        a: "Pilih template lalu hubungi kami melalui WhatsApp.",
    },
];

export default function FAQ() {
    return (
        <section
            id="faq"
            className="py-28 bg-white"
        >

            <div className="max-w-4xl mx-auto px-6">

                <div className="text-center">

                    <span className="px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm">
                        FAQ
                    </span>

                    <h2 className="mt-6 text-5xl font-bold">
                        Pertanyaan Umum
                    </h2>

                </div>

                <div className="mt-16 space-y-5">

                    {faq.map((item) => (

                        <details
                            key={item.q}
                            className="rounded-2xl border p-6 group"
                        >

                            <summary className="cursor-pointer text-lg font-semibold">

                                {item.q}

                            </summary>

                            <p className="mt-4 text-gray-500">

                                {item.a}

                            </p>

                        </details>

                    ))}

                </div>

            </div>

        </section>
    );
}