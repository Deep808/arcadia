"use client";

import { Movie } from "@/typing";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import getImagePath from "@/lib/getImagePath";
import Image from "next/image";

Autoplay.globalOptions = { delay: 8000 };

function CarousalBanner({ movies }: { movies: Movie[] }) {
  const [emblaRef] = useEmblaCarousel({ loop: false, duration: 100 }, [
    Autoplay(),
  ]);

  return (
    <div
      className="overflow-hidden lg:-mt-40 relative cursor-pointer"
      ref={emblaRef}
    >
      <div className="flex relative">
        {movies.map((movie) => (
          <div key={movie.id} className="flex-full relative">
            <Image
              key={movie.id}
              src={getImagePath(movie.backdrop_path, true)}
              alt=""
              width={1920}
              height={1080}
              className="z-0 w-full"
            />
            <div className="hidden lg:inline absolute mt-0 top-0 pt-40 xl:pt-52 left-0 lg:mt-40 h-full w-full bg-gradient-to-r from-gray-900/90 via-transparent to-transparent p-10 z-[50] space-y-5 text-white">
              <h2 className="text-5xl font-bold max-w-xl">{movie.title}</h2>
              <p className="max-w-xl line-clamp-3 z-20">{movie.overview}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 z-[10] bg-gradient-to-b from-gray-500/0 via-slate-900/0 dark:from-gray-200/0 dark:via-gray-900/25 to-[#bdc2ec] dark:to-[#1A1C29]" />
    </div>
  );
}

export default CarousalBanner;
