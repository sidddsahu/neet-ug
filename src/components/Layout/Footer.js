"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  RectangleStackIcon,
  DocumentTextIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";

const Footer = () => {
  const pathname = usePathname();

  const navItems = [
    { to: "/", label: "Home", icon: HomeIcon },
    { to: "/deck", label: "Deck", icon: RectangleStackIcon },
    { to: "/login", label: "My Report", icon: DocumentTextIcon },
    { to: "/mores", label: "More", icon: EllipsisHorizontalIcon },
  ];

  return (
    <div>
      {/* ---------- Bottom nav ---------- */}
      <div
        className="fixed bottom-0
                   w-full flex justify-around py-2
                   bg-white border border-gray-200
                   shadow-xl z-50"
      >
        {navItems.map(({ to, label, icon: Icon }) => {
          const isActive = pathname === to;
          return (
            <Link
              key={to}
              href={to}
              className={`group flex flex-col items-center gap-0.5 transition-all ${
                isActive ? "text-orange-500" : "text-gray-400"
              }`}
            >
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full transition-all ${
                  isActive
                    ? "bg-gradient-to-tr from-orange-500 to-orange-400 text-white shadow-md scale-105"
                    : "group-hover:bg-gray-100"
                }`}
              >
                <Icon className="w-6 h-6" />
              </div>
              <span
                className={`text-[11px] font-medium ${
                  isActive
                    ? "text-orange-500"
                    : "text-gray-500 group-hover:text-gray-700"
                }`}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
