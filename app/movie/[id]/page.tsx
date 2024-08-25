import React from "react";
import Image from "next/image";
import { getClickedMovie } from "@/lib/getMovies";
import getImagePath from "@/lib/getImagePath";
import Trailer from "@/components/Trailer";
import Moods from "@/components/Moods";

type Props = {
  params: {
    id: string;
  };
  movieName: any;
};

const MoviePage = async ({ params: { id } }: Props) => {
  const movie: any = await getClickedMovie(id);

  if (!movie) {
    return <div>No movie data available.</div>;
  }

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/40 dark:from-gray-200/0 to-black dark:via-gray-900/25 dark:to-gray-900" />

      <Image
        src={getImagePath(movie.backdrop_path, true)}
        alt={`Backdrop for ${movie.original_title}`}
        width={1920}
        height={1080}
        className="min-h-screen object-cover"
      />

      <div className="absolute bottom-[1em] lg:bottom-[10em] p-4 left-4">
        <Trailer title={movie.original_title} />

        <h1 className="font-bold text-[1.2em] lg:text-[2em] mb-6 text-white">
          {movie.original_title}
        </h1>

        <p className="text-white/80 lg:w-1/2 text-[0.8em] lg:text-[1em] line-clamp-3">
          {movie.overview}
        </p>
        <Moods movieName={movie.original_title} />
      </div>
    </div>
  );
};

export default MoviePage;
