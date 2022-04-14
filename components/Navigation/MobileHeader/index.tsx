import Button from "@components/Form/Button";
import { Input } from "@components/Form/Input";
import Portal from "../../Overlays/Portal";
import { Wrapper, CloseMenuIcon, ButtonContainer } from "./styled";
import Spacing from "@components/Layout/Spacing";

const MobileHeader = ({ isOpen, setIsOpen }: Props) => {
  return (
    <Portal>
      <Wrapper isOpen={isOpen}>
        <CloseMenuIcon
          className="material-icons"
          onClick={() => setIsOpen(false)}
        >
          close
        </CloseMenuIcon>
        <Spacing size={1} />
        <Input type="text" placeholder="Search by name" icon />
        <Spacing size={1} />
        <ButtonContainer>
          <Button value="Add a photo" color="#3DB46D" />
        </ButtonContainer>
      </Wrapper>
    </Portal>
  );
};

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default MobileHeader;
