import { create } from "zustand";

export const useStore = create((set) => ({
  fav: [],
  setFav: (movie) => {
    if (!movie || !movie.id) {
      console.error("Invalid movie object:", movie);
      return;
    }
    set((state) => ({
      fav: state.fav.includes(movie) ? state.fav : [...state.fav, movie],
    }));
  },
  AiText: "",
  setAiText: (AiText) => set({ AiText }),
  suggestion: [],
  setSuggestion: (suggestion) => set({ suggestion }),
}));
