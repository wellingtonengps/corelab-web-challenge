import React, { ReactNode } from "react";
import { Container, ButtonStyle, BodyCard } from "./styles";
import { AiOutlineEdit, AiOutlineClose, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import IconButton from "../IconButton";
import { deleteVehicles, updateVehicles } from "../../lib/api";

interface ICard {
  title: string;
  children: ReactNode;
  id: number
  IsFavorite: boolean;
}

async function HandleIsFavorite(id: number, body: {}) {
  await updateVehicles(id, body);
}

async function HandleRemoveVehicle(id: number) {
  await deleteVehicles(id);
}

const Card = (props: ICard) => {

  return (
    <Container>
      <ButtonStyle>
        <IconButton onClick={() => { }}>
          <AiOutlineEdit />
        </IconButton>
        <IconButton onClick={() => HandleRemoveVehicle(props.id)}>
          <AiOutlineClose />
        </IconButton>
        <IconButton onClick={() => HandleIsFavorite(props.id, { isFavorite: true })}>
          {props.IsFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
        </IconButton>
      </ButtonStyle>
      <BodyCard>
        <h2>{props.title}</h2>
        <div>{props.children}</div>
      </BodyCard>

    </Container>
  );
};

export default Card;
