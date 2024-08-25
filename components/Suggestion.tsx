"use client";

import { useStore } from "@/store/useStore";
import React, { useEffect, useState } from "react";
import { TbBrandZapier } from "react-icons/tb";
import { GoZap } from "react-icons/go";
import { dotStream } from "ldrs";

dotStream.register();

interface SuggestionProps {
  term: string;
  genre?: string;
}

const Suggestion: React.FC<SuggestionProps> = ({ term, genre }) => {
  const { suggestion, setSuggestion } = useStore();
  const [isLoading, setIsLoading] = useState(false);

  const decodedTerm = decodeURI(term);

  const aiInput = `
    ${
      decodedTerm
        ? `"Based on your results," here are 4 movies similar to ${decodedTerm}. Please provide the titles only, without numbers or bullet points, in a single short paragraph.`
        : ""
    }
    ${
      genre
        ? `"Based on your results," here are 4 movies related/similar/same genre relevant to ${genre}. Provide the titles only, without numbers or bullet points, in a single short paragraph.`
        : ""
    }
  `;

  useEffect(() => {
    setSuggestion([]);
  }, [aiInput, setSuggestion]);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ body: aiInput }),
      });

      const data = await response.json();
      if (response.ok) {
        setSuggestion(data.suggestions.split("\n"));
      } else {
        console.error("Error:", data.error);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="flex p-4 mx-auto lg:ml-10 hover:bg-black/50 w-fit transition-all duration-200 ease-linear rounded-xl group items-center space-x-2 cursor-pointer"
      >
        <TbBrandZapier className="w-6 h-6 animate-pulse" />
        <div className="flex flex-col md:flex-row">
          <p>AI Surprise Me!</p>
          {suggestion.length > 0 && (
            <p className="font-bold underline md:ml-2">
              Here are some suggestions related {decodedTerm && decodedTerm}
              {genre && ` ${genre}`}:
            </p>
          )}
        </div>
      </div>

      {isLoading ? (
        <div className="w-[90%] mx-auto my-[2em] flex justify-center">
          <l-dot-stream size="60" speed="2.5" color="white"></l-dot-stream>
        </div>
      ) : (
        suggestion.length > 0 && (
          <div className="p-4 flex bg-white/5 items-center space-x-4 backdrop-blur-lg rounded-xl lg:w-[80%] mx-auto my-2">
            <GoZap className="hidden md:block animate-pulse" />
            <p className="font-semibold w-full mx-auto">{suggestion[0]}</p>
          </div>
        )
      )}
    </>
  );
};

export default Suggestion;
