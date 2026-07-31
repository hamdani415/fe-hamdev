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




export default function Aurora() {
    const [opened, setOpened] = useState(false);
    const searchParams = useSearchParams();

    const guest = decodeURIComponent(
        searchParams.get("to")?.trim() || ""
    );

    const guestName = guest || "Tamu Undangan";
    return (
        <>

            <Opening
                bride="Siti"
                groom="Farhan"
                guest={guestName}
                cover="/image/srinity/srinity10.webp"
                date="20 September 2027"
                onOpen={() => setOpened(true)}

            />

            {opened && <BottomNavbar />}

            {opened && (
                <MusicPlayer
                    src="/music/musik1.mp3"
                    playing={opened}
                />
            )}

            <Couple
                groom={{
                    name: "Farhan",
                    father: "Bapak Ahmad",
                    mother: "Ibu Siti",
                    photo: "/image/srinity/ppcwo.webp",
                    instagram: "https://instagram.com/farhan"
                }}
                bride={{
                    name: "Siti",
                    father: "Bapak Bambang",
                    mother: "Ibu Rina",
                    photo: "/image/srinity/ppcwe.webp",
                    instagram: "https://instagram.com/siti"
                }}
            />
            <Event
                akadDate="2027-09-20T08:00:00"

                akadTime="08.00 WIB"
                akadLocation="Masjid Agung Jakarta"

                resepsiTime="11.00 WIB"
                resepsiLocation="Gedung Serbaguna Jakarta"

                maps="https://maps.app.goo.gl/xxxx"

                mapsEmbed="https://www.google.com/maps/embed?pb=xxxxxxxx"
            />
            <Gallery
                images={[
                    "/image/srinity/srinity2.webp",
                    "/image/srinity/srinity7.webp",
                    "/image/srinity/srinity4.webp",
                    "/image/srinity/srinity5.webp",
                    "/image/srinity/srinity6.webp",
                ]}
            />
            <LoveStory
                stories={[
                    {
                        title: "First Meet",
                        date: "2022",
                        description:
                            "Kami pertama kali bertemu tanpa menyangka akan dipertemukan kembali."
                    },
                    {
                        title: "Engagement",
                        date: "2025",
                        description:
                            "Setelah perjalanan yang panjang kami memutuskan untuk bertunangan."
                    },
                    {
                        title: "Wedding Day",
                        date: "2027",
                        description:
                            "Hari dimana perjalanan baru kami dimulai selamanya."
                    }
                ]}
            />
            <Gift
                bank="Bank BCA"
                accountNumber="1234567890"
                accountName="Farhan"

                address="Perumahan Melati Blok A No.10
                        Jakarta Selatan
                        DKI Jakarta
                        "
            />
            <RSVP invitationId={8}/>
            <Footer />

        </>
    );
}
