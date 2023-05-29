import { useQuery } from "@tanstack/react-query";
import React from "react";
import APIClient from "../services/api-client";
import { Trailer } from "../entities/Trailer";
import { screenshots } from "../entities/Screenshots";

const useScreenshotsGames = (gameId: number) => {
  const apiClient = new APIClient<screenshots>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenshotsGames;
