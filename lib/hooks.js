import { useEffect, useState } from "react";

export function useImageLoader(id, imageUrlFunc) {
  const [data, setData] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const imageUrl = imageUrlFunc(id);

  useEffect(() => {
    console.log("useImageLoader useEffect called", { imageUrl });
    let isMounted = true;
    const abortControl = new AbortController();
    const signal = abortControl.signal;

    const fetchData = async (url) => {
      setIsLoading(true);
      try {
        const response = await fetch(url, {
          signal,
        });

        if (isMounted) {
          setData(response);
          setFetchError(null);
        }
      } catch (err) {
        if (isMounted) {
          setFetchError(err.message);
          setData(null);
        }
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    fetchData(imageUrl).catch();

    return () => {
      isMounted = false;
      abortControl.abort();
    };
  }, [imageUrl]);

  return { data, fetchError, isLoading };
}
