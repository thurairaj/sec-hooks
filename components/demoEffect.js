import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useImageLoading } from "@/lib/hook-custom";

const DemoEffect = () => {
  const [count, setCount] = useState(1);
  const imgPath = (id) => `https://picsum.photos/id/${id}/200/300`;
  const { isLoading, imgUrl } = useImageLoading(count, imgPath);

  return (
    <div>
      <h2>Count is {count}</h2>
      {isLoading && <h2>Pic is loading</h2>}
      {!isLoading && (
        <Image
          style={{ display: "block" }}
          src={imgUrl}
          alt={"Image"}
          width={200}
          height={300}
        />
      )}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <style jsx>{`
        button {
          padding: 10px;
          margin-right: 10px;
        }

        .img {
          display: block;
        }
      `}</style>
    </div>
  );
};

export default DemoEffect;
