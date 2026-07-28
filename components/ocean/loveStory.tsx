"use client";

import FadeUp from "../ui/fadeUp";

type Story = {
    title: string;
    date: string;
    description: string;
};

type Props = {
    stories: Story[];
};

export default function LoveStory({
    stories,
}: Props) {

    return (

        <section
            id="story"
            className="bg-gradient-to-b from-sky-50 to-white px-6 py-24"
        >

            <div className="mx-auto max-w-5xl">

                <FadeUp>

                    <p className="text-center uppercase tracking-[.35em] text-sky-600">

                        Love Story

                    </p>

                    <h2 className="mt-4 text-center text-5xl font-serif text-sky-900">

                        Our Journey

                    </h2>

                </FadeUp>

                <div className="relative mt-20">

                    <div className="absolute left-5 top-0 h-full w-1 rounded-full bg-sky-200 md:left-1/2 md:-translate-x-1/2" />

                    {stories.map((story, index) => (

                        <FadeUp
                            key={index}
                            delay={index * .15}
                        >

                            <div
                                className={`relative mb-14 flex w-full ${
                                    index % 2 === 0
                                        ? "md:justify-start"
                                        : "md:justify-end"
                                }`}
                            >

                                <div
                                    className={`ml-14 w-full rounded-[30px] bg-white p-8 shadow-xl md:ml-0 md:w-[45%] ${
                                        index % 2 === 0
                                            ? ""
                                            : ""
                                    }`}
                                >

                                    <span className="text-sm uppercase tracking-[.3em] text-sky-500">

                                        {story.date}

                                    </span>

                                    <h3 className="mt-3 text-3xl font-serif text-sky-900">

                                        {story.title}

                                    </h3>

                                    <p className="mt-5 leading-8 text-gray-600">

                                        {story.description}

                                    </p>

                                </div>

                                <div className="absolute left-0 top-10 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-sky-500 shadow-lg md:left-1/2 md:-translate-x-1/2">

                                    🤍

                                </div>

                            </div>

                        </FadeUp>

                    ))}

                </div>

            </div>

        </section>

    );

}