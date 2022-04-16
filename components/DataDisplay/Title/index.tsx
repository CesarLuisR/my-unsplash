import styled from "styled-components";

const Text = styled.h2`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 33px;
  color: #333333;
`;

const Title = ({ children }: Props) => {
  return <Text>{children}</Text>;
};

type Props = {
  children: React.ReactNode;
};

export default Title;
