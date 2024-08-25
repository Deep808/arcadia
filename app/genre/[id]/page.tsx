import Results from "@/components/Results";
import Suggestion from "@/components/Suggestion";
import { getDiscoverMovies } from "@/lib/getMovies";
import React from "react";
import { Movie } from "@/typing";

type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};

const GenrePage: React.FC<Props> = async ({
  params: { id },
  searchParams: { genre },
}) => {
  const movies: Movie[] = await getDiscoverMovies(id);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col space-y-5 mt-32 xl:mt-42">
        <h1 className="text-6xl font-bold">Results for {genre}</h1>
        <div className="my-[3em]">
          <Suggestion genre={genre} term={""} />
        </div>

        <Results title={`Genre: ${genre}`} movies={movies} isVertical />
      </div>
    </div>
  );
};

export default GenrePage;
