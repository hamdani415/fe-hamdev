"use client";

import { useEffect, useState } from "react";

import {
  getInvitations,
  deleteInvitation,
} from "@/services/invitation.service";

import { Invitation } from "@/types/invitation";

export const useInvitation = () => {

  const [loading, setLoading] =
    useState(true);

  const [invitations, setInvitations] =
    useState<Invitation[]>([]);

  useEffect(() => {

    fetchInvitation();

  }, []);

  const fetchInvitation = async () => {

    try {

      const data =
        await getInvitations();

      setInvitations(data);

    } finally {

      setLoading(false);

    }

  };

  const removeInvitation = async (
    id: number
  ) => {

    const confirmDelete =
      window.confirm(
        "Yakin ingin menghapus undangan ini?"
      );

    if (!confirmDelete) return;

    await deleteInvitation(id);

    setInvitations((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );

  };

  return {

    invitations,

    loading,

    fetchInvitation,

    removeInvitation,

  };

};