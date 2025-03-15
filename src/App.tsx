import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { FavoritesProvider } from "Context/FavoritesContext";
import { ModalProvider } from "Context/ModalContext";
import Home from "Pages/Home";
import Breeds from "Pages/Breeds";
import Favorites from "Pages/Favorites";
import Layout from "Widgets/Layout";

const App: React.FC = () => {
  return (
    <FavoritesProvider>
      <Router>
        <ModalProvider>
          <Routes>

  <Route path="*" element={<Layout><Home /></Layout>} />
          {/* <Route path=":id?" element={<Layout><Home /></Layout>} /> */}
            <Route path="home/:id?" element={<Layout><Home /></Layout>} />
            <Route path="breeds/:id?" element={<Layout><Breeds /></Layout>} />
            <Route path="favorites/:id?" element={<Layout><Favorites /></Layout>} />
          </Routes>
        </ModalProvider>
      </Router>
    </FavoritesProvider>
  );
};

export default App;
