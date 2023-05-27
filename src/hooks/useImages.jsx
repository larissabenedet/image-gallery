import axios from "axios";
import { useState, useCallback, useEffect } from "react";

const API_REQUEST_URL = `https://api.unsplash.com/photos?client_id=${
  import.meta.env.VITE_UNSPLASH_API_KEY
}`;

export const useImages = () => {
  const [images, setImages] = useState(null);
  const [keyword, setKeyword] = useState("");

  const searchImage = useCallback((keyword) => {
    axios
      .get(API_REQUEST_URL + `&query=${keyword}`)
      .then((response) => setImages(response?.data.results))
      .catch((error) => console.log(error));
  }, []);

  const getDefaultImages = useCallback(() => {
    axios
      .get(API_REQUEST_URL)
      .then((response) => setImages(response?.data))
      .catch((error) => console.log(error));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setKeyword(e.target.value);
  };

  useEffect(() => {
    if (keyword) searchImage(keyword);
  }, [keyword, searchImage]);

  return { keyword, handleSearch, images, getDefaultImages, searchImage };
};
