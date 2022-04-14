import styled from "styled-components";

export const Wrapper = styled.div`
  width: 385px;
  position: relative;

  img {
    width: 100%;
    border-radius: 24px;
  }
`;

export const Content = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #ffffff;
  }

  button {
    width: 63px;
    height: 23px;
    border: 1px solid #eb5757;
    box-sizing: border-box;
    border-radius: 38px;
    background-color: transparent;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    color: #eb5757;
  }
`;
