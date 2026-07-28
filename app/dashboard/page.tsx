"use client"

import {
  Mail,
  Users,
  Eye,
  MessageCircle,
} from "lucide-react";
import { useDashboard } from "@/hooks/useDasboard";

import StatCard from "@/components/dashboard/statCard";

export default function DashboardPage() {

  const {
    dashboard,
    loading
} = useDashboard();

  return (
    <div className="space-y-8">

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-4xl font-bold">

            Selamat Datang 👋

          </h1>

          <p className="text-gray-500 mt-2">

            Kelola semua undangan digitalmu di sini.

          </p>

        </div>

        <button className="bg-black text-white px-6 py-3 rounded-xl">

          + Buat Undangan

        </button>

      </div>

      <div className="grid lg:grid-cols-4 gap-6">

        <StatCard
          title="Invitation"
          value={12}
          icon={<Mail />}
        />

        <StatCard
          title="Guest"
          value={285}
          icon={<Users />}
        />

        <StatCard
          title="View"
          value={4125}
          icon={<Eye />}
        />

        <StatCard
          title="RSVP"
          value={84}
          icon={<MessageCircle />}
        />

      </div>

      <div className="grid lg:grid-cols-3 gap-6">

        <div className="lg:col-span-2 bg-white rounded-2xl border p-6">

          <h2 className="font-bold text-xl">

            Invitation Terbaru

          </h2>

          <div className="mt-6 space-y-4">

            <div className="border rounded-xl p-5 flex justify-between">

              <div>

                <h3 className="font-semibold">

                  Aurora Wedding

                </h3>

                <p className="text-sm text-gray-500">

                  Published

                </p>

              </div>

              <button>

                Edit

              </button>

            </div>

            <div className="border rounded-xl p-5 flex justify-between">

              <div>

                <h3 className="font-semibold">

                  Minimal Wedding

                </h3>

                <p className="text-sm text-gray-500">

                  Draft

                </p>

              </div>

              <button>

                Edit

              </button>

            </div>

          </div>

        </div>

        <div className="bg-white rounded-2xl border p-6">

          <h2 className="font-bold text-xl">

            Quick Action

          </h2>

          <div className="mt-5 flex flex-col gap-4">

            <button className="bg-black text-white rounded-xl py-3">

              + Buat Invitation

            </button>

            <button className="border rounded-xl py-3">

              Kelola Template

            </button>

            <button className="border rounded-xl py-3">

              Lihat Statistik

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}