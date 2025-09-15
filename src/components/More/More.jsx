

"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Bookmark, Star, Notebook, Pencil, ArrowLeft } from "lucide-react";

const More = () => {
  const router = useRouter();

  return (
    <div className="bg-white dark:bg-gray-900 ">
      {/* Header with Back Button */}
      <div className="bg-purple-700 text-white py-4 px-4 flex items-center justify-between">
        {/* <button
          onClick={() => router.back()}
          className="flex items-center space-x-1 hover:text-gray-200 transition"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Back</span>
        </button> */}
        <h1 className="text-lg font-semibold text-center flex-1">More</h1>
        <div className="w-10" /> {/* Spacer to balance flex */}
      </div>

      {/* Profile Section */}
      <div className="flex flex-col items-center mt-6 ">
        <div className="relative">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..." // your profile image
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white dark:border-gray-800 shadow-md"
          />
          <button className="absolute bottom-1 right-1 bg-white dark:bg-gray-800 rounded-full p-1 shadow-md">
            <Pencil className="w-4 h-4 text-purple-600" />
          </button>
        </div>
        <h2 className="mt-3 text-lg font-semibold text-gray-900 dark:text-white">
          Siddhant Sahu
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          siddhantsahu503@gmail.com
        </p>
      </div>

      {/* Unlock Premium */}
      <Link
        href="/premium"
        className="mt-6 mx-4 flex items-center justify-between bg-red-200 dark:bg-red-400 text-red-800 dark:text-red-900 px-4 py-3 rounded-lg hover:shadow-md transition"
      >
        <div>
          <h3 className="font-semibold text-base">Unlock Premium</h3>
          <p className="text-sm">
            Get the best of Neuroflip at unbelievable price
          </p>
        </div>
        <span className="text-2xl font-bold">→</span>
      </Link>

      {/* My Cards */}
      <div className="mt-8 px-4">
        <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-4">
          My Cards
        </h3>
        <div className="grid grid-cols-3 gap-4 py-4">
          {/* Bookmarked Cards */}
          <Link
            href="/bookmark"
            className="bg-white dark:bg-gray-800 shadow-sm rounded-xl p-4 flex flex-col items-center hover:shadow-md transition"
          >
            <Bookmark className="w-6 h-6 text-gray-500" />
            <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
              Bookmarked Cards
            </p>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              1 Cards
            </span>
          </Link>

          {/* Suspended Cards */}
          <Link
            href="/suspended"
            className="bg-white dark:bg-gray-800 shadow-sm rounded-xl p-4 flex flex-col items-center hover:shadow-md transition"
          >
            <Star className="w-6 h-6 text-gray-500" />
            <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
              Suspended Cards
            </p>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              0 Cards
            </span>
          </Link>

          {/* CustomDeck Settings */}
          <Link
            href="/customdeck"
            className="bg-white dark:bg-gray-800 shadow-sm rounded-xl p-4 flex flex-col items-center hover:shadow-md transition"
          >
            <Notebook className="w-6 h-6 text-gray-500" />
            <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
              CustomDeck Settings
            </p>
            <span className="text-xl font-bold text-gray-500">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default More;
