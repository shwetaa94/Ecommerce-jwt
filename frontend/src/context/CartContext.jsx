// CartContext.js
import React, { createContext,useContext, useState } from 'react';

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    
    const addToCart = (product) => {
      setCart( product); 
    };
                                 //  {{cart,setCart}}
    return (                   
      <CartContext.Provider value={{ cart, addToCart }}>
        {children}
      </CartContext.Provider>
    );
  };

export { CartContext, CartContextProvider };
