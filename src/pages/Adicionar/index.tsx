import { useState } from "react";
import { Button, IconButton, InputField } from "../../components";

import { Container, WrapperForm, WrapperInputs, Main } from "./styles";
import { AiOutlineArrowLeft } from "react-icons/ai"
import { useNavigate } from "react-router-dom";
import { createVehicles } from "../../lib/api";

const AdicionarPage = () => {
  const [nome, setNome] = useState("");
  const [marca, setMarca] = useState("");
  const [cor, setCor] = useState("");
  const [ano, setAno] = useState("");
  const [placa, setPlaca] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");

  const navigate = useNavigate();

  async function handleCreateVehicle() {


    await createVehicles({
      name: nome,
      plate: placa,
      isFavorite: false,
      year: parseInt(ano),
      color: cor,
      price: parseInt(preco),
      description: descricao,
    });

    navigate("/")
  }

  return (
    <Container>
      <Main>
        <IconButton onClick={() => { navigate("/") }}>
          <AiOutlineArrowLeft />
        </IconButton>
        <WrapperForm>
          <WrapperInputs>
            <p>Nome:</p>
            <InputField placeholder="" value={nome} onChange={setNome} />
            <p>Marca:</p>
            <InputField placeholder="" value={marca} onChange={setMarca} />
            <p>Cor:</p>
            <InputField placeholder="" value={cor} onChange={setCor} />
            <p>Ano:</p>
            <InputField placeholder="" value={ano} onChange={setAno} />
            <p>Placa:</p>
            <InputField placeholder="" value={placa} onChange={setPlaca} />
            <p>Descrição:</p>
            <InputField placeholder="" value={descricao} onChange={setDescricao} />
            <p>Preço:</p>
            <InputField placeholder="" value={preco} onChange={setPreco} />
          </WrapperInputs>
          <Button title="salvar" onClick={() => handleCreateVehicle()} size="small" />
        </WrapperForm>
      </Main>


    </Container>
  );
};

export default AdicionarPage;
