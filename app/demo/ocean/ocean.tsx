"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Opening from "@/components/ocean/opening";
import Couple from "@/components/ocean/couple";
import Event from "@/components/ocean/event";
import Gallery from "@/components/ocean/gallery";
import LoveStory from "@/components/ocean/loveStory";
import Gift from "@/components/ocean/gift";
import RSVP from "@/components/ocean/rsvp";
import Footer from "@/components/ocean/footer";
import BottomNavbar from "@/components/ocean/bottomNavbar";
import MusicPlayer from "@/components/ocean/musicPlayer";

export default function Ocean() {

    const [opened, setOpened] = useState(false);

    useEffect(() => {

        document.body.style.overflow =
            opened ? "auto" : "hidden";

        return () => {

            document.body.style.overflow = "auto";

        };

    }, [opened]);

    const searchParams = useSearchParams();

    const guest = decodeURIComponent(
        searchParams.get("to")?.trim() || ""
    );

    const invitation = {

        bride: "Alya",

        groom: "Reza",

        guest: guest || "Tamu Undangan",

        cover: "/image/srinity/srinity9.webp",

        date: "18 Juni 2027",

        music: "/music/musik1.mp3",

        couple: {

            groom: {

                name: "Reza",

                father: "Bapak Hendra",

                mother: "Ibu Ratna",

                photo: "/image/srinity/ppcwo.webp",

                instagram: "https://instagram.com"

            },

            bride: {

                name: "Alya",

                father: "Bapak Hasan",

                mother: "Ibu Siska",

                photo: "/image/srinity/ppcwe.webp",

                instagram: "https://instagram.com"

            }

        },

        event: {

            akadDate: "2027-06-18T08:00:00",

            akadTime: "08.00 WIB",

            akadLocation: "Masjid Agung Semarang",

            resepsiTime: "11.00 WIB",

            resepsiLocation: "Grand Ballroom Semarang",

            maps: "https://maps.app.goo.gl",

            mapsEmbed:
                "https://www.google.com/maps/embed?pb=xxxx"

        },

        gallery: [

            "/image/srinity/srinity8.webp",
            "/image/srinity/srinity2.webp",
            "/image/srinity/srinity3.webp",
            "/image/srinity/srinity4.webp",
            "/image/srinity/srinity5.webp",
            "/image/srinity/srinity6.webp",

        ],

        stories: [

            {

                title: "First Meet",

                date: "2022",

                description:
                    "Pertemuan sederhana yang tanpa disadari menjadi awal dari kisah cinta kami."

            },

            {

                title: "Engagement",

                date: "2026",

                description:
                    "Dengan restu keluarga kami memutuskan melangkah menuju jenjang pernikahan."

            },

            {

                title: "Wedding Day",

                date: "2027",

                description:
                    "Hari dimana dua perjalanan menjadi satu kisah seumur hidup."

            }

        ],

        gift: {

            bank: "Bank BCA",

            accountNumber: "1234567890",

            accountName: "Reza Pratama",

            address: `Jl. Melati No.88
Semarang
Jawa Tengah`

        }

    };

    const handleOpen = () => {

        setOpened(true);

        setTimeout(() => {

            document
                .getElementById("couple")
                ?.scrollIntoView({

                    behavior: "smooth",

                });

        }, 150);

    };

    return (

        <>

            <Opening

                bride={invitation.bride}

                groom={invitation.groom}

                guest={invitation.guest}

                cover={invitation.cover}

                date={invitation.date}

                opened={opened}

                onOpen={handleOpen}

            />

            {opened && (

                <>

                    <MusicPlayer

                        src={invitation.music}

                        playing={opened}

                    />

                    <BottomNavbar />

                </>

            )}

            <Couple

                groom={invitation.couple.groom}

                bride={invitation.couple.bride}

            />

            <Event

                {...invitation.event}

            />

            <Gallery

                images={invitation.gallery}

            />

            <LoveStory

                stories={invitation.stories}

            />

            <Gift

                {...invitation.gift}

            />

            <RSVP

                invitationId={3}

            />

            <Footer

                groom={invitation.groom}

                bride={invitation.bride}

            />

        </>

    );

}