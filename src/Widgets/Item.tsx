import React, { memo } from "react";
import Card from "Components/Card";
import FavoriteButton from "Components/FavoriteButton";
import Image from "Components/Image";
import { Cat } from "Models/Cat";

const style = {
  position: "absolute" as const,
  bottom: 0,
  borderRadius: "50%",
  background: "#00000050",
  width: "50px",
  minWidth: "50px",
  height: "50px",
  margin: "5px",
};

interface ItemProps extends Cat {
  onClick: (props: ItemProps) => any;
  showFav?: boolean;
}

const Item = memo((props: ItemProps) => {
    const { showFav, ...restProps } = props;
  return (
    <Card
      {...restProps}
      onClick={() => props.onClick(props)}
      sx={{ position: "relative" }}
    >
      <Image url={props.url} />
      {showFav ? <FavoriteButton id={props.id} style={style} /> : null}
    </Card>
  );
});

export default Item;
