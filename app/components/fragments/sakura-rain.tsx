"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SakuraRain = () => {
  const [mounted, setMounted] = useState(false);
  
  // We only render after mounting to avoid "Math.random()" hydration mismatches
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Create an array of 20 petals
  const petals = Array.from({ length: 20 });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[15]">
      {petals.map((_, i) => {
        // Generate random values inside the map so each petal is unique
        const startLeft = Math.random() * 100;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 15;

        return (
          <motion.div
            key={i}
            initial={{ 
              top: "-10%", 
              left: `${startLeft}%`, 
              opacity: 0,
              rotate: 0 
            }}
            animate={{ 
              top: "110%", 
              left: [`${startLeft}%`, `${startLeft + 5}%`, `${startLeft - 5}%`],
              opacity: [0, 1, 1, 0],
              rotate: 360 
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: delay,
              ease: "linear"
            }}
            className="absolute"
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 0C10 0 14 5 14 9C14 13 10 16 10 16C10 16 6 13 6 9C6 5 10 0 10 0Z"
                fill="#FFB7C5"
                fillOpacity="0.7"
              />
            </svg>
          </motion.div>
        );
      })}
    </div>
  );
};

export default SakuraRain;