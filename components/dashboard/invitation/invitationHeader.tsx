"use client";

import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function InvitationHeader() {

    const router = useRouter();

    return (

        <div className="flex items-center justify-between">

            <div>

                <h1 className="text-3xl font-bold">

                    Invitation

                </h1>

                <p className="text-gray-500 mt-2">

                    Kelola semua undanganmu

                </p>

            </div>

            <button
                onClick={() =>
                    router.push("/dashboard/invitation/create")
                }
                className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-xl"
            >

                <Plus size={18} />

                Buat Invitation

            </button>

        </div>

    );

}