import React, { useEffect, useState } from "react";
import Card from "Components/Card";
import Item from "Widgets/Item";
import { Cat } from "Models/Cat";
import { useNavigate } from "react-router-dom";
import CopyButton from "Components/CopyButton";
import { useModal } from "Context/ModalContext";
import Container from "Components/Container";
import { getCat } from "Services/service";

interface ItemDetailsProps {
  id: string;
}

const ItemDetails = (props: ItemDetailsProps) => {
  const navigate = useNavigate();
  const { closeModal } = useModal();
  const [data, setData] = useState<Cat | null>(null)

  useEffect(() => {
    fetchDataById()
  }, [])

  const fetchDataById = async () => {
    try {
        const cat = await getCat(props.id);
        if (cat) {
            setData(cat);
        }
    } catch (error) {}
  };

  const handleBreedClick = (id: string) => {
    closeModal();
    navigate(`/breeds/${id}`);
  };

  if (!data) return null
  return (
    <Card>
      <Item onClick={() => {}} showFav {...data} />
      <CopyButton url={window.location.href} />
      <Container>
        {data.breeds &&
          data.breeds.map((breed) => (
            <div key={breed.id} onClick={() => handleBreedClick(breed.id)} style={{cursor: 'pointer'}}>
              <h1>{breed.name}</h1>
              <h5>{breed.description}</h5>
            </div>
          ))}
      </Container>
    </Card>
  );
};

export default ItemDetails;
