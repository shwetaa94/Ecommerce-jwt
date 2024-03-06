import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import Layout from "../components/Layout";
import "./Cart.css";
import CartDesign from "../components/CartDesign";
const Cart = () => {
  
  const { cart } = useContext(ProductContext);

  return (
    <Layout>
      <div className="cartt">
        {cart.map((productList) => {
          return (
            <>
              <CartDesign
                id={productList._id}
                title={productList.title}
                description={productList.description}
                price={productList.price}
                discountPercentage={productList.discountPercentage}
                rating={productList.rating}
                stock={productList.stock}
                brand={productList.brand}
                category={productList.category}
                thumbnail={productList.thumbnail}
                images={productList.images}
                quantity={productList.quantity}
              />
            </>
          );
        })}
      </div>
    </Layout>
  );
};

export default Cart;
