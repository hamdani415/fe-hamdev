"use client";

import TemplateCard from "../template/templateCard";

const templates = [
  {
    title: "Aurora",
    image: "/image/templates/aurora.webp",
    demo: "/demo/aurora?to=yogi",
  },
  {
    title: "Sakura",
    image: "/image/templates/sakura.webp",
    demo: "/demo/sakura?to=yogi",
  },
  {
    title: "Noir",
    image: "/image/templates/noir.webp",
    demo: "/demo/noir?to=yogi",
  },
  {
    title: "Ocean",
    image: "/image/templates/ocean.webp",
    demo: "/demo/ocean?to=yogi",
  },
];

export default function Templates() {
  return (
    <section
      id="template"
      className="bg-[#faf8f5] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm text-yellow-700">
            Collection
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Pilih Template Favoritmu
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-500">
            Semua template dirancang agar terlihat elegan,
            cepat dibuka, dan nyaman dilihat di semua perangkat.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {templates.map((item) => (
            <TemplateCard
              key={item.title}
              {...item}
            />
          ))}

        </div>

      </div>
    </section>
  );
}