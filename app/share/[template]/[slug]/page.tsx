"use client";

import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { Copy, MessageCircle } from "lucide-react";

export default function SharePage() {
  const { template, slug } = useParams<{
    template: string;
    slug: string;
  }>();

  const [guest, setGuest] = useState("");

  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL || "";

  const invitationLink = useMemo(() => {
    return `${baseUrl}/undangan/${template}/${slug}?to=${encodeURIComponent(
      guest.trim() || "Tamu Undangan"
    )}`;
  }, [baseUrl, template, slug, guest]);

  const message = useMemo(() => {
    return `Assalamu'alaikum Wr. Wb.

Dengan memohon rahmat dan ridho Allah SWT.

Tanpa mengurangi rasa hormat, kami mengundang *${
      guest || "Bapak/Ibu/Saudara/i"
    }* untuk menghadiri acara pernikahan kami.

Silakan buka undangan melalui tautan berikut:

${invitationLink}

Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila berkenan hadir serta memberikan doa restu.

Terima kasih.

Wassalamu'alaikum Wr. Wb.`;
  }, [guest, invitationLink]);

  const copyLink = async () => {
    await navigator.clipboard.writeText(
      invitationLink
    );

    alert("Link berhasil disalin.");
  };

  const copyMessage = async () => {
    await navigator.clipboard.writeText(
      message
    );

    alert("Pesan berhasil disalin.");
  };

  const openWhatsapp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-5">

      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 space-y-6">

        <div>

          <h1 className="text-3xl font-bold">
            Generator Link Tamu
          </h1>

          <p className="text-gray-500 mt-2">
            Masukkan nama tamu lalu salin
            link atau pesan WhatsApp.
          </p>

        </div>

        <div className="space-y-2">

          <label className="font-semibold">
            Nama Tamu
          </label>

          <input
            type="text"
            value={guest}
            onChange={(e) =>
              setGuest(e.target.value)
            }
            placeholder="Contoh : Bapak Ahmad & Keluarga"
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        <div className="space-y-2">

          <label className="font-semibold">
            Link Undangan
          </label>

          <textarea
            readOnly
            value={invitationLink}
            className="w-full h-24 border rounded-lg p-3 resize-none"
          />

          <button
            onClick={copyLink}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg flex items-center gap-2"
          >
            <Copy size={18} />
            Copy Link
          </button>

        </div>

        <div className="space-y-2">

          <label className="font-semibold">
            Pesan WhatsApp
          </label>

          <textarea
            readOnly
            value={message}
            className="w-full h-72 border rounded-lg p-3 resize-none"
          />

          <div className="flex gap-3">

            <button
              onClick={copyMessage}
              className="bg-green-600 text-white px-5 py-2 rounded-lg flex items-center gap-2"
            >
              <Copy size={18} />
              Copy Pesan
            </button>

            <button
              onClick={openWhatsapp}
              className="bg-emerald-600 text-white px-5 py-2 rounded-lg flex items-center gap-2"
            >
              <MessageCircle size={18} />
              WhatsApp
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}