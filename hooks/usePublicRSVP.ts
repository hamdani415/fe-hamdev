"use client";

import { useEffect, useState } from "react";

import {
    getPublicRsvp,
    createPublicRsvp,
    deleteRsvp,
    
} from "@/services/public.service";

import type {
    PublicRsvpItem,
    PublicRsvpInput,
} from "@/types/public";

export const usePublicRsvp = (
    invitationId: number
) => {

    const [rsvp, setRsvp] =
        useState<PublicRsvpItem[]>([]);

    const [loading, setLoading] =
        useState(true);

    const [page, setPage] =
        useState(1);

    const [totalPage, setTotalPage] =
        useState(1);

    useEffect(() => {

        if (!invitationId) return;

        fetchRsvp(page);

    }, [invitationId, page]);

    const fetchRsvp = async (
        currentPage: number
    ) => {

        try {

            setLoading(true);

            const result =
                await getPublicRsvp(
                    invitationId,
                    currentPage
                );

            setRsvp(result.data);

            setTotalPage(
                result.pagination.totalPage
            );

        } finally {

            setLoading(false);

        }

    };

    const saveRsvp = async (
        body: PublicRsvpInput
    ) => {

        await createPublicRsvp(
            invitationId,
            body
        );

        setPage(1);

        await fetchRsvp(1);

    };

    const removeRsvp = async (
        rsvpId: number
    ) => {

        await deleteRsvp(
            invitationId,
            rsvpId
        );

        await fetchRsvp(page);

    };

    return {

        rsvp,

        loading,

        saveRsvp,

        removeRsvp,

        fetchRsvp,

        page,

        totalPage,

        setPage,

    };

};