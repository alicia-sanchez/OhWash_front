import React, { useState, useEffect } from "react";
import AxiosPublic from "../../utils/AxiosPublic";
import { useParams } from "react-router-dom";

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
                return articleName;
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
          Promise.all(promises).then((articleNames) => {
            category.articleNames = articleNames.filter(
              (name) => name !== null
            );
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

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      {loading ? (
        <p>Chargement...</p>
      ) : (
        categories.map((category) => (
          <div key={category.id} onClick={() => handleCategoryClick(category)}>
            <h2>{category.name}</h2>
            <ul>
              {category.articleNames &&
                category.articleNames.map((articleName, index) => (
                  <li key={index}>{articleName}</li>
                ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}

export default CategoryArticlesComp;
