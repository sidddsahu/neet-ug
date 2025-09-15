"use client";

import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    category: "NEET PG",
    title:
      "How NeuroFlip Can Replace Last-Minute Cramming and Be Your All-in-One Tool",
    date: "31 Jan 2025",
    readTime: "4 mins",
    image:
      "https://images.unsplash.com/photo-1581091870627-3a5674c55d4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    category: "FMGE",
    title: "How FMGE Aspirants Are Using Neuroflip to Crack the Exam",
    date: "15 Jan 2025",
    readTime: "4 mins",
    image:
      "https://images.unsplash.com/photo-1582719478181-2e71c92c0b9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    category: "NEET PG",
    title: "How to Revise BTR Smarter with Neuroflip Flashcards",
    date: "12 Jan 2025",
    readTime: "5 mins",
    image:
      "https://images.unsplash.com/photo-1550831107-1553da8c8464?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    category: "NEET PG",
    title: "How Digital Flashcards are a Game Changer in Preparing for NEET PG",
    date: "02 Jan 2025",
    readTime: "6 mins",
    image:
      "https://images.unsplash.com/photo-1617870421419-73e7f24f8206?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
];

export default function Blogs() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="bg-purple-700 text-white px-4 py-4 flex items-center shadow-md">
        <button
          onClick={handleBack}
          className="text-white text-2xl hover:bg-white/20 rounded-full p-1 transition"
        >
          <IoIosArrowBack />
        </button>
        <h1 className="text-lg font-semibold flex-1 text-center -ml-6">
          Blogs
        </h1>
      </div>

      {/* Blogs List */}
      <div className="p-4 space-y-6">
        {blogs.map((blog) => (
          <Link
            key={blog.id}
            href={`/blogs/${blog.id}`}
            className="flex gap-4 items-start border-b pb-4 last:border-b-0 hover:bg-gray-50 transition rounded-lg p-2"
          >
            {/* Thumbnail */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
            />

            {/* Blog Info */}
            <div className="flex flex-col">
              <span className="text-orange-500 text-xs font-semibold uppercase tracking-wide">
                {blog.category}
              </span>
              <h2 className="text-sm font-semibold text-gray-800 leading-snug line-clamp-2">
                {blog.title}
              </h2>
              <div className="text-xs text-gray-500 flex items-center gap-2 mt-1">
                <span>{blog.date}</span>
                <span>•</span>
                <span>{blog.readTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
