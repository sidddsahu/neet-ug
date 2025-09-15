// app/components/MoreMenu.jsx (or wherever you keep components)

"use client";

import React from "react";
import Link from "next/link";
import {
  Squares2X2Icon, // Deck Settings
  ChartBarIcon,    // Leaderboard
  BellIcon,        // Notifications
  DocumentTextIcon,// Blogs
  EnvelopeIcon,    // My Queries
  QuestionMarkCircleIcon, // FAQs
  EllipsisVerticalIcon,   // Settings
  ChevronRightIcon // Right arrow
} from "@heroicons/react/24/outline";

const menuItems = [
  { icon: Squares2X2Icon, label: "Deck Settings", path: "/deck-setting" },
  { icon: ChartBarIcon, label: "Leaderboard", path: "/leaderboard" },
  { icon: BellIcon, label: "Notifications", path: "/notifications" },
  { icon: DocumentTextIcon, label: "Blogs", path: "/blogs" },
  { icon: EnvelopeIcon, label: "My Queries", path: "/queries" },
  { icon: QuestionMarkCircleIcon, label: "FAQs", path: "/faqs" },
  { icon: EllipsisVerticalIcon, label: "Settings", path: "/settings" }
];

const MoreMenu = () => {
  return (
    <div className="bg-white mb-12 px-4 py-6">
      <div className="space-y-4">
        {menuItems.map(({ icon: Icon, label, path }, index) => (
          <Link
            href={path}
            key={index}
            className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition"
          >
            <div className="flex items-center space-x-3">
              <Icon className="w-6 h-6 text-purple-700" />
              <span className="text-gray-900 text-base">{label}</span>
            </div>
            <ChevronRightIcon className="w-5 h-5 text-gray-400" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MoreMenu;
