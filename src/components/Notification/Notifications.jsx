"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FiClock, FiTrash2 } from "react-icons/fi";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";

export default function Notifications() {
  const [openIndex, setOpenIndex] = useState(null);
  const router = useRouter();

  const notifications = [
    {
      title: "Time to review Daily Capsule!",
      message:
        "Your daily capsule is live now. Please make sure to take the capsule before it expires.",
      type: "system",
      time: "17 hrs ago",
    },
    {
      title: "Time to review Daily Capsule!",
      message:
        "Your daily capsule is live now. Please make sure to take the capsule before it expires.",
      type: "system",
      time: "Aug 15, 4:36 PM",
    },
    {
      title: "Time to review Daily Capsule!",
      type: "system",
      time: "Aug 13, 4:44 PM",
    },
    {
      title: "Time to review Daily Capsule!",
      type: "system",
      time: "Aug 10, 4:37 PM",
    },
    {
      title: "Welcome to Neuroflip!",
      type: "system",
      time: "Aug 09, 6:09 PM",
    },
  ];

  const toggleNotification = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleBack = () => {
    if (window.history.length > 2) {
      router.back(); // go back
    } else {
      router.push("/"); // fallback to home
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-purple-700 text-white px-4 py-4 flex justify-between items-center shadow-md">
        <button
          onClick={handleBack}
          className="text-white text-2xl hover:bg-white/20 rounded-full p-1 transition"
        >
          <IoIosArrowBack />
        </button>
        <h1 className="text-lg font-semibold">Notifications</h1>
        <button className="text-white text-xl">
          <FiTrash2 />
        </button>
      </div>

      {/* Notifications List */}
      <div className="flex-1 p-4 space-y-4">
        {notifications.map((note, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 transition-all border border-gray-200"
          >
            {/* Header row */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleNotification(index)}
            >
              <div className="flex items-start gap-2">
                <span
                  className={`mt-2 w-2 h-2 rounded-full ${
                    index % 2 === 0 ? "bg-green-500" : "bg-transparent"
                  }`}
                ></span>
                <h2 className="font-semibold text-gray-800">{note.title}</h2>
              </div>
              <IoIosArrowDown
                className={`text-gray-600 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Expand/Collapse Message */}
            {openIndex === index && note.message && (
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {note.message}
              </p>
            )}

            {/* Footer */}
            <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
              <span className="text-red-500 font-medium">{note.type}</span>
              <FiClock />
              <span>{note.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
