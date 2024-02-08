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
        const filteredCategories = response.data.filter((category) => {
          return category.services.includes(`/api/services/${id}`);
        });
        setCategories(filteredCategories);
        setLoading(false);

        // Récupération des noms des articles pour chaque catégorie
        filteredCategories.forEach((category) => {
          const promises = category.articles.map((articleUri) => {
            const articleDetailsUrl = articleUri.replace("/api/", "/");
            return AxiosPublic.get(articleDetailsUrl)
              .then((response) => {
                const articleName = response.data.name;
                const articlePrice = response.data.price;
                return { name: articleName, quantity: 0, price: articlePrice }; // Ajout de la quantité
              })
              .catch((error) => {
                console.error(
                  "Erreur lors de la récupération des détails de l'article:",
                  error
                );
                return null;
              });
          });

          // Attendre que toutes les requêtes soient terminées
          Promise.all(promises).then((articles) => {
            category.articles = articles.filter((article) => article !== null); // Mise à jour de la liste d'articles
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

  const handleQuantityChange = (catIndex, articleIndex, change) => {
    const updatedCategories = [...categories];
    const article = updatedCategories[catIndex].articles[articleIndex];
    article.quantity = Math.max(article.quantity + change, 0); // Empêcher les quantités négatives
    setCategories(updatedCategories);
  };

  const calculateOrderTotal = () => {
    return categories.reduce((total, category) => {
      return (
        total +
        category.articles.reduce((subTotal, article) => {
          return subTotal + article.price * article.quantity;
        }, 0)
      );
    }, 0);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container">
      <div className="category-list">
        {loading ? (
          <p>Chargement...</p>
        ) : (
          categories.map((category, catIndex) => (
            <div key={category.id} className="category">
              <h2 className="category-title">{category.name}</h2>
              <ul className="article-list">
                {category.articles.map((article, articleIndex) => {
                  const totalPrice = article.price * article.quantity;
                  return (
                    <li key={articleIndex} className="article">
                      <div className="article-details">
                        <span className="article-name">{article.name}</span>
                        <div className="article-info">
                          <div>Quantité: {article.quantity}</div>
                          <div>Prix unitaire: {article.price}€</div>
                          <div>Prix total: {totalPrice.toFixed(2)}€</div>
                        </div>
                        <div className="article-actions">
                          <button
                            className="quantity-button"
                            onClick={() =>
                              handleQuantityChange(catIndex, articleIndex, 1)
                            }
                          >
                            +
                          </button>
                          <button
                            className="quantity-button"
                            onClick={() =>
                              handleQuantityChange(catIndex, articleIndex, -1)
                            }
                          >
                            -
                          </button>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))
        )}
      </div>
      <div className="order-summary">
        <h2>Récapitulatif de la commande</h2>
        <ul>
          {categories.map((category) =>
            category.articles.map(
              (article, index) =>
                article.quantity > 0 && (
                  <li key={index}>
                    {article.name} - Quantité: {article.quantity} - Prix total:{" "}
                    {(article.price * article.quantity).toFixed(2)}€
                  </li>
                )
            )
          )}
        </ul>
        <div>Total de la commande: {calculateOrderTotal().toFixed(2)}€</div>
      </div>
    </div>
  );
}

export default CategoryArticlesComp;
