"use client";

import FadeUp from "../ui/fadeUp";

type Story = {
  title: string;
  date: string;
  description: string;
};

type LoveStoryProps = {
  stories: Story[];
};

export default function LoveStory({
  stories,
}: LoveStoryProps) {
  return (
    <section
      id="story"
      className="bg-[#FFF9FA] py-24"
    >
      <div className="mx-auto max-w-5xl px-6">

        {/* Heading */}

        <FadeUp>

          <div className="text-center">

            <span className="text-sm uppercase tracking-[5px] text-[#D98A9E]">
              Love Story
            </span>

            <h2 className="mt-3 font-serif text-5xl text-[#5A4A4A]">
              Our Journey
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-8 text-gray-600">
              Tidak ada perjalanan yang instan.
              Semua dimulai dari sebuah pertemuan,
              lalu tumbuh menjadi kisah yang indah.
            </p>

          </div>

        </FadeUp>

        {/* Story */}

        <div className="mt-20 space-y-10">

          {stories.map((story, index) => (
            <FadeUp
              key={index}
              delay={index * .15}
            >
              <div className="rounded-[32px] border border-pink-100 bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl">

                <div className="flex items-center justify-between">

                  <h3 className="font-serif text-3xl text-[#5A4A4A]">
                    {story.title}
                  </h3>

                  <span className="rounded-full bg-pink-50 px-4 py-2 text-sm text-[#D98A9E]">
                    {story.date}
                  </span>

                </div>

                <div className="my-6 h-px w-full bg-pink-100" />

                <p className="leading-8 text-gray-600">
                  {story.description}
                </p>

              </div>

            </FadeUp>
          ))}

        </div>

      </div>
    </section>
  );
}