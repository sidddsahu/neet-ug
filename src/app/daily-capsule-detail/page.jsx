"use client";
import { useState } from "react";
import { ChevronLeft, Bookmark } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DailyCapsulePage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("all");

  const data = [
    {
      id: 1,
      question: "Other name of laryngomalacia?",
      answer: "Congenital laryngeal stridor",
    },
    {
      id: 2,
      question: "Type of stridor in laryngomalacia?",
      answer: "Inspiratory stridor",
    },
  ];

  // filtered data based on tab
  const filteredData =
    activeTab === "all" ? data : activeTab === "bookmarked" ? [] : [];

  return (
    <div className="min-h-screen bg-[#f9f9f9] flex flex-col items-center text-gray-800">
      {/* Header */}
      <div className="w-full bg-[#6f4f6a] text-white flex items-center px-4 py-4 fixed top-0 z-10">
        <button
          className="mr-3"
          onClick={() => router.back()}
          aria-label="Back"
        >
          <ChevronLeft size={22} />
        </button>
        <h2 className="text-lg font-semibold mx-auto">Daily Capsule</h2>
        <div className="w-6" />
      </div>

      {/* Scrollable content */}
      <div className="pt-20 pb-10 w-full flex flex-col items-center">
        {/* Capsule Summary Card */}
        <div className="w-[92%] bg-[#fefbff] mt-2 p-4 rounded-2xl shadow-sm border border-[#efe6f2]">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-[#3f2b43] text-lg font-semibold">
                Laryngomalacia
              </h3>
              <p className="text-sm text-gray-500 mt-[2px]">26 Sep 2025</p>
            </div>
            <div className="w-12 h-12 border-[2.5px] border-[#f2bfa8] rounded-full flex flex-col items-center justify-center text-sm font-medium text-[#d17b5e]">
              0%
            </div>
          </div>

          <div className="flex justify-between text-sm text-[#6b566a] mt-5 px-1">
            <div className="flex flex-col items-center">
              <span className="text-[18px] font-semibold leading-tight">
                19
              </span>
              <span className="text-[13px] mt-[1px]">Total</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[18px] font-semibold text-[#d17b5e] leading-tight">
                0
              </span>
              <span className="text-[13px] mt-[1px]">Seen</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[18px] font-semibold leading-tight">
                19
              </span>
              <span className="text-[13px] mt-[1px]">Remaining</span>
            </div>
          </div>

          {/* Button */}
          <div className="flex justify-center mt-5 mb-1">
            <button className="bg-gradient-to-r from-[#fee0ca] to-[#ffeede] text-[#5f2d40] font-semibold py-[9px] px-7 rounded-full border border-[#fcd1b2] text-sm flex items-center gap-2">
              Start Memorizing
              <span className="ml-1 text-[15px]">→</span>
            </button>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="flex justify-center mt-6 w-[92%]">
          <div className="flex bg-white w-full rounded-full p-[5px] border border-[#f0e6f2] shadow-sm">
            {[
              { id: "all", label: "All 19" },
              { id: "bookmarked", label: "Bookmarked 0" },
              { id: "suspended", label: "Suspended 0" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-[7px] rounded-full text-[13px] font-medium transition ${
                  activeTab === tab.id
                    ? "bg-[#6f4f6a] text-white shadow-sm"
                    : "text-[#6f4f6a]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Flashcards */}
        <div className="w-[92%] mt-5 mb-8">
          {filteredData.map((card) => (
            <div
              key={card.id}
              className="bg-white border border-[#efe6ef] rounded-xl mb-4 shadow-sm overflow-hidden"
            >
              {/* Question */}
              <div className="flex px-5 pt-4 pb-3 items-center gap-3 bg-[#faf8fa]">
                <div className="bg-white border border-[#ecdceb] rounded-full w-7 h-7 flex items-center justify-center text-xs font-semibold text-[#6f4f6a] shrink-0">
                  {card.id}.
                </div>
                <div className="flex-1">
                  <h3 className="text-[#3e2c43] text-[14px] font-semibold leading-snug">
                    {card.question}
                  </h3>
                </div>
              </div>

              {/* Answer + Bookmark */}
              <div className="px-5 py-12 flex justify-between items-center">
                <p className="text-[13.5px] text-[#3f2b43] leading-snug pr-2">
                  {card.answer}
                </p>
                <button
                  aria-label="Bookmark"
                  className="hover:opacity-100 opacity-70"
                >
                  <Bookmark size={18} className="text-[#6f4f6a]" />
                </button>
              </div>
            </div>
          ))}

          {/* If no cards */}
          {filteredData.length === 0 && (
            <p className="text-center text-sm text-gray-500 mt-8">
              No cards in this section.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
