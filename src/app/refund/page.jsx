"use client";

import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function RefundPolicy() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="bg-purple-700 text-white px-4 py-4 flex items-center shadow-md">
        <button
          onClick={() => router.back()}
          className="text-white text-2xl hover:bg-white/20 rounded-full p-1 transition"
        >
          <IoIosArrowBack />
        </button>
        <h1 className="text-lg font-semibold flex-1 text-center -ml-6">
          Refund Policy
        </h1>
      </div>

      {/* Content */}
      <div className="px-5 py-6">
        <p className="text-sm text-gray-700 leading-relaxed">
          Please read the subscription terms and conditions carefully before
          subscribing to any of the subscription plans, as once you have
          subscribed, you cannot change or cancel your subscription plan. Once
          you subscribe and make the required payment for any subscriptions, it
          shall be final and there cannot be any changes or modifications to the
          same and neither will there be any refund.
        </p>
      </div>

      {/* Footer / Payment compliance note */}
      <div className="mt-auto px-5 py-4 border-t border-gray-200 bg-gray-50">
        <p className="text-xs text-gray-500 text-center">
          By proceeding with payment on NEET UG, you acknowledge that you have
          read and agree to this Refund Policy.
        </p>
      </div>
    </div>
  );
}
