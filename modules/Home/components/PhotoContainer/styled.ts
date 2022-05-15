import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 16px;
  width: 100%;
  border-radius: 16px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    border-radius: 16px;
  }

  &:hover {
    img {
      filter: grayscale(90%);
    }
  }

  &:hover div {
    visibility: visible;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    button {
      align-self: end;
    }
  }
`;

export const Display = styled.div`
  position: absolute;
  top: 0;
  visibility: hidden;
  width: 100%;
  height: 100%;
  background: transparent;
  opacity: 1;
  border-radius: 16px;
  z-index: 10;
  padding: 18px;
  padding-bottom: 0;

  h3 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #ffffff;
    margin-bottom: 30px;
  }
`;
