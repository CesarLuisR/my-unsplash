import { useState } from "react";
import { Context } from "./Context";

const Provider = ({ children }: Props) => {
  const [search, setSearch] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handler = (value: string) => setSearch(value);
  const modalHandler = (value: boolean) => setIsModalOpen(value);

  return (
    <Context.Provider value={{ search, handler, isModalOpen, modalHandler }}>
      {children}
    </Context.Provider>
  );
};

type Props = {
  children: React.ReactNode;
};

export default Provider;
