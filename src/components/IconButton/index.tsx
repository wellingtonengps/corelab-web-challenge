import { ReactNode } from "react";
import { Container } from "./styles";

interface IIconButton {
  onClick: () => void;
  children: ReactNode;
}

const IconButton = (props: IIconButton) => {
  return <Container onClick={props.onClick}>{props.children}</Container>;
};

export default IconButton;

