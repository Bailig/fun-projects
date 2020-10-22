import { flatten, map, pipe } from "ramda";
import { APIPhoto, Photo } from "./types";

export const getAPIUrlByIndex = (index: number) =>
  `https://api.unsplash.com/photos/random?client_id=jFgS8tteGD425f4oZfygQVaVnD6gt6GucN2yyz3xFek&count=${
    index === 0 ? 5 : 20
  }`;

export const mapPhotos = pipe<APIPhoto[][], APIPhoto[], Photo[]>(
  flatten,
  map((d) => ({
    id: d.id,
    url: d.urls.small,
    alt: d.alt_description,
  })),
);
