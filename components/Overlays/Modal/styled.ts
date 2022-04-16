import styled from "styled-components";

export const ModalWrapper = styled.form<any>`
  position: fixed;
  z-index: 10;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50%;
  background-color: #fff;
  border-radius: 12px;
  transition: transform 0.3s ease-in-out;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
`;