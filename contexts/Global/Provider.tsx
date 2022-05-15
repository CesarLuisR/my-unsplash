import { Photo, PhotoObjectValue } from "@globalTypes/Photo";
import { addPhoto, deletePhoto, getPhotos } from "@services/photoServices";
import { useEffect, useState } from "react";
import { Context } from "./Context";

const Provider = ({ children }: Props) => {
  const [search, setSearch] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [photos, setPhotos] = useState<Photo[]>([]);

  const fetchPhotos = async () => {
    const data = await getPhotos();
    setPhotos(data.photos);
  };

  const postPhoto = async (photo: PhotoObjectValue) => {
    await addPhoto(photo);
    fetchPhotos();
  };

  const removePhoto = async (id: string) => {
    await deletePhoto(id);
    fetchPhotos();
  };

  const handler = (value: string) => setSearch(value);

  const modalHandler = (value: boolean) => setIsModalOpen(value);

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <Context.Provider
      value={{
        search,
        handler,
        isModalOpen,
        modalHandler,
        postPhoto,
        removePhoto,
        photos,
      }}
    >
      {children}
    </Context.Provider>
  );
};

type Props = {
  children: React.ReactNode;
};

export default Provider;
