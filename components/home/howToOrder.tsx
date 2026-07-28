import {
  Search,
  MessageCircle,
  FileText,
  Rocket,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Pilih Template",
    desc: "Pilih desain undangan favoritmu.",
  },
  {
    icon: MessageCircle,
    title: "Hubungi Kami",
    desc: "Chat melalui WhatsApp.",
  },
  {
    icon: FileText,
    title: "Kirim Data",
    desc: "Nama, tanggal, lokasi dan foto.",
  },
  {
    icon: Rocket,
    title: "Undangan Siap",
    desc: "Undangan siap dibagikan.",
  },
];

export default function HowToOrder() {
  return (
    <section id="how-to-order" className="bg-white py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm text-yellow-700">
            Cara Pemesanan
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Hanya 4 Langkah
          </h2>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="rounded-3xl bg-[#faf8f5] p-8 text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500 text-white">
                  <Icon />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-3 text-gray-500">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}