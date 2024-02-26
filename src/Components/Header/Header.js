import React from "react";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Cart from "../CartComp/Cart";
import PropTypes from "prop-types";

import { GoArrowRight } from "react-icons/go";
import { IoCartSharp } from "react-icons/io5";
import { Modal } from "react-bootstrap";

import "./Header.css";
import logo from "../../Assets/images/logoohwash.svg";

// Utilisation de la déstructuration pour accéder directement aux props
function Header({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) {
  const [isCartVisible, setCartVisible] = useState(false);

  const [cartState, setCartState] = useState({
    line_items: [], // Initialiser avec un tableau vide ou des données par défaut
    total_unique_items: 0,
    subtotal: { formatted_with_symbol: "0.00" }, // Initialiser selon les besoins
    // Autres propriétés nécessaires du panier
  });

  const handleUpdateCartQty = (lineItemId, quantity) => {
    onUpdateCartQty(lineItemId, quantity);
  };

  const handleRemoveFromCart = () => {
    onRemoveFromCart(item.id);
  };

  const handleEmptyCart = () => {
    onEmptyCart();
  };

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
          <NavLink to="/">Contact</NavLink>
        </Nav>
        {location.pathname !== "/category-services" &&
          location.pathname !== "/signup" && (
            <div className="nav_cta">
              <a href="#" className="nav_link_cta">
                Rafraichissez vos vêtements dès maintenant !
              </a>
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
        <div
          className="nav__cart-icon"
          onClick={() => setCartVisible(!isCartVisible)}
        >
          <IoCartSharp size="2em" />
          {cart && cart.total_items > 0 && (
            <span className="cart-total-items">{cart.total_items}</span>
          )}
        </div>
        {isCartVisible && (
          <Cart
            cart={cartState}
            onUpdateCartQty={handleUpdateCartQty} // Assurez-vous que cette fonction est définie
            onRemoveFromCart={handleRemoveFromCart} // Assurez-vous que cette fonction est définie
            onEmptyCart={handleEmptyCart} // Assurez-vous que cette fonction est définie
          />
        )}
      </Container>
    </Navbar>
  );
}

export default Header;

Header.propTypes = {
  cart: PropTypes.object,
  onUpdateCartQty: PropTypes.func,
  onRemoveFromCart: PropTypes.func,
  onEmptyCart: PropTypes.func,
};
