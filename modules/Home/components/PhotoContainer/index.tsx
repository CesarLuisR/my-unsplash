// import Image from "next/image";
import { Photo } from "@globalTypes/Photo";
import { Display, Wrapper } from "./styled";
import { RoundedButton } from "@components/Form/Button";
import { useContext } from "react";
import { Context } from "@contexts/Global/Context";

const PhotoContainer = ({ label, url, _id }: Photo) => {
  const { removePhoto } = useContext(Context);

  return (
    <Wrapper>
      {/*eslint-disable-next-line @next/next/no-img-element*/}
      <img src={url} alt={label} />
      <Display>
        <RoundedButton
          value="delete"
          color="#EB5757"
          onClick={() => removePhoto(_id)}
        />
        <h3>{label}</h3>
      </Display>
    </Wrapper>
  );
};

export default PhotoContainer;
