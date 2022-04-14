import { request } from "@utils/request";
import { apiRoutes } from "@config/apiRoutes";
import type { Image, ImageObjectValue } from "@globalTypes/Image";

// Get all images
export const getImages = () =>
  request<Image[]>(apiRoutes.image.get).then((data) => data);

// Add image to database
export const addImage = (image: ImageObjectValue) =>
  request<Image>(apiRoutes.image.add, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(image),
  }).then((data) => data);

// Delete image from database
export const deleteImage = (id: string) =>
  request<void>(apiRoutes.image.delete(id), {
    method: "DELETE",
  }).then((data) => data);
