import React from "react";
import { useFavorites } from "Context/FavoritesContext";
import Button, { ButtonProps } from "Components/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

interface FavoriteButtonProps extends ButtonProps {
  id: string;
}

const FavoriteButton = (props: FavoriteButtonProps) => {
  const { favorites, dispatch } = useFavorites();
  return (
    <Button
      {...props}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        dispatch({
          type: "toggle-favorite",
          payload: props.id,
        });
      }}
    >
      {favorites.includes(props.id) ? (
        <FavoriteIcon />
      ) : (
        <FavoriteBorderIcon />
      )}
    </Button>
  );
};

export default FavoriteButton;
