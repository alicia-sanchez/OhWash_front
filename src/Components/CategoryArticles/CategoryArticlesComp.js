import React, { useState, useEffect } from "react";
import AxiosPublic from "../../utils/AxiosPublic";
import { useParams } from "react-router-dom";

function CategoryArticlesComp() {
  const { id } = useParams();
  const [categoryNames, setCategoryNames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AxiosPublic.get(`/services/${id}`)
      .then((response) => {
        const categoryArticleURIs = response.data.category_article;
        console.log("URIs:", categoryArticleURIs);
  
        return Promise.all(categoryArticleURIs.map(uri => {
          console.log("Fetching:", uri);
          const adjustedUri = uri.substring(4);
          console.log("Uri:", adjustedUri);
          return AxiosPublic.get(adjustedUri)
            .then(res => {
              console.log("Response for", uri, ":", res);
              return res;
            })
            .catch(error => {
              console.error("Error fetching", uri, ":", error);
              return {}; // Retourne un objet vide en cas d'erreur
            });
        }));
      })
      .then(responses => {
        const names = responses.map(res => res.data ? res.data.name : "Unknown");
        console.log("Names:", names);
        setCategoryNames(names);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching category article URIs:", error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      <h1>Category Articles for Service ID: {id}</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {categoryNames.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CategoryArticlesComp;

