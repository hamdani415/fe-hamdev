"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play, Volume2 } from "lucide-react";

interface Props {
    src: string;
    playing: boolean;
}

export default function MusicPlayer({
    src,
    playing,
}: Props) {

    const audioRef = useRef<HTMLAudioElement>(null);

    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {

        if (!audioRef.current) return;

        if (playing) {

            audioRef.current.play();

            setIsPlaying(true);

        }

    }, [playing]);

    const toggleMusic = () => {

        if (!audioRef.current) return;

        if (isPlaying) {

            audioRef.current.pause();

        } else {

            audioRef.current.play();

        }

        setIsPlaying(!isPlaying);

    };

    return (

        <>

            <audio
                ref={audioRef}
                src={src}
                loop
            />

            <button

                onClick={toggleMusic}

                className="fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-yellow-500 bg-black/80 text-yellow-500 backdrop-blur transition hover:scale-110"

            >

                {isPlaying ? (

                    <Pause size={22} />

                ) : (

                    <Play size={22} />

                )}

            </button>

            <div className="fixed bottom-40 right-10 z-40">

                <Volume2
                    size={18}
                    className={`text-yellow-500 transition ${
                        isPlaying ? "animate-pulse" : ""
                    }`}
                />

            </div>

        </>

    );

}