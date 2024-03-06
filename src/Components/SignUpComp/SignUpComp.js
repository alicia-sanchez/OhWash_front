import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import AxiosPublic from "../../utils/AxiosPublic";
import SignIn from "../../Pages/SignIn";
import "react-toastify/dist/ReactToastify.css";
import "./SignUp.css";

function SignUpComp() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    gender: "",
    city: "",
    zipCode: 0,
    country: "",
    adress: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let finalValue = value;
    if (name === "zipCode") {
      finalValue = value ? parseInt(value, 10) : 0; // Convertit en nombre si `zipCode`, sinon garde la valeur telle quelle
    }
    setUserData({ ...userData, [name]: finalValue });
  };

  const validateForm = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // Ajoutez ou modifiez les validations selon les champs requis
    // Exemple de validation pour firstname, lastname et email
    if (!values.firstname) {
      errors.firstname = "Le prénom est requis";
    }
    if (!values.lastname) {
      errors.lastname = "Le nom est requis";
    }
    if (!values.email) {
      errors.email = "L'email est requis";
    } else if (!regex.test(values.email)) {
      errors.email = "Le format de l'email n'est pas valide";
    }
    // Continuez avec d'autres validations selon votre besoin
    return errors;
  };

  const handleSubmit = (e) => {
    console.log("handleSubmit called");
    e.preventDefault();
    const errors = validateForm(userData);
    setFormErrors(errors);
    setIsSubmit(true);

    if (Object.keys(errors).length === 0 && isSubmit) {
      AxiosPublic.post(
        "/users",
        {
          ...userData,
          plainPassword: userData.password, // Assurez-vous que c'est le champ attendu par votre backend
          zipCode: parseInt(userData.zipCode, 10),
        },

        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          console.log("mdp" + userData.password);
          console.log("Réponse succès:", res);
          toast.success("Inscription réussie!");
          navigate("/signin");
        })
        .catch((error) => {
          console.log("Erreur lors de l'inscription:", error);
          let errorMessage =
            error.response?.data?.detail || error.message || "Erreur inconnue";
          toast.error(
            "Une erreur s'est produite lors de l'inscription: " + errorMessage
          );
        });
    }
  };

  return (
    <section className="fullPageContent" id="signup">
      <div className="contact__container column">
        <div className="contact__box">
          <div className="section__title">
            <h2>
              Bienvenue !<br />
              Inscrivez-vous ici
            </h2>
            <form onSubmit={handleSubmit} className="contact__form">
              {/* Nom */}
              <div className="contact__content">
                <input
                  type="text"
                  name="lastname"
                  placeholder=" "
                  value={userData.lastname}
                  onChange={handleChange}
                  className="contact__input"
                />
                <label className="contact__label">Nom</label>
              </div>

              {/* Prénom */}
              <div className="contact__content">
                <input
                  type="text"
                  name="firstname"
                  placeholder=" "
                  value={userData.firstname}
                  onChange={handleChange}
                  className="contact__input"
                />
                <label className="contact__label">Prénom</label>
              </div>

              {/* Email */}
              <div className="contact__content">
                <input
                  type="email"
                  name="email"
                  placeholder=" "
                  value={userData.email}
                  onChange={handleChange}
                  className="contact__input"
                />
                <label className="contact__label">Email</label>
              </div>

              {/* Mot de passe */}
              <div className="contact__content">
                <input
                  type="password"
                  name="password"
                  placeholder=" "
                  value={userData.password}
                  onChange={handleChange}
                  class="contact__input"
                  autocomplete="current-password"
                />

                <label className="contact__label">Mot de passe</label>
              </div>

              {/* Genre */}
              <div className="contact__content">
                <select
                  name="gender"
                  value={userData.gender}
                  onChange={handleChange}
                  className="contact__input"
                >
                  <option value="">Sélectionnez le genre</option>
                  <option value="male">Homme</option>
                  <option value="female">Femme</option>
                  <option value="other">Autre</option>
                </select>
                <label className="contact__label">Genre</label>
              </div>

              {/* Ville */}
              <div className="contact__content">
                <input
                  type="text"
                  name="city"
                  placeholder=" "
                  value={userData.city}
                  onChange={handleChange}
                  className="contact__input"
                />
                <label className="contact__label">Ville</label>
              </div>

              {/* Code Postal */}
              <div className="contact__content">
                <input
                  type="number"
                  name="zipCode"
                  placeholder=" "
                  value={userData.zipCode}
                  onChange={handleChange}
                  className="contact__input"
                />
                <label className="contact__label">Code Postal</label>
              </div>

              {/* Pays */}
              <div className="contact__content">
                <input
                  type="text"
                  name="country"
                  placeholder=" "
                  value={userData.country}
                  onChange={handleChange}
                  className="contact__input"
                />
                <label className="contact__label">Pays</label>
              </div>

              {/* Adresse */}
              <div className="contact__content">
                <input
                  type="text"
                  name="adress"
                  placeholder=" "
                  value={userData.adress}
                  onChange={handleChange}
                  className="contact__input"
                />
                <label className="contact__label">Adresse</label>
              </div>

              {/* Bouton de soumission */}
              <button className="button button--flex">
                S'inscrire
                <i className="ri-arrow-right-up-line button__icon"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUpComp;
