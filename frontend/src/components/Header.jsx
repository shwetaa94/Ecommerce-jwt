import React from "react";
import './Header.css'
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
const Header = () => {

    const {cart} = useContext(ProductContext);

  return (
    <div className="header">
        <div className="logo">Ecommerce</div>
        <div className="options">
            <NavLink className="nav" to="/home">Home</NavLink>
            <NavLink className="nav" to="/register">Register</NavLink>
            <NavLink className="nav" to="/">Login </NavLink>
            <NavLink className="nav" to="/cart">Cart ({cart.length}) </NavLink>
        </div>
    </div>
  );
};

export default Header;
