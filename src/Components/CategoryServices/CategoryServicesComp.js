import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AxiosPublic from "../../utils/AxiosPublic.js";
import "./CategoryServicesComp.css";

const CategoryServicesComp = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedCategory, setExpandedCategory] = useState(null);

  useEffect(() => {
    AxiosPublic.get("/category_services")
      .then((response) => {
        setCategories(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des catégories :", error);
        setLoading(false);
      });
  }, []);

  const getCardClasses = (index) => {
    if (index === 0 || index === 2) {
      return ["card", "card--primary"];
    } else {
      return ["card", "card--secondary", "card--reverse"];
    }
  };

  const toggleServices = (categoryId) => {
    setExpandedCategory(categoryId === expandedCategory ? null : categoryId);
  };

  return (
    <ul className="grid">
      {categories.map((category, index) => (
        <li key={category.id} className={getCardClasses(index).join(" ")}>
          <div className="card__top">
            <span
              className="card__tag"
              onClick={() => toggleServices(category.id)}
            >
              Voir les services
            </span>
          </div>
          <div className="card__bottom">
            <h2 className="card__title">{category.name}</h2>
            <p className="card__text">{category.description}</p>
            {expandedCategory === category.id && (
              <section
                className={`services-section ${
                  expandedCategory ? "services-section--expanded" : ""
                }`}
              >
                <div className="container">
                  <div className="cards">
                    {category.services.map((service) => (
                      <div className="card_service" key={service.id}>
                        <div className="card_service">
                          <div className="card_title_service">
                            <Link to={`/api/services/${service.id}`}>
                              {service.name}
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CategoryServicesComp;
