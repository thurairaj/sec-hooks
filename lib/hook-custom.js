import { useEffect, useState } from "react";

export function useImageLoading(id, imgPath) {
  const [imgUrl, setImgUrl] = useState(imgPath(id));
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchUrl = async () => {
      const response = await fetch(imgPath(id));
      setImgUrl(response.url);
      console.log(response.url);
      setIsLoading(false);
    };

    fetchUrl();
  }, []);

  return { imgUrl, isLoading };
}
