import { Container } from "./styles";

interface IButton {
  onClick: () => void;
  title: string;
  size?: "small" | "large"
}

const Button = (props: IButton) => {
  return <Container onClick={props.onClick} >{props.title}</Container>;
};

export default Button;
