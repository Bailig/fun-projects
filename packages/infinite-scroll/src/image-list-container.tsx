import React, { FC, useEffect, useRef, useState } from "react";

const fetchPhotos = async (count: number): Promise<Photo[]> => {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?client_id=jFgS8tteGD425f4oZfygQVaVnD6gt6GucN2yyz3xFek&count=${count}`,
  );
  const data: ApiPhoto[] = await response.json();
  return data.map((photo) => ({
    id: photo.id,
    url: photo.urls.small,
    alt: photo.alt_description,
    loaded: false,
  }));
};

export const ImageListContainer: FC = () => {
  const [photos, setPhotos] = useState<Photo[]>();
  const [error, setError] = useState<Error>();
  const imagesLoadedRef = useRef<boolean>(false);

  useEffect(() => {
    const photosFetched = photos !== undefined;
    const imageNotLoaded = photos?.find((p) => p.loaded === false);
    imagesLoadedRef.current = photosFetched && !imageNotLoaded;
  }, [photos]);

  useEffect(() => {
    fetchPhotos(5)
      .then((fetchedPhotos) => setPhotos(fetchedPhotos))
      .catch((error_) => setError(error_));
  }, []);

  useEffect(() => {
    const listenScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 1000 &&
        imagesLoadedRef.current
      ) {
        imagesLoadedRef.current = false;
        fetchPhotos(20)
          .then((newPhotos) =>
            setPhotos((oldPhotos) => [...oldPhotos!, ...newPhotos]),
          )
          .catch((error_) => setError(error_));
      }
    };

    window.addEventListener("scroll", listenScroll);
    return () => window.removeEventListener("scroll", listenScroll);
  }, []);

  if (!photos) return <>loading...</>;
  if (error) return <>Oops!</>;

  const handleImageLoad = (id: string) => {
    setPhotos((ps) => {
      return ps?.map((p) => {
        if (p.id !== id) return p;
        return {
          ...p,
          loaded: true,
        };
      });
    });
  };

  return (
    <>
      {photos.map(({ id, url, alt }) => (
        <img
          key={id}
          src={url}
          onLoad={() => handleImageLoad(id)}
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
  loaded: boolean;
}
