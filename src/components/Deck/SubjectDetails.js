"use client";

import React from "react";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link"; // ✅ Next.js Link

const SubjectDetails = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-[#6B3FA0] px-4 py-3 flex items-center">
        <ArrowLeftIcon className="h-6 w-6 text-white" />
        <h1 className="text-white text-lg font-semibold flex-1 text-center mr-6">
          Subject Details
        </h1>
      </div>

      {/* Top Card */}
      <div className="bg-[#F8F4FB] mx-4 mt-4 rounded-xl p-4 shadow-sm">
        {/* Title & Progress */}
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-semibold text-gray-800">Anatomy</h2>
          <div className="w-12 h-12 rounded-full border-[3px] border-[#FCDDEC] flex items-center justify-center text-sm font-medium text-[#FBB8C0]">
            0%
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-between mt-4 text-center">
          <div>
            <p className="text-lg font-semibold text-gray-800">405</p>
            <p className="text-sm text-gray-500">Total</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-orange-500">0</p>
            <p className="text-sm text-gray-500">Seen</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-800">405</p>
            <p className="text-sm text-gray-500">Remaining</p>
          </div>
        </div>

        {/* Students */}
        <div className="mt-4 flex items-center">
          <div className="flex -space-x-3">
            {[
              "/img/download.jpg",
              "/img/download.jpg",
              "/img/download.jpg",
              "/img/download.jpg",
              "/img/download.jpg",
            ].map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt=""
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>
          <span className="ml-2 px-2 py-[2px] bg-white rounded-full border text-xs font-medium text-gray-800">
            7726+
          </span>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          Students learning this deck
        </p>
      </div>

      {/* Intro Text */}
      <p className="px-4 mt-4 text-sm text-gray-600 leading-snug">
        Begin your PG journey with topic specific decks curated just for you
      </p>

      {/* Deck List */}
      <div className="px-4 mt-4">
        {/* Item 1 with Link */}
        <Link
          href="/topic" // ✅ Next.js Route
          className="flex items-center py-3 border-b border-gray-200 hover:bg-gray-50 transition"
        >
          <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-sm font-medium">
            1
          </div>
          <div className="ml-4 flex-1">
            <p className="text-gray-800 font-medium text-sm">
              Skull foramens and Pharyngeal arches
            </p>
            <p className="text-xs text-gray-500">35 Cards</p>
          </div>
          <ChevronRightIcon className="h-4 w-4 text-gray-400" />
        </Link>

        {/* Section Title */}
        <p className="mt-4 mb-2 text-sm font-semibold text-gray-800">
          Image Based
        </p>

        {/* Item 2 */}
        <div className="flex items-center py-3 border-b border-gray-200">
          <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-sm font-medium">
            2
          </div>
          <div className="ml-4 flex-1">
            <p className="text-gray-800 font-medium text-sm">Images</p>
            <p className="text-xs text-gray-500">110 Cards</p>
          </div>
          <LockClosedIcon className="h-4 w-4 text-purple-400" />
        </div>
      </div>
    </div>
  );
};

export default SubjectDetails;
