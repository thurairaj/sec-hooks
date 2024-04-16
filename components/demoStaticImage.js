import React, { useState } from "react";
import Image from "next/image";
import { useImageLoading } from "@/lib/hook-custom";

const DemoStaticImage = () => {
  const [id, setId] = useState(10);
  const { isLoading, imgUrl } = useImageLoading(
    id,
    () => `https://picsum.photos/id/14/200/300`
  );

  setTimeout(() => {
    setId(Math.floor(Math.random() * 10));
  }, 2000);
  return (
    <div>
      <p>Id: {id}</p>
      <p>Loading: {isLoading.toString()}</p>
      <Image src={imgUrl} alt={"something"} width={200} height={300}></Image>
    </div>
  );
};

export default DemoStaticImage;
