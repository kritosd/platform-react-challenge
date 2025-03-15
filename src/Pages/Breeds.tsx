import React, { useState, useEffect } from "react";
import { useModal } from "Context/ModalContext";
import { Breed } from "Models/Cat";
import { getBreeds, getCatsByBreed } from "Services/service";
import ListItem from "Components/ListItem";
import { useParams, useNavigate } from "react-router-dom";
import BreedDetails from "Widgets/BreedDetails";
import withFilters, { WithFiltersProps } from "HOC/withFilters";

interface BreedProps extends WithFiltersProps {}

const Breeds = (props: BreedProps) => {
  const [breeds, setBreeds] = useState<Breed[]>([]);

  const { id } = useParams<{ id?: string }>();
  const { openModal } = useModal();
  const navigate = useNavigate();

  useEffect(() => {
    fetchBreeds();
  }, [props.limit, props.page, props.order]);

  useEffect(() => {
    if (id) {
      fetchBreedById(id);
    }
  }, [id]);

  const fetchBreeds = async () => {
    try {
      const data = await getBreeds({
        limit: props.limit,
        page: props.page,
        order: props.order,
      });
      if (data) {
        if (props.page === 0) {
          setBreeds(data);
        } else {
          setBreeds((prevData) => [...prevData, ...data]);
        }
        if (data.length < props.limit) {
          props.setLoadMoreDisabled(true);
        }
      }
    } catch (error) {}
  };

  const fetchBreedById = async (id: string) => {
    try {
      const content = <BreedDetails id={id} />;
      openModal(content);
    } catch (error) {}
  };

  const handleClick = React.useMemo(
    () => (breed: Breed) => {
      navigate(`/breeds/${breed.id}`, { replace: true });
    },
    []
  );

  return breeds.map((breed, index) => (
    <ListItem key={breed.id} onClick={() => handleClick(breed)}>
      {breed.name}
    </ListItem>
  ));
};

export default withFilters(Breeds);
