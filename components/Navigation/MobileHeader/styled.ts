import styled from "styled-components";

interface IProps {
  isOpen: boolean;
}

export const Wrapper = styled.div<IProps>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 80%;
  height: 100vh;
  background-color: #fff;
  z-index: 100;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  padding: 20px;


  ${(props) => props.isOpen && `transform: translateX(0);`}
`;

export const CloseMenuIcon = styled.div`
  font-size: 40px;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
`;