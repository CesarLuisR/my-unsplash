import styled from "styled-components";

export const StyledButton = styled.button`
  width: 137px;
  height: 55px;
  background: ${(props) => props.color};
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
`;
