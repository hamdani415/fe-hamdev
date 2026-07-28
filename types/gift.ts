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