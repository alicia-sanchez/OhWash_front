import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom"; // Importez les composants de React Router

import Home from "../Pages/Home";
import CategoryServices from "../Pages/CategoryServices";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            //<MyLayout>
            <Home />
            //</MyLayout>
          }
        />

        <Route
          path="/category-services"
          element={
            //<MyLayout>
            <CategoryServices />
            //</MyLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
