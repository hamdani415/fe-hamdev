"use client";

import {
  House,
  Heart,
  CalendarDays,
  Images,
  MessageCircle,
} from "lucide-react";

const menus = [
  {
    icon: House,
    title: "Home",
    href: "#home",
  },
  {
    icon: Heart,
    title: "Couple",
    href: "#couple",
  },
  {
    icon: CalendarDays,
    title: "Event",
    href: "#event",
  },
  {
    icon: Images,
    title: "Gallery",
    href: "#gallery",
  },
  {
    icon: MessageCircle,
    title: "RSVP",
    href: "#rsvp",
  },
];

export default function BottomNavbar() {
  return (
    <div className="fixed bottom-5 left-1/2 z-50 w-[92%] max-w-sm -translate-x-1/2 md:hidden">

      <div className="flex items-center justify-around rounded-full bg-white/85 px-4 py-3 shadow-xl backdrop-blur-xl">

        {menus.map((menu) => {
          const Icon = menu.icon;

          return (
            <a
              key={menu.title}
              href={menu.href}
              className="flex flex-col items-center text-[#B87D8E] transition hover:scale-110"
            >
              <Icon size={20} />

              <span className="mt-1 text-[10px]">
                {menu.title}
              </span>

            </a>
          );
        })}

      </div>

    </div>
  );
}