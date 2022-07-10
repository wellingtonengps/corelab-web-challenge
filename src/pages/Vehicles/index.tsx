import { useEffect, useState } from "react";
import { getVehicles } from "../../lib/api";
import { Button, Card, IconButton, Search, } from "../../components";
import styles from "./Vehicles.module.scss";
import { IVehicle } from "../../types/Vehicle";
import { WrapperCard, WrapperHeader, WrapperSearch } from "./styles";
import { IoOptionsOutline } from "react-icons/io5"



const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const fetchVehicles = async () => {
      const { vehicles } = await getVehicles();
      setVehicles(vehicles);
    };

    fetchVehicles();
  }, []);

  return (
    <div className={styles.Vehicles}>
      <main className={styles.main}>
        <WrapperHeader>
          <WrapperSearch>
            <Search placeholder="Buscar" value="" onChange={() => { }} />
            <IconButton onClick={() => { }}><IoOptionsOutline size={50} /></IconButton>
          </WrapperSearch>
          <Button title="Adicionar" onClick={() => { }} />
        </WrapperHeader>

        <WrapperCard>
          {
            vehicles.map((vehicle) => {
              console.log(vehicle);
              return <Card title={vehicle.name} id={vehicle.id} key={vehicle.id} IsFavorite={vehicle.isFavorite}>
                <p>Preço: {vehicle.price}</p>
                <p>Descrição: {vehicle.description}</p>
                <p>Ano: {vehicle.year}</p>
                <p>Cor: {vehicle.color}</p>
              </Card>
            })
          }
        </WrapperCard>

      </main>
    </div>
  );
};

export default VehiclesPage;
