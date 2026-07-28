"use client";

import { useState } from "react";
import { GiftIcon, Landmark, Copy, Check } from "lucide-react";
import FadeUp from "../ui/fadeUp";

type GiftProps = {
  bank: string;
  accountNumber: string;
  accountName: string;
  address: string;
};

export default function Gift({
  bank,
  accountNumber,
  accountName,
  address,
}: GiftProps) {
  const [copiedBank, setCopiedBank] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  async function copyBank() {
    await navigator.clipboard.writeText(accountNumber);
    setCopiedBank(true);

    setTimeout(() => {
      setCopiedBank(false);
    }, 2000);
  }

  async function copyAddress() {
    await navigator.clipboard.writeText(address);
    setCopiedAddress(true);

    setTimeout(() => {
      setCopiedAddress(false);
    }, 2000);
  }

  return (
    <section
      id="gift"
      className="bg-[#FFF9FA] py-24"
    >
      <div className="mx-auto max-w-4xl px-6">

        <FadeUp>

          <div className="text-center">

            <span className="text-sm uppercase tracking-[5px] text-[#D98A9E]">
              Wedding Gift
            </span>

            <h2 className="mt-3 font-serif text-5xl text-[#5A4A4A]">
              Tanda Kasih
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-8 text-gray-600">
              Kehadiran serta doa restu Anda sudah menjadi hadiah terindah
              bagi kami. Namun apabila ingin memberikan tanda kasih,
              dapat melalui informasi berikut.
            </p>

          </div>

        </FadeUp>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {/* Rekening */}

          <FadeUp>

            <div className="rounded-[32px] border border-pink-100 bg-white p-8 shadow-md">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-pink-100">

                <Landmark
                  size={30}
                  className="text-[#D98A9E]"
                />

              </div>

              <h3 className="mt-6 text-center font-serif text-3xl text-[#5A4A4A]">
                {bank}
              </h3>

              <p className="mt-6 text-center text-3xl font-semibold tracking-wider">
                {accountNumber}
              </p>

              <p className="mt-3 text-center text-gray-600">
                a.n {accountName}
              </p>

              <button
                onClick={copyBank}
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-[#E89BAE] py-3 font-semibold text-white transition hover:bg-[#D97893]"
              >
                {copiedBank ? (
                  <>
                    <Check size={18} />
                    Berhasil Disalin
                  </>
                ) : (
                  <>
                    <Copy size={18} />
                    Salin Rekening
                  </>
                )}
              </button>

            </div>

          </FadeUp>

          {/* Alamat */}

          <FadeUp delay={0.15}>

            <div className="rounded-[32px] border border-pink-100 bg-white p-8 shadow-md">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-pink-100">

                <GiftIcon
                  size={30}
                  className="text-[#D98A9E]"
                />

              </div>

              <h3 className="mt-6 text-center font-serif text-3xl text-[#5A4A4A]">
                Kirim Hadiah
              </h3>

              <p className="mt-6 whitespace-pre-line text-center leading-8 text-gray-600">
                {address}
              </p>

              <button
                onClick={copyAddress}
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-full border border-pink-200 py-3 font-semibold text-[#D98A9E] transition hover:bg-pink-50"
              >
                {copiedAddress ? (
                  <>
                    <Check size={18} />
                    Berhasil Disalin
                  </>
                ) : (
                  <>
                    <Copy size={18} />
                    Salin Alamat
                  </>
                )}
              </button>

            </div>

          </FadeUp>

        </div>

      </div>
    </section>
  );
}