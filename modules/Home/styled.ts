import styled from "styled-components";

export const GridWrapper = styled.div`
  width: 100%;
  column-count: 3;
  column-gap: 16px;

  @media (max-width: 768px) {
    column-count: 2;
  }

  @media (max-width: 576px) {
    column-count: 1;
  }
`;

export const HomeCenterText = styled.div`
  text-align: center;
  margin-top: 16px;
  margin-bottom: 16px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
`;
