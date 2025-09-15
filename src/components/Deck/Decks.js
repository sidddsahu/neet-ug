"use client";

import React from "react";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Decks() {
  const subjects = [
    { name: "Anatomy", cards: 405, icon: "🫁", link: "/subject" },
    { name: "Biochemistry", cards: 934, icon: "🧪", link: "/subject" },
    { name: "Physiology", cards: 216, icon: "🧠", link: "/subject" },
    { name: "Pharmacology", cards: 1109, icon: "💊", link: "/subject" },
    { name: "Microbiology", cards: 909, icon: "🧬", link: "/subject" },
    { name: "Pathology", cards: 663, icon: "🔬", link: "/subject" },
  ];

  return (
    <div className="bg-[var(--bg)] text-[var(--text-color)] pb-4 mb-12">
      {/* Header */}
      <div className="bg-purple-600 text-white text-center py-4">
        <h1 className="text-lg font-semibold">Decks</h1>
      </div>

      {/* Section Title */}
      <div className="px-4 mt-6">
        <h2 className="text-lg font-semibold">Subjectwise Cards</h2>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          Select a subject you want to review
        </p>
      </div>

      {/* Subject List */}
      <div className="mt-4">
        {subjects.map((subj, idx) => (
          <Link
            href={subj.link}
            key={idx}
            className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-purple-300 text-xl">
                {subj.icon}
              </div>
              <div>
                <p className="font-medium">{subj.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  {subj.cards} cards
                </p>
              </div>
            </div>
            <ChevronRightIcon className="w-5 h-5 text-gray-400" />
          </Link>
        ))}
      </div>
    </div>
  );
}
