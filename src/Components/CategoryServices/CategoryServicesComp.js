// Importation des hooks et des composants
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Importation d'une fonction Axios pour les appels API
import AxiosPublic from "../../utils/AxiosPublic.js";
// Importation du fichier CSS pour le style du composant
import "./CategoryServicesComp.css";

const CategoryServicesComp = () => {
  // Déclaration des états avec le hook useState
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    AxiosPublic.get("/category_services")
      .then((response) => {
        console.log("Données reçues:", response.data);
        setCategories(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des catégories:", error);
        setLoading(false);
      });
  }, []);

  const navigateToServiceDetails = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  const getCardClasses = (index) => {
    if (index === 0 || index === 2) {
      return ["card", "card--primary"];
    } else {
      return ["card", "card--secondary", "card--reverse"];
    }
  };

  const toggleServices = (categoryId) => {
    setSelectedCategoryId(
      categoryId === selectedCategoryId ? null : categoryId
    );
  };

  // Rendu du composant
  return (
    <div>
      {loading ? (
        <p>Chargement des catégories...</p>
      ) : (
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
                {selectedCategoryId === category.id && (
                  <section
                    className={`services-section ${
                      selectedCategoryId ? "services-section--expanded" : ""
                    }`}
                  >
                    <div className="container">
                      <div className="cards">
                        {category.services.map((service) => (
                          <div className="card_service" key={service.id}>
                            <div className="card_title_service">
                              <span
                                onClick={() =>
                                  navigateToServiceDetails(service.id)
                                }
                              >
                                {service.name}
                              </span>
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
      )}
    </div>
  );
};

export default CategoryServicesComp;
