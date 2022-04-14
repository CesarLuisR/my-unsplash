import { useState } from "react";
import { Context } from "./Context";

const AppProvider = ({ children }: AppProviderProps) => {
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = (value: string) => setSearch(value);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <Context.Provider
      value={{ search, handleSearch, isModalOpen, openModal, closeModal }}
    >
      {children}
    </Context.Provider>
  );
};

type AppProviderProps = {
  children: React.ReactNode;
};

export default AppProvider;
