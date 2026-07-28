"use client";

import { useState } from "react";
import { useParams, useSearchParams } from "next/navigation";

import { usePublicInvitation } from "@/hooks/usePublicInvitation";

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

export default function Page() {

    const [opened, setOpened] = useState(false);

    const { slug } = useParams<{ slug: string }>();

    const { invitation, loading } =
        usePublicInvitation(slug);

    const searchParams = useSearchParams();

    const guest = decodeURIComponent(
        searchParams.get("to")?.trim() || ""
    );

    const guestName =
        guest || "Tamu Undangan";

    if (loading || !invitation) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Opening
                groom={invitation.couple?.groomName ?? ""}
                bride={invitation.couple?.brideName ?? ""}
                guest={guestName}
                cover={invitation.coverImage}
                date={invitation.event?.akadDate ?? ""}
                onOpen={() => setOpened(true)}
            />

            {opened && (
                <div className="min-h-screen bg-[#FFF9FA]">

                    <MusicPlayer
                        src={invitation.musicFile}
                        playing={opened}
                    />

                    <BottomNavbar />

                    <Couple
                        groom={{
                            name: invitation.couple?.groomName ?? "",
                            father: invitation.couple?.groomFather ?? "",
                            mother: invitation.couple?.groomMother ?? "",
                            photo: invitation.couple?.groomPhoto ?? "",
                            instagram: invitation.couple?.groomInstagram ?? "",
                        }}
                        bride={{
                            name: invitation.couple?.brideName ?? "",
                            father: invitation.couple?.brideFather ?? "",
                            mother: invitation.couple?.brideMother ?? "",
                            photo: invitation.couple?.bridePhoto ?? "",
                            instagram: invitation.couple?.brideInstagram ?? "",
                        }}
                    />

                    <Event
                        akadDate={invitation.event?.akadDate ?? ""}
                        akadTime={invitation.event?.akadTime ?? ""}
                        akadLocation={invitation.event?.akadLocation ?? ""}
                        resepsiTime={invitation.event?.resepsiTime ?? ""}
                        resepsiLocation={invitation.event?.resepsiLocation ?? ""}
                        maps={invitation.event?.maps ?? ""}
                        mapsEmbed={invitation.event?.mapsEmbed ?? ""}
                    />

                    <Gallery
                        images={invitation.galleries.map(
                            item => item.image
                        )}
                    />

                    <LoveStory
                        stories={invitation.loveStories.map(item => ({
                            title: item.title,
                            date: item.date,
                            description: item.description,
                        }))}
                    />

                    <Gift
                        bank={invitation.gift?.bank ?? ""}
                        accountNumber={invitation.gift?.accountNumber ?? ""}
                        accountName={invitation.gift?.accountName ?? ""}
                        address={invitation.gift?.address ?? ""}
                    />

                    <RSVP invitationId={invitation.id} />

                    <Footer
                        groom={invitation.couple?.groomName ?? ""}
                        bride={invitation.couple?.brideName ?? ""}
                    />

                </div>
            )}
        </>
    );
}