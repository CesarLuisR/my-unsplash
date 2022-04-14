import styled from "styled-components";

export const Wrapper = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 32px;
  width: 40%;
  height: max-content;
  background-color: #fff;
  z-index: 100;
  border-radius: 12px;

  @media (max-width: 768px) {
    width: 80%;
  } ;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;