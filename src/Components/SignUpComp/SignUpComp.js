import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import AxiosPublic from "../../utils/AxiosPublic";

import "./SignUp.css"; // Assurez-vous que le chemin est correct

function SignUpComp() {
  const [userData, setUserData] = useState({
    lastname: "",
    firstname: "",
    email: "",
    adress: "",
    password: "",
    phone: "",
  });

  // Gestion des changements de chaque champ du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value, // Utilisez la clé dynamique pour la mise à jour
    }));
  };

  // Soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token'); // Récupérer le token du stockage local
  
    if (!token) {
      toast.error("Vous n'êtes pas autorisé à effectuer cette action.");
      return;
    }

    // Utilisez userData au lieu de formData
   axios.post('http://127.0.0.1:8000/api/login_check', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then((response) => {
        // Gestion de la réponse réussie
        toast.success("Inscription réussie!");
        // Redirection ou mise à jour de l'état ici
      })
      .catch((error) => {
        // Gestion des erreurs
        toast.error("Erreur lors de l'inscription");
        console.error("Erreur d'inscription:", error.response);
      });
  };

  useEffect(() => {
    axios.get("/login_check")
      .then((response) => {
        setSignUp(response.data.data);
        console.log(response);
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
  }, []);

  return (
    <section className="fullPageContent" id="signup">
      <div class="background_signin">
        <svg
          class="svg-top-left"
          xmlns="http://www.w3.org/2000/svg"
          width="177"
          height="189"
          z-index="0"
          viewBox="0 0 177 189"
          fill="none"
        >
          <path
            d="M86.0863 132.364C72.253 180.495 49.1014 190.111 39.2548 188.903C3.51881 188.903 -1.57261 136.23 0.348676 109.893C2.02981 86.2142 14.9025 33.7823 52.944 13.4862C100.496 -11.8841 158.135 3.33806 168.942 20.0099C179.749 36.6818 184.793 65.6764 150.209 72.2001C115.626 78.7239 103.378 72.2001 86.0863 132.364Z"
            fill="#A6DDF4"
          />
        </svg>
        <svg
          class="svg-top-right"
          xmlns="http://www.w3.org/2000/svg"
          width="119"
          height="194"
          viewBox="0 0 119 194"
          fill="none"
        >
          <path
            d="M13.719 98.6799C37.6555 121.78 40.8034 154.852 39.3853 168.501C42.7787 200.11 70.0931 200.725 90.4886 179.239C110.884 157.753 125.062 86.855 114.513 35.4205C103.964 -16.014 72.6238 1.55483 40.496 15.7747C8.36832 29.9946 -16.2015 69.8052 13.719 98.6799Z"
            fill="#A6C48A"
          />
        </svg>
        <svg
          class="svg-middle"
          xmlns="http://www.w3.org/2000/svg"
          width="500"
          height="410"
          viewBox="0 0 110 110"
          fill="none"
        >
          <circle
            cx="54.9431"
            cy="55.0828"
            r="46.6919"
            stroke="#A6C48A"
            stroke-width="15"
          />
        </svg>
        <svg
          class="svg-bottom-left"
          xmlns="http://www.w3.org/2000/svg"
          width="228"
          height="153"
          viewBox="0 0 228 153"
          fill="none"
        >
          <path
            d="M108.843 49.4388C92.9295 44.8761 69.375 20.2881 59.5869 8.56439C43.484 -8.72046 -21.8748 -2.84242 7.4893 54.1916C36.8534 111.226 175.149 197.727 214.933 173.963C246.76 154.952 213.038 128.653 192.199 117.88C180.832 128.336 165.298 142.594 194.094 115.979C230.088 82.7087 128.735 55.1422 108.843 49.4388Z"
            fill="#FA8963"
          />
        </svg>
        <svg
          class="svg-bottom-right"
          xmlns="http://www.w3.org/2000/svg"
          width="177"
          height="141"
          viewBox="0 0 177 141"
          fill="none"
        >
          <path
            d="M108.412 109.964C120.774 77.5585 148.2 59.5886 160.367 54.6543C186.459 37.1282 178.45 11.8999 153.62 3.07786C128.79 -5.74413 63.4568 13.6658 22.5713 46.776C-18.3143 79.8861 6.57203 100.492 28.8277 123.346C51.0834 146.2 92.9595 150.471 108.412 109.964Z"
            fill="#FFDB62"
          />
        </svg>
      </div>
      <div className="contact__container column">
        <div className="contact__box">
          <div className="section__title">
            <h2>
              Bienvenue !<br /> Inscrivez-vous ici
            </h2>
            <form onSubmit={handleSubmit} className="contact__form">
              {/* Exemple pour le champ email, répétez pour les autres */}
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
              <div className="contact__content">
                <input
                  type="number"
                  name="phone"
                  placeholder=" "
                  value={userData.phone}
                  onChange={handleChange}
                  className="contact__input"
                />
                <label className="contact__label">Téléphone</label>
              </div>
              <div className="contact__content">
                <input
                  type="text"
                  name="city"
                  placeholder=" "
                  value={userData.adress}
                  onChange={handleChange}
                  className="contact__input"
                />
                <label className="contact__label">Adresse</label>
              </div>
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
              <div className="contact__content">
                <input
                  type="password"
                  name="password"
                  placeholder=" "
                  value={userData.password}
                  onChange={handleChange}
                  className="contact__input"
                />
                <label className="contact__label">Mot de passe</label>
              </div>

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
