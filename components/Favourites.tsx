"use client";

import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { MdDone } from "react-icons/md";
import { useStore } from "../store/useStore";

interface Movie {
  id: number;
  title: string;
  [key: string]: any;
}

interface FavouritesProps {
  id: number;
  movie: Movie;
}

const Favourites: React.FC<FavouritesProps> = ({ id, movie }) => {
  const { setFav, fav } = useStore();

  const handleAdd = () => {
    try {
      setFav(movie);
    } catch (error) {
      console.error("Failed to add movie to favorites:", error);
    }
  };

  const isFav = fav.some((favMovie: any) => favMovie.id === movie.id);

  return (
    <>
      <button
        onClick={handleAdd}
        className="group w-full relative cursor-pointer bg-transparent border-none"
        aria-label={`Add ${movie.title} to favorites`}
        title="Add to favourites"
      >
        {isFav ? (
          <MdDone className="absolute top-4 right-12 z-50 w-8 h-8 p-1 bg-black/30 backdrop-blur-lg rounded-full text-white transition-colors duration-300" />
        ) : (
          <FaRegHeart className="absolute top-4 right-12 z-50 w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" />
        )}
      </button>
    </>
  );
};

export default Favourites;
