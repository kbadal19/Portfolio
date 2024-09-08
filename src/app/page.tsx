import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen p-4 flex flex-col gap-4 md:grid md:grid-cols-12 md:grid-rows-6 md:gap-4 p-4">
      {/* Top Navbar */}
      <div className="bg-gray-500 flex items-center justify-center rounded-lg shadow-md h-32 md:h-auto md:col-span-12 md:row-span-1">
        Top Navbar
      </div>

      {/* Personal Projects */}
      <div className="bg-gray-400 flex items-center justify-center rounded-lg shadow-md h-48 md:h-auto md:col-span-4 md:row-span-2">
        Personal Projects
      </div>

      {/* Profile Picture */}
      <div className="bg-gray-600 flex items-center justify-center rounded-lg shadow-md h-64 md:h-auto md:col-span-4 md:row-span-4">
        Profile Picture
      </div>

      {/* Resume */}
      <div className="bg-gray-400 flex items-center justify-center rounded-lg shadow-md h-32 md:h-auto md:col-span-2 md:row-span-2">
        Resume
      </div>

      {/* Certifications */}
      <div className="bg-gray-700 flex items-center justify-center rounded-lg shadow-md h-32 md:h-auto md:col-span-2 md:row-span-2">
        Certifications
      </div>

      {/* Education */}
      <div className="bg-gray-600 flex flex-col justify-center items-center rounded-lg shadow-md h-64 md:h-auto md:col-span-2 md:row-span-4">
        Education
      </div>

      {/* Contact Me */}
      <div className="bg-gray-700 flex items-center justify-center rounded-lg shadow-md h-32 md:h-auto md:col-span-2 md:row-span-2">
        About me
      </div>

      {/* Tech Stacks */}
      <div className="bg-gray-500 flex items-center justify-center rounded-lg shadow-md h-64 md:h-auto md:col-span-4 md:row-span-4">
        Tech Stacks
      </div>

      {/* My Introduction */}
      <div className="bg-gray-400 flex items-center justify-center rounded-lg shadow-md h-48 md:h-auto md:col-span-4 md:row-span-2">
        Contact me
      </div>

      {/* Social Media Handles */}
      <div className="bg-gray-500 flex items-center justify-center rounded-lg shadow-md p-4 h-32 md:h-auto md:col-span-2 md:row-span-2">
        Social Media Handles (LinkedIn & GitHub)
      </div>
    </div>
  );
}
