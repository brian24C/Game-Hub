import { HStack, Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";
import usePlatforms from "../hooks/usePlatforms";
import useGenres from "../hooks/useGenres";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: Platforms } = usePlatforms();
  const { data: Genres } = useGenres();

  const Platform = Platforms?.results.find(
    (platform) => platform.id === gameQuery.platformId
  );
  const Genre = Genres?.results.find((Genre) => Genre.id === gameQuery.genreId);
  console.log(gameQuery.genreId, gameQuery.platformId);

  const heading = `${Platform?.name || ""} ${Genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
