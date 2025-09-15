"use client";

import React, { useState } from "react";

const plans = [
  {
    id: 1,
    label: "2 Year",
    price: 6000,
    original: 12000,
    discount: "50% OFF",
    selected: true,
  },
  {
    id: 2,
    label: "1 Year",
    price: 3600,
    original: 6000,
    discount: "40% OFF",
    recommended: true,
  },
  {
    id: 3,
    label: "6 Months",
    price: 2400,
    original: 3000,
    discount: "20% OFF",
  },
  {
    id: 4,
    label: "3 Months",
    price: 1350,
    original: 1500,
    discount: "10% OFF",
  },
  {
    id: 5,
    label: "1 Month",
    price: 500,
    original: null,
  },
];

export default function SubscriptionPage() {
  const [selected, setSelected] = useState(1);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-2">
      {/* Mobile App Frame */}
      <div className="relative w-[400px] h-[700px] bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-4">
          <p className="text-sm text-gray-600">Good Afternoon</p>
          <h2 className="text-lg font-semibold">Siddhant</h2>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-4 pb-24">
          {/* Subscription Title */}
          <h1 className="text-center text-lg font-semibold text-purple-800">
            Subscription Plans
          </h1>
          <p className="text-center text-gray-500 text-sm mt-1">
            Unlock premium and access best of Neuroflip
          </p>

          {/* Common Features */}
          <div className="mt-6">
            <div className="flex items-center justify-center gap-2">
              <div className="flex-1 h-px bg-gray-300" />
              <p className="text-sm font-medium text-gray-600">
                Common Features
              </p>
              <div className="flex-1 h-px bg-gray-300" />
            </div>
            <ul className="mt-4 space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-orange-500">◆</span>
                12000+ High yield subjectwise flashcards curated from past year
                topics 🚀
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500">◆</span>
                2000+ Image based cards ✅
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500">◆</span>
                18000+ BTR based cards ✅
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500">◆</span>
                Daily capsule of high yield topics curated by 2024 NEET-PG
                toppers 💊
              </li>
            </ul>
          </div>

          {/* Plans */}
          <div className="mt-6 space-y-4">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative border rounded-xl p-4 flex items-center justify-between cursor-pointer transition ${
                  selected === plan.id
                    ? "border-orange-500 bg-orange-50"
                    : "border-gray-300"
                }`}
                onClick={() => setSelected(plan.id)}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    checked={selected === plan.id}
                    onChange={() => setSelected(plan.id)}
                    className="w-5 h-5 accent-orange-500"
                  />
                  <div>
                    <p className="text-base font-medium text-gray-800">
                      {plan.label}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-semibold text-purple-800">
                        ₹{plan.price}
                      </span>
                      {plan.original && (
                        <span className="text-gray-400 line-through">
                          ₹{plan.original}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  {plan.discount && (
                    <span className="text-xs text-orange-600 font-medium border border-orange-400 rounded-full px-2 py-0.5">
                      {plan.discount}
                    </span>
                  )}
                  {plan.recommended && (
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-[11px] text-orange-600 bg-white border border-orange-400 rounded-full px-2 py-0.5">
                      Recommended
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Subscribe Button */}
        <div className="absolute bottom-0 left-0 w-full p-4 bg-white border-t">
          <button className="w-full py-3 rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-600 transition">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
}
