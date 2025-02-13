import { Container, Input } from "./styles";
import { AiOutlineSearch } from "react-icons/ai"
import { Dispatch, SetStateAction } from "react";

interface ISearch {
  placeholder: string;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
}

const Search = (props: ISearch) => {
  return (
    <Container>
      <AiOutlineSearch size={25} />
      <Input type="text" placeholder={props.placeholder} value={props.value} onChange={(value) => props.onChange(value.target.value)} />
    </Container>
  );
};

export default Search;
