"use client"; // ✅ Required for hooks in Next.js App Router

import React from "react";
import { useRouter } from "next/navigation"; // ✅ Next.js navigation
import Link from "next/link";

const people = [
  { name: "A", color: "bg-gray-300" },
  { name: "B", color: "bg-gray-400" },
  { name: "S", color: "bg-amber-200" },
  { name: "🙂", color: "bg-yellow-300" },
  { name: "H", color: "bg-indigo-600 text-white" },
];

const capsules = [
  { id: 1, title: "Mixed", meta: "Today’s Capsule", today: true },
  { id: 2, title: "Mixed", meta: "23 Aug • 20 Cards" },
  { id: 3, title: "Mixed", meta: "22 Aug • 20 Cards" },
  { id: 4, title: "Mixed", meta: "21 Aug • 20 Cards" },
  { id: 5, title: "Mixed", meta: "20 Aug • 20 Cards" },
  { id: 6, title: "Mixed", meta: "19 Aug • 20 Cards" },
];

const ChevronRight = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BackIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CircleProgress = ({ percent = 0 }) => {
  const size = 56;
  const stroke = 5;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const dash = (percent / 100) * c;

  return (
    <svg width={size} height={size} className="shrink-0">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        stroke="#FEECE6"
        strokeWidth={stroke}
        fill="white"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        stroke="#F4A78A"
        strokeWidth={stroke}
        strokeDasharray={`${dash} ${c - dash}`}
        strokeLinecap="round"
        fill="transparent"
        className="transition-all duration-500"
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        className="text-[11px] font-semibold"
        fill="#A0522D"
      >
        {percent}%
      </text>
    </svg>
  );
};

export default function DailyCapsule() {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center">
      {/* Mobile App Frame */}
      <div className="relative w-full overflow-hidden border border-gray-200 shadow-xl">
        {/* Top bar */}
        <div className="bg-purple-700 text-white mb-4">
          <div className="flex items-center gap-3 px-4 py-3">
            <button
              onClick={() => router.back()}
              className="bg-white/15 hover:bg-white/25 transition-colors rounded-full p-2"
            >
              <BackIcon className="w-5 h-5 text-white" />
            </button>

            <h1 className="flex-1 text-center text-lg font-semibold -ml-10">
              Daily Capsule
            </h1>
            <div className="w-9" /> {/* spacer */}
          </div>
        </div>

        {/* Content */}
        <div className="-mt-4 rounded-t-[24px] bg-white relative z-10 p-4">
          {/* Card: Daily Capsule Series */}
          <div className="rounded-2xl border border-gray-200 overflow-hidden">
            <div className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-[20px] font-semibold text-gray-800">
                    Daily Capsule Series
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">Last 30 days</p>
                </div>
                <div className="relative">
                  <div className="rounded-full p-[6px] border border-[#FCE1D8]">
                    <CircleProgress percent={0} />
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-6 grid grid-cols-3 text-center">
                <div>
                  <div className="text-2xl font-bold text-gray-800">30</div>
                  <div className="text-sm text-gray-500 mt-1">Total</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-500">0</div>
                  <div className="text-sm text-gray-500 mt-1">Solved</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-800">30</div>
                  <div className="text-sm text-gray-500 mt-1">Missed</div>
                </div>
              </div>
            </div>

            {/* Avatars row */}
            <div className="border-t border-gray-200 bg-white px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {people.map((p, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full ring-2 ring-white flex items-center justify-center text-[12px] ${p.color}`}
                      title={p.name}
                    >
                      {p.name}
                    </div>
                  ))}
                </div>
                <span className="ml-1 rounded-full border border-gray-300 px-3 py-1 text-xs font-medium text-gray-700">
                  25715 +
                </span>
              </div>
              <p className="text-center text-[13px] text-purple-700 font-medium mt-2">
                Students learning this deck
              </p>
            </div>
          </div>

          {/* Helper text */}
          <p className="text-[15px] text-gray-700 leading-snug mt-5">
            You can now access the daily capsules that you have missed within
            last 30&nbsp;days
          </p>

          {/* Timeline List */}
          <div className="mt-4">
            {capsules.map((c, idx) => (
              <div key={c.id} className="relative flex gap-4">
                {/* Timeline rail */}
                <div className="flex flex-col items-center">
                  <div
                    className={`mt-2 w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-semibold ${
                      idx === 0
                        ? "border-purple-600 text-purple-700"
                        : "border-gray-300 text-gray-700"
                    }`}
                  >
                    {c.id}
                  </div>
                  {idx !== capsules.length - 1 && (
                    <div className="flex-1 w-[2px] bg-gray-200 mt-2 mb-2" />
                  )}
                </div>

                {/* Row card with link */}
                <Link href="/daily-capsule-detail" className="flex-1 pl-1 w-full">
                  <div className="w-full border-b border-gray-200 py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[18px] font-semibold text-gray-800">
                          {c.title}
                        </div>
                        <div
                          className={`mt-1 text-sm ${
                            c.today ? "text-gray-500" : "text-gray-600"
                          }`}
                        >
                          {c.meta}
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-purple-700" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Bottom safe area */}
          <div className="h-8" />
          <div className="mx-auto mb-3 w-28 h-[5px] rounded-full bg-gray-200" />
        </div>
      </div>
    </div>
  );
}
