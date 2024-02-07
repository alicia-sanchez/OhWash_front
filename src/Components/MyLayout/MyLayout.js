import React, { Children, cloneElement } from "react";
import Header from "../Header/Header";
// Assurez-vous d'importer les autres composants utilisés (BodyColorToggle, Footer, etc.)

export function MyLayout({ children }) {
  // Supposons que txtColor et handleTxtColorChange ne sont plus utilisés ici pour simplifier

return (
    <div className="MyLayout">
        <Header />
        {Children.map(children, (child) => cloneElement(child))}
    </div>
);
}

export default MyLayout;
