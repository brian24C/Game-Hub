import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../services/api-client";
import APIClient from "../services/api-client";
import platforms from "../data/platforms";
import ms from "ms";
import Platform from "../entities/Platform";
const apiClient = new APIClient<Platform>("/platforms/lists/parents");

//const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

const usePlatforms = () => {
  return useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: platforms,
  });
};

export default usePlatforms;
