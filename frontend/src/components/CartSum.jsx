import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./CartSum.css";

const CartSum = () => {
  const { cart } = useContext(CartContext);

  const calculateTotalPrice = () => {
    let total = 0;

    cart.forEach((item) => {
      total += calculatePrice(item.productId.price, item.quantity);
    });

    return total;
  };

  const calculatePrice = (price, quantity) => {
    return price * quantity;
  };

  return (
    <div className="cartsum-container">
      <h2>Cart Summary</h2>
      {cart.map((cartItem) => {
        return (
          <div className="cartsum-item" key={cartItem._id}>
            <div className="cartsum-item-image">
              <img src={cartItem.productId.thumbnail} alt={cartItem.productId.title} />
            </div>
            <p>
              {cartItem.productId.title} (x{cartItem.quantity})
            </p>
           <hr />
            <h4>{calculatePrice(cartItem.productId.price, cartItem.quantity)}</h4>
          </div>
        );
    })}
      <div className="total-price">
        <span>Total: </span>
        <span>{calculateTotalPrice().toFixed(2)}</span>
      </div>
    <button>Proceed to Payment</button>
      {/* Other elements like checkout button, shipping details, etc. */}
    </div>
  );
};

export default CartSum;
