import CarousalBannerWrapper from "@/components/CarousalBannerWrapper";
import MoviesCarousal from "@/components/MoviesCarousal";

import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();
  const nowPlayingMovies = await getNowPlayingMovies();

  return (
    <main className=" h-screen">
      <CarousalBannerWrapper />

      <div className="flex flex-col space-y-2 xl:-mt-48">
        <MoviesCarousal movies={nowPlayingMovies} title="Now Playing" />
        <MoviesCarousal movies={upcomingMovies} title="Upcoming" />
        <MoviesCarousal movies={topRatedMovies} title="Top Rated" />
        <MoviesCarousal movies={popularMovies} title="Popular" />
      </div>
    </main>
  );
}
