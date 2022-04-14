import Image from "next/image";
import { Content, Wrapper } from "./styled";

const GridImage = ({ label, url }: Props) => {
  return (
    <Wrapper>
      <Image src={url} alt={label} layout="fill" objectFit="cover" />
      <Content>
        <button>delete</button>
        <h3>{label}</h3>
      </Content>
    </Wrapper>
  );
};

type Props = {
  label: string;
  url: string;
};

export default GridImage;
