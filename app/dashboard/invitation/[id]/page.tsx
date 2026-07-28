"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useInvitationDetail } from "@/hooks/useInvitationDetail";
import { updateInvitation } from "@/services/invitation.service";

import {
  Eye,
  Users,
  MessageCircle,
  FileText,
  Save,
} from "lucide-react";

export default function InvitationOverviewPage() {
  const params = useParams();

  const id = Number(params.id);

  const {
    invitation,
    loading,
    fetchInvitation,
  } = useInvitationDetail(id);

  const [slug, setSlug] = useState("");

  const [status, setStatus] = useState<
    "DRAFT" | "PUBLISHED"
  >("DRAFT");

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!invitation) return;

    setSlug(invitation.slug);

    setStatus(invitation.status);
  }, [invitation]);

  const handleSave = async () => {
    try {
      setSaving(true);

      await updateInvitation(id, {
        slug,
        status,
      });

      await fetchInvitation();

      alert("Invitation berhasil diperbarui");
    } catch (error) {
      alert("Gagal memperbarui invitation");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!invitation) {
    return <div>Invitation tidak ditemukan</div>;
  }

  return (
    <div className="space-y-8">
      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold">
          Invitation Overview
        </h1>

        <p className="mt-2 text-gray-500">
          {invitation.template.name}
        </p>
      </div>

      {/* Statistik */}

      <div className="grid gap-5 md:grid-cols-4">
        <StatCard
          title="Views"
          value={invitation.opened}
          icon={<Eye />}
        />

        <StatCard
          title="Guest"
          value={invitation._count.guests}
          icon={<Users />}
        />

        <StatCard
          title="RSVP"
          value={invitation._count.rsvps}
          icon={<MessageCircle />}
        />

        <StatCard
          title="Status"
          value={status}
          icon={<FileText />}
        />
      </div>

      {/* Info */}

      <div className="rounded-2xl border bg-white p-6">
        <h2 className="text-xl font-bold">
          Invitation Info
        </h2>

        <div className="mt-6 space-y-5">
          {/* Template */}

          <div>
            <label className="text-sm text-gray-500">
              Template
            </label>

            <p className="mt-2 font-semibold">
              {invitation.template.name}
            </p>
          </div>

          {/* Slug */}

          <div>
            <label className="text-sm text-gray-500">
              Slug
            </label>

            <input
              value={slug}
              onChange={(e) =>
                setSlug(e.target.value)
              }
              className="mt-2 w-full rounded-xl border px-4 py-3 outline-none focus:border-black"
            />
          </div>

          {/* Status */}

          <div>
            <label className="text-sm text-gray-500">
              Status
            </label>

            <select
              value={status}
              onChange={(e) =>
                setStatus(
                  e.target.value as
                    | "DRAFT"
                    | "PUBLISHED"
                )
              }
              className="mt-2 w-full rounded-xl border px-4 py-3 outline-none focus:border-black"
            >
              <option value="DRAFT">
                Draft
              </option>

              <option value="PUBLISHED">
                Published
              </option>
            </select>
          </div>

          {/* Dibuat */}

          <div>
            <label className="text-sm text-gray-500">
              Dibuat
            </label>

            <p className="mt-2 font-semibold">
              {new Date(
                invitation.createdAt
              ).toLocaleDateString("id-ID")}
            </p>
          </div>

          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 rounded-xl bg-black px-6 py-3 text-white transition hover:bg-gray-800 disabled:opacity-50"
          >
            <Save size={18} />

            {saving
              ? "Menyimpan..."
              : "Simpan Perubahan"}
          </button>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string | number;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border bg-white p-5">
      <div className="text-gray-500">
        {icon}
      </div>

      <p className="mt-3 text-2xl font-bold">
        {value}
      </p>

      <p className="text-gray-500">
        {title}
      </p>
    </div>
  );
}