import { Check } from "lucide-react";
import Button from "../ui/button";

const features = [
  "Semua Template Premium",
  "Musik Background",
  "Countdown",
  "Gallery Foto",
  "Google Maps",
  "RSVP",
  // "Unlimited Tamu",
  "Gratis Revisi Ringan",
  "Hosting 60 hari",
];

export default function StartingPrice() {
  return (
    <section className="bg-[#faf8f5] py-24">
      <div className="mx-auto max-w-5xl px-6">

        <div className="rounded-[32px] border border-yellow-200 bg-white p-8 shadow-lg md:p-12">

          <div className="text-center">

            <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700">
              🎉 Promo Launching
            </span>

            <h2 className="mt-6 text-4xl font-bold md:text-5xl">
              Undangan Digital Premium
            </h2>

            <p className="mt-4 text-gray-500">
              Harga spesial untuk customer HAMDEV dibulan ini.
            </p>

          </div>

          <div className="mt-10 flex flex-col items-center">

            <div className="flex items-center gap-3">

              <span className="text-2xl text-gray-400 line-through">
                Rp129.000
              </span>

              <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-600">
                Hemat 40%
              </span>

            </div>

            <h3 className="mt-2 text-6xl font-extrabold text-yellow-600">
              Rp79.000
            </h3>

          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">

            {features.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl bg-gray-50 p-4"
              >
                <Check
                  size={18}
                  className="text-green-600"
                />

                <span>{item}</span>
              </div>
            ))}

          </div>

          <div className="mt-12 text-center">

            <Button
              href="https://wa.me/6287815905612"
              className="px-10 py-4 text-lg"
            >
              💬 Konsultasi Gratis
            </Button>

            <p className="mt-4 text-sm text-gray-500">
              Tidak ada biaya tersembunyi • Proses cepat • Support via WhatsApp
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}