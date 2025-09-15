"use client";

import React from "react";
import {
  HomeIcon,
  ClipboardDocumentListIcon,
  DocumentTextIcon,
  EllipsisHorizontalIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";

export default function HomeThird() {
  const featuredDecks = [
    {
      title: "Clinical feature Buzz",
      icon: "🧬",
      color: "from-orange-100 to-orange-50",
      border: "border-orange-400",
    },
    {
      title: "Lab findings (buzzwords)",
      icon: "💊",
      color: "from-purple-100 to-purple-50",
      border: "border-purple-400",
    },
    {
      title: "Drugs & Buzzwords",
      icon: "💉",
      color: "from-orange-100 to-orange-50",
      border: "border-orange-400",
    },
  ];

  const leaderboard = [
    { name: "nambiar", score: "89.5%", rank: "1st", img: "https://via.placeholder.com/50/8b5cf6/ffffff?text=N" },
    { name: "Masrat Dua", score: "84.7%", rank: "2nd", img: "https://picsum.photos/50/50?random=1" },
    { name: "NIMAL M", score: "83.8%", rank: "3rd", img: "https://picsum.photos/50/50?random=2" },
    { name: "happy", score: "83.4%", rank: "4th", img: "https://picsum.photos/50/50?random=3" },
    { name: "Naman Rai", score: "83.2%", rank: "5th", img: "https://picsum.photos/50/50?random=4" },
  ];

  return (
    <div className="bg-[var(--bg)] text-[var(--text-color)] flex flex-col justify-between">
      {/* Top Greeting */}

      {/* Leaderboard */}
      <div className="px-4 mt-6">
        <h2 className="text-lg font-semibold">Leaderboard</h2>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          Track your progress and compete with friends to see who scores the highest!
        </p>
        <div className="mt-4 space-y-3">
          {leaderboard.map((user, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between bg-[var(--secondary-bg)] rounded-xl p-3"
            >
              <div className="flex items-center gap-3">
                {/* You can replace <img> with Next.js <Image> for optimization */}
                <img
                  src={user.img}
                  alt={user.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">{user.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-300">{user.score}</p>
                </div>
              </div>
              <p className="font-semibold">{user.rank}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
