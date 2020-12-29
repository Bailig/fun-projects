import { useMemo } from "react";
import { APIPhoto, selectPhotos } from "../selectors";

export const usePhotos = (apiPhotos: APIPhoto[][] | undefined) => {
  const photos = useMemo(() => apiPhotos && selectPhotos(apiPhotos), [
    apiPhotos,
  ]);
  return { photos };
};
