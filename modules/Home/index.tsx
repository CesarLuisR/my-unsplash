import Modal from "@components/Overlays/Modal";
import { Context } from "@contexts/Global/Context";
import { useContext } from "react";

const HomeModule = () => {
  const { isModalOpen } = useContext(Context);

  return <div>{isModalOpen && <Modal />}</div>;
};

export default HomeModule;
