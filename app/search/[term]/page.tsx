import MoviesCarousal from "@/components/MoviesCarousal";
import Results from "@/components/Results";
import Suggestion from "@/components/Suggestion";
import { getPopularMovies, getSearchedMovies } from "@/lib/getMovies";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: {
    term: string;
  };
};

async function SearchPage({ params: { term } }: Props) {
  if (!term) notFound();

  const termToUse = decodeURI(term);

  // API calls for the searched movies

  const movies = await getSearchedMovies(termToUse);

  // API calls to get popular movies

  const popularMovies = await getPopularMovies();

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col space-y-5 mt-32 xl:mt-42">
        <h1 className="text-6xl font-bold">Results for {termToUse}</h1>
        <div className="my-[5em]">
          <Suggestion term={term} />
        </div>
        <Results title="Movies" movies={movies} isVertical />
        <MoviesCarousal title="You may also like" movies={popularMovies} />
      </div>
    </div>
  );
}

export default SearchPage;
