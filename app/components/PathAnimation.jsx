'use client'
import { motion } from 'framer-motion';
import { useState } from 'react';

const PathAnimation = () => {
  const text = "Air University";
  const letters = Array.from(text);
  const text1 = "Air University Multan Campus";
  const letters1 = Array.from(text1);
  const [appleStates, setAppleStates] = useState([
    { id: 1, x: 90, y: 110, onTree: true },
    { id: 2, x: 100, y: 100, onTree: true },
    { id: 3, x: 110, y: 110, onTree: true },
  ]);

  const handleAppleClick = (id) => {
    setAppleStates((prevStates) =>
      prevStates.map((apple) =>
        apple.id === id ? { ...apple, onTree: false } : apple
      )
    );
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, y: 0,
      transition: { type: "ease-in", damping: 12, stiffness: 100 },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        className="stroke-current text-green-700"
      >
        {/* Floor */}
        <rect x="0" y="150" width="200" height="50" fill="#654321" />
        {/* Tree trunk */}
        <rect
          x="90"
          y="100"
          width="20"
          height="50"
          fill="#8B4513"
        />
        {/* Enhanced Leaves */}
        <motion.circle
          cx="100"
          cy="80"
          r="40"
          fill="#228B22"
          animate={{ scale: [1, 1.05, 1], y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
        {/* Multiple Apples */}
        {appleStates.map((apple) =>
          apple.onTree ? (
            <motion.circle
              key={apple.id}
              cx={apple.x}
              cy={apple.y}
              r="5"
              fill="red"
              onClick={() => handleAppleClick(apple.id)}
              whileHover={{ scale: 1.2 }}
            />
          ) : (
            <motion.circle
              key={apple.id}
              cx={apple.x}
              cy="160"
              r="5"
              fill="red"
              initial={{ y: 110 }}
              animate={{ y: 160 }}
              transition={{ duration: 0.5 }}
            />
          )
        )}
      </svg>
      <motion.h1
        className="text-4xl font-bold text-blue-500 mt-4"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {letters.map((char, index) => (
          <motion.span key={index} variants={child}>
            {char}
          </motion.span>
        ))}
      </motion.h1>
      <motion.h1
        className="text-4xl font-bold text-blue-500 mt-4"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {letters1.map((char, index) => (
          <motion.span key={index} variants={child}>
            {char}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default PathAnimation;