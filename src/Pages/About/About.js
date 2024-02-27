import React from "react";
import "./about.css";
import { IoMdCheckbox } from "react-icons/io";

import "./about.css";

function About() {
  return (
    /*<div className="how-it-works-page">
      <h1></h1>
      <h2>Rapide. Propre. Écologique.</h2>
      <p>Votre linge livré en 48 heures.</p>
    */
    <section class="steps section">
      <div class="steps__bg">
        <h2 class="section__title-center steps__title">Rapide. Propre. Écologique.</h2>

        <div class="steps__container grid">
          <div class="steps__card green">
            <div class="steps__card-number"></div>
            <h3 class="steps__card-title">Planifiez votre collecte</h3>
            <p class="steps__card-description">
              Planifiez votre journée en toute simplicité. Choisissez un délai
              de collecte et de livraison qui vous convient.
              <ul>
                <li>Réservez en ligne ou avec notre application mobile</li>
                <li>
                  Créneaux disponibles le week-end et le soir pour une
                  flexibilité maximale
                </li>
              </ul>
            </p>
          </div>

          <div class="steps__card blue">
            <div class="steps__card-number"></div>
            <h3 class="steps__card-title">Emballez votre linge</h3>
            <p class="steps__card-description">
              Emballez vos articles dans un sac jetable. Utilisez un sac par
              service. Notre chauffeur les transférera dans des sacs
              réutilisables que vous pourrez conserver pour votre prochaine
              commande.
              <ul>
                <li>Emballez un sac par service</li>
                <li>Pas besoin de compter ou de peser vos articles</li>
              </ul>
            </p>
          </div>

          <div class="steps__card yellow">
            <div class="steps__card-number"></div>
            <h3 class="steps__card-title">Dirigez vous vers OhWash</h3>
            <p class="steps__card-description">
              Vous recevrez une notification lorsque notre chauffeur sera à
              proximité. Ils récupéreront vos sacs et les apporteront à votre
              centre de nettoyage local.
              <ul>
                <li>Mises à jour régulières des commandes</li>
                <li>
                  Suivi des conducteurs en temps réel pour une transparence
                  totale
                </li>
              </ul>
            </p>
          </div>

          <div class="steps__card orange">
            <div class="steps__card-number"></div>
            <h3 class="steps__card-title">
              Détendez-vous, <br /> on s'occupe de tout
            </h3>
            <p class="steps__card-description">
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
        </div>
      </div>
    </section>
  );
}

export default About;
