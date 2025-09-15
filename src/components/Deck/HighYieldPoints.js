"use client"; // ✅ needed if using App Router in Next.js 13+

import React from "react";
import { LockClosedIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const sections = [
  { id: 3, title: "General Anatomy", cards: 22, locked: true },
  { id: 4, title: "Upper Limb", cards: 20, locked: true },
  { id: 5, title: "Lower Limb", cards: 23, locked: true },
  { id: 6, title: "Thorax", cards: 20, locked: true },
  { id: 7, title: "Abdomen and Pelvis", cards: 53, locked: true },
  { id: 8, title: "Head And Neck", cards: 65, locked: false },
  { id: 9, title: "Brain and Spinal Cord", cards: 26, locked: true },
  { id: 10, title: "Embryology", cards: 31, locked: true },
];

export default function HighYieldPoints() {
  return (
    <div className="max-w-lg mx-auto px-4 py-6 font-sans mb-12">
      <h2 className="text-xl font-semibold text-purple-700 mb-6">
        High Yield Points
      </h2>
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute top-0 left-[22px] w-px h-full bg-purple-200"></div>

        {sections.map((section) => (
          <div key={section.id} className="relative pl-12 pb-4">
            {/* Step Number */}
            <div className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 rounded-full border border-purple-300 bg-white text-purple-700 font-medium">
              {section.id}
            </div>

            {/* Content */}
            <div className="flex items-center justify-between bg-white border-b border-purple-100 pb-3">
              <div>
                <h3 className="text-base font-semibold text-gray-800">
                  {section.title}
                </h3>
                <p className="text-sm text-gray-500">{section.cards} Cards</p>
              </div>
              <div>
                {section.locked ? (
                  <LockClosedIcon className="w-5 h-5 text-purple-400" />
                ) : (
                  <ChevronRightIcon className="w-5 h-5 text-purple-500" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
