"use client";

import Image from "next/image";
import Link from "next/link";


import {
  Calendar,
  Eye,
  MessageCircle,
  Trash2,
  Users,
} from "lucide-react";

import { Invitation } from "@/types/invitation";

interface Props {
  invitation: Invitation;
  onDelete: (id: number) => void;
}

export default function InvitationCard({
  invitation,
  onDelete,
}: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-lg">
      {/* Cover */}

      <div className="relative h-48 w-full bg-gray-100">
        {invitation.coverImage ? (
          <Image
            src={invitation.coverImage}
            alt={invitation.slug}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-400">
            Belum ada cover
          </div>
        )}

        <div className="absolute right-4 top-4">
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${
              invitation.status === "PUBLISHED"
                ? "bg-green-500"
                : "bg-yellow-500"
            }`}
          >
            {invitation.status}
          </span>
        </div>
      </div>

      {/* Content */}

      <div className="p-5">
        <h2 className="text-xl font-bold">
          {invitation.slug}
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          {invitation.template.name}
        </p>

        <div className="mt-5 grid grid-cols-3 gap-3">
          <div className="rounded-xl bg-gray-50 p-3 text-center">
            <Users
              size={18}
              className="mx-auto mb-2"
            />

            <p className="text-lg font-bold">
              {invitation._count.guests}
            </p>

            <p className="text-xs text-gray-500">
              Guest
            </p>
          </div>

          <div className="rounded-xl bg-gray-50 p-3 text-center">
            <MessageCircle
              size={18}
              className="mx-auto mb-2"
            />

            <p className="text-lg font-bold">
              {invitation._count.rsvps}
            </p>

            <p className="text-xs text-gray-500">
              RSVP
            </p>
          </div>

          <div className="rounded-xl bg-gray-50 p-3 text-center">
            <Eye
              size={18}
              className="mx-auto mb-2"
            />

            <p className="text-lg font-bold">
              {invitation.opened}
            </p>

            <p className="text-xs text-gray-500">
              View
            </p>
          </div>
        </div>

        <div className="mt-5 flex items-center gap-2 text-sm text-gray-500">
          <Calendar size={16} />

          {new Date(
            invitation.createdAt
          ).toLocaleDateString("id-ID")}
        </div>

        <div className="mt-6 flex gap-3">
          <Link
            href={`/dashboard/invitation/${invitation.id}`}
            className="flex-1 rounded-xl bg-black py-3 text-center text-white transition hover:bg-gray-800"
          >
            Edit
          </Link>

          <button
            onClick={() =>
              onDelete(invitation.id)
            }
            className="rounded-xl border border-red-200 px-5 text-red-500 transition hover:bg-red-50"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}