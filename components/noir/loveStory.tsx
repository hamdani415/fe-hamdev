"use client";

import { motion } from "framer-motion";

interface Story {
    title: string;
    date: string;
    description: string;
}

interface Props {
    stories: Story[];
}

export default function LoveStory({
    stories,
}: Props) {

    return (

        <section className="relative overflow-hidden bg-[#080808] py-24 text-white">

            <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-yellow-500/5 blur-[150px]" />

            <div className="container mx-auto max-w-5xl px-6">

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

                    className="mb-20 text-center"

                >

                    <p className="text-xs uppercase tracking-[0.45em] text-yellow-500">

                        Our Journey

                    </p>

                    <h2 className="mt-5 font-serif text-5xl">

                        Love Story

                    </h2>

                    <div className="mx-auto mt-6 h-px w-24 bg-yellow-500" />

                </motion.div>

                <div className="relative">

                    <div className="absolute left-5 top-0 h-full w-px bg-yellow-500/30 md:left-1/2 md:-translate-x-1/2" />

                    {stories.map((story, index) => (

                        <motion.div

                            key={index}

                            initial={{
                                opacity: 0,
                                y: 50,
                            }}

                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}

                            viewport={{
                                once: true,
                            }}

                            transition={{
                                delay: index * .15,
                            }}

                            className={`relative mb-14 flex w-full ${
                                index % 2 === 0
                                    ? "md:justify-start"
                                    : "md:justify-end"
                            }`}

                        >

                            <div

                                className={`ml-14 w-full rounded-3xl border border-yellow-500/20 bg-[#111111] p-8 md:ml-0 md:w-[45%] ${
                                    index % 2 === 0
                                        ? ""
                                        : ""
                                }`}

                            >

                                <span className="text-sm uppercase tracking-[0.3em] text-yellow-500">

                                    {story.date}

                                </span>

                                <h3 className="mt-3 font-serif text-3xl">

                                    {story.title}

                                </h3>

                                <p className="mt-5 leading-8 text-gray-400">

                                    {story.description}

                                </p>

                            </div>

                            <div className="absolute left-5 top-10 h-5 w-5 -translate-x-1/2 rounded-full border-4 border-black bg-yellow-500 md:left-1/2" />

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>

    );

}