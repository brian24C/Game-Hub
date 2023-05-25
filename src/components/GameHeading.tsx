import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameStore from "./store";

const GameHeading = () => {
  const genreId = useGameStore((s) => s.gameQuery.genreId);
  const Genre = useGenre(genreId);

  const platformId = useGameStore((s) => s.gameQuery.platformId);
  const Platform = usePlatform(platformId);

  const heading = `${Platform?.name || ""} ${Genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
