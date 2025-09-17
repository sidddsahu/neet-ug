// app/custom-deck/page.jsx (Next.js 13+ App Router)
// OR pages/custom-deck.jsx (Next.js 12/13 Pages Router)
"use client"; // only if using App Router

import { IoIosArrowBack } from "react-icons/io";

export default function CustomDeck() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <div className="bg-purple-800 text-white flex items-center px-4 py-3 shadow-md">
        <button
          onClick={() => window.history.back()}
          className="text-white text-2xl"
        >
          <IoIosArrowBack />
        </button>
        <h1 className="flex-1 text-center text-lg font-medium">
          Custom Deck
        </h1>
        <div className="w-6" /> {/* spacer to balance back icon */}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        {/* Crown Icon */}
        <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
          <span className="text-orange-500 text-2xl">👑</span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-purple-900 mb-2">
          Upgrade to access Custom Deck!
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-6 max-w-md">
          Select the subjects and cards you want to study.
          Customize your deck to suit your needs!
        </p>

        {/* Upgrade Button */}
        <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-medium text-lg shadow-md hover:bg-orange-600 transition">
          Upgrade now
        </button>
      </div>
    </div>
  );
}