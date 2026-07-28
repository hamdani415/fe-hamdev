import { Invitation } from "@/types/invitation";
import axiosInstance from "@/libs/axios";

interface InvitationListResponse {
  message: string;
  data: Invitation[];
}

interface InvitationResponse {
  message: string;
  data: Invitation;
}

interface CreateInvitationInput {
  templateId: number;
  slug: string;
}

export interface UpdateInvitationInput {
  slug?: string;

  status?: "DRAFT" | "PUBLISHED";

  coverImage?: string;

  quote?: string;

  musicFile?: string;

  musicTitle?: string;
}
// GET ALL
export const getInvitations = async () => {
  const { data } =
    await axiosInstance.get<InvitationListResponse>(
      "/invitation"
    );

  return data.data;
};

// CREATE
export const createInvitation = async (
  body: CreateInvitationInput
) => {
  const { data } =
    await axiosInstance.post<InvitationResponse>(
      "/invitation",
      body
    );

  return data.data;
};

export const getInvitationById = async (
  id: number
) => {
  const { data } =
    await axiosInstance.get<InvitationResponse>(
      `/invitation/${id}`
    );

  return data.data;
};

export const updateInvitation = async (
  id: number,
  body: UpdateInvitationInput
) => {
  const { data } =
    await axiosInstance.put(
      `/invitation/${id}`,
      body
    );

  return data.data;
};

// DELETE
export const deleteInvitation = async (
  id: number
) => {
  await axiosInstance.delete(
    `/invitation/${id}`
  );
};

export const updateInvitationStatus = async (
    id: number,
    status: "DRAFT" | "PUBLISHED"
) => {

    const { data } = await axiosInstance.patch(
        `/invitation/${id}/status`,
        {
            status,
        }
    );

    return data.data;

};