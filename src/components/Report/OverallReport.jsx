'use client';

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function OverallReport() {
  // Sample weekly performance data
  const data = [
    { day: "Sat", yours: 0, average: 76 },
    { day: "Sun", yours: 0, average: 70 },
    { day: "Mon", yours: 0, average: 38 },
    { day: "Tue", yours: 0, average: 48 },
    { day: "Wed", yours: 0, average: 46 },
    { day: "Thu", yours: 0, average: 54 },
    { day: "Fri", yours: 0, average: 69 },
    { day: "Sat", yours: 0, average: 63 },
  ];

  return (
    <div className="bg-[var(--bg)] text-[var(--text-color)] min-h-screen p-4">
      {/* Page Header */}
      <div className="bg-purple-600 text-white text-center py-4 rounded-md">
        <h1 className="text-lg font-semibold">Overall Report</h1>
      </div>

      {/* Report Card */}
      <div className="bg-[var(--secondary-bg)] rounded-lg p-4 mt-4 shadow-sm">
        {/* Stats */}
        <div className="grid grid-cols-3 text-center">
          <div>
            <p className="text-lg font-medium">-</p>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              Total studied
            </p>
          </div>
          <div>
            <p className="text-lg font-medium">-</p>
            <p className="text-sm text-gray-500 dark:text-gray-300">Learning</p>
          </div>
          <div>
            <p className="text-lg font-medium">-</p>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              Suspended
            </p>
          </div>
        </div>

        <hr className="my-4 border-gray-300 dark:border-gray-600" />

        {/* Time Spent */}
        <div className="grid grid-cols-2 text-center">
          <div>
            <p className="text-lg font-medium">0 Secs</p>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              Total time
            </p>
          </div>
          <div>
            <p className="text-lg font-medium">0 Secs</p>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              Average time/card
            </p>
          </div>
        </div>

        <hr className="my-4 border-gray-300 dark:border-gray-600" />

        {/* Performance Section */}
        <div className="flex items-center justify-between mb-2">
          <p className="font-medium">Performance</p>
          <button className="flex items-center gap-1 text-sm text-purple-600 dark:text-purple-400 border border-gray-300 dark:border-gray-600 rounded-full px-3 py-1">
            Weekly <ChevronDownIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Chart */}
        <div className="w-full h-64">
          <ResponsiveContainer>
            <LineChart data={data}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend
                verticalAlign="bottom"
                height={36}
                iconType="circle"
                iconSize={10}
              />
              <Line
                type="monotone"
                dataKey="yours"
                stroke="#f97316"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="average"
                stroke="#06b6d4"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
