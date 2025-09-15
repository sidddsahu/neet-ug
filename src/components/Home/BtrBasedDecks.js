"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";

export default function BtrBasedDecks() {
  const router = useRouter();

  const btrDecks = [
    { title: "Radiology - BTR", cards: "115 cards", icon: "📷", link: "/btr/radiology" },
    { title: "Anatomy - BTR", cards: "626 cards", icon: "🫁", link: "/btr/anatomy" },
    { title: "Biochemistry - BTR", cards: "1125 cards", icon: "🧪", link: "/btr/biochemistry" },
    { title: "Microbiology - BTR", cards: "861 cards", icon: "🧬", link: "/btr/microbiology" },
    { title: "SPM - BTR", cards: "1079 cards", icon: "📊", link: "/btr/spm" },
    { title: "Anesthesia - BTR", cards: "554 cards", icon: "💉", link: "/btr/anesthesia" },
    { title: "Dermatology - BTR", cards: "430 cards", icon: "🌿", link: "/btr/dermatology" },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="bg-purple-700 text-white py-4 px-4 flex items-center">
        <button onClick={() => router.back()} className="mr-4">
          <span className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center">
            ←
          </span>
        </button>
        <h1 className="text-lg font-semibold">BTR Based Decks</h1>
      </div>

      {/* Title + Subtitle */}
      <div className="px-5 py-4">
        <h2 className="text-lg font-semibold text-gray-800">
          BTR - Bina Tension Ratta
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          Master these High Yield Must Know cards 3X Faster and Retain 2X more!
        </p>
      </div>

      {/* List of Decks */}
      <div className="flex flex-col divide-y divide-gray-200">
        {btrDecks.map((deck, index) => (
          <div
            key={index}
            onClick={() => router.push(deck.link)}
            className="flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition cursor-pointer"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center">
                <span className="text-2xl">{deck.icon}</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  {deck.title}
                </p>
                <p className="text-xs text-gray-500">{deck.cards}</p>
              </div>
            </div>
            <ChevronRight className="text-gray-400 w-5 h-5" />
          </div>
        ))}
      </div>
    </div>
  );
}
