import Title from "@components/DataDisplay/Title";
import { LabelInput } from "@components/Form/Input";
import Spacing from "@components/Layout/Spacing";
import Portal from "../Portal";
import { Context } from "@contexts/Global/Context";
import { useContext } from "react";
import { ButtonContainer, ModalWrapper } from "./styled";
import { SmallButton, TransparentButton } from "@components/Form/Button";
import useModalForm from "./hooks/useModalForm";

const Modal = () => {
  const { modalHandler } = useContext(Context);
  const { handleChange, handleSubmit, values } = useModalForm();

  return (
    <Portal>
      <ModalWrapper onSubmit={handleSubmit}>
        <Title>Add a new photo</Title>
        <LabelInput
          label="Label"
          placeholder="Anything could be here"
          name="label"
          value={values.label}
          onChange={handleChange}
        />
        <Spacing size={1} />
        <LabelInput
          label="Photo URL"
          placeholder="Url..."
          name="url"
          value={values.url}
          onChange={handleChange}
        />
        <ButtonContainer>
          <SmallButton value="Add" color="#3DB46D" />
          <TransparentButton
            value="Cancel"
            onClick={() => modalHandler(false)}
          />
        </ButtonContainer>
      </ModalWrapper>
    </Portal>
  );
};

export default Modal;
