import React, { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import axios from "axios";
import "./Product.css";

const Product = ({
  id,
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
}) => {
  const { cart, addToCart } = useContext(CartContext);
  
  const token = localStorage.getItem("token");

  const addtotheCart = async () => {
    try {
      console.log(token);

      const response = await axios.post(
        "http://localhost:8080/api/v1/cart",
        // Request body
        { productId: id },
        // Configuration object
        {
          headers: {
            Authorization: `Bearer ${token}`, // Authorization header
          },
        }
      );

      // Update cart state with the response data
      if (response.ok) {
        addToCart(response.data.cartItems);
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };
  //   const addtotheCart=()=>{
  //     addToCart({
  //         id,
  //         title,
  //         description,
  //         price,
  //         discountPercentage,
  //         rating,
  //         stock,
  //         brand,
  //         category,
  //         thumbnail,
  //         images,
  //       });

  //   }
  //   const {cart, setCart } = useContext(ProductContext);
  //   const addToCart = () => {
  //     // Update cart state by passing the new value directly to setCart
  //     setCart([...cart, {
  //       id,
  //       title,
  //       description,
  //       price,
  //       discountPercentage,
  //       rating,
  //       stock,
  //       brand,
  //       category,
  //       thumbnail,
  //       images,
  //     }]);
  //     console.log(cart);
  //   };

  const discountedPrice = Math.round(price * (1 - discountPercentage / 100));

  return (
    <div className="product">
      <div className="product-image-container">
        <img src={thumbnail} alt={title} className="product-image" />
        <div className="product-image-carousel">
          {/* Add product image carousel functionality here (optional) */}
        </div>
      </div>
      <div className="product-details">
        <h2 className="product-title">{title}</h2>
        <p className="product-brand">{brand}</p>
        <div className="product-price">
          <span className="original-price">₹{price}</span>
          <span className="discounted-price">₹{discountedPrice}</span>
          <span className="discount-percentage">{discountPercentage}% off</span>
        </div>
        {/* <p className="product-description">{description}</p> */}
        <div className="product-stock">
          <span>Stock: {stock}</span>
          <span className="rating">
            <span className="rating-stars">⭐</span> {rating}
          </span>
        </div>
        {/* using contextapi to set cart data */}
        <button onClick={addtotheCart} className="add-to-cart-button">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
