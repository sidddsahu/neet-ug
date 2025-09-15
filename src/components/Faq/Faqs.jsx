"use client";

import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function Faqs() {
  const [openFaq, setOpenFaq] = useState(null);
  const router = useRouter();

  const faqs = [
    {
      id: 1,
      question: "What is Neuroflip?",
      answer:
        "Neuroflip is a flashcard app designed specifically for NEET-PG and FMGE candidates. It utilizes active recall and spaced repetition to enhance memory retention, offering over 8,000 flashcards and 2,000+ images.",
    },
    {
      id: 2,
      question: "How does Neuroflip assist in learning?",
      answer:
        "Neuroflip helps by breaking down complex concepts into simple flashcards, using spaced repetition to improve recall and long-term memory retention.",
    },
    {
      id: 3,
      question: "What features does Neuroflip offer?",
      answer:
        "It provides smart flashcards, custom quizzes, image-based learning, and detailed progress tracking to help students revise effectively.",
    },
    {
      id: 4,
      question: "How do you navigate the Neuroflip app?",
      answer:
        "You can easily browse through subjects, select flashcard decks, attempt quizzes, and monitor your progress with intuitive navigation features.",
    },
    {
      id: 5,
      question: "What are some tips for maximizing the use of Neuroflip?",
      answer:
        "Use flashcards daily, review weak areas with quizzes, and follow spaced repetition cycles for better results.",
    },
    {
      id: 6,
      question:
        "Where can I get more information or provide feedback on Neuroflip?",
      answer:
        "You can reach out via the support section in the app or visit our website for further details and feedback options.",
    },
  ];

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  // ✅ Back button functionality (Next.js version)
  const handleBack = () => {
    if (window.history.state && window.history.length > 1) {
      router.back(); // go back
    } else {
      router.push("/"); // fallback: go home
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
          FAQs
        </h1>
      </div>

      {/* FAQs List */}
      <div className="p-4 space-y-4">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200"
          >
            <button
              onClick={() => toggleFaq(faq.id)}
              className="w-full flex justify-between items-center px-4 py-3 text-left"
            >
              <span className="text-sm font-medium text-gray-800">
                {faq.question}
              </span>
              {openFaq === faq.id ? (
                <FiMinus className="text-gray-600" />
              ) : (
                <FiPlus className="text-gray-600" />
              )}
            </button>

            {openFaq === faq.id && (
              <div className="px-4 pb-3 text-sm text-gray-600 leading-snug border-t border-gray-100">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
