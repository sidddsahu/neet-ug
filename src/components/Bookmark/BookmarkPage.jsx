"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const BookmarkPage = () => {
  const [selected, setSelected] = useState("All");
  const [bookmarks, setBookmarks] = useState([
    {
      id: 1,
      question:
        "What is the level of orotic acid in ornithine transcarbamylase (OTC) deficiency?",
      answer:
        "Increased\n\n(Because excess carbamoyl phosphate is shunted to pyrimidine pathway and forms orotic acid)",
      subject: "Biochemistry",
    },

     {
      id: 2,
      question:
        "What is the level of orotic acid in ornithine transcarbamylase (OTC) deficiency?",
      answer:
        "Increased\n\n(Because excess carbamoyl phosphate is shunted to pyrimidine pathway and forms orotic acid)",
      subject: "Biochemistry",
    },


     {
      id: 3,
      question:
        "What is the level of orotic acid in ornithine transcarbamylase (OTC) deficiency?",
      answer:
        "Increased\n\n(Because excess carbamoyl phosphate is shunted to pyrimidine pathway and forms orotic acid)",
      subject: "Biochemistry",
    },


     {
      id: 4,
      question:
        "What is the level of orotic acid in ornithine transcarbamylase (OTC) deficiency?",
      answer:
        "Increased\n\n(Because excess carbamoyl phosphate is shunted to pyrimidine pathway and forms orotic acid)",
      subject: "Biochemistry",
    },


  ]);

  const handleRemove = (id) => {
    setBookmarks(bookmarks.filter((item) => item.id !== id));
  };

  const router = useRouter();

  return (
    <div className="w-full bg-gray-100 flex flex-col items-center ">
      {/* Header */}
      <div className="w-full max-w-md ">
        <div className="flex items-center bg-purple-700 text-white py-3 px-2">
          <button
            onClick={() => router.back()}
            className="flex items-center space-x-1 hover:text-gray-200 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back</span>
          </button>
          <h1 className="flex-1 text-lg font-semibold text-center">
            Bookmarked Cards
          </h1>
          <div className="w-12" /> {/* Spacer for alignment */}
        </div>

        {/* Dropdown */}
        <div className="relative mb-4 px-2 mt-2">
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className="w-full appearance-none border rounded-md py-2 px-3 pr-10 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            <option value="All">All</option>
            <option value="Biochemistry">Biochemistry</option>
            <option value="Physiology">Physiology</option>
            <option value="Pathology">Pathology</option>
          </select>
          <FaChevronDown className="absolute right-5 top-3 text-gray-500 pointer-events-none" />
        </div>

        {/* Cards */}
        {bookmarks.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-sm rounded-lg border border-gray-200 p-4 mb-3"
          >
            {/* Question */}
            <p className="text-gray-900 font-medium mb-2">{item.question}</p>

            {/* Answer */}
            <p className="text-gray-700 whitespace-pre-line mb-3">
              {item.answer}
            </p>

            {/* Footer */}
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{item.subject}</span>
              <button
                onClick={() => handleRemove(item.id)}
                className="text-sm flex items-center gap-1 text-green-700 border border-green-700 rounded-md px-3 py-1 hover:bg-green-50 transition"
              >
                ✓ Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookmarkPage;
