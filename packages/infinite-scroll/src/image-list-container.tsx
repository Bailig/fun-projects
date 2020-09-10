import React, { FC, useEffect, useState } from "react";

export const ImageListContainer: FC = () => {
  const [images, setImageUrls] = useState<string[]>();

  useEffect(() => {
    fetch(
      "https://api.unsplash.com/photos/random?client_id=jFgS8tteGD425f4oZfygQVaVnD6gt6GucN2yyz3xFek&count=10",
    )
      .then((res) => res.json())
      .then((data) => data.map((d: any) => d.links.download))
      .then((urls) => setImageUrls(urls));
  }, []);

  if (!images) return <>loading...</>;

  return (
    <>
      {images.map((imageUrl) => (
        <img key={imageUrl} src={imageUrl} width="100%" />
      ))}
    </>
  );
};
