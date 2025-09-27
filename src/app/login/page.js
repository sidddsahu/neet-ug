// File: pages/login.jsx
// Next.js (Pages) + Tailwind CSS — Single-file mobile-style login screen
// Usage:
// 1) Ensure Tailwind CSS is installed and configured in your Next.js project.
//    (https://tailwindcss.com/docs/guides/nextjs)
// 2) Save this file as `pages/login.jsx` (or adapt to app/router).
// 3) No external image assets required — all icons are inline SVGs.
// 4) You can tweak colors in Tailwind config or inline styles below.
"use client"
import Head from "next/head";
import React from "react";

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Sign in — Flashcard App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#5a3e62] via-[#5b3a63] to-[#4b2f4a] p-2">
        {/* phone-like frame */}
        <div className="relative w-full  mx-auto">
          {/* Soft large decorative blob on the left */}
          <div className="pointer-events-none absolute -left-28 -top-40  h-[520px] rounded-[50%] bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.04),_transparent)] opacity-30" />

          {/* Top area: small logo + captions */}
          <div className="flex flex-col items-center text-center mt-6 mb-6">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#ffd8c2] to-[#f6a66b] shadow-lg flex items-center justify-center">
              {/* small abstract logo (two drops) */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3.2c0 1.6-1.6 2.8-1.6 4.4 0 1.9 1.6 3.6 1.6 5.6 0 0.9-0.7 1.6-1.6 1.6S7.2 15.7 7.2 14c0-3.1 4.8-6.8 4.8-10.8z" fill="#ffd2b8"/>
                <path d="M15.2 10.8c0 1.8-1.6 3.2-1.6 5 0 1-0.8 1.8-1.8 1.8S9 16.6 9 15.6c0-3.4 3.6-6.8 6.2-4.8 0.6 0.6 1 1.2 1 0z" fill="#f6a66b"/>
              </svg>
            </div>

            <p className="text-white text-sm mt-4 opacity-90">Flashcard app for</p>
            <h1 className="text-white font-extrabold text-[28px] md:text-4xl mt-2 tracking-tight">NEET PG & FMGE</h1>
          </div>

          {/* white card */}
          <div className="bg-white rounded-3xl p-6 pt-8 shadow-[0_12px_40px_rgba(11,8,20,0.35)]">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Sign in</h2>

            <div className="space-y-4">
              {/* Google Button */}
              <button
                aria-label="Sign in with Google"
                className="w-full flex items-center gap-4 border rounded-full py-3 px-4 hover:shadow-sm transition-shadow duration-150"
                style={{ borderColor: 'rgba(125, 90, 120, 0.15)' }}
                onClick={() => { /* handle sign-in */ }}
              >
                <span className="w-9 h-9 flex items-center justify-center rounded-full bg-white">
                  {/* Google multicolor icon */}
                  <svg width="18" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M44.5 20.5c0-1.5-.1-2.6-.4-3.8H24v7.3h11.9c-.5 3-2.6 5.4-5.6 6.9v5.6h9c5.4-5 8.2-12.4 8.2-16.9z" fill="#4285F4"/>
                    <path d="M24 44c6.1 0 11.2-2 14.9-5.4l-9-5.6c-2.4 1.6-5.4 2.6-8 2.6-6.1 0-11.3-4.1-13.2-9.8H2.7v6.1C6.4 39.7 14.6 44 24 44z" fill="#34A853"/>
                    <path d="M10.8 26.4c-.6-1.8-.6-3.8 0-5.6V14.6H2.7C.9 18 0 21.9 0 25.8c0 3.8.9 7.6 2.7 10.2l8.1-6.1z" fill="#FBBC05"/>
                    <path d="M24 9.8c3.3 0 6.2 1.1 8.5 3.3l6.4-6.4C35.2 3.8 30.1 2 24 2 14.6 2 6.4 6.3 2.7 14.6l8.1 6.1C12.7 14 17.9 9.8 24 9.8z" fill="#EA4335"/>
                  </svg>
                </span>

                <span className="text-gray-700 font-medium flex-1 text-left">Sign in with Google</span>
              </button>

              {/* Facebook Button */}
              <button
                aria-label="Sign in with Facebook"
                className="w-full flex items-center gap-4 border rounded-full py-3 px-4 hover:shadow-sm transition-shadow duration-150"
                style={{ borderColor: 'rgba(125, 90, 120, 0.15)' }}
                onClick={() => { /* handle sign-in */ }}
              >
                <span className="w-9 h-9 flex items-center justify-center rounded-full bg-white">
                  {/* Facebook circle with f */}
                  <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <defs></defs>
                    <path fill="#1977F3" d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h2.9V9.4c0-2.9 1.7-4.5 4.3-4.5 1.2 0 2.5.2 2.5.2v2.8h-1.4c-1.4 0-1.8.9-1.8 1.8V12h3l-.5 3.5h-2.5v8.4A12 12 0 0 0 24 12z" />
                    <path fill="#fff" d="M15.5 15.5L16 12h-3v-1.5c0-.9.4-1.8 1.3-1.8h1V7h-1.6c-2 0-3.7 1.3-3.7 3.7V12H8v3.5h2.7V23c1.3.2 2.6.2 3.8.2 1.2 0 2.3 0 3.3-.1v-8.6H15.5z" opacity="0.02" />
                  </svg>
                </span>

                <span className="text-gray-700 font-medium flex-1 text-left">Sign in with Facebook</span>
              </button>

              {/* Apple Button */}
              <button
                aria-label="Sign in with Apple"
                className="w-full flex items-center gap-4 border rounded-full py-3 px-4 hover:shadow-sm transition-shadow duration-150"
                style={{ borderColor: 'rgba(125, 90, 120, 0.15)' }}
                onClick={() => { /* handle sign-in */ }}
              >
                <span className="w-9 h-9 flex items-center justify-center rounded-full bg-white">
                  {/* Apple logo */}
                  <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.365 1.43c.6 1.03.9 2.22.72 3.47-.77.08-1.86-.45-2.54-1.2-.54-.61-1.02-1.58-.86-2.48.8.05 1.66.4 2.68.2zM12.1 5.3c.7 0 1.53.5 2.22.5.8 0 1.92-.6 3.14-.6.04 1.25-.43 2.48-1.1 3.42-1.1 1.6-2.9 2.74-4.9 2.74-1.1 0-2.03-.36-3.26-.36-1.17 0-2.24.42-3.29 1.02-.61.36-1.17.78-1.73 1.26C2.8 17.4 3.5 20 5.2 21.76c1.1 1.2 2.48 1.88 3.98 1.88.98 0 1.8-.26 2.66-.26 1.2 0 1.9.26 3.17.26 1.1 0 2.6-.46 3.7-1.6 1.4-1.3 2.1-3.06 2.1-4.9 0-4.36-4.5-7.57-8.5-7.57-.7 0-1.43.12-2.1.12z" fill="#111"/>
                  </svg>
                </span>

                <span className="text-gray-700 font-medium flex-1 text-left">Sign in with Apple</span>
              </button>
            </div>

            <p className="text-center text-xs text-gray-400 mt-6 px-4">
              By signing up, you accept the <a href="#" className="underline">Terms &amp; Conditions</a> and <a href="#" className="underline">Privacy Policy</a>.
            </p>
          </div>

          {/* bottom rounded corner spacing to mimic phone bezel */}
          <div className="h-6" />
        </div>
      </div>

      {/* Inline styles to ensure same font appears and small responsive tweaks */}
      <style jsx global>{`
        html, body, #__next { height: 100%; }
        body { font-family: Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; }
        /* make the white card pill corners slightly larger for the exact look */
        .rounded-3xl { border-radius: 28px; }
      `}</style>
    </>
  );
}
