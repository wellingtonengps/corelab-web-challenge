import { Container } from "./styles";

interface IButton {
  onClick: () => void;
  title: string;
}

const Button = (props: IButton) => {
  return <Container onClick={props.onClick}>{props.title}</Container>;
};

export default Button;
