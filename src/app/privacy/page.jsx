"use client";

import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>
      </div>

      {/* Content */}
      <div className="px-5 py-6 overflow-y-auto">
        <h2 className="text-base font-semibold text-gray-800 mb-3">
          Introduction
        </h2>
        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          Cellsphere with all its products and members are committed to respect
          your online privacy and recognize your need for appropriate protection
          and management of any personally identifiable information
          ("Personal Information") you share with us. "Personal Information"
          means any information that may be used to identify an individual,
          including, but not limited to, a first, middle and last name, a phone
          number, a home or other physical address and an email address or other
          contact information, whether at work or at home. These information are
          uploaded to our system using an API{" "}
          <a
            href="https://api.neuroflip.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 underline"
          >
            https://api.neuroflip.com
          </a>{" "}
          and a product of our own. In general, you can visit{" "}
          <a
            href="https://neuroflip.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 underline"
          >
            https://neuroflip.com
          </a>{" "}
          and our Facebook & Instagram page without telling us who you are or
          revealing any Personal Information about yourself.
        </p>

        <h2 className="text-base font-semibold text-gray-800 mb-3">
          Cookies and Other Tracking Technologies
        </h2>
        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          A "cookie" is a small text file that may be used, for example, to
          collect information about Web site activity. You may set most browsers
          to notify you if you receive a cookie, or you may choose to block
          cookies with your browser, but please note that if you choose to erase
          or block your cookies, you will need to re-enter your original user ID
          and password to gain access to certain parts of the Web site.
        </p>
        <p className="text-sm text-gray-700 leading-relaxed">
          Tracking technologies may record information such as Internet domain
          and host names; Internet protocol (IP) addresses; browser software and
          operating system types; click stream patterns; and dates and times
          that our site is accessed. Our use of cookies and other tracking
          technologies allows us to improve our Web site and your Web
          experience. We may also analyze information that does not contain
          Personal Information for trends and statistics.
        </p>
      </div>

      {/* Footer / Consent */}
      <div className="mt-auto px-5 py-4 border-t border-gray-200 bg-gray-50">
        <p className="text-xs text-gray-500 text-center">
          By continuing to use NEET UG services, you acknowledge that you have
          read and agree to this Privacy Policy.
        </p>
      </div>
    </div>
  );
}
