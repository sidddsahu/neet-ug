"use client";

import Link from "next/link";
import {
  HomeIcon,
  RectangleStackIcon,
  DocumentTextIcon,
  EllipsisHorizontalIcon,
  XMarkIcon,
  PlusIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

/**
 * Replace placeholder icons/images with your real assets when ready.
 * Install heroicons: npm i @heroicons/react
 */

export default function HomeScreen() {
  const featuredDecks = [
    {
      id: 1,
      title: "Clinical feature Buzz...",
      subtitle: "High yield",
      border: "border-orange-300",
      accent: "text-orange-500",
      icon: "🧬",
      link: "/subscription",
    },
    {
      id: 2,
      title: "Lab findings (buzz...)",
      subtitle: "Important labs",
      border: "border-purple-300",
      accent: "text-purple-600",
      icon: "💊",
      link: "/subscription",
    },
    {
      id: 3,
      title: "Drug of Choice",
      subtitle: "Essential Rx",
      border: "border-orange-300",
      accent: "text-orange-500",
      icon: "💉",
      link: "/deck/drug-of-choice",
    },
  ];

  const activeUsers = [
    "https://i.pravatar.cc/40?img=1",
    "https://i.pravatar.cc/40?img=2",
    "https://i.pravatar.cc/40?img=3",
    "https://i.pravatar.cc/40?img=4",
    "https://i.pravatar.cc/40?img=5",
  ];

  return (
    <div
      className="w-full max-w-sm mx-auto flex flex-col justify-between"
      style={{ backgroundColor: "var(--bg)", color: "var(--text-color)" }}
    >
      {/* ---- Scrollable content ---- */}
      <div className="px-4 pt-6">
        {/* Greeting */}
        <p className="text-sm text-[var(--muted)]">Good Afternoon</p>
        <h1 className="text-2xl font-semibold mt-1">Siddhant</h1>

        {/* ---------- Top custom deck card ---------- */}
        <div className="mt-5 rounded-2xl overflow-hidden shadow-sm">
          <div
            className="p-5 rounded-2xl"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,241,235,1) 0%, rgba(255,249,243,1) 100%)",
              border: "1px solid rgba(245, 158, 11, 0.15)",
            }}
          >
            <p className="text-center font-medium text-base">
              Set your daily goals. Create your own deck and start revising!
            </p>
            <p className="text-center text-sm text-[var(--muted)] mt-1">
              Maintain daily streak!
            </p>

            <div className="mt-4 flex justify-center">
              <button className="flex items-center gap-2 border border-orange-300 text-orange-500 px-4 py-2 rounded-full font-medium hover:shadow-md transition-shadow">
                <PlusIcon className="w-5 h-5" />
                <span>Create Custom Deck</span>
                <ChevronRightIcon className="w-4 h-4 ml-1" />
              </button>
            </div>

            {/* Active users row */}
            <div className="mt-5 bg-white/60 p-3 rounded-xl flex flex-col items-center">
              <div className="flex -space-x-3 items-center">
                {activeUsers.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`u${i}`}
                    className="w-9 h-9 rounded-full border-2 border-white shadow-sm"
                  />
                ))}
                <div className="w-10 h-9 rounded-full border-2 border-white bg-white flex items-center justify-center text-xs font-medium shadow-sm">
                  25366+
                </div>
              </div>
              <p className="mt-2 text-sm font-medium text-[var(--accent)]">
                Active users
              </p>
            </div>
          </div>
        </div>

        {/* ---------- Featured Decks (horizontal scroll) ---------- */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold" style={{ color: "var(--accent)" }}>
            Featured Decks
          </h2>
          <p className="text-sm text-[var(--muted)] mt-1">
            Discover our curated cards tailored for your NEET-PG preparation
          </p>

          <div className="mt-4 flex gap-4 overflow-x-auto no-scrollbar pb-2">
            {featuredDecks.map((card) => (
              <Link
                href={card.link}
                key={card.id}
                className={`min-w-[170px] h-[220px] rounded-2xl p-4 flex flex-col justify-between bg-white border ${card.border} shadow-lg hover:scale-[1.03] transition-transform`}
                style={{
                  backgroundImage:
                    "radial-gradient( circle at 85% 15%, rgba(230,232,255,0.3) 0%, rgba(255,255,255,0.0) 40% )",
                }}
              >
                {/* top icon */}
                <div className="flex items-start justify-between">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center text-3xl`}
                  >
                    {card.icon}
                  </div>
                </div>

                {/* bottom title inside card */}
                <div>
                  <h3 className={`text-lg font-semibold ${card.accent}`}>
                    {card.title}
                  </h3>
                  <p className="text-xs text-[var(--muted)] mt-1">
                    {card.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
