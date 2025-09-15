"use client";

import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";
import { FiShare2 } from "react-icons/fi";

// Same blogs array used in list page
const blogs = [
  {
    id: 1,
    category: "NEET PG",
    title:
      "How NeuroFlip Can Replace Last-Minute Cramming and Be Your All-in-One Tool",
    date: "31 Jan 2025",
    readTime: "4 mins",
    image:
      "https://images.unsplash.com/photo-1581091870627-3a5674c55d4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    author: "Admin",
    content: `
      If you’re preparing for NEET PG, you’ve probably found yourself in the
      middle of a frantic last-minute cramming session at some point. With so
      much to study and so little time, it’s easy to feel overwhelmed. But what
      if there was a way to say goodbye to this stress-inducing routine forever?
      That’s where NeuroFlip comes in.

      NeuroFlip is built to keep in mind only one thing: help you focus on
      what matters most. High-yield, exam-relevant material that cuts through
      the noise, so you don’t waste your time on low-yield topics.
    `,
  },
  {
    id: 2,
    category: "FMGE",
    title: "How FMGE Aspirants Are Using Neuroflip to Crack the Exam",
    date: "15 Jan 2025",
    readTime: "4 mins",
    image:
      "https://images.unsplash.com/photo-1582719478181-2e71c92c0b9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    author: "Admin",
    content: `
      FMGE is one of the toughest exams to clear, but students are finding
      smarter ways to revise with NeuroFlip. Instead of drowning in bulky
      books, they are using focused digital flashcards to revise quickly and
      effectively.
    `,
  },
  {
    id: 3,
    category: "NEET PG",
    title: "How to Revise BTR Smarter with Neuroflip Flashcards",
    date: "12 Jan 2025",
    readTime: "5 mins",
    image:
      "https://images.unsplash.com/photo-1550831107-1553da8c8464?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    author: "Admin",
    content: `
      Revision doesn’t have to be boring. NeuroFlip flashcards help you cover
      more topics in less time while keeping things interactive.
    `,
  },
  {
    id: 4,
    category: "NEET PG",
    title: "How Digital Flashcards are a Game Changer in Preparing for NEET PG",
    date: "02 Jan 2025",
    readTime: "6 mins",
    image:
      "https://images.unsplash.com/photo-1617870421419-73e7f24f8206?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    author: "Admin",
    content: `
      Digital flashcards are making it easier than ever for NEET PG aspirants
      to revise anytime, anywhere.
    `,
  },
];

export default function BlogDetail({ params }) {
  const router = useRouter();
  const blogId = parseInt(params.id,  4);
  const blog = blogs.find((b) => b.id === blogId);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Blog not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="bg-purple-700 text-white px-4 py-4 flex justify-between items-center shadow-md">
        <button
          onClick={() => router.back()}
          className="text-white text-2xl hover:bg-white/20 rounded-full p-1 transition"
        >
          <IoIosArrowBack />
        </button>
        <h1 className="text-lg font-semibold">Blog</h1>
        <button className="text-white text-xl">
          <FiShare2 />
        </button>
      </div>

      {/* Blog Content */}
      <div className="p-4">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-48 md:h-72 object-cover rounded-lg mb-4"
        />

        {/* Meta Info */}
        <div className="flex justify-between items-center text-xs text-gray-600 mb-2">
          <span className="text-orange-500 font-semibold">{blog.category}</span>
          <div className="flex items-center gap-2">
            <span>{blog.date}</span>
            <span>•</span>
            <span>{blog.readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-lg md:text-xl font-semibold text-gray-900 leading-snug mb-1">
          {blog.title}
        </h2>

        {/* Author */}
        <p className="text-sm text-gray-500 mb-4">{blog.author}</p>

        <hr className="my-4" />

        {/* Blog Body */}
        <div className="prose prose-sm md:prose-base max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
          {blog.content}
        </div>
      </div>
    </div>
  );
}
