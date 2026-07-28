"use client";

import {
    CalendarDays,
    Camera,
    Gift,
    Heart,
    Home,
    MessageCircle,
} from "lucide-react";

const menus = [
    { icon: Home, id: "home" },
    { icon: Heart, id: "couple" },
    { icon: CalendarDays, id: "event" },
    { icon: Camera, id: "gallery" },
    { icon: Gift, id: "gift" },
    { icon: MessageCircle, id: "rsvp" },
];

export default function BottomNavbar() {

    const scroll = (id: string) => {

        document
            .getElementById(id)
            ?.scrollIntoView({
                behavior: "smooth",
            });

    };

    return (

        <nav className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-full border border-white/30 bg-white/80 px-4 py-3 shadow-2xl backdrop-blur-xl md:hidden">

            <div className="flex items-center gap-3">

                {menus.map((item) => {

                    const Icon = item.icon;

                    return (

                        <button
                            key={item.id}
                            onClick={() => scroll(item.id)}
                            className="rounded-full p-3 text-sky-600 transition hover:bg-sky-500 hover:text-white active:scale-95"
                        >

                            <Icon size={20} />

                        </button>

                    );

                })}

            </div>

        </nav>

    );

}