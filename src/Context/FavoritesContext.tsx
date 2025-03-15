import React, { createContext, useReducer, useContext, useEffect } from "react";

type ContextState = string[];

enum ACTION {
  TOGGLE_FAVORITE = "toggle-favorite",
}

interface IAction {
  type: string;
  payload: string;
}

const reducer = (state: ContextState, action: IAction) => {
  switch (action.type) {
    case ACTION.TOGGLE_FAVORITE:
      return state.includes(action.payload)
        ? state.filter((fav) => fav !== action.payload)
        : [...state, action.payload];
    default:
      return state;
  }
};

interface FavoritesContextInterface {
  favorites: ContextState;
  dispatch: React.Dispatch<IAction>;
}

const FavoritesContext = createContext<FavoritesContextInterface | undefined>(undefined);

interface FavoritesProviderInterface {
  children: React.ReactNode;
}

export const FavoritesProvider = ({ children }: FavoritesProviderInterface) => {
  const [favorites, dispatch] = useReducer(reducer, [], () => {
    return JSON.parse(localStorage.getItem("favorites") || "[]");
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoritesContext.Provider value={{ favorites, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error("useFavorites must be used within a FavoritesProvider");
  return context;
};