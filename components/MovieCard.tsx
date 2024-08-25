import getImagePath from "@/lib/getImagePath";
import { Movie } from "@/typing";
import Image from "next/image";
import Link from "next/link";
import Favourites from "./Favourites";

function MovieCard({ movie }: { movie: Movie }) {
  return (
    <>
      <Link href={`/movie/${movie.id}`}>
        <div className="relative min-w-[300px] flex-shrink-0 cursor-pointer transform hover:scale-105 transition duration-200 ease-out hover:drop-shadow-lg z-10 ">
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-gray-950/10 to-slate-950/50 dark:from-gray-200/0 dark:via-gray-900/10 dark:to-[#1A1C29] hover:border-white hover:border-[5px] hover:rounded-md z-10 " />
          <p className="absolute z-20 bottom-5 text-white left-5">
            {movie.title}
          </p>
          <Image
            className="w-fit lg:max-w-[400px] h-56 object-cover object-center shadow-md shadow-gray-500 dark:shadow-gray-900 drop-shadow-xl rounded-md"
            src={getImagePath(movie.backdrop_path || movie.poster_path)}
            alt={movie.title}
            width={1920}
            height={1080}
            key={movie.id}
          />
        </div>
      </Link>
      <Favourites id={movie.id} movie={movie} />
    </>
  );
}

export default MovieCard;
