import React, { useMemo } from "react";
import Item from "Widgets/Item";
import { getCat, getCats } from "Services/service";
import { useModal } from "Context/ModalContext";
import { Cat } from "Models/Cat";
import { useNavigate, useParams } from "react-router-dom";
import ItemDetails from "Widgets/ItemDetails";
import withFilters, {WithFiltersProps} from "HOC/withFilters";

interface HomeProps extends WithFiltersProps {}

const Home = (props: HomeProps) => {
  const [data, setData] = React.useState<Cat[]>([]);

  const { id } = useParams<{ id?: string }>();
  const { openModal } = useModal();
  const navigate = useNavigate()

  React.useEffect(() => {
    if (id) {
    fetchDataById(id);
    }
  }, [id]);


  React.useEffect(() => {
    fetchData()
  }, [props.limit, props.page, props.order]);

  const fetchData = async () => {
    try {
      const newCats = await getCats({limit: props.limit, page: props.page, order: props.order});
      if (newCats) {
        if (props.page === 0) {
            setData(newCats);
        } else {
          setData((prevData) => [...prevData, ...newCats]);
        }
        if (newCats.length < props.limit) {
          props.setLoadMoreDisabled(true);
        }
      }
    } catch (error) {}
  };

  const fetchDataById = async (id: string) => {
    try {
        const cat = await getCat(id);
        if (cat) {
          handleOpenModal(cat);
        }
    } catch (error) {}
  };

  const handleOpenModal = (item: Cat) => {
    openModal(<ItemDetails id={item.id} />);
  };


  const handleClick = useMemo(
    () => (item: Cat) => {
      navigate(`/home/${item.id}`, { replace: true })
    },
    []
  );

  if (data.length === 0) return null;
  return (
      data.map((item, index) => (
        <Item key={item.id} {...item} showFav onClick={handleClick} />
      ))
  );
};

export default withFilters(Home);
