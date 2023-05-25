import { create } from "zustand";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}
interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  SetPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useGameStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) =>
    set((store) => ({
      gameQuery: { searchText },
    })),

  setGenreId: (genreId) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, genreId },
    })),
  SetPlatformId: (platformId) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, platformId },
    })),
  setSortOrder: (sortOrder) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, sortOrder },
    })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("Counter Store", useGameStore);

export default useGameStore;
