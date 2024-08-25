"use client";

import React from "react";
import { FaCirclePlay } from "react-icons/fa6";

type Props = {
  title: string;
};

const Trailer = ({ title }: Props) => {
  const handlePlayTrailer = () => {
    // Create a YouTube search query
    const searchQuery = `https://www.youtube.com/results?search_query=${encodeURIComponent(
      title + " trailer"
    )}`;

    // Open the YouTube search in a new tab
    window.open(searchQuery, "_blank");
  };

  return (
    <div>
      <p
        onClick={handlePlayTrailer}
        className="text-black w-fit rounded-lg font-bold bg-white px-4 py-2 lg:px-6 lg:py-4 mb-6 flex items-center cursor-pointer hover:scale-95 transition-all duration-150 ease-linear text-sm"
      >
        <FaCirclePlay className="w-6 h-6 mr-2" />
        Play Trailer
      </p>
    </div>
  );
};

export default Trailer;
