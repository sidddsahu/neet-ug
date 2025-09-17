"use client";

import { useRouter } from "next/navigation";
import {
  XMarkIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

export default function SpecialDecks() {
  const router = useRouter();

  const deckCards = [
    {
      title: "Create your own deck",
      desc: "You can now customize your own deck",
      icon: <PlusIcon className="w-5 h-5 text-purple-600" />,
      border: "border-purple-300",
      gradient: "from-purple-50 to-purple-100",
      shadow: "shadow-purple-200/50",
      link: "/custom-deck",
    },
    {
      title: "Daily Capsules",
      desc: "Review missed capsules",
      icon: "📅",
      border: "border-blue-300",
      gradient: "from-blue-50 to-blue-100",
      shadow: "shadow-blue-200/50",
      link: "/daily-capsule",
    },
    {
      title: "BTR Based",
      desc: "21 Subjects • 18k Cards",
      icon: "📚",
      badge: "Recommended",
      border: "border-orange-300",
      gradient: "from-orange-50 to-orange-100",
      shadow: "shadow-orange-200/50",
      link: "/btr-based",
    },
    {
      title: "Past Year Questions",
      desc: "9k Cards",
      icon: "📝",
      border: "border-pink-300",
      gradient: "from-pink-50 to-pink-100",
      shadow: "shadow-pink-200/50",
      link: "/past-year",
    },
  ];

  return (
    <div
      className="w-full max-w-sm mx-auto flex flex-col justify-between font-sans"
      style={{ backgroundColor: "var(--bg)", color: "var(--text-color)" }}
    >
      {/* Main content */}
      <div className="px-4 pt-6 pb-4">
        {/* Special Decks header */}
        <div className="mt-2">
          <h2
            className="text-xl font-bold tracking-tight"
            style={{ color: "var(--accent)" }}
          >
            Special Decks
          </h2>
          <p className="text-sm opacity-80 mt-1">
            Highly curated decks especially tailored for NEET-PG & FMGE aspirants!
          </p>
        </div>

        {/* Deck cards */}
        <div className="mt-5 space-y-4">
          {deckCards.map((deck, idx) => (
            <div
              key={idx}
              onClick={() => router.push(deck.link)}
              className={`p-4 rounded-xl border ${deck.border} bg-gradient-to-r ${deck.gradient} flex justify-between items-center shadow-md ${deck.shadow} hover:shadow-lg transition-shadow duration-200 cursor-pointer`}
            >
              <div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-sm">
                    {deck.icon}
                  </div>
                  <h3 className="font-medium">{deck.title}</h3>
                  {deck.badge && (
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">
                      {deck.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm opacity-70 mt-1">{deck.desc}</p>
              </div>
              <span className="text-gray-400 font-bold">{">"}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating notification */}
      <div className="fixed bottom-16 left-1/2 -translate-x-1/2 w-full max-w-sm px-4">
        <div className="bg-purple-100 rounded-xl p-3 flex justify-between items-center shadow-md shadow-purple-200/50">
          <div className="flex items-center gap-3">
            <div className="bg-purple-200 p-2 rounded-lg">💡</div>
            <div>
              <p className="text-sm font-medium">Mixed II 20 cards</p>
              <p className="text-xs opacity-70">Toppers choice daily capsule</p>
            </div>
          </div>
          <XMarkIcon className="w-5 h-5 text-gray-500 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
