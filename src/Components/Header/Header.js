import React from "react";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { GoArrowRight } from "react-icons/go";

import "./Header.css";
import logo from "../../Assets/images/logoohwash.svg";

// Utilisation de la déstructuration pour accéder directement aux props
function Header({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) {

  return (
    <Navbar>
      <Container className="fullHeader">
        <Navbar.Brand href="/">
          <img
            className="header_logo"
            src={logo}
            alt="logo ohwash lyon"
            width="105"
            height="105"
          />
        </Navbar.Brand>
        
        <Nav className="m-auto">
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/about">Comment ça fonctionne ?</NavLink>
          <NavLink to="/category-services">Nos services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </Nav>
        {location.pathname !== "/category-services" &&
          location.pathname !== "/signup" && (
            <div className="nav_cta">
              <NavLink className="nav_link_cta" to="/">
                Rafraichissez vos vêtements dès maintenant !
              </NavLink>

              <svg
                className="svg-cta"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 37.98 15.19"
                style={{ enableBackground: "new 0 0 37.98 15.19" }}
                xmlSpace="preserve"
              >
                <g>
                  <path
                    className="st0"
                    d="M0.66,14.37h0.91C6.22,11.55,12.32,9.83,19,9.83s12.77,1.72,17.43,4.54h0.76V0.66h-0.91C31.62,3.48,25.52,5.2,18.84,5.2S6.07,3.48,1.42,0.66H0.66V14.37z"
                  />
                </g>
              </svg>
              <GoArrowRight
                style={{
                  backgroundColor: "#a6c48a",
                  padding: ".7rem",
                  borderRadius: "50%",
                  fontSize: "2.6rem",
                }}
              />
            </div>
          )}
      </Container>
    </Navbar>
  );
}

export default Header;
