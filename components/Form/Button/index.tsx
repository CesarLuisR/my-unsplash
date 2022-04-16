import {
  StyledButton,
  StyledSmallButton,
  StyledTransparentButton,
} from "./styled";

export const Button = (props: any) => {
  return <StyledButton {...props}>{props.value}</StyledButton>;
};

export const SmallButton = (props: any) => {
  return <StyledSmallButton {...props}>{props.value}</StyledSmallButton>;
};

export const TransparentButton = (props: any) => {
  return (
    <StyledTransparentButton {...props}>{props.value}</StyledTransparentButton>
  );
};