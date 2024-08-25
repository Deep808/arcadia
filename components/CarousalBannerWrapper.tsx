import { getDiscoverMovies } from "@/lib/getMovies";
import CarousalBanner from "./CarousalBanner";

type Props = {
  id?: string;
  keywords?: string;
};

async function CarousalBannerWrapper({ id, keywords }: Props) {
  const movies = await getDiscoverMovies(id, keywords);

  return <CarousalBanner movies={movies} />;
}

export default CarousalBannerWrapper;
