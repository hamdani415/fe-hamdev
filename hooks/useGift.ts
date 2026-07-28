"use client";

import { useEffect, useState } from "react";

import {
  Gift,
  GiftInput,
  getGift,
  createGift,
  updateGift,
} from "@/services/gift.service";

export const useGift = (
  invitationId: number
) => {
  const [gift, setGift] =
    useState<Gift | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchGift();
  }, [invitationId]);

  const fetchGift = async () => {
    try {
      const data = await getGift(invitationId);

      setGift(data);
    } catch {
      // Belum ada data Gift
      setGift(null);
    } finally {
      setLoading(false);
    }
  };

  const saveGift = async (
    body: GiftInput
  ) => {
    let result;

    if (gift) {
      result = await updateGift(
        invitationId,
        body
      );
    } else {
      result = await createGift(
        invitationId,
        body
      );
    }

    setGift(result);

    return result;
  };

  return {
    gift,
    loading,
    saveGift,
    fetchGift,
  };
};