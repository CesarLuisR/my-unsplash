import { apiRoutes } from "@config/apiRoutes";
import type { PhotoObjectValue } from "@globalTypes/Photo";

export const getPhotos = async () => {
  const response = await fetch(apiRoutes.photo.getAll);
  const data = await response.json();
  return data;
};

export const addPhoto = async (photo: PhotoObjectValue) => {
  const response = await fetch(apiRoutes.photo.add, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(photo),
  });
  const data = await response.json();
  return data;
};

export const deletePhoto = async (id: string) => {
  const response = await fetch(apiRoutes.photo.delete(id), {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};
