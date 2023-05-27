import { useImages } from "./hooks/useImages";
import { ImagesContainer } from "./ImagesContainer";
import { Search } from "./Search";

export const Home = () => {
  const { images, getDefaultImages } = useImages();

  if (!images) getDefaultImages();

  return (
    <>
      <Search />
      <ImagesContainer images={images} />
    </>
  );
};
