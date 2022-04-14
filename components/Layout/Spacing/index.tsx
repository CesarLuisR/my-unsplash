import styled from "styled-components";

const Wrapper = styled.div<Props>`
  height: ${(props) => props.size}rem;
`;

const Spacing = ({ size }: Props) => {
  return <Wrapper size={size} />;
};

type Props = {
  size: number;
};

export default Spacing;
