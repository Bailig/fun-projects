import React, { FC, useEffect, useState, useMemo } from "react";

const fetchPhotos = async () => {
  const response = await fetch(
    "https://api.unsplash.com/photos/random?client_id=jFgS8tteGD425f4oZfygQVaVnD6gt6GucN2yyz3xFek&count=10",
  );
  const data = await response.json();
  return data.map((d: any) => d.links.download);
};

export const ImageListContainer: FC = () => {
  const [images, setImageUrls] = useState<string[]>();
  const [error, setError] = useState<Error>();

  const isImageLoaded = useMemo(() => images !== undefined, [images]);

  useEffect(() => {
    fetchPhotos()
      .then((urls) => setImageUrls(urls))
      .catch((error_) => setError(error_));
  }, []);

  useEffect(() => {
    const listenScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 1000 &&
        isImageLoaded
      ) {
        fetchPhotos()
          .then((newUrls) => setImageUrls((urls) => [...urls, ...newUrls]))
          .catch((error_) => setError(error_));
      }
    };

    window.addEventListener("scroll", listenScroll);
    return window.removeEventListener("scroll", listenScroll);
  }, [isImageLoaded]);

  if (!images) return <>loading...</>;
  if (error) return <>Oops!</>;

  return (
    <>
      {images.map((imageUrl) => (
        <img key={imageUrl} src={imageUrl} alt="unsplash" width="80%" />
      ))}
    </>
  );
};
