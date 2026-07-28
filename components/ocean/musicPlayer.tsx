"use client";

import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Props = {
    src: string;
    playing: boolean;
};

export default function MusicPlayer({
    src,
    playing,
}: Props) {

    const audioRef = useRef<HTMLAudioElement>(null);

    const [isPlaying, setIsPlaying] =
        useState(false);

    useEffect(() => {

        if (!audioRef.current) return;

        if (playing) {

            audioRef.current
                .play()
                .then(() => setIsPlaying(true))
                .catch(() => { });

        }

    }, [playing]);

    const toggle = async () => {

        if (!audioRef.current) return;

        if (isPlaying) {

            audioRef.current.pause();

            setIsPlaying(false);

        } else {

            await audioRef.current.play();

            setIsPlaying(true);

        }

    };

    return (

        <>

            <audio
                ref={audioRef}
                loop
                src={src}
            />

            <button

                onClick={toggle}

                className="fixed bottom-24 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/80 text-sky-700 shadow-2xl backdrop-blur-xl transition hover:scale-110"

            >

                {

                    isPlaying ?

                        <Pause size={22} />

                        :

                        <Play
                            size={22}
                            className="ml-1"
                        />

                }

            </button>

        </>

    );

}