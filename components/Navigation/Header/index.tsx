import { Button } from "@components/Form/Button";
import { SearchInput } from "@components/Form/Input";
import useMediaQuery from "@hooks/useMediaQuery";
import Image from "next/image";
import MobileMenu from "../MobileMenu";
import React, { useContext, useState } from "react";
import { Context } from "@contexts/Global/Context";
import { HeaderWrapper, MainHeader, MenuIcon } from "./styled";

const Header = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isOpen, setIsOpen] = useState(false);
  const { search, handler, modalHandler } = useContext(Context);

  if (isMobile)
    return (
      <HeaderWrapper>
        <Image
          src="/my_unsplash_logo.svg"
          alt="logo"
          width="99px"
          height="43px"
        />
        <MenuIcon className="material-icons" onClick={() => setIsOpen(true)}>
          menu
        </MenuIcon>
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </HeaderWrapper>
    );

  return (
    <HeaderWrapper>
      <MainHeader>
        <Image
          src="/my_unsplash_logo.svg"
          alt="logo"
          width="99px"
          height="43px"
        />
        <SearchInput
          placeholder="Search by name"
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handler(e.target.value)
          }
        />
      </MainHeader>
      <Button
        value="Add a photo"
        color="#3DB46D"
        onClick={() => modalHandler(true)}
      />
    </HeaderWrapper>
  );
};

export default Header;
