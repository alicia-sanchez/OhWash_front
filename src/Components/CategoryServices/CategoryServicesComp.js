import React, { useState, useEffect } from "react";
import AxiosPublic from "../../utils/AxiosPublic.js";
import "./CategoryServicesComp.css";

const HomeComp = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AxiosPublic.get("/category_services")
      .then((response) => {
        setCategories(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="category-list">
          {categories.map((category) => (
            <li key={category.id}>
              <div className="category-card">
                <h3 className="category-title">{category.name}</h3>
                <ul className="service-list">
                  {category.services.map((service) => (
                    <li key={service.id}>
                      {/* Lien vers l'URL spécifique du service */}
                      <a href={`api/services/${service.id}`}>{service.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HomeComp;
