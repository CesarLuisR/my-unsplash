import {
  SearchInputContainer,
  StyledInput,
  StyledSearchInput,
  Label,
  StyledSubmitInput,
} from "./styled";

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
      <StyledInput
        {...props}
        onKeyDown={(e) => {
          if (e.key !== "Enter") return;
          e.preventDefault();
        }}
      />
    </Label>
  );
};

export const SubmitInput = (props: any) => {
  return <StyledSubmitInput color={props.color} value={props.value} />;
};
