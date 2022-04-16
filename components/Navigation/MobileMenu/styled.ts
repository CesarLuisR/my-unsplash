import styled from "styled-components";

export const MobileMenuWrapper = styled.div<any>`
  position: fixed;
  z-index: 10;
  right: 0;
  top: 0;
  bottom: 0;
  transform: translateX(100%);
  width: 100%;
  height: 100vh;
  background-color: #fff;
  border-left: 1px solid #e5e5e5;
  transition: transform 0.3s ease-in-out;
  padding: 10px;
  display: flex;
  flex-direction: column;

  ${({ isOpen }) => isOpen && `transform: translateX(0);`}})}
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 120px;
  margin-top: 20px;

  & > div {
    width: 100%;
  }
`;

export const CloseIcon = styled.div`
  font-size: 35px;
`;
