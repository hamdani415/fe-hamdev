"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Opening from "@/components/noir/opening";
import Couple from "@/components/noir/couple";
import Event from "@/components/noir/event";
import Gallery from "@/components/noir/galery";
import LoveStory from "@/components/noir/loveStory";
import Gift from "@/components/noir/gift";
import RSVP from "@/components/noir/rsvp";
import Footer from "@/components/noir/footer";
import BottomNavbar from "@/components/noir/bottomNavbar";
import MusicPlayer from "@/components/noir/musicPlayer";


export default function Noir() {


    const [opened, setOpened] = useState(false);


    // LOCK SCROLL SEBELUM UNDANGAN DIBUKA
    useEffect(() => {

        if (!opened) {

            document.body.style.overflow = "hidden";

        } else {

            document.body.style.overflow = "auto";

        }


        return () => {

            document.body.style.overflow = "auto";

        };


    }, [opened]);



    const searchParams = useSearchParams();


    const guest =
        decodeURIComponent(
            searchParams.get("to")?.trim() || ""
        );



    const invitation = {

        bride: "Amanda",

        groom: "Rizky",

        guest: guest || "Tamu Undangan",


        cover:
            "/image/srinity/srinity7.webp",


        date:
            "12 Desember 2026",


        music:
            "/music/musik1.mp3",



        couple: {

            groom: {

                name: "Rizky",

                father: "Bapak Ahmad",

                mother: "Ibu Siti",

                photo:
                    "/image/srinity/ppcwo.webp",

                instagram:
                    "https://instagram.com"

            },


            bride: {

                name: "Amanda",

                father: "Bapak Bambang",

                mother: "Ibu Lina",

                photo:
                    "/image/srinity/ppcwe.webp",

                instagram:
                    "https://instagram.com"

            }

        },



        event: {

            akadDate:
                "2026-12-12T08:00:00",

            akadTime:
                "08.00 WIB",

            akadLocation:
                "Masjid Istiqlal",

            resepsiTime:
                "11.00 WIB",

            resepsiLocation:
                "Hotel Mulia Jakarta",

            maps:
                "https://maps.app.goo.gl",

            mapsEmbed:
                "https://www.google.com/maps/embed?pb=xxxx"

        },


        gallery: [

            "/image/srinity/srinity2.webp",
            "/image/srinity/srinity4.webp",
            "/image/srinity/srinity5.webp",
            "/image/srinity/srinity6.webp",
            "/image/srinity/srinity9.webp",
            "/image/srinity/srinity8.webp",

        ],


        stories: [

            {
                title:
                    "Pertama Bertemu",

                date:
                    "2021",

                description:
                    "Tak ada yang menyangka sebuah pertemuan sederhana menjadi awal perjalanan cinta kami."
            },


            {
                title:
                    "Lamaran",

                date:
                    "2025",

                description:
                    "Kami memutuskan melangkah ke jenjang yang lebih serius bersama keluarga."
            },


            {
                title:
                    "Hari Bahagia",

                date:
                    "2026",

                description:
                    "Dengan ridho Allah SWT kami akan memulai kehidupan baru sebagai suami istri."
            }

        ],


        gift: {

            bank:
                "Bank BCA",

            accountNumber:
                "1234567890",

            accountName:
                "Rizky"

        }


    };




    return (

        <>


            {/* OPENING TETAP ADA */}

            <Opening

                bride={invitation.bride}

                groom={invitation.groom}

                guest={invitation.guest}

                cover={invitation.cover}

                date={invitation.date}

                opened={opened}


                onOpen={() => {


                    setOpened(true);



                    setTimeout(() => {


                        document
                            .getElementById("couple")
                            ?.scrollIntoView({

                                behavior: "smooth"

                            });


                    }, 500);


                }}

            />



            {opened && (

                <>


                    <BottomNavbar />


                    <MusicPlayer

                        src={invitation.music}

                        playing={opened}

                    />


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