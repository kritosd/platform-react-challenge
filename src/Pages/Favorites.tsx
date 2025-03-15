import React, { useContext, useEffect, useState } from "react";
import { useFavorites } from "Context/FavoritesContext";
import Item from "Widgets/Item";
import { getCat, getCatsByBreed } from "Services/service";
import { Cat } from "Models/Cat";
import { useModal } from "Context/ModalContext";
import ItemDetails from "Widgets/ItemDetails";
import { useNavigate, useParams } from "react-router-dom";
import withFilters, {WithFiltersProps, ORDER} from "HOC/withFilters";

interface Favorites extends WithFiltersProps {}

const Favorites = (props: Favorites) => {
  const { favorites } = useFavorites();
  const [favoriteCats, setFavoriteCats] = useState<Cat[]>([]);
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();

  const { openModal } = useModal();

  React.useEffect(() => {
    const newFavs = favoriteCats.filter((fav) => favorites.includes(fav.id))
    setFavoriteCats(newFavs)
  }, [favorites]);

  React.useEffect(() => {
    if (id) {
      fetchDataById(id);
    }
  }, [id]);

  useEffect(() => {
    fetchFavorites();
  }, [props.limit, props.page, props.order]);

  const fetchFavorites = async () => {
    const sortedFavs = props.order === ORDER.ASC ? favorites : favorites.reverse()
    const cats: Cat[] = (await Promise.all(
      sortedFavs
        .slice(favoriteCats.length, favoriteCats.length + props.limit)
        .map(async (favorite) => await getCat(favorite))
    )).filter((cat) => cat !== undefined);

      if (cats) {
        if (props.page === 0) {
          setFavoriteCats(cats);
        } else {
          setFavoriteCats((prevData) => [...prevData, ...cats]);
        }
        if (cats.length < props.limit) {
          props.setLoadMoreDisabled(true);
        }
      }
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

  const handleClick = React.useMemo(
    () => (item: Cat) => {
      navigate(`/favorites/${item.id}`, { replace: true });
    },
    []
  );
  return (favoriteCats.map((favorite) => (
        <Item key={favorite.id} {...favorite} showFav onClick={handleClick} />
      ))
  );
};

export default withFilters(Favorites);
