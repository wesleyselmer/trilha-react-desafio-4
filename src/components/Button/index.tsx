import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, disabled }: IButtonProps) => {
  if(disabled) {
    return <ButtonContainer onClick={onClick}>{title}</ButtonContainer>;
  } else {
    return <ButtonContainer onClick={onClick} disabled>{title}</ButtonContainer>;
  }
};

export default Button;
