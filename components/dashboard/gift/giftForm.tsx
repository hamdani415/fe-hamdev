"use client";

import { useEffect, useState } from "react";
import { Save } from "lucide-react";
import { useGift } from "@/hooks/useGift";

interface Props {
  invitationId: number;
}

export default function GiftForm({ invitationId }: Props) {
  const { gift, loading, saveGift } = useGift(invitationId);

  const [form, setForm] = useState({
    bank: "",
    accountNumber: "",
    accountName: "",
    address: "",
  });

  useEffect(() => {
    if (gift) {
      setForm({
        bank: gift.bank ?? "",
        accountNumber: gift.accountNumber ?? "",
        accountName: gift.accountName ?? "",
        address: gift.address ?? "",
      });
    }
  }, [gift]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submit = async () => {
    await saveGift(form);
    alert("Gift berhasil disimpan");
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="bg-white border rounded-2xl p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Gift</h1>
        <p className="text-gray-500 mt-2">
          Informasi rekening dan alamat hadiah
        </p>
      </div>

      <Input
        label="Bank"
        name="bank"
        value={form.bank}
        onChange={handleChange}
      />

      <Input
        label="Nomor Rekening"
        name="accountNumber"
        value={form.accountNumber}
        onChange={handleChange}
      />

      <Input
        label="Nama Pemilik Rekening"
        name="accountName"
        value={form.accountName}
        onChange={handleChange}
      />

      <div className="space-y-2">
        <label className="text-sm text-gray-500">Alamat Kado</label>

        <textarea
          name="address"
          value={form.address}
          onChange={handleChange}
          rows={5}
          className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2"
        />
      </div>

      <button
        onClick={submit}
        className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl"
      >
        <Save size={18} />
        Simpan Gift
      </button>
    </div>
  );
}

interface InputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ label, ...props }: InputProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-gray-500">{label}</label>

      <input
        {...props}
        className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2"
      />
    </div>
  );
}