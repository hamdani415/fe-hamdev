import GiftForm from "@/components/dashboard/gift/giftForm";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function GiftPage({
  params,
}: Props) {
  const { id } = await params;

  return (
    <GiftForm
      invitationId={Number(id)}
    />
  );
}