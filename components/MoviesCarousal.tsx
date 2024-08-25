import { Movie } from "@/typing";
import MovieCard from "./MovieCard";
import { cn } from "@/lib/utils";

type Props = {
  title?: string;
  movies: Movie[];
  isVertical?: boolean;
};

function MoviesCarousal({ title, movies, isVertical }: Props) {
  return (
    <div className="z-20">
      {title && <h2 className="text-xl font-bold px-10 py-2">{title}</h2>}
      <div
        className={cn(
          "flex overflow-x-auto overflow-y-hidden px-5 py-5 lg:px-10 scrollbar-hide",
          isVertical ? "flex-col space-y-12" : "space-x-6"
        )}
      >
        {isVertical
          ? movies.map((movie) => (
              <div
                key={movie.id}
                className={cn(
                  "flex flex-col mb-5 items-center lg:flex-row space-x-5",
                  isVertical && "flex-col space-y-5"
                )}
              >
                <MovieCard movie={movie} />
                <div className="max-w-2xl">
                  <p className="font-bold mb-3">
                    {movie.title} ({movie.release_date?.split("-")[0]})
                  </p>
                  <hr className="mb-3" />
                  <p>{movie.overview}</p>
                </div>
              </div>
            ))
          : movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
}

export default MoviesCarousal;
