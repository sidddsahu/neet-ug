'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const logos = [
  { src: '/logos/brand1.svg', alt: 'Brand 1' },
  { src: '/logos/brand2.svg', alt: 'Brand 2' },
  { src: '/logos/brand3.svg', alt: 'Brand 3' },
  { src: '/logos/brand4.svg', alt: 'Brand 4' },
  { src: '/logos/brand5.svg', alt: 'Brand 5' },
  { src: '/logos/brand6.svg', alt: 'Brand 6' },
  { src: '/logos/brand7.svg', alt: 'Brand 7' },
  { src: '/logos/brand8.svg', alt: 'Brand 8' },
  { src: '/logos/brand9.svg', alt: 'Brand 9' },
  { src: '/logos/brand10.svg', alt: 'Brand 10' },
  { src: '/logos/brand11.svg', alt: 'Brand 11' },
  { src: '/logos/brand12.svg', alt: 'Brand 12' },
];

export default function TrustedBy() {
  return (
    <section className="relative py-20 px-6 bg-[var(--bg)] text-[var(--text-color)] overflow-hidden border-b border-gray-200 dark:border-gray-700">
      {/* Background Gradient Blob Effects */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[var(--accent)] opacity-20 rounded-full blur-3xl z-0 animate-pulse"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-pink-500 opacity-10 rounded-full blur-3xl z-0 animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Trusted by Global Clients
        </h2>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-12">
          From startups to enterprises, we collaborate with forward-thinking brands across industries.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="p-4 bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-xl hover:scale-105 transform transition shadow-md hover:shadow-xl"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={40}
                className="h-10 w-auto mx-auto grayscale hover:grayscale-0 transition duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
