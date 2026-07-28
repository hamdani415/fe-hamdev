"use client";

import Sidebar from "@/components/dashboard/sidebar";
import Navbar from "@/components/dashboard/navbar";
import { useAuth } from "@/hooks/useAuth";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    useAuth();

    return (
        <div className="flex h-screen bg-gray-50">

            <Sidebar />

            <div className="flex flex-1 flex-col">

                <Navbar />

                <main className="flex-1 overflow-y-auto p-8">
                    {children}
                </main>

            </div>

        </div>
    );
}