import styled from "styled-components";

type Props = {
  opacity?: boolean;
};

export const Wrapper = styled.div<Props>`
  width: 100wv;
  opacity: ${(props) => props.opacity && 0.5};
`;

export const Main = styled.div`
  width: 80%;
  margin: 0 auto;
`;
