import axiosInstance from "@/libs/axios";
import { PublicInvitation } from "@/types/public";
import type {
    PublicRsvpInput,
    PublicRsvpResponse,
} from "@/types/public";

export const getPublicInvitation = async (
    slug: string
): Promise<PublicInvitation> => {

    const { data } = await axiosInstance.get(
        `/public/${slug}`
    );

    return data.data;

};  
export const getPublicRsvp = async (
    invitationId: number,
    page = 1
): Promise<PublicRsvpResponse> => {

    const { data } = await axiosInstance.get(
        `/public/rsvp/${invitationId}?page=${page}&limit=5`
    );

    return data;

};

export const createPublicRsvp = async (
    invitationId: number,
    body: PublicRsvpInput
) => {

    const { data } = await axiosInstance.post(
        `/public/rsvp/${invitationId}`,
        body
    );

    return data.data;

};


export const getRsvp = async (
  invitationId: number,
  page = 1
): Promise<PublicRsvpResponse> => {
  const { data } = await axiosInstance.get(
    `/rsvp/${invitationId}?page=${page}&limit=10`
  );

  return data;
};

export const deleteRsvp = async (
  invitationId: number,
  rsvpId: number
) => {

  console.log(`/public/rsvp/${invitationId}/${rsvpId}`);

  const { data } = await axiosInstance.delete(
    `/public/rsvp/${invitationId}/${rsvpId}`
  );

  return data;
};