// app/deck/[id]/page.jsx
"use client";

import React, { useMemo, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FiBookmark, FiMoreVertical } from "react-icons/fi";
import { FaCrown } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";

/*
  Deck Details page component
  - Place file in app/deck/[id]/page.jsx (App Router)
  - If you use Pages Router (pages/...), remove the "use client" directive above.
*/

export default function DeckDetailsPage() {
  // Sample deck + cards data (replace with backend data)
  const initialCards = [
    {
      id: 1,
      question: "DOC for acinetobacter",
      answer: "Carbapenems",
      details: "",
      bookmarked: false,
      suspended: false,
      seen: false,
      image: null,
    },
    {
      id: 2,
      question: "DOC for acromegaly",
      answer: "Somatostatin analog - Octreotide",
      details: "",
      bookmarked: false,
      suspended: false,
      seen: false,
      image: null,
    },
    {
      id: 3,
      question: "Identify the condition from the given ECG and its treatment",
      answer: "The given ECG is of Wolff Parkinson White or WPW syndrome.",
      details:
        "Identifying features:\n• Delta wave\n• Shortened PR interval\n• Wide QRS\n\nTreatment depends on presentation. See notes below.",
      bookmarked: false,
      suspended: false,
      seen: false,
      // small inline svg ECG placeholder to demonstrate image rendering
      image: makeEcgDataUrl(),
    },
    {
      id: 4,
      question: "Identify the waves at which the arrows are pointed and name the condition where it is seen.",
      answer: "Osborn waves are seen in Hypothermia.",
      details:
        "Osborn waves (J waves) are typical of hypothermia and other electrolyte disturbances. Management: treat underlying cause.",
      bookmarked: true,
      suspended: false,
      seen: false,
      image: makeEcgDataUrl(true),
    },
    // add more card examples...
  ];

  // deck meta
  const deckMeta = {
    title: "Must know ECGs",
    students: 2104,
  };

  const [cards, setCards] = useState(initialCards);
  const [activeTab, setActiveTab] = useState("all"); // all | bookmarked | suspended
  const [showOnlyUnseen, setShowOnlyUnseen] = useState(false);

  // derived stats
  const total = cards.length;
  const seenCount = cards.filter((c) => c.seen).length;
  const remaining = total - seenCount;
  const progress = Math.round((seenCount / Math.max(1, total)) * 100);

  const bookmarkedCount = cards.filter((c) => c.bookmarked).length;
  const suspendedCount = cards.filter((c) => c.suspended).length;

  // Filter cards based on active tab
  const filteredCards = useMemo(() => {
    let list = cards;
    if (activeTab === "bookmarked") list = list.filter((c) => c.bookmarked);
    else if (activeTab === "suspended") list = list.filter((c) => c.suspended);
    if (showOnlyUnseen) list = list.filter((c) => !c.seen);
    return list;
  }, [cards, activeTab, showOnlyUnseen]);

  // toggle functions
  function toggleBookmark(id) {
    setCards((prev) => prev.map((c) => (c.id === id ? { ...c, bookmarked: !c.bookmarked } : c)));
  }
  function toggleSuspend(id) {
    setCards((prev) => prev.map((c) => (c.id === id ? { ...c, suspended: !c.suspended } : c)));
  }
  function toggleSeen(id) {
    setCards((prev) => prev.map((c) => (c.id === id ? { ...c, seen: !c.seen } : c)));
  }

  // "Start Memorizing" — hook this up to route or memorization flow
  function onStartMemorizing() {
    // placeholder - replace with navigate to memorization route
    alert("Start memorizing clicked — connect to your memorization flow.");
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top header */}
      <div className="bg-[#6f4f6a] text-white flex items-center px-4 py-3 shadow">
        <button
          aria-label="Back"
          onClick={() => window.history.back()}
          className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-[#6f4f6a] mr-3 shadow-sm"
        >
          <IoIosArrowBack size={20} />
        </button>

        <h1 className="flex-1 text-center text-lg font-medium">Deck Details</h1>

        {/* right spacer to balance header */}
        <div className="w-10" />
      </div>

      {/* Deck summary card */}
      <div className="mx-4 mt-4 rounded-xl overflow-hidden border border-[#e8d9e6]">
        <div className="bg-[#faf6fb] p-5">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-semibold text-[#4c3560]">{deckMeta.title}</h2>
            </div>

            {/* progress donut */}
            <div className="w-16 h-16 flex items-center justify-center">
              <DonutProgress size={64} progress={progress} stroke={8} />
            </div>
          </div>

          {/* stats */}
          <div className="mt-5 grid grid-cols-3 text-center text-gray-600">
            <div>
              <div className="text-xl font-semibold text-[#39263f]">{total}</div>
              <div className="text-sm">Total</div>
            </div>
            <div>
              <div className="text-xl font-semibold text-[#f08b5d]">{seenCount}</div>
              <div className="text-sm">Seen</div>
            </div>
            <div>
              <div className="text-xl font-semibold text-[#39263f]">{remaining}</div>
              <div className="text-sm">Remaining</div>
            </div>
          </div>
        </div>

        {/* students row */}
        <div className="bg-white border-t border-[#eee] px-5 py-4 flex flex-col items-center">
          <div className="flex items-center -space-x-3 mb-2">
            {/* sample overlapping avatars */}
            {["S", "D", "P", "K", "A"].map((s, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-semibold border-2 border-white shadow"
                style={{
                  backgroundColor: ["#91C788", "#6D3E66", "#62A0FF", "#E9A826", "#75507E"][i % 5],
                }}
              >
                {s}
              </div>
            ))}
            <div className="ml-2 bg-white border px-2 py-1 rounded-full text-sm font-medium shadow-sm">{deckMeta.students}+</div>
          </div>

          <div className="text-[#5e4960] text-sm mb-3">Students learning this deck</div>

          <div className="w-full">
            <button
              onClick={onStartMemorizing}
              className="w-full relative rounded-full py-3 px-4 text-[#a44b26] font-medium bg-gradient-to-r from-[#ffe8de] to-[#ffd6b8] border border-[#ffa26f] shadow-sm"
            >
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-sm">
                <BiChevronRight className="text-[#ff7b3a]" />
              </div>
              Start Memorizing
            </button>
          </div>
        </div>
      </div>

      {/* dashed separator */}
      <hr className="border-t-2 border-dashed border-gray-200 my-6 mx-4" />

      {/* Tabs (sticky) */}
      <div className="sticky top-[74px] z-20 bg-white px-4 py-3 border-b border-gray-100">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <TabPill
              active={activeTab === "all"}
              onClick={() => setActiveTab("all")}
              label="All"
              count={total}
            />
            <TabPill
              active={activeTab === "bookmarked"}
              onClick={() => setActiveTab("bookmarked")}
              label="Bookmarked"
              count={bookmarkedCount}
            />
            <TabPill
              active={activeTab === "suspended"}
              onClick={() => setActiveTab("suspended")}
              label="Suspended"
              count={suspendedCount}
            />
          </div>

          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 text-sm text-gray-500">
              <input
                type="checkbox"
                checked={showOnlyUnseen}
                onChange={(e) => setShowOnlyUnseen(e.target.checked)}
                className="h-4 w-4 accent-[#6f4f6a]"
              />
              <span>Unseen only</span>
            </label>
          </div>
        </div>
      </div>

      {/* Card list */}
      <div className="px-4 pb-20 max-w-3xl mx-auto mt-4 space-y-4">
        {filteredCards.length === 0 ? (
          <div className="py-12 text-center text-gray-500">No cards found for this filter.</div>
        ) : null}

        {filteredCards.map((card, idx) => (
          <article key={card.id} className="relative bg-white border border-[#e7dfe9] rounded-xl shadow-sm overflow-hidden">
            {/* Top small number badge */}
            <div className="absolute -top-3 left-4 bg-white border border-[#ecdceb] rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold text-[#6f4f6a] z-10">
              {card.id}.
            </div>

            {/* Card header (question) */}
            <div className="bg-[#f5eff6] px-5 pt-6 pb-4 border-b border-[#efe6ef]">
              <h3 className="text-[#443049] font-semibold leading-snug">{card.question}</h3>
            </div>

            {/* Card body (answer / image / details) */}
            <div className="px-5 py-4">
              {card.image ? (
                <div className="mb-4 rounded-md overflow-hidden border border-[#efe6ef]">
                  <img src={card.image} alt="card image" className="w-full object-cover" />
                </div>
              ) : null}

              {card.answer ? <p className="text-gray-700 mb-3">{card.answer}</p> : null}

              {card.details ? (
                <div className="text-gray-600 whitespace-pre-line border-t pt-3 mt-3 text-sm">
                  {card.details}
                </div>
              ) : null}

              <div className="mt-3 flex items-center justify-between">
                <div className="flex gap-3 items-center text-sm text-gray-500">
                  <button
                    onClick={() => toggleSeen(card.id)}
                    className={`px-3 py-1 rounded-full border ${
                      card.seen ? "bg-[#f3e9f2] border-[#cfa9d0] text-[#6f4f6a]" : "bg-white border-[#efe6ef]"
                    }`}
                  >
                    {card.seen ? "Seen" : "Mark seen"}
                  </button>

                  <button
                    onClick={() => toggleSuspend(card.id)}
                    className={`px-3 py-1 rounded-full border ${
                      card.suspended ? "bg-[#fff1f0] border-[#f3c1bd] text-[#c24d3a]" : "bg-white border-[#efe6ef]"
                    }`}
                  >
                    {card.suspended ? "Suspended" : "Suspend"}
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleBookmark(card.id)}
                    className="p-2 rounded-full border border-[#efe6ef] bg-white"
                    title={card.bookmarked ? "Remove bookmark" : "Bookmark"}
                    aria-pressed={card.bookmarked}
                  >
                    <FiBookmark className={card.bookmarked ? "text-[#6f4f6a]" : "text-gray-400"} size={18} />
                  </button>

                  <button className="p-2 rounded-full border border-[#efe6ef] bg-white" title="More">
                    <FiMoreVertical className="text-gray-400" size={16} />
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

/* ---------- Helper UI components ---------- */

function TabPill({ active, onClick, label, count }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-3 py-2 rounded-full ${
        active ? "bg-[#5d3c56] text-white" : "bg-white text-gray-600 border border-[#f1e8f2]"
      }`}
    >
      <span className="text-sm font-medium">{label}</span>
      <span
        className={`text-xs inline-flex items-center justify-center px-2 py-0.5 rounded-full ${
          active ? "bg-white text-[#5d3c56] font-semibold" : "bg-[#efeef1] text-gray-600"
        }`}
      >
        {count}
      </span>
    </button>
  );
}

/* Donut SVG progress used in top card */
function DonutProgress({ size = 64, progress = 0, stroke = 8 }) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="transform -rotate-90">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#f6d6c0"
        strokeWidth={stroke}
        fill="none"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#ff8b5b"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        fill="none"
      />
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="12" fill="#6f4f6a" className="font-semibold">
        {progress}%
      </text>
    </svg>
  );
}

/* Small helper: returns a simple ECG-like inline SVG data URL.
   pass "pink" to make style slightly different */
function makeEcgDataUrl(pink = false) {
  const stroke = pink ? "#cc6b83" : "#2b2b2b";
  const bg = "#ffffff";
  const svg = `
  <svg xmlns='http://www.w3.org/2000/svg' width='1200' height='300' viewBox='0 0 1200 300'>
    <rect width='100%' height='100%' fill='${bg}'/>
    <g stroke='${stroke}' stroke-width='3' fill='none'>
      <polyline points='0,160 60,160 90,110 150,220 210,160 270,160 330,120 360,160 420,160 480,90 540,160 600,160 660,130 720,160 780,160 840,140 900,160 960,160 1020,120 1080,160 1140,160 1200,160' stroke-linejoin='round' stroke-linecap='round'/>
    </g>
    <g stroke='#eee' stroke-width='1'>
      ${Array.from({ length: 24 }).map((_, i) => `<line x1="${i * 50}" x2="${i * 50}" y1="0" y2="300" />`).join('')}
    </g>
  </svg>
  `;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
