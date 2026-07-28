"use client";

import { Bell } from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-20 border-b bg-white px-8 flex items-center justify-between">

      <div>

        <h2 className="text-2xl font-bold">

          Dashboard

        </h2>

        <p className="text-sm text-gray-500">

          Selamat datang kembali 👋

        </p>

      </div>

      <div className="flex items-center gap-5">

        <Bell />

        <div className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center">

          H

        </div>

      </div>

    </header>
  );
}