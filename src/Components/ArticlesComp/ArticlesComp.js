// ArticlesComp.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ArticlesComp = ({ articles = [] }) => {
  const [articleQuantities, setArticleQuantities] = useState([]);
  const { id } = useParams();

  // Synchronisez articleQuantities avec les articles props quand ils changent.
  useEffect(() => {
    setArticleQuantities(
      articles.map((article) => ({ ...article, quantity: 0 }))
    );
  }, [id]); // Où 'id' est un identifiant de catégorie ou un autre indicateur de changement

  const handleQuantityChange = (articleId, change) => {
    setArticleQuantities((currentQuantities) =>
      currentQuantities.map((article) =>
        article.id === articleId
          ? { ...article, quantity: Math.max(article.quantity + change, 0) }
          : article
      )
    );
  };

  return (
    <div>
      {articleQuantities.map((article, index) => (
        <div key={index} className="article-card">
          <span className="article-name">{article.name}</span>
          <span className="article-price">{article.price} €</span>
          <div className="quantity-control">
            <button onClick={() => handleQuantityChange(article.id, -1)}>
              -
            </button>
            <span>{article.quantity}</span>
            <button onClick={() => handleQuantityChange(article.id, 1)}>
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticlesComp;
