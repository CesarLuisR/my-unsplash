import { StyledButton } from "./styled";

const Button = ({ value, color }: ButtonProps) => {
  return <StyledButton color={color}>{value}</StyledButton>;
};

type ButtonProps = {
  value: string;
  color: string;
};

export default Button;
