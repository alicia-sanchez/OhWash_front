import React from "react";

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  return (
    <div>
      <h4>{item.name}</h4>
      <div>
        Quantité: {item.quantity}
        <button onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>
          -
        </button>
        <button onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>
          +
        </button>
      </div>
      <button onClick={() => onRemoveFromCart(item.id)}>Retirer</button>
    </div>
  );
};

export default CartItem;