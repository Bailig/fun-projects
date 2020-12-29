import { flatten, map, pipe, prop, uniqBy } from "ramda";

export interface APIPhoto {
  id: string;
  urls: Urls;
  alt_description: string;
}

export interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

export interface Photo {
  id: string;
  url: string;
  alt: string;
}

export const selectPhotos = pipe<APIPhoto[][], APIPhoto[], Photo[], Photo[]>(
  flatten,
  map((d) => ({
    id: d.id,
    url: d.urls.small,
    alt: d.alt_description,
  })),
  uniqBy(prop("id")),
);
