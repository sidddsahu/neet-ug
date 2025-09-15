// app/about/page.jsx  (Next.js App Router)

"use client";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header / App Bar */}
      <header className="bg-purple-700 text-white px-4 py-3 flex items-center shadow-md">
        <button className="p-2">
          <ArrowLeftIcon className="h-6 w-6" />
        </button>
        <h1 className="flex-1 text-center font-semibold text-lg">
          About Us
        </h1>
        <div className="w-6" /> {/* spacing to balance back button */}
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6 py-6">
        {/* Logo + App Name */}
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://dummyimage.com/120x120/cccccc/000000&text=NEET-UG"
            alt="neet-ug logo"
            className="h-16 w-16 object-contain"
          />
          <h2 className="text-xl font-bold text-gray-800 mt-3">neet-ug</h2>
        </div>

        {/* About Description */}
        <div className="text-gray-700 text-sm space-y-4 leading-relaxed">
          <p>
            NEET-UG is India’s first flashcard app tailored specifically
            for NEET-UG aspirants.
          </p>
          <p>
            NEET-UG contains 10,000+ meticulously crafted flashcards,
            including 2,000+ image-based questions and key facts that are
            traditionally difficult to memorize.
          </p>
          <p>
            Its active recall and spaced repetition based algorithm
            customizes review times, making learning more efficient by
            ensuring timely revision without overloading.
          </p>
        </div>

        {/* Website Link */}
        <div className="mt-6 text-sm">
          <span className="text-gray-700">Visit: </span>
          <a
            href="https://www.neetug.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 underline"
          >
            www.neetug.com
          </a>
        </div>

        {/* Download App Section */}
        <div className="mt-8">
          <h3 className="font-semibold text-gray-800 text-base mb-4">
            Download App
          </h3>
          <div className="flex gap-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-12"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-12"
              />
            </a>
          </div>
        </div>
      </main>

      {/* Footer / Company Info */}
      <footer className="bg-purple-50 border-t mt-8 p-6 text-xs text-gray-700">
        <h4 className="font-bold text-gray-900 mb-2">
          NEET-UG EDUTECH PRIVATE LIMITED
        </h4>
        <p>
          PLOT NO.12, MUDIS ENCLAVE, SULEESWARANPATTY, POLLACHI, Coimbatore,
          Tamilnadu 642003
        </p>
      </footer>
    </div>
  );
}
