import React from "react";
import useGenres from "./useGenres";

const useGenre = (id?: number) => {
  const { data: Genres } = useGenres();
  return Genres?.results.find((Genre) => Genre.id === id);
};

export default useGenre;
