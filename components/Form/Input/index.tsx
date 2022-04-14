import { SearchInputContainer, StyledSearchInput } from "./styled";

export const SearchInput = (props: any) => {
  return (
    <SearchInputContainer>
      <span className="material-icons">search</span>
      <StyledSearchInput {...props} />
    </SearchInputContainer>
  );
};
