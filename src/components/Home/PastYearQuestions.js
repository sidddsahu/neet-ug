"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation"; // ✅ Next.js navigation

export default function PastYearQuestions() {
  const router = useRouter(); // ✅ replaces useNavigate()

  const pyqs = [
    {
      title: "INICET PYQS",
      cards: "7628 cards",
      link: "/inicet-pyqs",
    },
    {
      title: "NEET PG PYQS",
      cards: "1777 cards",
      link: "/neet-pg-pyqs",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-purple-700 text-white py-4 px-4 flex items-center shadow-md">
        <button
          onClick={() => router.back()} // ✅ Next.js back navigation
          className="mr-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-purple-600 transition"
        >
          ←
        </button>
        <h1 className="text-lg font-semibold">Past Year Questions</h1>
      </div>

      {/* Title + Subtitle */}
      <div className="px-5 py-5 border-b border-gray-200 bg-white">
        <h2 className="text-xl font-semibold text-gray-800">
          PYQs - The Gold Mine
        </h2>
        <p className="text-sm text-gray-600 mt-1 leading-relaxed">
          Good news! You can now Master these Cards more effectively than any
          other existing methods!
        </p>
      </div>

      {/* List of PYQs */}
      <div className="flex flex-col mt-2">
        {pyqs.map((item, index) => (
          <div
            key={index}
            onClick={() => router.push(item.link)} // ✅ Next.js navigation
            className="flex items-center justify-between px-5 py-4 bg-white hover:bg-purple-50 transition cursor-pointer border-b border-gray-100"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shadow-sm">
                <div className="w-5 h-7 bg-orange-400 rounded-sm"></div>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  {item.title}
                </p>
                <p className="text-xs text-gray-500">{item.cards}</p>
              </div>
            </div>
            <ChevronRight className="text-gray-400 w-5 h-5" />
          </div>
        ))}
      </div>
    </div>
  );
}
