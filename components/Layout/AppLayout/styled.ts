import styled from "styled-components";

type Props = {
  opacity?: number;
};

export const Wrapper = styled.div<Props>`
  width: 100wv;
  opacity: ${(props) => props.opacity};
`;

export const Main = styled.div`
  width: 80%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 90%;
  }
`;
