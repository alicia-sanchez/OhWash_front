import React, { useState, useEffect } from "react";

import AxiosPublic from "../../utils/AxiosPublic";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import Checkout from "../../Pages/Checkout";
import { GoArrowLeft } from "react-icons/go";

import "./CategoryArticles.css";

function CategoryArticlesComp() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showPlanOrderButton, setShowPlanOrderButton] = useState(false);

  useEffect(() => {
    setLoading(true);
    localStorage.setItem("userId", id);

    AxiosPublic.get(`/category_articles?serviceId=${id}`)
      .then((response) => {
        const filteredCategories = response.data.filter((category) =>
          category.services.includes(`/api/services/${id}`)
        );

        const categoryPromises = filteredCategories.map((category) => {
          const articlePromises = category.articles.map((articleUri) => {
            const articleId = articleUri.split("/").pop();
            return AxiosPublic.get(`/articles/${articleId}`)
              .then((response) => ({ ...response.data, quantity: 0 }))
              .catch((error) =>
                console.error(
                  "Erreur lors de la récupération des détails de l'article:",
                  error
                )
              );
          });

          return Promise.all(articlePromises).then((articles) => ({
            ...category,
            articles: articles.filter((article) => article !== null),
          }));
        });

        Promise.all(categoryPromises).then((categoriesWithDetails) => {
          setCategories(mergeDataWithLocalStorage(categoriesWithDetails));
          setLoading(false);
        });
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des catégories d'articles:",
          error
        );
        setLoading(false);
      });
  }, [id]);

  const mergeDataWithLocalStorage = (categoriesFromApi) => {
    const savedOrderSummary = JSON.parse(
      localStorage.getItem("orderSummary") || "[]"
    );
    if (savedOrderSummary.length === 0) return categoriesFromApi;

    return categoriesFromApi.map((category) => {
      const updatedArticles = category.articles.map((article) => {
        const savedArticle = savedOrderSummary.find(
          (sa) => sa.articleId === article.id
        );
        if (savedArticle) {
          return { ...article, quantity: savedArticle.quantity };
        }
        return article;
      });

      return { ...category, articles: updatedArticles };
    });
  };

  const handleQuantityChange = (categoryId, articleIndex, change) => {
    const updatedCategories = categories.map((category) => {
      if (category.id === categoryId) {
        const updatedArticles = category.articles.map((article, index) => {
          if (index === articleIndex) {
            return {
              ...article,
              quantity: Math.max(article.quantity + change, 0),
            };
          }
          return article;
        });
        return { ...category, articles: updatedArticles };
      }
      return category;
    });

    setCategories(updatedCategories);
    saveOrderToLocalStorage(updatedCategories);
  };

  const calculateOrderTotal = () => {
    return categories.reduce(
      (total, category) =>
        total +
        category.articles.reduce(
          (subTotal, article) => subTotal + article.price * article.quantity,
          0
        ),
      0
    );
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const saveOrderToLocalStorage = (updatedCategories) => {
    const currentOrderSummary = JSON.parse(
      localStorage.getItem("orderSummary") || "[]"
    );
    const newOrderSummary = updatedCategories.flatMap((category) =>
      category.articles
        .filter((article) => article.quantity > 0)
        .map((article) => ({
          categoryId: category.id,
          articleId: article.id,
          quantity: article.quantity,
        }))
    );

    // Fusionner avec l'ordre résumé existant pour ne pas écraser les sélections précédentes
    const mergedOrderSummary = [
      ...currentOrderSummary,
      ...newOrderSummary,
    ].reduce((acc, curr) => {
      const existingArticleIndex = acc.findIndex(
        (item) => item.articleId === curr.articleId
      );
      if (existingArticleIndex !== -1) {
        acc[existingArticleIndex].quantity = curr.quantity; // Mise à jour de la quantité
      } else {
        acc.push(curr);
      }
      return acc;
    }, []);

    localStorage.setItem("orderSummary", JSON.stringify(mergedOrderSummary));
  };

  return (
    <div className="fullPageContentCategory">
      <div className="header_page">
        <div className="nav_back">
          <GoArrowLeft
            style={{
              backgroundColor: "#a6c48a",
              padding: ".7rem",
              borderRadius: "50%",
              fontSize: "2.6rem",
            }}
          />
          <svg
            className="svg-cta"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 37.98 15.19"
            style={{ enableBackground: "new 0 0 37.98 15.19" }}
            xmlSpace="preserve"
          >
            <g>
              <path
                className="st0"
                d="M0.66,14.37h0.91C6.22,11.55,12.32,9.83,19,9.83s12.77,1.72,17.43,4.54h0.76V0.66h-0.91C31.62,3.48,25.52,5.2,18.84,5.2S6.07,3.48,1.42,0.66H0.66V14.37z"
              />
            </g>
          </svg>
          <NavLink className="nav_link_back" to="/category-services">
            Retour
          </NavLink>
        </div>
        <div className="container_category">
          <div className="category-list">
            {loading ? (
              <p>Chargement...</p>
            ) : (
              <>
                <div className="header_box">
                  <h4>Choisissez vos catégories d'articles</h4>
                  <h3>CATÉGORIES</h3>
                </div>
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className={`category ${
                      selectedCategory && selectedCategory.id === category.id
                        ? "category-selected"
                        : ""
                    }`}
                    onClick={() => handleCategoryClick(category)}
                  >
                    <h2 className="category-title">
                      <span>{category.name}</span>
                      <span className="nb_article">
                        {category.articles.length} articles
                      </span>
                    </h2>
                  </div>
                ))}
              </>
            )}
          </div>
          {selectedCategory && (
            <div className="article-container">
              {/* Assurez-vous que cette div a un display flex ou block selon vos besoins */}
              <div className="articles-grid">
                <div className="header_box">
                  <h4>{selectedCategory.name}</h4>
                  <h3>ARTICLES</h3>
                </div>
                <div className="articles-wrapper">
                  {selectedCategory.articles.map((article, articleIndex) => (
                    <div key={articleIndex} className="article-card">
                      <span className="article-name">{article.name}</span>
                      <span className="article-price">{article.price} €</span>
                      <div className="quantity-control">
                        <button
                          className="quantity-button"
                          onClick={() =>
                            handleQuantityChange(
                              selectedCategory.id,
                              articleIndex,
                              -1
                            )
                          }
                        >
                          -
                        </button>
                        <div className="quantity-display">
                          {article.quantity}
                        </div>
                        <button
                          className="quantity-button"
                          onClick={() =>
                            handleQuantityChange(
                              selectedCategory.id,
                              articleIndex,
                              1
                            )
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          <div className="order-summary">
            <h3>DÉTAILS</h3>
            <ul>
              {categories.flatMap((category) =>
                category.articles.map((article, index) =>
                  article.quantity > 0 ? (
                    <li key={index}>
                      {article.name} - Quantité: {article.quantity} - Prix
                      total: {(article.price * article.quantity).toFixed(2)}€
                    </li>
                  ) : null
                )
              )}
            </ul>
            <div className="header_price">
              {calculateOrderTotal().toFixed(2)}€
            </div>
            {showPlanOrderButton && (
              <div className="order-plan-button-container">
                <button
                  className="plan-order-button"
                  onClick={() => navigate("/checkout")}
                >
                  Planifier votre commande
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryArticlesComp;
