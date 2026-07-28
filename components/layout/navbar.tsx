"use client";

import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import Button from "../ui/button";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-xl transition-all duration-300 ${scrolled ? "shadow-md" : ""
        }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8 transition-all duration-300 ${scrolled ? "h-16" : "h-20"
          }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-widest"
          onClick={() => setOpen(false)}
        >
          HAM
          <span className="text-yellow-600">DEV</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#"
            className="font-medium transition hover:text-yellow-600"
          >
            Home
          </a>

          <a
            href="#template"
            className="font-medium transition hover:text-yellow-600"
          >
            Template
          </a>

          <a
            href="#how-to-order"
            className="font-medium transition hover:text-yellow-600"
          >
            Cara Pesan
          </a>

          <a
            href="#faq"
            className="font-medium transition hover:text-yellow-600"
          >
            FAQ
          </a>
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button href="https://wa.me/6287815905612">
            <div className="flex items-center gap-2">
              <MessageCircle size={18} />
              Konsultasi
            </div>
          </Button>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl p-2 transition hover:bg-gray-100 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${open ? "max-h-96 border-t" : "max-h-0"
          }`}
      >
        <nav className="space-y-2 bg-white p-5">

          <a
            href="#"
            onClick={() => setOpen(false)}
            className="block rounded-xl px-4 py-3 font-medium transition hover:bg-yellow-50 hover:text-yellow-700"
          >
            Home
          </a>

          <a
            href="#template"
            onClick={() => setOpen(false)}
            className="block rounded-xl px-4 py-3 font-medium transition hover:bg-yellow-50 hover:text-yellow-700"
          >
            Template
          </a>

          <a
            href="#how-to-order"
            onClick={() => setOpen(false)}
            className="block rounded-xl px-4 py-3 font-medium transition hover:bg-yellow-50 hover:text-yellow-700"
          >
            Cara Pesan
          </a>

          <a
            href="#faq"
            onClick={() => setOpen(false)}
            className="block rounded-xl px-4 py-3 font-medium transition hover:bg-yellow-50 hover:text-yellow-700"
          >
            FAQ
          </a>

          <Button
            href="https://wa.me/6287815905612"
            className="mt-4 w-full"
          >
            <div className="flex items-center justify-center gap-2">
              <MessageCircle size={18} />
              Konsultasi Gratis
            </div>
          </Button>

        </nav>
      </div>
    </header>
  );
}