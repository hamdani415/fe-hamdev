"use client";

import { useParams } from "next/navigation";
import { Trash2 } from "lucide-react";

import { usePublicRsvp } from "@/hooks/usePublicRSVP";

export default function InvitationRsvpPage() {

  const params = useParams();

  const invitationId =
    Number(params.id);

  const {
    rsvp,
    loading,
    page,
    totalPage,
    setPage,
    removeRsvp,
  } = usePublicRsvp(invitationId);

  if (loading) {

    return <div>Loading...</div>;

  }

  return (

    <div className="space-y-6">

      <h1 className="text-3xl font-bold">

        RSVP

      </h1>

      {rsvp.length === 0 && (

        <div className="rounded-xl border bg-white p-10 text-center">

          Belum ada ucapan.

        </div>

      )}

      {rsvp.map((item) => (

        <div
          key={item.id}
          className="rounded-xl border bg-white p-6"
        >

          <div className="flex justify-between">

            <div>

              <h2 className="font-bold">

                {item.guestName}

              </h2>

              <p className="text-sm text-gray-500">

                {item.attendance
                  ? "Hadir"
                  : "Tidak Hadir"}

              </p>

            </div>

            <button
              onClick={() => {

                if (
                  confirm(
                    "Hapus RSVP ini?"
                  )
                ) {

                  removeRsvp(item.id);

                }

              }}
              className="text-red-500"
            >

              <Trash2 size={20} />

            </button>

          </div>

          <p className="mt-5">

            {item.message}

          </p>

          <p className="mt-3 text-xs text-gray-400">

            {new Date(
              item.createdAt
            ).toLocaleString("id-ID")}

          </p>

        </div>

      ))}

      <div className="flex justify-center gap-3">

        <button
          disabled={page === 1}
          onClick={() =>
            setPage(page - 1)
          }
          className="rounded-lg border px-4 py-2"
        >
          Prev
        </button>

        <span>

          {page} / {totalPage}

        </span>

        <button
          disabled={page === totalPage}
          onClick={() =>
            setPage(page + 1)
          }
          className="rounded-lg border px-4 py-2"
        >
          Next
        </button>

      </div>

    </div>

  );

}