"use client"

import InvitationTabs from "@/components/dashboard/invitation/invitationTabs";
import { useAuth } from "@/hooks/useAuth";

export default function InvitationLayout({
    children,
}: {
    children: React.ReactNode;
}) {

     useAuth();

    return (
        <div className="space-y-8">

            <InvitationTabs />

            {children}

        </div>
    );

}