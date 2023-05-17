import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";

//const useGenres = () => ({ data: genres, isLoading: false, error: null });

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  return useQuery<Genre[], Error>({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Genre>>("/genres")
        .then((res) => res.data.results),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: genres,
  });
};

export default useGenres;
