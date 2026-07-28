import { ReactNode } from "react";

type MockupPhoneProps = {
  children: ReactNode;
};

export default function MockupPhone({
  children,
}: MockupPhoneProps) {
  return (
    <div className="relative mx-auto">

      {/* Glow */}
      <div className="absolute inset-0 scale-110 rounded-[60px] bg-yellow-300/20 blur-3xl"></div>

      {/* Phone */}
      <div className="relative rounded-[50px] bg-black p-[10px] shadow-[0_20px_60px_rgba(0,0,0,.25)]">

        {/* Dynamic Island */}
        <div className="absolute left-1/2 top-3 h-6 w-28 -translate-x-1/2 rounded-full bg-black z-20"></div>

        {/* Screen */}
        <div
          className="
            overflow-hidden
            rounded-[40px]
            bg-white

            h-[500px]
            w-[250px]

            sm:h-[560px]
            sm:w-[280px]

            lg:h-[640px]
            lg:w-[320px]
          "
        >
          {children}
        </div>
      </div>
    </div>
  );
}