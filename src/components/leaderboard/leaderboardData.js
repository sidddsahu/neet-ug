
"use client";
import React, { useState } from "react";
import { ChevronLeftIcon, InformationCircleIcon } from "@heroicons/react/24/outline";

// Dummy Data
const leaderboardData = {
  allTime: [
    { id: 1, name: "Nambiar", score: 89, avatar: null },
    { id: 2, name: "Masrat Dua", score: 85, avatar: "https://picsum.photos/100?1" },
    { id: 3, name: "Nimal M", score: 84, avatar: "https://picsum.photos/100?2" },
    { id: 4, name: "Happy", score: 83, avatar: "https://i.pravatar.cc/50?img=12" },
    { id: 5, name: "Naman Rai", score: 83, avatar: "https://i.pravatar.cc/50?img=13" },
    { id: 6, name: "Niha Mithaal", score: 82, avatar: null },
    { id: 7, name: "Japneet", score: 82, avatar: null },
    { id: 8, name: "Yamaguchi", score: 82, avatar: "https://i.pravatar.cc/50?img=15" },
    { id: 9, name: "Shal", score: 82, avatar: null },
    { id: 10, name: "Dr Aroosa", score: 82, avatar: null },
    { id: 11, name: "Pavan", score: 82, avatar: null },
  ],
  last30days: [],
  last7days: [],
};

const tabs = [
  { id: "allTime", label: "All Time" },
  { id: "last30days", label: "Last 30 days" },
  { id: "last7days", label: "Last 7 days" },
];

export default function Leaderboarddata() {
  const [activeTab, setActiveTab] = useState("allTime");
  const data = leaderboardData[activeTab] || [];

  const top3 = data.slice(0, 3);
  const others = data.slice(3);

  return (
    <div className="bg-gray-50 flex justify-center">
      <div className="w-full max-w-md bg-white shadow-xl overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="bg-[#5E3C73] text-white px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => window.history.back()}
            className="h-9 w-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <h1 className="text-lg font-semibold">Leaderboard</h1>
          <button className="h-9 w-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
            <InformationCircleIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 bg-white">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 text-sm font-medium transition relative ${
                activeTab === tab.id
                  ? "text-orange-500"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500" />
              )}
            </button>
          ))}
        </div>

        {/* Top 3 */}
        {top3.length > 0 && (
          <div className="flex justify-around items-end bg-white py-6">
            {top3.map((user, idx) => (
              <div key={user.id} className="flex flex-col items-center">
                <div className="relative">
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className={`object-cover rounded-full border-4 ${
                        idx === 0
                          ? "w-24 h-24 border-orange-400"
                          : "w-20 h-20 border-gray-200"
                      }`}
                    />
                  ) : (
                    <div
                      className={`flex items-center justify-center rounded-full bg-purple-500 text-white font-bold ${
                        idx === 0
                          ? "w-24 h-24 text-2xl border-4 border-orange-400"
                          : "w-20 h-20 border-4 border-gray-200"
                      }`}
                    >
                      {user.name.charAt(0)}
                    </div>
                  )}

                  <span
                    className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-2 py-0.5 rounded-full text-xs font-semibold text-white ${
                      idx === 0 ? "bg-orange-400" : "bg-blue-400"
                    }`}
                  >
                    {idx === 0 ? "01" : idx === 1 ? "02" : "03"}
                  </span>
                </div>
                <p className="mt-3 text-sm font-medium text-gray-900">
                  {user.name}
                </p>
                <p className="text-xs font-semibold text-orange-500">
                  {user.score}%
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Others */}
        <div className="divide-y divide-gray-200">
          {others.map((user, idx) => (
            <div
              key={user.id}
              className="flex items-center justify-between px-4 py-3 bg-gray-50"
            >
              <div className="flex items-center space-x-3">
                <span className="w-6 text-sm text-gray-500 font-medium">
                  {idx + 4}
                </span>
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm font-bold">
                    {user.name.charAt(0)}
                  </div>
                )}
                <span className="text-gray-900 text-sm">{user.name}</span>
              </div>
              <span className="text-sm font-semibold text-orange-500">
                {user.score}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
