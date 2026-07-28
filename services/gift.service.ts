import axiosInstance from "@/libs/axios";

export interface Gift {
  id: number;
  invitationId: number;

  bank: string | null;
  accountNumber: string | null;
  accountName: string | null;
  address: string | null;

  createdAt: string;
  updatedAt: string;
}

export interface GiftInput {
  bank?: string;
  accountNumber?: string;
  accountName?: string;
  address?: string;
}

interface GiftResponse {
  data: Gift;
}

export const getGift = async (
  invitationId: number
) => {
  const { data } =
    await axiosInstance.get<GiftResponse>(
      `/gift/${invitationId}`
    );

  return data.data;
};

export const createGift = async (
  invitationId: number,
  body: GiftInput
) => {
  const { data } =
    await axiosInstance.post<GiftResponse>(
      `/gift/${invitationId}`,
      body
    );

  return data.data;
};

export const updateGift = async (
  invitationId: number,
  body: GiftInput
) => {
  const { data } =
    await axiosInstance.put<GiftResponse>(
      `/gift/${invitationId}`,
      body
    );

  return data.data;
};