"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const menus = [
    {
        title: "Overview",
        href: ""
    },
    {
        title: "Couple",
        href: "couple"
    },
    {
        title: "Event",
        href: "event"
    },
    {
        title: "Gallery",
        href: "gallery"
    },
    {
        title: "Love Story",
        href: "love-story"
    },
    {
        title: "Gift",
        href: "gift"
    },
    // {
    //     title: "Guest",
    //     href: "guest"
    // },
    {
        title: "RSVP",
        href: "rsvp"
    },
    {
        title: "Setting",
        href: "setting"
    },
];

export default function InvitationTabs() {

    const { id } = useParams();

    const pathname = usePathname();

    return (

        <div className="bg-white border rounded-2xl p-2 flex gap-2 overflow-x-auto">

            {menus.map((menu) => {

                const url =
                    menu.href
                        ? `/dashboard/invitation/${id}/${menu.href}`
                        : `/dashboard/invitation/${id}`;

                return (

                    <Link
                        key={menu.title}
                        href={url}
                        className={`px-5 py-3 rounded-xl whitespace-nowrap transition

                        ${
                            pathname === url
                                ? "bg-black text-white"
                                : "hover:bg-gray-100"
                        }`}
                    >

                        {menu.title}

                    </Link>

                );

            })}

        </div>

    );

}