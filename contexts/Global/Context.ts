import React from "react";

export const Context = React.createContext({
  search: "",
  isModalOpen: false,
  handler: (value: string) => {},
  modalHandler: (value: boolean) => {},
});
