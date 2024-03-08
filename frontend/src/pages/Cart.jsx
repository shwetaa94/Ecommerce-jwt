import React, { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import Layout from "../components/Layout";
import "./Cart.css";
import CartDesign from "../components/CartDesign";
import axios from 'axios';
import {toast} from "react-hot-toast" ;
import CartSum from "../components/CartSum";

const Cart = () => {
  
  const { cart ,addToCart } = useContext(CartContext);
  const token = localStorage.getItem('token');

  useEffect(()=>{ getCart() },[]);

  const getCart = async()=>{
   
    const response = await axios.get('http://localhost:8080/api/v1/cart',{ headers: 
      {
        Authorization: `Bearer ${token}`, // Authorization header
      }

    })
    
    if(response.status === 200){
      addToCart(response.data.cartItems)
      toast.success(response.message);
    }
    else toast.error(response.message);

  }

  return (
    <Layout>
      <div className="cart-main">
      <div className="cartt">
        {cart.map((cartItemss) => {
          return (
            <>
              <CartDesign
                id={cartItemss._id}
                productId = {cartItemss.productId._id}
                title={cartItemss.productId.title}
                description={cartItemss.productId.description}
                price={cartItemss.productId.price}
                discountPercentage={cartItemss.productId.discountPercentage}
                rating={cartItemss.productId.rating}
                stock={cartItemss.productId.stock}
                brand={cartItemss.productId.brand}
                category={cartItemss.productId.category}
                thumbnail={cartItemss.productId.thumbnail}
                images={cartItemss.productId.images}

                quantity={cartItemss.quantity}
                getCart ={getCart}
              />
            </>
          );
        })}
      </div>
      <div className="cartsum">
        <CartSum />
      </div>
      </div>
    </Layout>
  );
};

export default Cart;
