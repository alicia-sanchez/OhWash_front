import React, { useState, useEffect } from "react";
import AxiosPublic from "../../utils/AxiosPublic";
import { useParams } from "react-router-dom";

import "./CategoryArticles.css";

function CategoryArticlesComp() {
  const { id } = useParams();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    AxiosPublic.get(`/category_articles`)
      .then((response) => {
        const filteredCategories = response.data.filter((category) =>
          category.services.includes(`/api/services/${id}`)
        );
        setCategories(filteredCategories);
        setLoading(false);

        filteredCategories.forEach((category) => {
          const promises = category.articles.map((articleUri) => {
            const articleDetailsUrl = articleUri.replace("/api/", "/");
            return AxiosPublic.get(articleDetailsUrl)
              .then((response) => ({
                name: response.data.name,
                quantity: 0,
                price: response.data.price,
              }))
              .catch((error) => {
                console.error(
                  "Erreur lors de la récupération des détails de l'article:",
                  error
                );
                return null;
              });
          });

          Promise.all(promises).then((articles) => {
            category.articles = articles.filter((article) => article !== null);
            setCategories([...filteredCategories]);
          });
        });
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des catégories d'articles :",
          error
        );
        setLoading(false);
      });
  }, [id]);

  const handleQuantityChange = (categoryId, articleIndex, change) => {
    const categoryIndex = categories.findIndex(
      (category) => category.id === categoryId
    );
    const updatedCategories = [...categories];
    const article = updatedCategories[categoryIndex].articles[articleIndex];
    article.quantity = Math.max(article.quantity + change, 0);
    setCategories(updatedCategories);
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

  return (
    <div className="fullPageContent">
      <div className="container">
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
                      <div className="quantity-display">{article.quantity}</div>
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
                    {article.name} - Quantité: {article.quantity} - Prix total:{" "}
                    {(article.price * article.quantity).toFixed(2)}€
                  </li>
                ) : null
              )
            )}
          </ul>
          <div className="header_price">
            {calculateOrderTotal().toFixed(2)}€
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryArticlesComp;
