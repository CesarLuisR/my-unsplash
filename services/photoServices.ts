import { request } from "@utils/request";
import { apiRoutes } from "@config/apiRoutes";
import type { Photo, PhotoObjectValue } from "@globalTypes/Photo";

// Get all images
export const getPhotos = () =>
  request<Photo[]>(apiRoutes.photo.getAll).then((data) => data);

// Add image to database
export const addPhoto = (photo: PhotoObjectValue) =>
  request<Photo>(apiRoutes.photo.add, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(photo),
  }).then((data) => data);

// Delete image from database
export const deletePhoto = (id: string) =>
  request<void>(apiRoutes.photo.delete(id), {
    method: "DELETE",
  }).then((data) => data);
