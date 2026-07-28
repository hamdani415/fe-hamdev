import { ReactNode } from "react";

interface Props {
  title: string;
  value: number | string;
  icon: ReactNode;
}

export default function StatCard({
  title,
  value,
  icon,
}: Props) {
  return (
    <div className="bg-white rounded-2xl border p-6">

      <div className="flex justify-between">

        <div>

          <p className="text-gray-500">

            {title}

          </p>

          <h2 className="text-3xl font-bold mt-3">

            {value}

          </h2>

        </div>

        <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center">

          {icon}

        </div>

      </div>

    </div>
  );
}