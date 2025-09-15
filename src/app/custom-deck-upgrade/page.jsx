"use client";

import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FaCrown } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function CustomDeckUpgrade() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="bg-purple-700 text-white px-4 py-4 flex items-center shadow-md">
        <button
          onClick={() => router.back()}
          className="text-white text-2xl hover:bg-white/20 rounded-full p-1 transition"
        >
          <IoIosArrowBack />
        </button>
        <h1 className="text-lg font-semibold flex-1 text-center -ml-6">
          Custom Deck
        </h1>
      </div>

      {/* Locked Section */}
      <div className="flex flex-col justify-center items-center flex-1 px-6 text-center">
        {/* Crown Icon */}
        <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full mb-4">
          <FaCrown className="text-orange-500 text-3xl" />
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Upgrade to access Custom Deck!
        </h2>

        {/* Subtitle */}
        <p className="text-sm text-gray-600 leading-relaxed mb-6">
          Select the subjects and cards you want to study. <br />
          Customize your deck to suit your needs!
        </p>

        {/* Upgrade Button */}
        <button className="bg-orange-500 hover:bg-orange-600 text-white w-full max-w-md py-3 rounded-full text-lg font-medium shadow-md transition">
          Upgrade now
        </button>
      </div>
    </div>
  );
}
