import React, { useState } from "react";


const ArticlesComp = ({ article }) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  // Vérifiez si article est défini avant d'accéder à sa propriété name
  if (!article) {
    return null; // Ou un message d'erreur approprié
  }

  return (
    <div>
      <h3>{article.name}</h3>
      <p>Price: {article.price}</p>
      <div>
        <button onClick={handleDecrement}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

export default ArticlesComp;
