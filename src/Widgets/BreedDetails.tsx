import React, { useEffect, useState } from "react";
import Item from "Widgets/Item";
import { Cat } from "Models/Cat";
import { useNavigate } from "react-router-dom";
import { useModal } from "Context/ModalContext";
import { getCatsByBreed } from "Services/service";
import withFilters, { WithFiltersProps } from "HOC/withFilters";

interface BreedDetailsProps extends WithFiltersProps {
  onClick?: () => any;
  id: string;
}

const BreedDetails = (props: BreedDetailsProps) => {
  const navigate = useNavigate();
  const { closeModal } = useModal();

  const [cats, setCats] = useState<Cat[]>([]);
  const [moreButtonEnabled, setMoreButtonEnabled] = useState<boolean>(true);

  useEffect(() => {
    fetchBreedCats();
  }, [props.limit, props.page, props.order]);

  const fetchBreedCats = async () => {
    const newCats = await getCatsByBreed(props.id, {
      page: props.page,
      limit: props.limit,
      order: props.order,
    });
    if (newCats) {
      if (props.page === 0) {
        setCats(newCats);
      } else {
        setCats((prevData) => [...prevData, ...newCats]);
      }
      if (newCats.length < props.limit) {
        props.setLoadMoreDisabled(true);
      }
    }
  };

  const handelClick = React.useMemo(
    () => (item: Cat) => {
      closeModal();
      navigate(`/home/${item.id}`);
    },
    []
  );

  return cats.map((item) => (
    <Item key={item.id} {...item} showFav onClick={handelClick} />
  ));
};

export default withFilters(BreedDetails);
