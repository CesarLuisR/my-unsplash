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
