"use client";

import { useState } from "react";
import Opening from "@/components/sakura/opening";
import Couple from "@/components/sakura/couple";
import Event from "@/components/sakura/event";
import Gallery from "@/components/sakura/galery";
import LoveStory from "@/components/sakura/loveStory";
import Gift from "@/components/sakura/gift";
import RSVP from "@/components/sakura/rsvp";
import Footer from "@/components/sakura/footer";
import MusicPlayer from "@/components/sakura/musicPlayer";
import BottomNavbar from "@/components/sakura/bottomNavbar";

export default function Sakura() {
    const [opened, setOpened] = useState(false);

    return (
        <>
            <Opening
                groom="Farhan"
                bride="Siti"
                guest="Yoga Riza"
                cover="/image/srinity/srinity11.webp"
                date="20 September 2027"
                onOpen={() => setOpened(true)}
            />

            {opened && (
                <div className="min-h-screen bg-[#FFF9FA]">
                    <MusicPlayer
                        src="/music/musik1.mp3"
                        playing={opened}
                    />
                    <BottomNavbar />
                    {/* Section berikutnya */}
                    <Couple
                        groom={{
                            name: "Farhan",
                            father: "Bapak Ahmad",
                            mother: "Ibu Siti",
                            photo: "/image/srinity/ppcwo.webp",
                            instagram: "https://instagram.com/farhan",
                        }}
                        bride={{
                            name: "Siti",
                            father: "Bapak Bambang",
                            mother: "Ibu Rina",
                            photo: "/image/srinity/ppcwe.webp",
                            instagram: "https://instagram.com/siti",
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
                                    "Kami pertama kali bertemu tanpa pernah menyangka bahwa pertemuan sederhana itu akan menjadi awal dari perjalanan panjang bersama.",
                            },
                            {
                                title: "Engagement",
                                date: "2025",
                                description:
                                    "Setelah melewati berbagai cerita, kami memutuskan untuk melangkah ke tahap yang lebih serius dengan ikatan pertunangan.",
                            },
                            {
                                title: "Wedding Day",
                                date: "2027",
                                description:
                                    "Dengan penuh rasa syukur, kami siap memulai perjalanan baru sebagai pasangan suami istri.",
                            },
                        ]}
                    />
                    <Gift
                        bank="Bank BCA"
                        accountNumber="1234567890"
                        accountName="Farhan"
                        address={`Perumahan Melati Blok A No.10
Jakarta Selatan
DKI Jakarta`}
                    />
                    <RSVP invitationId={8} />
                    <Footer
                        groom="farhan"
                        bride="siti"
                    />
                </div>
            )}

        </>
    );
}