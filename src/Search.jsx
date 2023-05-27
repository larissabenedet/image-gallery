import { useImages } from "./hooks/useImages";

export const Search = () => {
  const { keyword, handleSearch } = useImages();

  return (
    <input
      type="text"
      placeholder="Search Here"
      onChange={handleSearch}
      value={keyword}
    />
  );
};
