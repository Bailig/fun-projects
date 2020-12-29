import { flatten, map, pipe, prop, uniqBy } from "ramda";
import { useMemo } from "react";
import { APIPhoto, Photo } from "./types";

export const mapPhotos = pipe<APIPhoto[][], APIPhoto[], Photo[], Photo[]>(
  flatten,
  map((d) => ({
    id: d.id,
    url: d.urls.small,
    alt: d.alt_description,
  })),
  uniqBy(prop("id")),
);

export const usePhotos = (apiPhotos: APIPhoto[][] | undefined) => {
  const photos = useMemo(() => apiPhotos && mapPhotos(apiPhotos), [apiPhotos]);
  return { photos };
};
