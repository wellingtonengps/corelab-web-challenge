import React, { ReactNode } from "react";
import { CardStyle, ButtonStyle, BodyCard } from "./styles";
import { AiOutlineEdit, AiOutlineClose, AiFillHeart } from "react-icons/ai";
import IconButton from "../IconButton";

interface ICard {
  title: string;
  children: ReactNode;
}

const Card = (props: ICard) => {
  return (
    <CardStyle>
      <ButtonStyle>
        <IconButton onClick={() => { }}>
          <AiOutlineEdit />
        </IconButton>
        <IconButton onClick={() => { }}>
          <AiOutlineClose />
        </IconButton>
        <IconButton onClick={() => { }}>
          <AiFillHeart />
        </IconButton>
      </ButtonStyle>
      <BodyCard>
        <h2>{props.title}</h2>
        <div>{props.children}</div>
      </BodyCard>

    </CardStyle>
  );
};

export default Card;
