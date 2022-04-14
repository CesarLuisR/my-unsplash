import Button from "@components/Form/Button";
import { SearchInput } from "@components/Form/Input";
import useMediaQuery from "@hooks/useMediaQuery";
import Image from "next/image";
import { HeaderWrapper, MainHeader } from "./styled";

const Header = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  if (isMobile) return <div>Xd esto es un telefono</div>;

  return (
    <HeaderWrapper>
      <MainHeader>
        <Image
          src="/my_unsplash_logo.svg"
          alt="logo"
          width="99px"
          height="43px"
        />
        <SearchInput placeholder="Search by name" />
      </MainHeader>
      <Button value="Add a photo" color="#3DB46D" />
    </HeaderWrapper>
  );
};

export default Header;
