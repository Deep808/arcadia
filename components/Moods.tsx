"use client";

import React, { useEffect, useState } from "react";
import { dotStream } from "ldrs";

dotStream.register();

type Props = {
  movieName: string;
};

const Moods = ({ movieName }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [moods, setMoods] = useState("");

  const getMoods = `what is the mood of a movie named: ${movieName}. Just give only me 3 moods no other text just moods. Dont use any special characters just plain text`;

  useEffect(() => {
    const fetchMoods = async () => {
      setIsLoading(true);

      try {
        const response = await fetch("/api/generate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ body: getMoods }),
        });

        const data = await response.json();
        if (response.ok) {
          //   console.log(data.suggestions.split("\n").toLocaleString());
          setMoods(
            data.suggestions
              .split(/[\n, -]+/)
              .filter(Boolean)
              .join(", ")
          );
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMoods();
  }, [getMoods]);

  return (
    <div>
      <p className="my-[1em] text-[0.8em] lg:text-[1em] backdrop-blur-xl p-4 w-fit rounded-xl bg-white/5 transition-all duration-300 ease-linear">
        {isLoading ? (
          <l-dot-stream size="60" speed="2.5" color="white"></l-dot-stream>
        ) : moods ? (
          moods
        ) : (
          <p>Something went wrong!</p>
        )}
      </p>
    </div>
  );
};

export default Moods;
