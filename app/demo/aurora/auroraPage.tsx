"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

import Opening from "@/components/aurora/opening";
import Couple from "@/components/aurora/couple";
import Event from "@/components/aurora/event";
import Gallery from "@/components/aurora/galery";
import LoveStory from "@/components/aurora/loveStory";
import Gift from "@/components/aurora/gift";
import RSVP from "@/components/aurora/RSV";
import BottomNavbar from "@/components/aurora/bottomNavbar";
import Footer from "@/components/aurora/footer";
import MusicPlayer from "@/components/aurora/musicPlayer";

export default function AuroraPage() {
    const [opened, setOpened] = useState(false);
    const searchParams = useSearchParams();

    const guest = decodeURIComponent(
        searchParams.get("to")?.trim() || ""
    );

    const guestName = guest || "Tamu Undangan";

    return (
        <>
            {/* isi komponenmu tetap sama */}
        </>
    );
}