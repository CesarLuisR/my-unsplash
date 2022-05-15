import { useContext } from "react";
import { Context } from "@contexts/Global/Context";
import { Photo } from "@globalTypes/Photo";
import { useState } from "react";

const usePhotos = () => {
  const { photos, search } = useContext(Context);
  let noMatches = false;

  if (search === "") {
    const sortedByDate = photos.sort((a: Photo, b: Photo) => {
      return (
        new Date(String(b.createdAt)).getTime() -
        new Date(String(a.createdAt)).getTime()
      );
    });

    return { photos: sortedByDate };
  }

  const filteredPhotos = photos.filter((photo) => {
    return photo.label.toLowerCase().includes(search.toLowerCase());
  });

  if (filteredPhotos.length === 0) noMatches = true;

  return { photos: filteredPhotos, noMatches };
};

export default usePhotos;
