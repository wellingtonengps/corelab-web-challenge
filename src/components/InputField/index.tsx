import { Dispatch, SetStateAction } from "react";
import { Container, Input } from "./styles";

interface IInputField {
  placeholder: string;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
}

const InputField = (props: IInputField) => {
  return (
    <Container>
      <Input type="text" placeholder={props.placeholder} value={props.value} onChange={(value) => props.onChange(value.target.value)} />
    </Container>
  );
};

export default InputField;
