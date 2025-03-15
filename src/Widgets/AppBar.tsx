import * as React from "react";
import Header from "Components/Header";
import ListItem from "Components/ListItem";
import { useNavigate } from "react-router-dom";

const AppBar = () => {
  const navigate = useNavigate();
  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 2,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      <ListItem key={"home"} onClick={() => navigate("/home")}>
        Home
      </ListItem>
      <ListItem key={"breeds"} onClick={() => navigate("/breeds")}>
        Breeds
      </ListItem>
      <ListItem
        key={"favorites"}
        onClick={() => navigate("/favorites")}
        selected={true}
      >
        Favorites
      </ListItem>
    </Header>
  );
};
export default AppBar;
