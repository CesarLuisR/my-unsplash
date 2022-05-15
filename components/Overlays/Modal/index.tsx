import Title from "@components/DataDisplay/Title";
import { LabelInput, SubmitInput } from "@components/Form/Input";
import Spacing from "@components/Layout/Spacing";
import Portal from "../Portal";
import { Context } from "@contexts/Global/Context";
import { useContext } from "react";
import useModalForm from "./hooks/useModalForm";
import { ButtonContainer, ModalWrapper } from "./styled";
import { TransparentButton } from "@components/Form/Button";

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
          <TransparentButton
            value="Cancel"
            onClick={(e: any) => {
              e.preventDefault();
              modalHandler(false);
            }}
          />
          <SubmitInput value="Add" color="#3DB46D" />
        </ButtonContainer>
      </ModalWrapper>
    </Portal>
  );
};

export default Modal;
