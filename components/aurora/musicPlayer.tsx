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
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  }, [playing]);

  const toggle = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
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
        className="fixed bottom-24 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#B08D57] text-white shadow-xl transition hover:scale-110"
      >
        {isPlaying ? (
          <Pause />
        ) : (
          <Play />
        )}
      </button>
    </>
  );
}