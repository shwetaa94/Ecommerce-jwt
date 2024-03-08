// FilterContext.js
import React, { createContext,useContext, useState } from 'react';

const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
    const [products, setproducts] = useState([])
    const [queryString,setqueryString]= useState([])
                                
    return (                   
      <ProductContext.Provider value={{ products, setproducts ,queryString,setqueryString}}>
        {children}
      </ProductContext.Provider>
    );
  };

export { ProductContext, ProductContextProvider };
