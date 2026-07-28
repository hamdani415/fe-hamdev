"use client";

import { motion } from "framer-motion";
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
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
      className="fixed bottom-5 left-1/2 z-50 w-[95%] max-w-md -translate-x-1/2 md:hidden"
    >
      <div className="flex justify-between rounded-full border border-[#E9DDCB] bg-white/90 px-3 py-2 shadow-2xl backdrop-blur-xl">

        {menus.map((menu) => {
          const Icon = menu.icon;

          return (
            <a
              key={menu.title}
              href={menu.href}
              className="flex flex-col items-center rounded-xl px-3 py-2 text-[#7B6B57] transition hover:text-[#B08D57]"
            >
              <Icon size={20} />

              <span className="mt-1 text-[10px]">
                {menu.title}
              </span>
            </a>
          );
        })}

      </div>
    </motion.div>
  );
}