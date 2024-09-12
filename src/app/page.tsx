"use client";
import React from "react";
import { motion } from "framer-motion";
import videoSrc from "../../public/codevid2.mp4";
import { useState, useEffect } from "react";

export default function Home() {
  const [showVideo, setShowVideo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="min-h-screen flex flex-col gap-4 md:grid md:grid-cols-12 md:grid-rows-6 md:gap-4 p-4">
      {showVideo && (
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      )}
      <motion.div
        initial={{ opacity: 0, y: 800 }}
        animate={{ x: 0, opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 2 }}
        className="bg-gray-500 flex items-center justify-center rounded-lg shadow-md h-32 md:h-auto md:col-span-12 md:row-span-1"
      >
        Top Navbar
      </motion.div>

      <motion.div
        initial={{ x: 469, opacity: 0, y: 200 }}
        animate={{ x: 0, opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 2 }}
        className="bg-gray-400 z-5 flex items-center justify-center rounded-lg shadow-md h-48 md:h-auto md:col-span-4 md:row-span-2"
      >
        Personal Projects
      </motion.div>

      <motion.div
        initial={{ x: 0, z: 500, rotateY: 180 }}
        animate={{ x: 0, opacity: 1, y: 0, z: 0, rotateY: 0 }}
        transition={{ duration: 2 }}
        className="bg-gray-600 flex items-center z-50 justify-center rounded-lg shadow-md h-64 md:h-auto md:col-span-4 md:row-span-4"
      >
        Profile Picture
      </motion.div>

      <motion.div
        initial={{ x: -400, opacity: 0, y: 200 }}
        animate={{ x: 0, opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 2 }}
        className="bg-gray-400 flex z-10 items-center justify-center rounded-lg shadow-md h-32 md:h-auto md:col-span-2 md:row-span-2"
      >
        Resume
      </motion.div>

      <motion.div
        initial={{ x: -600, opacity: 0, y: 200 }}
        animate={{ x: 0, opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 2 }}
        className="bg-gray-700 flex z-15 items-center justify-center rounded-lg shadow-md h-32 md:h-auto md:col-span-2 md:row-span-2"
      >
        Certifications
      </motion.div>

      <motion.div
        initial={{ x: 600, opacity: 0, y: -200 }}
        animate={{ x: 0, opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 2 }}
        className="bg-gray-600 flex flex-col justify-center items-center rounded-lg shadow-md h-64 md:h-auto md:col-span-2 md:row-span-4"
      >
        Achievements
      </motion.div>

      <motion.div
        initial={{ x: 400, opacity: 0, y: -200 }}
        animate={{ x: 0, opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 2 }}
        className="bg-gray-700 flex items-center z-20 justify-center rounded-lg shadow-md h-32 md:h-auto md:col-span-2 md:row-span-2"
      >
        About me
      </motion.div>

      <motion.div
        initial={{ x: -469, opacity: 0, y: -200 }}
        animate={{ x: 0, opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 2 }}
        className="bg-gray-500 flex items-center z-25 justify-center rounded-lg shadow-md h-64 md:h-auto md:col-span-4 md:row-span-4"
      >
        Tech Stacks
      </motion.div>

      <motion.div
        initial={{ x: 234.5, opacity: 0, y: -300 }}
        animate={{ x: 0, opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 2 }}
        className="bg-gray-400 flex items-center z-30 justify-center rounded-lg shadow-md h-48 md:h-auto md:col-span-4 md:row-span-2"
      >
        Contact me
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -200 }}
        animate={{ x: 0, opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 2 }}
        className="bg-gray-500 flex z-35 items-center justify-center rounded-lg shadow-md p-4 h-32 md:h-auto md:col-span-2 md:row-span-2"
      >
        Social Media Handles (LinkedIn & GitHub)
      </motion.div>
    </div>
  );
}
