import React from "react";
import "./about.css";
import { IoMdCheckbox } from "react-icons/io";

function About() {
  return (
    <div className="how-it-works-page">
      <h1></h1>
      <h2>Rapide. Propre. Écologique.</h2>
      <p>Votre linge livré en 48 heures.</p>

      <div className="step">
        <h3>Planifiez votre collecte</h3>
        <p>
          Planifiez votre journée en toute simplicité. Choisissez un délai de
          collecte et de livraison qui vous convient.
        </p>
        <ul>
          <li>Réservez en ligne ou avec notre application mobile</li>
          <li>
            Créneaux disponibles le week-end et le soir pour une flexibilité
            maximale
          </li>
        </ul>
      </div>

      <div className="step">
        <h3>Emballez votre linge</h3>
        <p>
          Emballez vos articles dans un sac jetable. Utilisez un sac par
          service. Notre chauffeur les transférera dans des sacs réutilisables
          que vous pourrez conserver pour votre prochaine commande.
        </p>
        <ul>
          <li>Emballez un sac par service</li>
          <li>Pas besoin de compter ou de peser vos articles</li>
        </ul>
      </div>

      <div className="step">
        <h3>Attendez notre livreur</h3>
        <p>
          Vous recevrez une notification lorsque notre chauffeur sera à
          proximité. Ils récupéreront vos sacs et les apporteront à votre centre
          de nettoyage local.
        </p>
        <ul>
          <li>Mises à jour régulières des commandes</li>
          <li>
            Suivi des conducteurs en temps réel pour une transparence totale
          </li>
        </ul>
      </div>

      <div className="step">
        <h3>Détendez-vous pendant que nous nous occupons de votre linge</h3>
        <p>
          Votre établissement partenaire local nettoiera vos articles avec le
          plus grand soin. Notre chauffeur vous les ramènera ensuite quand vous
          le souhaitez. Vous avez le contrôle total de votre livraison et pouvez
          toujours la reprogrammer si vous n'êtes pas chez vous.
        </p>
        <ul>
          <li>Délai d'exécution de 48 heures</li>
          <li>Suivi des commandes en temps réel pour une commodité maximale</li>
        </ul>
      </div>

      <p>
        Une solution de pressing pratique qui contribue à la protection de
        l'environnement.
      </p>
      <ul>
        <li>Véhicules de livraison à zéro émission</li>
        <li>
          Utilisation économique et écologique de l'eau pour minimiser notre
          impact environnemental
        </li>
      </ul>
    </div>
  );
}

export default About;
