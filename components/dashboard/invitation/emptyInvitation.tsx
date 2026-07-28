import { Mail } from "lucide-react";

export default function EmptyInvitation() {

    return (

        <div className="border rounded-2xl bg-white py-24 flex flex-col items-center">

            <Mail
                size={50}
                className="text-gray-400"
            />

            <h2 className="text-xl font-semibold mt-5">

                Belum ada Invitation

            </h2>

            <p className="text-gray-500 mt-2">

                Buat invitation pertamamu.

            </p>

        </div>

    );

}