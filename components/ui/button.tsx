import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline";
  className?: string;
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3 text-sm md:text-base font-medium transition-all duration-300";

  const styles = {
    primary:
      "bg-yellow-600 text-white hover:bg-yellow-700 shadow-lg hover:shadow-xl",

    outline:
      "border border-gray-300 bg-white hover:bg-gray-50 text-gray-800",
  };

  if (href) {
    return (
      <Link
        href={href}
        className={`${base} ${styles[variant]} ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </button>
  );
}