"use client";

import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FiPlus, FiMessageCircle, FiCheckCircle } from "react-icons/fi";
import { Dialog } from "@headlessui/react";
import { useRouter } from "next/navigation"; // ✅ Correct import for Next.js App Router

const Queries = () => {
  const [queries, setQueries] = useState([
    {
      id: 1,
      category: "Support",
      message: "How do I reset my password?",
      date: "15 Aug 2025",
      status: "Resolved",
    },
    {
      id: 2,
      category: "General",
      message: "Will there be new features in September?",
      date: "10 Aug 2025",
      status: "Pending",
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [newCategory, setNewCategory] = useState("Support");
  const [newMessage, setNewMessage] = useState("");

  const router = useRouter();

  const categories = ["Support", "Billing", "General", "Technical"];

  const handleSubmit = () => {
    if (!newMessage.trim()) return;

    const newQuery = {
      id: queries.length + 1,
      category: newCategory,
      message: newMessage,
      date: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      status: "Pending",
    };

    setQueries([newQuery, ...queries]);
    setNewMessage("");
    setIsOpen(false);
  };

  // ✅ Back Button Functionality (Next.js version)
  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back(); // Go back to previous page
    } else {
      router.push("/"); // Fallback: Go home if no history
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-purple-700 text-white px-4 py-4 flex items-center shadow-md">
        <button
          onClick={handleBack}
          className="text-white text-2xl hover:bg-white/20 rounded-full p-1 transition"
        >
          <IoIosArrowBack />
        </button>
        <h1 className="text-lg font-semibold flex-1 text-center -ml-6">
          My Queries
        </h1>
      </div>

      {/* Queries List */}
      <div className="p-4 flex-1 overflow-y-auto">
        {queries.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <FiMessageCircle className="text-5xl mb-3" />
            <p>No queries yet. Start by creating one!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {queries.map((q) => (
              <div
                key={q.id}
                className="bg-white rounded-2xl shadow-sm p-4 border flex flex-col gap-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-purple-700">
                    {q.category}
                  </span>
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${
                      q.status === "Resolved"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {q.status}
                  </span>
                </div>
                <p className="text-gray-800 text-sm leading-snug">{q.message}</p>
                <div className="text-xs text-gray-500 flex items-center gap-1">
                  <FiCheckCircle />
                  <span>{q.date}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Floating Add Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-18 right-6 bg-purple-700 text-white p-4 rounded-full shadow-lg hover:bg-purple-800 transition"
      >
        <FiPlus className="text-2xl" />
      </button>

      {/* New Query Modal */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
        <div className="fixed inset-0 flex items-end justify-center sm:items-center">
          <Dialog.Panel className="bg-white rounded-t-2xl sm:rounded-2xl w-full sm:max-w-md p-6 shadow-lg">
            <Dialog.Title className="text-lg font-semibold text-gray-800 mb-4">
              New Message
            </Dialog.Title>

            {/* Dropdown */}
            <select
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="w-full border rounded-lg p-2 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            {/* Textarea */}
            <textarea
              rows={4}
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="w-full border rounded-lg p-2 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            {/* Actions */}
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
              >
                Submit
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default Queries;
