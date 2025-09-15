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
    { to: "/overall", label: "My Report", icon: DocumentTextIcon },
    { to: "/mores", label: "More", icon: EllipsisHorizontalIcon },
  ];

  return (
    <div>
      {/* ---------- Bottom nav ---------- */}
      <div
        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-sm flex justify-around py-2 border-t"
        style={{ backgroundColor: "var(--bg)" }}
      >
        {navItems.map(({ to, label, icon: Icon }) => (
          <Link
            key={to}
            href={to}
            className={`flex flex-col items-center ${
              pathname === to ? "text-orange-500" : "text-gray-400"
            }`}
          >
            <Icon className="w-6 h-6" />
            <span className="text-xs">{label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
