import { Heart } from "lucide-react";
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
    <section id="story" className="bg-[#F8F3EC] py-24">

      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">

          <span className="tracking-[5px] uppercase text-[#B08D57] text-sm">
            Love Story
          </span>

          <h2 className="mt-3 text-5xl font-serif">
            Perjalanan Kami
          </h2>

          <div className="mx-auto mt-5 h-[2px] w-20 bg-[#B08D57]" />

        </div>

        <div className="relative mt-20">

          {/* Garis Tengah */}

          <div className="absolute left-6 top-0 h-full w-[2px] bg-[#D9C7A3] md:left-1/2 md:-translate-x-1/2" />

          {stories.map((story, index) => (
            <div
              key={index}
              className={`relative mb-20 flex w-full ${index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
                }`}
            >
              {/* Card */}
              <div className="w-full pl-16 md:w-[45%] md:pl-0">

                <FadeUp delay={index * 0.15}>
                  <div className="rounded-[30px] bg-white p-8 shadow-lg">

                    <p className="text-sm uppercase tracking-[3px] text-[#B08D57]">
                      {story.date}
                    </p>

                    <h3 className="mt-3 text-3xl font-serif">
                      {story.title}
                    </h3>

                    <p className="mt-5 leading-8 text-gray-600">
                      {story.description}
                    </p>

                  </div>
                </FadeUp>

              </div>

              {/* Icon */}
              <div className="absolute left-6 top-10 -translate-x-1/2 md:left-1/2">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#B08D57] shadow-lg">

                  <Heart
                    size={22}
                    fill="white"
                    color="white"
                  />

                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}