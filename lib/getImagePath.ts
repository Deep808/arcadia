const getImagePath = (imagePath?: string, fullSize?: boolean) => {
  return imagePath
    ? `https://image.tmdb.org/t/p/${
        fullSize ? "original" : "w500"
      }/${imagePath}`
    : "/noPoster.jpg";
};

export default getImagePath;
