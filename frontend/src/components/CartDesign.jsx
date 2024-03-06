import React from "react";
import "./CartDesign.css";
import axios from 'axios';
const CartDesign = ({
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
  quantity,
  
}) => {
  const token =localStorage.getItem("token");
  const discountedPrice = Math.round(price * (1 - discountPercentage / 100));
  const handleQuantity =async(e) => {

    if(e.targert.name==="addItem"){quantity=quantity+1;}
    else if(e.target.name==="subItem"){quantity=quantity-1;}

    try{
        await axios.put(`http://localhost:8080/api/v2/${id}`,{headers:{
            Authorization: "Bearer " +token}},{quantity})
    }
    catch(error){
        console.log("error in updating cart",error);
    }
  }
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
        <button className="remove-item" onClick={handleQuantity} name="addItem">-</button>
        <button className="add-item" onClick={handleQuantity} name="subItem">+</button>
        </div>
      </div>
    </div>
  );
};

export default CartDesign;
