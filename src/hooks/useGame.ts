import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient, { FetchResponse } from "../services/api-client";
import { Game } from "../entities/Game";

const apiClient = new APIClient<Game>("/games");

const useGame = (slug: string) => {
  return useQuery<Game>({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
    staleTime: ms("24h"),
  });
};

export default useGame;
