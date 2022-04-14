import { getImages } from "@services/imageServices";
import { useEffect, useState } from "react";

const useImages = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const images = await getImages();

      setImages(images.images);
      setLoading(false);
    })();
  }, []);

  return { images, loading };
};

export default useImages;
