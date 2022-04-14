import Portal from "../Portal";
import { useContext } from "react";
import { Context } from "@contexts/Global/Context";
import { ButtonContainer, Wrapper } from "./styled";
import Title from "@components/DataDisplay/Title";
import Input from "@components/Form/Input";
import Button from "@components/Form/Button";
import Spacing from "@components/Layout/Spacing";
import useModalForm from "./hooks/useModalForm";

const Modal = () => {
  const { closeModal } = useContext(Context);
  const { handleChange, handleSubmit } = useModalForm();

  return (
    <Portal>
      <Wrapper
        onSubmit={(e) => {
          handleSubmit(e);
          closeModal();
        }}
      >
        <Title>Add a new photo</Title>
        <Input
          placeholder="Anything could be here"
          label="Label"
          name="label"
          onChange={handleChange}
          required
        />
        <Spacing size={1} />
        <Input
          placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..."
          label="Photo URL"
          name="url"
          onChange={handleChange}
          required
        />
        <Spacing size={1} />
        <ButtonContainer>
          <Button
            content="Cancel"
            color="transparent"
            size="small"
            onClick={closeModal}
          />
          <Button content="Submit" color="#3DB46D" size="small" />
        </ButtonContainer>
      </Wrapper>
    </Portal>
  );
};

export default Modal;
