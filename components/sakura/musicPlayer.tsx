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
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (!audioRef.current) return;

        if (playing) {
            audioRef.current.play();
            setIsPlaying(true);
        }
    }, [playing]);

    function toggleMusic() {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    }

    return (
        <>
            <audio
                ref={audioRef}
                src={src}
                loop
            />

            <button
                onClick={toggleMusic}
                className="
    fixed
    bottom-24
    right-5
    z-[999]
    flex
    h-14
    w-14
    items-center
    justify-center
    rounded-full
    bg-[#E89BAE]
    text-white
    shadow-xl
    transition
    hover:scale-110
    md:bottom-6
    md:right-6
  "
            >
                {isPlaying ? (
                    <Pause size={22} />
                ) : (
                    <Play size={22} />
                )}
            </button>
        </>
    );
}