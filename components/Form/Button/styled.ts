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
  font-size: 14px;
  line-height: 22px;
  color: #ffffff;
`;

export const StyledSmallButton = styled(StyledButton)`
  width: 105px;
  height: 55px;
`;

export const StyledTransparentButton = styled(StyledButton)`
  background: transparent;
  box-shadow: none;
  color: #bdbdbd;
  padding: 5px;
`;

export const StyledRoundedButton = styled(StyledButton)`
  background: transparent;
  color: ${(props) => props.color};
  border: ${(props) => `1px solid ${props.color}`};
  border-radius: 38px;
  width: 70px;
  height: 30px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
`;
