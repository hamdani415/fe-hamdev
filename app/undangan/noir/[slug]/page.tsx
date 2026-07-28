"use client";

import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";

import { usePublicInvitation } from "@/hooks/usePublicInvitation";

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

export default function Page() {

    const [opened, setOpened] = useState(false);

    const { slug } = useParams<{ slug: string }>();

    const { invitation, loading } =
        usePublicInvitation(slug);

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

    const guestName =
        guest || "Tamu Undangan";

    if (loading || !invitation) {

        return (
            <div className="flex h-screen items-center justify-center bg-black text-white">
                Loading...
            </div>
        );

    }

    return (

        <>

            <Opening

                bride={invitation.couple?.brideName ?? ""}

                groom={invitation.couple?.groomName ?? ""}

                guest={guestName}

                cover={invitation.coverImage ?? ""}

                date={
                    invitation.event?.akadDate
                        ? new Date(
                            invitation.event.akadDate
                        ).toLocaleDateString("id-ID", {

                            day: "numeric",

                            month: "long",

                            year: "numeric",

                        })
                        : ""
                }

                opened={opened}

                onOpen={() => {

                    setOpened(true);

                    setTimeout(() => {

                        document
                            .getElementById("couple")
                            ?.scrollIntoView({

                                behavior: "smooth",

                            });

                    }, 500);

                }}

            />

            {opened && (

                <>

                    <BottomNavbar />

                    <MusicPlayer

                        src={invitation.musicFile ?? ""}

                        playing={opened}

                    />

                </>

            )}

            <Couple

                groom={{

                    name:
                        invitation.couple?.groomName ?? "",

                    father:
                        invitation.couple?.groomFather ?? "",

                    mother:
                        invitation.couple?.groomMother ?? "",

                    photo:
                        invitation.couple?.groomPhoto ?? "",

                    instagram:
                        invitation.couple?.groomInstagram ?? "",

                }}

                bride={{

                    name:
                        invitation.couple?.brideName ?? "",

                    father:
                        invitation.couple?.brideFather ?? "",

                    mother:
                        invitation.couple?.brideMother ?? "",

                    photo:
                        invitation.couple?.bridePhoto ?? "",

                    instagram:
                        invitation.couple?.brideInstagram ?? "",

                }}

            />

            <Event

                akadDate={
                    invitation.event?.akadDate ?? ""
                }

                akadTime={
                    invitation.event?.akadTime ?? ""
                }

                akadLocation={
                    invitation.event?.akadLocation ?? ""
                }

                resepsiTime={
                    invitation.event?.resepsiTime ?? ""
                }

                resepsiLocation={
                    invitation.event?.resepsiLocation ?? ""
                }

                maps={
                    invitation.event?.maps ?? ""
                }

                mapsEmbed={
                    invitation.event?.mapsEmbed ?? ""
                }

            />

            <Gallery

                images={

                    invitation.galleries.map(

                        item => item.image

                    )

                }

            />

            <LoveStory

                stories={

                    invitation.loveStories.map(

                        item => ({

                            title: item.title,

                            date: item.date,

                            description:
                                item.description,

                        })

                    )

                }

            />

            <Gift

                bank={
                    invitation.gift?.bank ?? ""
                }

                accountNumber={
                    invitation.gift?.accountNumber ?? ""
                }

                accountName={
                    invitation.gift?.accountName ?? ""
                }

                address={
                    invitation.gift?.address ?? ""
                }

            />

            <RSVP

                invitationId={invitation.id}

            />

            <Footer

                groom={
                    invitation.couple?.groomName ?? ""
                }

                bride={
                    invitation.couple?.brideName ?? ""
                }

            />

        </>

    );

}