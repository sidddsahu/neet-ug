"use client"; // ✅ Important if you’re using Next.js App Router (app/)

import React, { useState } from "react";
import { ArrowLeftIcon, BookmarkIcon } from "@heroicons/react/24/outline";

const TopicDetails = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question:
        "What is marked below and which cranial nerve is related to it?",
      image: "/img/anatomy.jpg", // ✅ put images inside public/img folder
      answer:
        "The cribriform plate is marked below and the olfactory nerve (cranial nerve I) is related to it.",
      isBookmarked: false,
    },
    {
      id: 2,
      question: "Identify this structure and its function?",
      image: "/img/nuclear.jpg",
      answer:
        "This is the optic chiasm, which is the part of the brain where the optic nerves partially cross.",
      isBookmarked: false,
    },
    {
      id: 3,
      question: "What passes through this foramen?",
      image: "/img/lungs.jpg",
      answer:
        "The mandibular branch of the trigeminal nerve (cranial nerve V3) passes through the foramen ovale.",
      isBookmarked: false,
    },
  ]);

  const tabs = [
    { id: "all", label: "All", count: questions.length },
    {
      id: "bookmarked",
      label: "Bookmarked",
      count: questions.filter((q) => q.isBookmarked).length,
    },
    { id: "suspended", label: "Suspended", count: 0 },
  ];

  const toggleBookmark = (questionId) => {
    const updatedQuestions = questions.map((question) =>
      question.id === questionId
        ? { ...question, isBookmarked: !question.isBookmarked }
        : question
    );
    setQuestions(updatedQuestions);
  };

  const filteredQuestions =
    activeTab === "all"
      ? questions
      : activeTab === "bookmarked"
      ? questions.filter((q) => q.isBookmarked)
      : [];

  return (
    <div className="bg-white min-h-screen mb-18">
      {/* Header */}
      <div className="bg-[#6B3FA0] px-4 py-3 flex items-center">
        <ArrowLeftIcon className="h-6 w-6 text-white" />
        <h1 className="text-white text-lg font-semibold flex-1 text-center mr-6">
          Topic Details
        </h1>
      </div>

      {/* Top Stats Card */}
      <div className="bg-white mx-4 mt-4 rounded-xl overflow-hidden border border-gray-100">
        {/* Upper section */}
        <div className="bg-[#F8F4FB] px-4 py-4 flex justify-between items-start">
          <div>
            <h2 className="text-lg font-medium text-gray-800">
              Skull foramens and Pharyngeal arches
            </h2>
            <div className="flex justify-between mt-4 text-center">
              <div className="flex flex-col items-center w-16">
                <p className="text-lg font-semibold text-gray-800">
                  {questions.length}
                </p>
                <p className="text-xs text-gray-500">Total</p>
              </div>
              <div className="flex flex-col items-center w-16">
                <p className="text-lg font-semibold text-orange-500">0</p>
                <p className="text-xs text-gray-500">Seen</p>
              </div>
              <div className="flex flex-col items-center w-20">
                <p className="text-lg font-semibold text-gray-800">
                  {questions.length}
                </p>
                <p className="text-xs text-gray-500">Remaining</p>
              </div>
            </div>
          </div>
          <div className="w-12 h-12 rounded-full border-[3px] border-[#FCDDEC] flex items-center justify-center text-sm font-medium text-[#FBB8C0]">
            0%
          </div>
        </div>

        {/* Lower section */}
        <div className="bg-[#FFEEDD] px-4 py-3 flex justify-center">
          <button className="px-4 py-2 rounded-full border border-orange-400 text-orange-500 text-sm font-medium flex items-center space-x-1">
            <span>Start Memorizing</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center px-4 mt-4 space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-1 text-sm font-medium ${
              activeTab === tab.id
                ? "text-white bg-[#6B3FA0] px-3 py-1 rounded-full"
                : "text-gray-700"
            }`}
          >
            <span>{tab.label}</span>
            <span
              className={`text-xs font-medium ${
                activeTab === tab.id ? "text-white" : "text-gray-500"
              }`}
            >
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Questions List */}
      <div className="pb-20">
        {filteredQuestions.map((question) => (
          <div key={question.id} className="px-4 mt-4">
            <div className="bg-white border border-gray-100 rounded-2xl shadow-md overflow-hidden">
              {/* Question number & Bookmark */}
              <div className="flex items-center justify-between px-4 pt-3">
                <span className="text-sm font-semibold text-gray-700">
                  {question.id}.
                </span>
                <BookmarkIcon
                  className={`h-5 w-5 cursor-pointer ${
                    question.isBookmarked
                      ? "text-purple-600 fill-purple-600"
                      : "text-purple-400"
                  }`}
                  onClick={() => toggleBookmark(question.id)}
                />
              </div>

              {/* Question image */}
              <div className="flex justify-center">
                <img
                  src={question.image}
                  alt="Anatomy"
                  className="rounded-xl border border-gray-100"
                  style={{ height: "150px", width: "150px" }}
                />
              </div>

              {/* Question text */}
              <div className="px-4 mt-3 pb-3 text-sm font-medium text-purple-800 leading-snug">
                {question.question}
              </div>

              {/* Answer box */}
              <div className="bg-purple-50 px-4 py-3 border-t border-gray-100">
                <p className="text-xs text-gray-700 leading-snug">
                  {question.answer}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Empty State */}
        {filteredQuestions.length === 0 && (
          <p className="text-center text-gray-500 mt-6 text-sm">
            No questions available in this tab.
          </p>
        )}
      </div>
    </div>
  );
};

export default TopicDetails;
