import { createContext } from "react";

export const Context = createContext({
  search: "",
  handleSearch: (value: string) => {},
  isModalOpen: false,
  openModal: () => { },
  closeModal: () => { },
});
