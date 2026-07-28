"use client";

import { useEffect, useState } from "react";

import { getPublicInvitation } from "@/services/public.service";

import { PublicInvitation } from "@/types/public";

export const usePublicInvitation = (
    slug: string
) => {

    const [loading, setLoading] = useState(true);

    const [invitation, setInvitation] =
        useState<PublicInvitation | null>(null);

    useEffect(() => {

        fetchInvitation();

    }, [slug]);

    const fetchInvitation = async () => {

        try {

            const data =
                await getPublicInvitation(slug);

            setInvitation(data);

        }

        finally {

            setLoading(false);

        }

    };

    return {

        invitation,

        loading

    };

};