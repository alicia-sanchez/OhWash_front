import React from "react";

import { MdArrowOutward } from "react-icons/md";
import imagebubble from "../../Assets/images/Bubble2.png";
import imgTestimonial from "../../Assets/images/testimonial-perfil-1.png";
import { Link } from "react-router-dom";

import "./HomeComp.css";
import { IoStar } from "react-icons/io5";

const HomeComp = () => {
  return (
    <div className="fullPageHome row">
      <div className="left column">
        <div className="home_container">
          <h1 className="home_title">OHWASH, le pressing de Lyon.</h1>
          <h2 className="home_subtitle">
            Nettoyage irréprochable, respect durable :<br />
            notre pressing prend soin de votre linge et de la planète !
          </h2>
          <div className="btn_auth">
            <button className="btn_login">
              <Link to="/signin">Se connecter</Link>
              <MdArrowOutward style={{ marginLeft: ".7rem" }} />
            </button>
            <button className="btn_login">
              <Link to="/signup" className="btn_link">
                S'inscrire
              </Link>
              <MdArrowOutward style={{ marginLeft: ".7rem" }} />
            </button>
          </div>
        </div>
        <svg
          className="svg-container"
          version="1.1"
          id="Calque_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 37.98 15.19"
          style={{ enableBackground: "new 0 0 37.98 15.19" }}
          xmlSpace="preserve"
        >
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "#FFEEDD" }} />
              <stop offset="100%" style={{ stopColor: "#A6DDF4" }} />
            </linearGradient>
          </defs>
          <g>
            <path
              className="liaison"
              d="M0.66,14.37h0.91C6.22,11.55,12.32,9.83,19,9.83s12.77,1.72,17.43,4.54h0.76V0.66h-0.91C31.62,3.48,25.52,5.2,18.84,5.2S6.07,3.48,1.42,0.66H0.66V14.37z"
              fill="url(#grad)"
            />
          </g>
        </svg>
        <div class="row">
          <div class="service_container_left">
            <div class="service_container">
              <div class="title_container_service">
                <h5 class="title_container">Nos services</h5>
                <MdArrowOutward
                  style={{
                    backgroundColor: "white",
                    padding: ".7rem",
                    borderRadius: "50%",
                    fontSize: "3rem",
                  }}
                />
              </div>
              <div class="column_services">
                <div class="block_service pressing">
                  <div class="background_block">
                    <div class="title_service">
                      <div class="centered_title_container">
                        <h3 class="title_service_block">Pressing</h3>
                      </div>
                    </div>
                    <svg
                      class="svg-top-left"
                      xmlns="http://www.w3.org/2000/svg"
                      width="90"
                      height="90"
                      viewBox="0 0 80 86"
                      fill="none"
                    >
                      <path
                        d="M39.1127 59.7791C32.9278 81.2467 22.5767 85.5359 18.1742 84.997C2.1965 84.997 -0.0798918 61.5034 0.779124 49.7566C1.53076 39.1953 7.28617 15.8094 24.2947 6.75685C45.5553 -4.55889 71.3258 2.23055 76.1578 9.6666C80.9898 17.1027 83.2447 30.0349 67.7824 32.9447C52.3201 35.8544 46.8439 32.9447 39.1127 59.7791Z"
                        fill="white"
                      />
                    </svg>
                    <svg
                      class="svg-top-right"
                      xmlns="http://www.w3.org/2000/svg"
                      width="49"
                      height="80"
                      viewBox="0 0 49 80"
                      fill="none"
                    >
                      <path
                        d="M6.34052 40.2289C16.0889 49.6366 17.371 63.1058 16.7934 68.6645C18.1754 81.5376 29.2996 81.788 37.6059 73.0377C45.9122 64.2874 51.6862 35.4131 47.3901 14.4658C43.094 -6.48158 30.3302 0.673546 17.2458 6.46477C4.16137 12.256 -5.84501 28.4693 6.34052 40.2289Z"
                        fill="#A6DDF4"
                      />
                    </svg>
                    <svg
                      class="svg-middle"
                      xmlns="http://www.w3.org/2000/svg"
                      width="110"
                      height="110"
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
                      width="57"
                      height="51"
                      viewBox="0 0 57 51"
                      fill="none"
                    >
                      <path
                        d="M37.7057 38.727C40.3101 27.3498 48.6094 20.0789 52.4336 17.8656C60.3091 10.805 56.4607 2.7721 47.7734 0.993191C39.0862 -0.785714 18.2215 8.73754 6.14456 21.6833C-5.93243 34.6291 3.32451 40.3325 11.8099 46.9079C20.2952 53.4834 34.4502 52.9486 37.7057 38.727Z"
                        fill="#FFDB62"
                      />
                    </svg>
                    <svg
                      class="svg-bottom-right"
                      xmlns="http://www.w3.org/2000/svg"
                      width="96"
                      height="75"
                      viewBox="0 0 96 75"
                      fill="none"
                    >
                      <path
                        d="M46.0517 21.4351C39.4476 19.5389 29.6724 9.32016 25.6103 4.44784C18.9276 -2.73569 -8.1966 -0.292795 3.98961 23.4104C16.1758 47.1135 73.569 83.0633 90.0793 73.187C103.288 65.286 89.2931 54.3562 80.6448 49.8789C75.9276 54.2245 69.4807 60.1503 81.431 49.0888C96.369 35.262 54.3069 23.8054 46.0517 21.4351Z"
                        fill="#FA8963"
                      />
                    </svg>
                  </div>
                </div>
                <div class="block_service ameublement">
                  <div class="background_block">
                    <div class="title_service">
                      <div class="centered_title_container">
                        <h3 class="title_service_block">Ameublement</h3>
                      </div>
                    </div>
                    <svg
                      class="svg-top-left"
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="86"
                      viewBox="0 0 80 86"
                      fill="none"
                    >
                      <path
                        d="M39.1127 59.7791C32.9278 81.2467 22.5767 85.5359 18.1742 84.997C2.1965 84.997 -0.0798918 61.5034 0.779124 49.7566C1.53076 39.1953 7.28617 15.8094 24.2947 6.75685C45.5553 -4.55889 71.3258 2.23055 76.1578 9.6666C80.9898 17.1027 83.2447 30.0349 67.7824 32.9447C52.3201 35.8544 46.8439 32.9447 39.1127 59.7791Z"
                        fill="white"
                      />
                    </svg>
                    <svg
                      class="svg-top-right"
                      xmlns="http://www.w3.org/2000/svg"
                      width="49"
                      height="80"
                      viewBox="0 0 49 80"
                      fill="none"
                    >
                      <path
                        d="M6.34052 40.2289C16.0889 49.6366 17.371 63.1058 16.7934 68.6645C18.1754 81.5376 29.2996 81.788 37.6059 73.0377C45.9122 64.2874 51.6862 35.4131 47.3901 14.4658C43.094 -6.48158 30.3302 0.673546 17.2458 6.46477C4.16137 12.256 -5.84501 28.4693 6.34052 40.2289Z"
                        fill="#A6DDF4"
                      />
                    </svg>
                    <svg
                      class="svg-middle"
                      xmlns="http://www.w3.org/2000/svg"
                      width="110"
                      height="110"
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
                      width="57"
                      height="51"
                      viewBox="0 0 57 51"
                      fill="none"
                    >
                      <path
                        d="M37.7057 38.727C40.3101 27.3498 48.6094 20.0789 52.4336 17.8656C60.3091 10.805 56.4607 2.7721 47.7734 0.993191C39.0862 -0.785714 18.2215 8.73754 6.14456 21.6833C-5.93243 34.6291 3.32451 40.3325 11.8099 46.9079C20.2952 53.4834 34.4502 52.9486 37.7057 38.727Z"
                        fill="#FFDB62"
                      />
                    </svg>
                    <svg
                      class="svg-bottom-right"
                      xmlns="http://www.w3.org/2000/svg"
                      width="96"
                      height="75"
                      viewBox="0 0 96 75"
                      fill="none"
                    >
                      <path
                        d="M46.0517 21.4351C39.4476 19.5389 29.6724 9.32016 25.6103 4.44784C18.9276 -2.73569 -8.1966 -0.292795 3.98961 23.4104C16.1758 47.1135 73.569 83.0633 90.0793 73.187C103.288 65.286 89.2931 54.3562 80.6448 49.8789C75.9276 54.2245 69.4807 60.1503 81.431 49.0888C96.369 35.262 54.3069 23.8054 46.0517 21.4351Z"
                        fill="#FA8963"
                      />
                    </svg>
                  </div>
                </div>
                <div class="block_service blanchisserie">
                  <div class="background_block">
                    <div class="title_service">
                      <div class="centered_title_container">
                        <h3 class="title_service_block">Blanchisserie</h3>
                      </div>
                    </div>
                    <svg
                      class="svg-top-left"
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="86"
                      viewBox="0 0 80 86"
                      fill="none"
                    >
                      <path
                        d="M39.1127 59.7791C32.9278 81.2467 22.5767 85.5359 18.1742 84.997C2.1965 84.997 -0.0798918 61.5034 0.779124 49.7566C1.53076 39.1953 7.28617 15.8094 24.2947 6.75685C45.5553 -4.55889 71.3258 2.23055 76.1578 9.6666C80.9898 17.1027 83.2447 30.0349 67.7824 32.9447C52.3201 35.8544 46.8439 32.9447 39.1127 59.7791Z"
                        fill="white"
                      />
                    </svg>
                    <svg
                      class="svg-top-right"
                      xmlns="http://www.w3.org/2000/svg"
                      width="49"
                      height="80"
                      viewBox="0 0 49 80"
                      fill="none"
                    >
                      <path
                        d="M6.34052 40.2289C16.0889 49.6366 17.371 63.1058 16.7934 68.6645C18.1754 81.5376 29.2996 81.788 37.6059 73.0377C45.9122 64.2874 51.6862 35.4131 47.3901 14.4658C43.094 -6.48158 30.3302 0.673546 17.2458 6.46477C4.16137 12.256 -5.84501 28.4693 6.34052 40.2289Z"
                        fill="#A6DDF4"
                      />
                    </svg>
                    <svg
                      class="svg-middle"
                      xmlns="http://www.w3.org/2000/svg"
                      width="110"
                      height="110"
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
                      width="57"
                      height="51"
                      viewBox="0 0 57 51"
                      fill="none"
                    >
                      <path
                        d="M37.7057 38.727C40.3101 27.3498 48.6094 20.0789 52.4336 17.8656C60.3091 10.805 56.4607 2.7721 47.7734 0.993191C39.0862 -0.785714 18.2215 8.73754 6.14456 21.6833C-5.93243 34.6291 3.32451 40.3325 11.8099 46.9079C20.2952 53.4834 34.4502 52.9486 37.7057 38.727Z"
                        fill="#FFDB62"
                      />
                    </svg>
                    <svg
                      class="svg-bottom-right"
                      xmlns="http://www.w3.org/2000/svg"
                      width="96"
                      height="75"
                      viewBox="0 0 96 75"
                      fill="none"
                    >
                      <path
                        d="M46.0517 21.4351C39.4476 19.5389 29.6724 9.32016 25.6103 4.44784C18.9276 -2.73569 -8.1966 -0.292795 3.98961 23.4104C16.1758 47.1135 73.569 83.0633 90.0793 73.187C103.288 65.286 89.2931 54.3562 80.6448 49.8789C75.9276 54.2245 69.4807 60.1503 81.431 49.0888C96.369 35.262 54.3069 23.8054 46.0517 21.4351Z"
                        fill="#FA8963"
                      />
                    </svg>
                  </div>
                </div>
                <div class="block_service retouches">
                  <div class="background_block">
                    <div class="title_service">
                      <div class="centered_title_container">
                        <h3 class="title_service_block">Retouches</h3>
                      </div>
                    </div>
                    <svg
                      class="svg-top-left"
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="86"
                      viewBox="0 0 80 86"
                      fill="none"
                    >
                      <path
                        d="M39.1127 59.7791C32.9278 81.2467 22.5767 85.5359 18.1742 84.997C2.1965 84.997 -0.0798918 61.5034 0.779124 49.7566C1.53076 39.1953 7.28617 15.8094 24.2947 6.75685C45.5553 -4.55889 71.3258 2.23055 76.1578 9.6666C80.9898 17.1027 83.2447 30.0349 67.7824 32.9447C52.3201 35.8544 46.8439 32.9447 39.1127 59.7791Z"
                        fill="white"
                      />
                    </svg>
                    <svg
                      class="svg-top-right"
                      xmlns="http://www.w3.org/2000/svg"
                      width="49"
                      height="80"
                      viewBox="0 0 49 80"
                      fill="none"
                    >
                      <path
                        d="M6.34052 40.2289C16.0889 49.6366 17.371 63.1058 16.7934 68.6645C18.1754 81.5376 29.2996 81.788 37.6059 73.0377C45.9122 64.2874 51.6862 35.4131 47.3901 14.4658C43.094 -6.48158 30.3302 0.673546 17.2458 6.46477C4.16137 12.256 -5.84501 28.4693 6.34052 40.2289Z"
                        fill="#A6DDF4"
                      />
                    </svg>
                    <svg
                      class="svg-middle"
                      xmlns="http://www.w3.org/2000/svg"
                      width="110"
                      height="110"
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
                      width="57"
                      height="51"
                      viewBox="0 0 57 51"
                      fill="none"
                    >
                      <path
                        d="M37.7057 38.727C40.3101 27.3498 48.6094 20.0789 52.4336 17.8656C60.3091 10.805 56.4607 2.7721 47.7734 0.993191C39.0862 -0.785714 18.2215 8.73754 6.14456 21.6833C-5.93243 34.6291 3.32451 40.3325 11.8099 46.9079C20.2952 53.4834 34.4502 52.9486 37.7057 38.727Z"
                        fill="#FFDB62"
                      />
                    </svg>
                    <svg
                      class="svg-bottom-right"
                      xmlns="http://www.w3.org/2000/svg"
                      width="96"
                      height="75"
                      viewBox="0 0 96 75"
                      fill="none"
                    >
                      <path
                        d="M46.0517 21.4351C39.4476 19.5389 29.6724 9.32016 25.6103 4.44784C18.9276 -2.73569 -8.1966 -0.292795 3.98961 23.4104C16.1758 47.1135 73.569 83.0633 90.0793 73.187C103.288 65.286 89.2931 54.3562 80.6448 49.8789C75.9276 54.2245 69.4807 60.1503 81.431 49.0888C96.369 35.262 54.3069 23.8054 46.0517 21.4351Z"
                        fill="#FA8963"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container_middle">
            <div class="container_img_bottom">
              <div class="container_img">
                <img src={imagebubble} alt="image bulle" />
              </div>
            </div>
            <div class="container_left_right_top">
              <div class="info_container_top">
                <h5 class="title_info">Pourquoi vous allez aimer OHWASH.</h5>
                <ul class="info_list">
                  <li class="info_item">
                    <p class="info_item_list">
                      <i class="ri-leaf-line"></i>OHWASH, un pressing
                      éco-responsable
                    </p>
                  </li>
                  <li class="info_item">
                    <p class="info_item_list">
                      <i class="ri-riding-line"></i>OHWASH, un pressing à
                      domicile de qualité
                    </p>
                  </li>
                  <li class="info_item">
                    <p class="info_item_list">
                      <i class="ri-sparkling-line"></i>OHWASH, X années
                      d'expériences
                    </p>
                  </li>
                  <li class="info_item"></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right column">
        <div class="news_container">
          <div class="title_and_arrows">
            <h5 class="title_container">C'est nouveau !</h5>
            <MdArrowOutward
              style={{
                backgroundColor: "white",
                padding: ".7rem",
                borderRadius: "50%",
                fontSize: "3rem",
              }}
            />
          </div>
          <div class="news_title">
            <h3 class="title_news_container">Pressing à domicile</h3>
          </div>
          <ul class="news_list">
            <li class="news_item">
              <p class="steps_news">1. Commander en ligne</p>
            </li>
            <li class="news_item">
              <p class="steps_news">2. Définissez le type de linge à envoyer</p>
            </li>
            <li class="news_item">
              <p class="steps_news">3. Choisissez votre créneau horaire</p>
            </li>
            <li class="news_item">
              <p class="steps_news">4. Finalisez votre commande</p>
            </li>
          </ul>
          <h3 class="infos_times_news">
            Votre commande sera livrée sous 24/48H !
          </h3>
        </div>
        <svg
          class="svg-container"
          version="1.1"
          id="Calque_2"
          xmlns="http://www.w3.org/2000/svg"
          xlinkHref="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 37.98 15.19"
          style={{ enableBackground: "new 0 0 37.98 15.19" }}
          xmlSpace="preserve"
        >
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "#A6C48A" }} />
              <stop offset="100%" style={{ stopColor: "#FFEEDD" }} />
            </linearGradient>
          </defs>
          <g>
            <path
              class="st0"
              d="M0.66,14.37h0.91C6.22,11.55,12.32,9.83,19,9.83s12.77,1.72,17.43,4.54h0.76V0.66h-0.91C31.62,3.48,25.52,5.2,18.84,5.2S6.07,3.48,1.42,0.66H0.66V14.37z"
              fill="url(#grad2)"
            />
          </g>
        </svg>

        <div class="testimonial_container">
          <div class="title_and_arrows">
            <h5 class="title_container">Nos avis</h5>
            <MdArrowOutward
              style={{
                backgroundColor: "white",
                padding: ".7rem",
                borderRadius: "50%",
                fontSize: "3rem",
              }}
            />
          </div>
          <div class="testimonial_customers">
            <img src={imgTestimonial} alt="photo de profil utilisateur" />
            <h5 class="name_testimonial">Lola Ruiz</h5>
            <h6 class="date_testimonial">23 Oct. 2023</h6>
            <div class="testimonial_stars">
            <IoStar 
            style={{
              marginTop: "10px",
             }}/>
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
            </div>
            <div class="description_testimonial">
              <p class="description">
                " Voici une description sur le pressing OHWASH de Lyon. "
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComp;
