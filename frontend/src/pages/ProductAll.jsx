import React, { useEffect, useState ,useContext} from "react";
import Product from "../components/Product";
import "./ProductAll.css";
import { toast } from "react-hot-toast";
import { ProductContext } from "../context/ProductContext";
const ProductAll = () => {

  const {products, setproducts}= useContext(ProductContext);
  const {queryString} = useContext(ProductContext);

  const token = localStorage.getItem("token");
  useEffect(() => {
    getProductList();
  }, [queryString]);

  const getProductList = async () => {
    
    
    const response = await fetch(`http://localhost:8080/api/v1/products?${queryString}`, {
      headers: { Authorization: "Bearer " + token },
    });
    
    if (response.ok) {
      const data = await response.json();
      toast.success(data.message);
      setproducts(data.products);
    } else {
      toast.error("error in fecting all prdouct from mongodb");
      console.log("error in fecting all prdouct from mongodb");
    }
  };

  return (
    <div className="allproducts">
      {products.map((productList) => {
        return (
          <>
            <Product
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
            />
          </>
        );
      })}
    </div>
  );
};

export default ProductAll;
