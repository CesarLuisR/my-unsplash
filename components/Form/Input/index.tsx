import { SearchInputContainer, StyledInput, StyledSearchInput, Label } from "./styled";

export const SearchInput = (props: any) => {
  return (
    <SearchInputContainer>
      <span className="material-icons">search</span>
      <StyledSearchInput {...props} />
    </SearchInputContainer>
  );
};

export const LabelInput = (props: any) => {
  return (
    <Label>
      <span>{props.label}</span>
      <StyledInput {...props} />
    </Label>
  );
};