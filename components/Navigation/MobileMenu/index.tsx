import { Button } from "@components/Form/Button";
import { SearchInput } from "@components/Form/Input";
import Portal from "@components/Overlays/Portal";
import { Context } from "@contexts/Global/Context";
import React, { useContext } from "react";
import { CloseIcon, Main, MobileMenuWrapper } from "./styled";

const MobileMenu = ({ isOpen, setIsOpen }: Props) => {
  const { search, handler, modalHandler } = useContext(Context);

  return (
    <Portal>
      <MobileMenuWrapper isOpen={isOpen}>
        <CloseIcon className="material-icons" onClick={() => setIsOpen(false)}>
          close
        </CloseIcon>
        <Main>
          <SearchInput
            placeholder="Search by name"
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handler(e.target.value)
            }
          />
          <Button
            value="Add a photo"
            color="#3DB46D"
            onClick={() => modalHandler(true)}
          />
        </Main>
      </MobileMenuWrapper>
    </Portal>
  );
};

export type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default MobileMenu;
