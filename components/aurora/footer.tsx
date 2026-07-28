"use client"
import Link from "next/link";
import { Heart, Globe } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import FadeUp from "../ui/fadeUp";

export default function Footer() {
  return (
    <footer className="bg-[#B08D57] py-16 text-white">
      <FadeUp>
        <div className="mx-auto max-w-6xl px-6">

          <div className="text-center">

            <h2 className="text-3xl font-bold tracking-widest">
              HAMDEV
            </h2>

            <p className="mt-4 text-sm text-white/80">
              Digital Wedding Invitation
            </p>

            <div className="mt-8 flex justify-center gap-4">

              <Link
                href="https://instagram.com/hamdev"
                target="_blank"
                className="rounded-full bg-white/10 p-3 transition hover:bg-white/20"
              >
                <FaInstagram size={20} />
              </Link>

              <Link
                href="/"
                className="rounded-full bg-white/10 p-3 transition hover:bg-white/20"
              >
                <Globe size={20} />
              </Link>

            </div>

            <div className="mt-10 border-t border-white/20 pt-8">

              <p className="flex items-center justify-center gap-2 text-sm text-white/80">

                Made with

                <Heart
                  size={16}
                  fill="white"
                />

                by

                <Link
                  href="/"
                  className="font-semibold hover:underline"
                >
                  HAMDEV
                </Link>

              </p>

              <p className="mt-3 text-xs text-white/60">
                © {new Date().getFullYear()} HAMDEV. All rights reserved.
              </p>

            </div>

          </div>

        </div>

      </FadeUp>


    </footer>
  );
}