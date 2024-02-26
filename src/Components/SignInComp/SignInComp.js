import React, { useState } from "react";
import AxiosPublic from "../../utils/AxiosPublic";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function SignInComp() {
  const [email, setEmail] = useState("");
  const [vpassword, setPassword] = useState("");

  const navigate = useNavigate();

  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
      return null;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email && vpassword) {
      try {
        const data = { email: email, vpassword: vpassword };
        console.log(data);
        const response = await AxiosPublic.post("/login_check", data, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        localStorage.setItem("token", response.data.token);
        const decodedToken = parseJwt(response.data.token);
        localStorage.setItem("role", decodedToken.role);
        localStorage.setItem("userId", decodedToken.sub); // 'sub' souvent utilisé pour l'ID utilisateur
        navigate("/");
      } catch (error) {
        const errorMessage =
          error.response?.data?.message || "Une erreur est survenue";
        toast(errorMessage, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  };

  return (
    <section className="fullPageContent" id="signup">
      <div className="contact__container column">
        <div className="contact__box">
          <div className="section__title">
            <h2>
              Bonjour ! <br />
              Connectez-vous ici
            </h2>
            <form className="contact__form" onSubmit={handleSubmit}>
              {/* Email */}
              <div className="contact__content">
                <input
                  type="email"
                  name="email"
                  placeholder=" "
                  className="contact__input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="contact__label">Email</label>
              </div>
              {/* Mot de passe */}
              <div className="contact__content">
                <input
                  type="password"
                  name="password"
                  placeholder=" "
                  value={vpassword}
                  className="contact__input"
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
                <label className="contact__label">Mot de passe</label>
              </div>
              {/* Bouton de soumission */}
              <button type="submit" className="button button--flex">
                Se connecter
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}

export default SignInComp;
