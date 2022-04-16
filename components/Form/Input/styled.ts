import styled from "styled-components";

export const SearchInputContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 55px;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  border-radius: 12px;
  padding: 20px;
  width: 70%;

  .material-icon {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    color: #bdbdbd;
  }

  input {
    margin-left: 20px;
    width: 100%;
  }
`;

export const StyledSearchInput = styled.input`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  background-color: tranparent;
  border: none;
  outline: none;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 55px;
  border: 1px solid #4f4f4f;
  border-radius: 12px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  padding: 20px;
`;


export const Label = styled.label`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: #4f4f4f;

  input {
    margin-top: 10px;
  }
`;