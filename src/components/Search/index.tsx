import { Containe, Input } from "./styles";
import { AiOutlineSearch } from "react-icons/ai"

interface ISearch {
  placeholder: string;
  value: string;
  onChange: () => void;
}

const Search = (props: ISearch) => {
  return (
    <Containe>
      <AiOutlineSearch size={25} />
      <Input type="text" placeholder={props.placeholder} value={props.value} />
    </Containe>

  );
};

export default Search;
