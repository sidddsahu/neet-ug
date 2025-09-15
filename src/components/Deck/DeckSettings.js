"use client";

import React, { useMemo, useRef, useState, useEffect } from "react";

/**
 * DeckSettings Page – Next.js + TailwindCSS
 *
 * Notes:
 * - Drop this file into `app/deck-settings/page.jsx`.
 * - Tailwind required. Page is self-contained; no external icon libs.
 * - Mimics the provided design (header, pill options, custom slider, CTA).
 */

const BackIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const PauseIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="10" y1="6" x2="10" y2="18" />
    <line x1="14" y1="6" x2="14" y2="18" />
  </svg>
);

const PRESET_COUNTS = [20, 50, 100, 200, 400];

// 0 -> 5 secs, 1 -> 10 secs, 2 -> No timer (0)
const TIMER_STOPS = [5, 10, 0];
const TIMER_LABELS = ["5 secs", "10 secs", "No Timer"];

export default function DeckSettings() {
  const [selectedCount, setSelectedCount] = useState(PRESET_COUNTS[0]);
  const [customCount, setCustomCount] = useState("");
  const [activePreset, setActivePreset] = useState(PRESET_COUNTS[0]);

  const [timerIndex, setTimerIndex] = useState(2); // default: No Timer

  useEffect(() => {
    if (customCount) {
      setSelectedCount(Number(customCount));
      setActivePreset(null);
    }
  }, [customCount]);

  const handlePresetClick = (val) => {
    setActivePreset(val);
    setSelectedCount(val);
    setCustomCount("");
  };

  const timerValue = useMemo(() => TIMER_STOPS[timerIndex], [timerIndex]);

  const onUpdateDeck = () => {
    // Example submit handler – replace with real save/integration
    alert(
      JSON.stringify(
        {
          deckSize: selectedCount,
          timerSeconds: timerValue, // 0 means no timer
        },
        null,
        2
      )
    );
  };

  return (
    <div className="w-full bg-gray-50 flex items-center justify-center">
      {/* Phone-like application frame */}
      <div className="w-full max-w-md bg-white shadow-xl overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="bg-[#5E3C73] text-white px-4 py-4 flex items-center gap-3">
          <button
            aria-label="Go back"
            className="h-9 w-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
            onClick={() => window.history.back()}
          >
            <BackIcon className="h-5 w-5" />
          </button>
          <h1 className="text-xl font-semibold">Deck Settings</h1>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-5">
          {/* Card: Number of cards in a deck */}
          <section className="rounded-2xl border border-gray-200 bg-white shadow-sm px-4 py-4">
            <h2 className="text-[17px] font-semibold text-[#4B365C]">
              No. of cards in a deck
            </h2>

            <div className="mt-3 flex flex-wrap gap-3">
              {PRESET_COUNTS.map((n) => {
                const active = activePreset === n;
                return (
                  <button
                    key={n}
                    onClick={() => handlePresetClick(n)}
                    className={
                      "px-5 py-2 rounded-full border text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 " +
                      (active
                        ? "bg-orange-400 text-white border-orange-400 focus:ring-orange-300"
                        : "bg-white text-gray-700 border-gray-200 hover:border-gray-300 focus:ring-gray-300")
                    }
                  >
                    {n}
                  </button>
                );
              })}
            </div>

            <div className="mt-4">
              <div className="h-px w-full bg-gray-200" />
            </div>

            <div className="mt-4">
              <label className="sr-only" htmlFor="customCount">
                Enter your own
              </label>
              <div className="flex items-center">
                <input
                  id="customCount"
                  type="number"
                  min={1}
                  inputMode="numeric"
                  placeholder="Enter Your Own"
                  value={customCount}
                  onChange={(e) => {
                    const v = e.target.value.replace(/[^0-9]/g, "");
                    setCustomCount(v);
                  }}
                  className="w-52 px-4 py-2 rounded-xl border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
              </div>
            </div>
          </section>

          {/* Card: Select timer to show answer */}
          <section className="rounded-2xl border border-gray-200 bg-white shadow-sm px-4 py-4">
            <h2 className="text-[17px] font-semibold text-[#4B365C]">
              Select timer to show answer
            </h2>

            <div className="mt-6">
              <DiscreteSlider index={timerIndex} onChange={setTimerIndex} />
            </div>

            <div className="mt-6 flex items-center justify-between text-sm text-gray-600">
              {TIMER_LABELS.map((lbl, i) => (
                <span
                  key={lbl}
                  className={i === timerIndex ? "font-semibold text-gray-900" : ""}
                >
                  {lbl}
                </span>
              ))}
            </div>
          </section>

          {/* Spacer */}
          <div className="h-6" />
        </div>

        {/* Bottom CTA */}
        <div className="px-4 pb-5">
          <button
            onClick={onUpdateDeck}
            className="w-full bg-orange-400 hover:bg-orange-500 text-white text-lg font-semibold rounded-full py-4 shadow-md transition focus:outline-none focus:ring-4 focus:ring-orange-300"
          >
            Update Deck
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * Custom discrete slider with 3 stops and a draggable knob
 * to visually match the screenshot (orange track & purple knob with pause icon).
 */
function DiscreteSlider({ index = 2, onChange }) {
  const trackRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [internalIndex, setInternalIndex] = useState(index);

  useEffect(() => setInternalIndex(index), [index]);

  const positions = [0, 0.5, 1]; // relative positions

  // Calculate knob left in px
  const computeLeft = () => {
    const track = trackRef.current;
    if (!track) return 0;
    const rect = track.getBoundingClientRect();
    const x = positions[internalIndex] * rect.width;
    return x;
  };

  const clampIndexFromClientX = (clientX) => {
    const track = trackRef.current;
    if (!track) return 0;
    const rect = track.getBoundingClientRect();
    const rel = (clientX - rect.left) / rect.width;
    // snap to nearest stop
    const nearest = positions.reduce((acc, p, i) => {
      return Math.abs(p - rel) < Math.abs(positions[acc] - rel) ? i : acc;
    }, 0);
    return nearest;
  };

  const startDrag = (e) => {
    e.preventDefault();
    setDragging(true);
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setInternalIndex(clampIndexFromClientX(clientX));
  };

  const duringDrag = (e) => {
    if (!dragging) return;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setInternalIndex(clampIndexFromClientX(clientX));
  };

  const endDrag = () => {
    setDragging(false);
    onChange?.(internalIndex);
  };

  const left = computeLeft();

  return (
    <div className="select-none">
      <div
        ref={trackRef}
        className="relative h-2 rounded-full bg-orange-300"
        onMouseDown={startDrag}
        onTouchStart={startDrag}
        onMouseMove={duringDrag}
        onTouchMove={duringDrag}
        onMouseUp={endDrag}
        onTouchEnd={endDrag}
        onMouseLeave={() => dragging && endDrag()}
        role="slider"
        aria-valuemin={0}
        aria-valuemax={2}
        aria-valuenow={internalIndex}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") {
            const next = Math.max(0, internalIndex - 1);
            setInternalIndex(next);
            onChange?.(next);
          } else if (e.key === "ArrowRight") {
            const next = Math.min(2, internalIndex + 1);
            setInternalIndex(next);
            onChange?.(next);
          }
        }}
      >
        {/* Progress */}
        <div
          className="absolute top-0 left-0 h-2 rounded-full bg-orange-400"
          style={{ width: `calc(${positions[internalIndex] * 100}% )` }}
        />

        {/* Knob */}
        <div
          className="absolute -top-4 -translate-x-1/2 h-10 w-10 rounded-full bg-[#5E3C73] flex items-center justify-center shadow-md"
          style={{ left }}
        >
          <PauseIcon className="h-5 w-5 text-white" />
        </div>
      </div>
    </div>
  );
}
