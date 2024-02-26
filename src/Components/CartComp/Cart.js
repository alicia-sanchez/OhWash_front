import React from "react";
import CartItem from "../CartItemComp/CartItem";



const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  // Vérifiez si cart.line_items est disponible et est un tableau avant de l'itérer
  if (!cart || !Array.isArray(cart.line_items)) {
    return <div>Loading cart...</div>;
  }

  return (
    <div className="cart">
      {/* Assurez-vous d'itérer sur cart.line_items si cart est un objet contenant cette propriété */}
      {cart.line_items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onUpdateCartQty={onUpdateCartQty}
          onRemoveFromCart={onRemoveFromCart}
        />
      ))}

      <div>
        <button onClick={onEmptyCart}>Vider le panier</button>
      </div>
    </div>
  );
};

export default Cart;