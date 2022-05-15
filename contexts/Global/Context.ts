import React from "react";
import type { Photo, PhotoObjectValue } from "@globalTypes/Photo";

export const Context = React.createContext({
  search: "",
  isModalOpen: false,
  handler: (value: string) => {},
  modalHandler: (value: boolean) => {},
  photos: [] as Photo[],
  postPhoto: (photo: PhotoObjectValue) => {},
  removePhoto: (id: string) => {},
});
