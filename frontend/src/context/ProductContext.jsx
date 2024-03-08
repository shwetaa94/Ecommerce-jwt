// ProductContext.js
import React, { createContext,useContext, useState } from 'react';

const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    
    const addToCart = (product) => {
      setCart( product); 
      console.log(cart);
    };
                                 //  {{cart,setCart}}
    return (                   
      <ProductContext.Provider value={{ cart, addToCart }}>
        {children}
      </ProductContext.Provider>
    );
  };

export { ProductContext, ProductContextProvider };
