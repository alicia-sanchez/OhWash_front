import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MyLayout } from "../Components/MyLayout/MyLayout";
import Home from "../Pages/Home";
import CategoryServices from "../Pages/CategoryServices";
import CategoryArticles from "../Pages/CategoryArticles/CategoryArticles";
import About from "../Pages/About/About";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";
import ArticlesComp from "../Components/ArticlesComp/ArticlesComp";
import CategoryArticlesComp from "../Components/CategoryArticlesComp/CategoryArticlesComp";

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
          path="/services/:id"
          element={
            <MyLayout>
              <CategoryArticlesComp />
              <ArticlesComp />
            </MyLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MyLayout>
              <About />
            </MyLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <MyLayout>
              <SignUp />
            </MyLayout>
          }
        />
        <Route
          path="/signin"
          element={
            <MyLayout>
              <SignIn />
            </MyLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
