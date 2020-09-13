import { flatten, map, pipe } from "ramda";
import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import { useSWRInfinite } from "swr";

const fetcher = async (...args: Parameters<typeof fetch>) => {
  const response = await fetch(...args);
  return response.json();
};

export const ImageListContainer: FC = () => {
  const { data, error, setSize } = useSWRInfinite<ApiPhoto[]>(
    (index) =>
      `https://api.unsplash.com/photos/random?client_id=jFgS8tteGD425f4oZfygQVaVnD6gt6GucN2yyz3xFek&count=${
        index === 0 ? 5 : 20
      }`,
    fetcher,
  );

  const imagesLoadedRef = useRef<boolean>(false);
  const [imagesLoadedCount, setImagesLoadedCount] = useState<number>(0);

  const photos = useMemo(() => {
    if (!data) return;
    return pipe<ApiPhoto[][], ApiPhoto[], Photo[]>(
      flatten,
      map((d) => ({
        id: d.id,
        url: d.urls.regular,
        alt: d.alt_description,
      })),
    )(data);
  }, [data]);

  useEffect(() => {
    if (imagesLoadedCount > 0 && imagesLoadedCount === photos?.length) {
      imagesLoadedRef.current = true;
    }
  }, [imagesLoadedCount, photos?.length]);

  useEffect(() => {
    const listenScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 1000 &&
        imagesLoadedRef.current
      ) {
        imagesLoadedRef.current = false;
        setSize((s) => s + 1);
      }
    };

    window.addEventListener("scroll", listenScroll);
    return () => window.removeEventListener("scroll", listenScroll);
  }, [setSize]);

  if (!photos) return <>loading...</>;
  if (error) return <>Oops!</>;

  const handleImageLoad = () => {
    setImagesLoadedCount((c) => c + 1);
  };

  return (
    <>
      {photos.map(({ id, url, alt }) => (
        <img
          key={id}
          src={url}
          onLoad={() => handleImageLoad()}
          alt={alt}
          width="100%"
        />
      ))}
    </>
  );
};

export interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

export interface ApiPhoto {
  id: string;
  urls: Urls;
  alt_description: string;
}

export interface Photo {
  id: string;
  url: string;
  alt: string;
}
