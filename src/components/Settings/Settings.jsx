"use client";

import React from "react";
import {
  FiShare2,
  FiInfo,
  FiCheckSquare,
  FiShield,
  FiRefreshCcw,
  FiLogOut,
} from "react-icons/fi";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation"; // ✅ Next.js router

const Settings = () => {
  const router = useRouter();

  // ✅ Back button
  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  // ✅ Share app handler
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "NEET-UG App",
        text: "Check out this amazing NEET-UG Flashcard app!",
        url: window.location.origin,
      });
    } else {
      alert("Sharing not supported in this browser");
    }
  };

  // ✅ Log out handler
  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.clear();
    }
    router.push("/login");
  };

  // ✅ Reset Account
  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset your account?")) {
      alert("Account reset successfully!");
    }
  };

  // ✅ Delete Account
  const handleDelete = () => {
    if (
      window.confirm("Are you sure you want to delete your account permanently?")
    ) {
      alert("Account deleted successfully!");
      router.push("/login");
    }
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
          Settings
        </h1>
      </div>

      {/* Settings List */}
      <div className="divide-y divide-gray-200 mt-2">
        {/* Share this App */}
        <div
          className="flex justify-between items-center px-4 py-4 cursor-pointer hover:bg-gray-50"
          onClick={handleShare}
        >
          <div className="flex items-center gap-3">
            <FiShare2 className="text-purple-700 text-lg" />
            <span className="text-sm font-medium text-gray-800">
              Share this App
            </span>
          </div>
          <IoIosArrowForward className="text-gray-400 text-lg" />
        </div>

        {/* About Us */}
        <div
          className="flex justify-between items-center px-4 py-4 cursor-pointer hover:bg-gray-50"
          onClick={() => router.push("/about")}
        >
          <div className="flex items-center gap-3">
            <FiInfo className="text-purple-700 text-lg" />
            <span className="text-sm font-medium text-gray-800">About Us</span>
          </div>
          <IoIosArrowForward className="text-gray-400 text-lg" />
        </div>

        {/* Terms and Conditions */}
        <div
          className="flex justify-between items-center px-4 py-4 cursor-pointer hover:bg-gray-50"
          onClick={() => router.push("/terms")}
        >
          <div className="flex items-center gap-3">
            <FiCheckSquare className="text-purple-700 text-lg" />
            <span className="text-sm font-medium text-gray-800">
              Terms and Conditions
            </span>
          </div>
          <IoIosArrowForward className="text-gray-400 text-lg" />
        </div>

        {/* Privacy Policy */}
        <div
          className="flex justify-between items-center px-4 py-4 cursor-pointer hover:bg-gray-50"
          onClick={() => router.push("/privacy")}
        >
          <div className="flex items-center gap-3">
            <FiShield className="text-purple-700 text-lg" />
            <span className="text-sm font-medium text-gray-800">
              Privacy Policy
            </span>
          </div>
          <IoIosArrowForward className="text-gray-400 text-lg" />
        </div>

        {/* Refund Policy */}
        <div
          className="flex justify-between items-center px-4 py-4 cursor-pointer hover:bg-gray-50"
          onClick={() => router.push("/refund")}
        >
          <div className="flex items-center gap-3">
            <FiInfo className="text-purple-700 text-lg" />
            <span className="text-sm font-medium text-gray-800">
              Refund Policy
            </span>
          </div>
          <IoIosArrowForward className="text-gray-400 text-lg" />
        </div>

        {/* Reset Account */}
        <div
          className="flex justify-between items-center px-4 py-4 cursor-pointer hover:bg-gray-50"
          onClick={handleReset}
        >
          <div className="flex items-center gap-3">
            <FiRefreshCcw className="text-purple-700 text-lg" />
            <span className="text-sm font-medium text-gray-800">
              Reset Account
            </span>
          </div>
        </div>

        {/* Log out */}
        <div
          className="flex justify-between items-center px-4 py-4 cursor-pointer hover:bg-gray-50"
          onClick={handleLogout}
        >
          <div className="flex items-center gap-3">
            <FiLogOut className="text-purple-700 text-lg" />
            <span className="text-sm font-medium text-gray-800">Log out</span>
          </div>
        </div>
      </div>

      {/* Follow Us */}
      <div className="mt-6 border-t border-dashed border-gray-300">
        <div className="flex justify-between items-center px-6 py-4">
          <span className="text-sm font-medium text-gray-700">Follow Us</span>
          <div className="flex gap-5 text-purple-700 text-xl">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-900"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-900"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      {/* Delete Account + Version */}
      <div className="flex justify-between items-center px-6 py-6 mt-auto">
        <span
          className="text-sm font-semibold text-red-600 cursor-pointer hover:underline"
          onClick={handleDelete}
        >
          Delete Account
        </span>
        <span className="text-xs text-gray-500">Version 0.3.0</span>
      </div>
    </div>
  );
};

export default Settings;
