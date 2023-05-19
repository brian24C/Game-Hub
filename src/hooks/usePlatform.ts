import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
  const { data: Platforms } = usePlatforms();
  return Platforms?.results.find((g) => g.id === id);
};

export default usePlatform;
