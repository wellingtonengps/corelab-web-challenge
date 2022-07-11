import { ReactNode, useState } from "react";
import { Container, WrapperButtons, WrapperBody } from "./styles";
import { AiOutlineEdit, AiOutlineClose, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import IconButton from "../IconButton";
import { deleteVehicles, updateVehicles } from "../../lib/api";

interface ICard {
  title: string;
  children: ReactNode;
  id: number;
  isFavorite: boolean;
  renderParent: () => void;
}

const Card = (props: ICard) => {

  const [isFavorite, setIsFavorite] = useState(props.isFavorite);

  async function HandleIsFavorite() {
    setIsFavorite(!isFavorite);
    await updateVehicles(props.id, { isFavorite: !props.isFavorite });
    props.renderParent();
  }

  async function HandleRemoveVehicle() {
    await deleteVehicles(props.id);
    props.renderParent();
  }

  return (
    <Container>
      <WrapperButtons>
        <IconButton onClick={() => { }}>
          <AiOutlineEdit />
        </IconButton>
        <IconButton onClick={() => HandleRemoveVehicle()}>
          <AiOutlineClose />
        </IconButton>
        <IconButton onClick={() => HandleIsFavorite()}>
          {props.isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
        </IconButton>
      </WrapperButtons>
      <WrapperBody>
        <h2>{props.title}</h2>
        <div>{props.children}</div>
      </WrapperBody>

    </Container>
  );
};

export default Card;
