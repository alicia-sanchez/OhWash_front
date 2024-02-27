import React, { useState } from "react";

import "./Contact.css";

function FormulaireContact() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez traiter les données du formulaire, comme les envoyer à un serveur
    console.log(formData);
    // Réinitialiser le formulaire, si nécessaire
    setFormData({
      nom: "",
      email: "",
      message: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="formContact">
      <div className="formGroup">
        <label htmlFor="nom">Nom :</label>
        <input
          type="text"
          id="nom"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
        />
      </div>
      <div className="formGroup">
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="formGroup">
        <label htmlFor="message">Message :</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit">Envoyer</button>
    </form>
  );
}

export default FormulaireContact;
