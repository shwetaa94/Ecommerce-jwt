import React, { useEffect ,useState} from 'react'
import Product from '../components/Product'
import './ProductAll.css'
import {toast} from "react-hot-toast";
const ProductAll = () => {
    const [productList, setProductList]= useState([]);
    useEffect(()=>{
        getProductList();
    }, [])

    const getProductList = async () => {
 
        const response = await fetch('http://localhost:8080/api/v1/products');
        if (response.ok) {
          const data = await response.json();
          toast.success(data.message);
          setProductList(data.products);
        }
        else{
          toast.error('error in fecting all prdoct from mongodb');
          console.log('error in fecting all prdoct from mongodb');
        }
    }

  return (
    <div className="allproducts">

        {productList.map((productList) => {
                  console.log(productList)
              return (
              
               <>
                 <Product
                    id={productList._id}
                    title = {productList.title}
                    description = {productList.description}
                    price = {productList.price}
                    discountPercentage = {productList.discountPercentage}
                    rating = {productList.rating}
                    stock = {productList.stock}
                    brand = {productList.brand}
                    category = {productList.category}
                    thumbnail = {productList.thumbnail}
                    images = {productList.images}

                 />
               </>
              );
          
        })
        }
      </div>
  )
}

export default ProductAll