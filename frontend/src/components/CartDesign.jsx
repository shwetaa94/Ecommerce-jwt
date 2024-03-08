import React, { useEffect, useContext } from "react";
import "./CartDesign.css";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import { toast } from "react-hot-toast";

const CartDesign = ({
  id,
  productId,
  title,
  description,
  price,
  discountPercentage,
  rating,
  stock,
  brand,
  category,
  thumbnail,
  images,
  quantity,
  getCart,
}) => {
  const token = localStorage.getItem("token");
  const discountedPrice = Math.round(price * (1 - discountPercentage / 100));

  const { cart, addToCart } = useContext(CartContext);

  const handleQuantity = async (e) => {
    let updatedQuantity;
    if (e.target.name === "addItem") {
      updatedQuantity = quantity + 1;
    } else if (e.target.name === "subItem") {
      updatedQuantity = quantity - 1;
    }

    try {
      const response = await axios.put(
        `http://localhost:8080/api/v1/cart/${id}`,
        { quantity: updatedQuantity },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      if (response.status === 200) {
        toast.success(response.data.message);
        getCart();
      }
    } catch (error) {
      console.log("error in updating cart", error);
    }
  };

  return (
    <div className="cart">
      <div className="cart-image-container">
        <img src={thumbnail} alt={title} className="cart-image" />
        <div className="cart-image-carousel">
          {/* Add cart image carousel functionality here (optional) */}
        </div>
      </div>
      <div className="cart-details">
        <h2 className="cart-title">{title}</h2>
        <p className="cart-brand">{brand}</p>
        <p className="cart-description">{description}</p>
        <div className="cart-price">
          <span className="original-price">₹{price}</span>
          <span className="discount-percentage">{discountPercentage}% off</span>
          <span className="discounted-price">₹{discountedPrice}</span>
        </div>
        <div className="cart-stock">
          {/* <span>Stock: {stock}</span> */}
          <span className="rating">
            <span className="rating-stars">⭐</span> {rating}
          </span>
        </div>

        <div className="add-remove-item">
          <button
            className="remove-item"
            onClick={handleQuantity}
            name="addItem"
          >
            +
          </button>
          <div>{quantity}</div>
          <button className="add-item" onClick={handleQuantity} name="subItem">
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDesign;
