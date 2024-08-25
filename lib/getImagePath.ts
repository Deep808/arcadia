const getImagePath = (imagePath?: string, fullSize?: boolean) => {
  return imagePath
    ? `https://image.tmdb.org/t/p/${
        fullSize ? "original" : "w500"
      }/${imagePath}`
    : "https://wallpapercave.com/wp/wp9715880.jpg";
};

export default getImagePath;
