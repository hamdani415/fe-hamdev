"use client";

import InvitationCard from "@/components/dashboard/invitation/invitationCard";
import EmptyInvitation from "@/components/dashboard/invitation/emptyInvitation";
import InvitationHeader from "@/components/dashboard/invitation/invitationHeader";
import LoadingInvitation from "@/components/dashboard/invitation/loadingInvitation";

import { useInvitation } from "@/hooks/useInvitation";

export default function InvitationPage() {
  const {
    invitations,
    loading,
    removeInvitation,
  } = useInvitation();

  if (loading) {
    return <LoadingInvitation />;
  }

  return (
    <div className="space-y-8">
      <InvitationHeader />

      {invitations.length === 0 ? (
        <EmptyInvitation />
      ) : (
        <div className="grid gap-6 lg:grid-cols-2">
          {invitations.map((item) => (
            <InvitationCard
              key={item.id}
              invitation={item}
              onDelete={removeInvitation}
            />
          ))}
        </div>
      )}
    </div>
  );
}