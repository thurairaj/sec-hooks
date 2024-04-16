import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useImageLoader } from "@/lib/hooks";

const DemoUseEffect = () => {
  const [count, setCount] = useState(0);
  const [isId, setIsId] = useState(0);

  useEffect(() => {
    setIsId(Math.floor(count / 2));
  }, [count]);

  const {
    data: imageLoader,
    fetchError,
    isLoading,
  } = useImageLoader(isId, (id) => {
    return `https://picsum.photos/id/${id}/200/300`;
  });

  return (
    <div className="tutorial">
      <h1>Count: {count}</h1>
      {isLoading && <h1>Picture is loading...</h1>}
      {!isLoading && (
        <Image
          src={imageLoader?.url}
          alt="Picture of the author"
          width={500}
          height={500}
        />
      )}

      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      {/*language=CSS*/}
      <style jsx>{`
        button {
          margin: 50px;
          padding: 50px;
          border: none;
        }

        button:hover {
          background-color: lightblue;
        }

        button:active {
          background: blue;
        }

        p {
          color: blue;
        }
      `}</style>
    </div>
  );
};

export default DemoUseEffect;
