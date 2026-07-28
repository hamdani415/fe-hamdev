"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Mail,
  LayoutTemplate,
  User,
  Settings,
  LogOut,
} from "lucide-react";

const menus = [
  // {
  //   name: "Dashboard",
  //   href: "/dashboard",
  //   icon: LayoutDashboard,
  // },
  {
    name: "Invitation",
    href: "/dashboard/invitation",
    icon: Mail,
  },
  // {
  //   name: "Template",
  //   href: "/dashboard/template",
  //   icon: LayoutTemplate,
  // },
  // {
  //   name: "Profile",
  //   href: "/dashboard/profile",
  //   icon: User,
  // },
  // {
  //   name: "Settings",
  //   href: "/dashboard/settings",
  //   icon: Settings,
  // },
];

export default function Sidebar() {

  const router = useRouter()

  const handleLogout = () => {

    const isLogout = confirm(
      "Yakin ingin keluar?"
    );

    if (!isLogout) return;

    localStorage.removeItem("token");

    router.replace("/login");

  };
  const pathname = usePathname();

  return (
    <aside className="w-72 border-r bg-white flex flex-col">

      <div className="h-20 flex items-center px-8 border-b">

        <h1 className="text-2xl font-bold">
          HAMDEV
        </h1>

      </div>

      <nav className="flex-1 p-5 space-y-2">

        {menus.map((menu) => {

          const Icon = menu.icon;

          return (
            <Link
              key={menu.href}
              href={menu.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition
              ${pathname === menu.href
                  ? "bg-black text-white"
                  : "hover:bg-gray-100"
                }`}
            >
              <Icon size={20} />

              {menu.name}
            </Link>
          );
        })}
      </nav>

      <div className="border-t p-5">

        <button onClick={handleLogout} className="flex items-center gap-3 text-red-500 hover:text-red-600">

          <LogOut size={20} />

          Logout

        </button>

      </div>
    </aside>
  );
}