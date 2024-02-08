import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom"; // Importez les composants de React Router

import { MyLayout } from "../Components/MyLayout/MyLayout";
import Home from "../Pages/Home";
import CategoryServices from "../Pages/CategoryServices";
import CategoryArticles from "../Pages/CategoryArticles";

import About from "../Pages/About/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MyLayout>
              <Home />
            </MyLayout>
          }
        />

        <Route
          path="/category-services"
          element={
            <MyLayout>
              <CategoryServices />
            </MyLayout>
          }
        />

        <Route
          path="/api/services/:id"
          element={
            <MyLayout>
              <CategoryArticles />
            </MyLayout>
          }
        />

        <Route
          path="about"
          element={
            <MyLayout>
              <About />
            </MyLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
