"use client";
import React from "react";
import {motion} from "framer-motion";
import { easeInOut } from "framer-motion/dom";

export default function Home() {
  return (
    <div className="min-h-screen p-4 flex flex-col gap-4 md:grid md:grid-cols-12 md:grid-rows-6 md:gap-4 p-4">
      {/* Top Navbar */}
      <motion.div
      initial={{opacity: 0, y: 800}}
      animate={{x: 0, opacity: 1, y: 0}}
      transition={{duration:4,ease:easeInOut}} 
      className="bg-gray-500 flex items-center justify-center rounded-lg shadow-md h-32 md:h-auto md:col-span-12 md:row-span-1">
        Top Navbar
      </motion.div>

      {/* Personal Projects */}
      <motion.div
      initial={{x: 475, opacity: 0, y: 200}}
      animate={{x: 0, opacity: 1, y: 0}}
      transition={{duration:4}}
      className="bg-gray-400 z-5 flex items-center justify-center rounded-lg shadow-md h-48 md:h-auto md:col-span-4 md:row-span-2">
        Personal Projects
      </motion.div>

      {/* Profile Picture */}
      <div className="bg-gray-600 flex items-center z-50 justify-center rounded-lg shadow-md h-64 md:h-auto md:col-span-4 md:row-span-4">
        Profile Picture
      </div>

      {/* Resume */}
      <motion.div
      initial={{x: -400,opacity: 0, y: 200}}
      animate={{x: 0, opacity: 1, y: 0}}
      transition={{duration:4}} 
      className="bg-gray-400 flex z-10 items-center justify-center rounded-lg shadow-md h-32 md:h-auto md:col-span-2 md:row-span-2">
        Resume
      </motion.div>

      {/* Certifications */}
      <motion.div
      initial={{x: -600,opacity: 0, y: 200}}
      animate={{x: 0, opacity: 1, y: 0}}
      transition={{duration:4}} 
      className="bg-gray-700 flex z-15 items-center justify-center rounded-lg shadow-md h-32 md:h-auto md:col-span-2 md:row-span-2">
        Certifications
      </motion.div>

      {/* Education */}
      <motion.div 
      initial={{x: 600,opacity: 0, y: -200}}
      animate={{x: 0, opacity: 1, y: 0}}
      transition={{duration:4}}
      className="bg-gray-600 flex flex-col justify-center items-center rounded-lg shadow-md h-64 md:h-auto md:col-span-2 md:row-span-4">
        Education
      </motion.div>

      {/* Contact Me */}
      <motion.div
      initial={{x: 400,opacity: 0, y: -200}}
      animate={{x: 0, opacity: 1, y: 0}}
      transition={{duration:4}}
      className="bg-gray-700 flex items-center z-20 justify-center rounded-lg shadow-md h-32 md:h-auto md:col-span-2 md:row-span-2">
        About me
      </motion.div>

      {/* Tech Stacks */}
      <motion.div
      initial={{x: -475,opacity: 0, y: -200}}
      animate={{x: 0, opacity: 1, y: 0}}
      transition={{duration:4}}
      className="bg-gray-500 flex items-center z-25 justify-center rounded-lg shadow-md h-64 md:h-auto md:col-span-4 md:row-span-4">
        Tech Stacks
      </motion.div>

      {/* My Introduction */}
      <motion.div 
      initial={{x: 237,opacity: 0, y: -300}}
      animate={{x: 0, opacity: 1, y: 0}}
      transition={{duration:4}}
      className="bg-gray-400 flex items-center z-30 justify-center rounded-lg shadow-md h-48 md:h-auto md:col-span-4 md:row-span-2">
        Contact me
      </motion.div>

      {/* Social Media Handles */}
      <motion.div 
      initial={{ opacity: 0, y: -200}}
      animate={{x: 0, opacity: 1, y: 0}}
      transition={{duration:4}}
      className="bg-gray-500 flex z-35 items-center justify-center rounded-lg shadow-md p-4 h-32 md:h-auto md:col-span-2 md:row-span-2">
        Social Media Handles (LinkedIn & GitHub)
      </motion.div>
    </div>
  );
}
