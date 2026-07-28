"use client";

import { useState } from "react";
import { useParams, useSearchParams } from "next/navigation";

import { usePublicInvitation } from "@/hooks/usePublicInvitation";

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


export default function Page() {

    const [opened, setOpened] = useState(false);

    const { slug } = useParams<{ slug:string }>();

    const {
        invitation,
        loading
    } = usePublicInvitation(slug);


    const searchParams = useSearchParams();


    const guest = decodeURIComponent(
        searchParams.get("to")?.trim() || ""
    );


    const guestName =
        guest || "Tamu Undangan";


    if (loading || !invitation) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                Loading...
            </div>
        );
    }


    return (
        <>

            <Opening

                bride={
                    invitation.couple?.brideName ?? ""
                }

                groom={
                    invitation.couple?.groomName ?? ""
                }

                guest={guestName}

                cover={
                    invitation.coverImage
                }

                date={
                    invitation.event?.akadDate ?? ""
                }

                opened={opened}

                onOpen={() =>
                    setOpened(true)
                }

            />


            {
                opened && (
                    <>

                        <BottomNavbar />


                        <MusicPlayer

                            src={
                                invitation.musicFile
                            }

                            playing={opened}

                        />

                    </>
                )
            }



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
                    invitation.galleries?.map(
                        item => item.image
                    ) ?? []
                }

            />




            <LoveStory

                stories={
                    invitation.loveStories?.map(
                        item => ({

                            title:
                                item.title,

                            date:
                                item.date,

                            description:
                                item.description,

                        })
                    ) ?? []
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

                invitationId={
                    invitation.id
                }

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