import React ,{useContext, useState}from "react";
import "./Filter.css";
import { ProductContext } from "../context/ProductContext";
const Filter = () => {
  const category = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
  ];
  const brands = [
    "Apple",
    "Samsung",
    "Microsoft Surface",
    "Infinix",
    "HP Pavilion",
    "Impression",
    "Royal_Mirage",
    "Fog Scent Xpressio",
    "Al Munakh",
    "Lord - Al-Rehab",
    "L'Oreal Paris",
    "Hemani Tea",
    "Dermive",
    "ROREC White Rice",
    "Fair & Clear",
    "Saaf & Khaas",
    "Bake Parlor Big",
    "Baking Food Items",
    "fauji",
    "Dry Rose",
  ];
  
  const {setqueryString} = useContext(ProductContext);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceFilter, setPriceFilter] = useState('');

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedCategories((prevCategories) => [...prevCategories, value]);
    } else {
      setSelectedCategories((prevCategories) =>
        prevCategories.filter((category) => category !== value)
      );
    }
  };

  const handleBrandChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedBrands((prevBrands) => [...prevBrands, value]);
    } else {
      setSelectedBrands((prevBrands) =>
        prevBrands.filter((brand) => brand !== value)
      );
    }
  };

  const handlePriceFilterChange = (e) => {
    setPriceFilter(e.target.value);
  };

  const queryParams = {
    category: selectedCategories.join(','),
    brands: selectedBrands.join(','),
    price: priceFilter,
  }

  let queryString = '';
  for (const key in queryParams) {
    if (queryParams[key]) {
      queryString += `${key}=${queryParams[key]}&`;
    }
  }
  queryString = queryString.slice(0, -1); // removing the last '&'
  setqueryString(queryString);
  



  return (
    <>
      <div class="filter-section">
        <h2>Filters</h2>
        {/* catergory filter  */}
        <div class="filter-group">
          <h3>Category</h3>
          <ul class="filter-list">
            {category.map((item, index) => {
              return (
                <li>
                  <input
                    key={index}
                    type="checkbox"
                    id={`category-${item}`}
                    name="category"
                    value={item}
                    onChange={handleCategoryChange}
                  />
                  <label for={`category-${item}`}>{item}</label>
                </li>
              );
            })}
          </ul>
        </div>
        {/* price filter */}
        <div class="filter-group">
          <h3>Price</h3>
          <ul class="price-list">
            <li>
              <input
                type="checkbox"
                id="lowtohigh"
                name="price"
                value="lowtohigh"
                onChange={handlePriceFilterChange}
              />
              <label for="lowtohigh">Low to High</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="hightolow"
                name="price"
                value="hightolow"
                onChange={handlePriceFilterChange
                }
              />
              <label for="hightolow">High to Low</label>
            </li>
          </ul>
        </div>
        {/* brand filter */}
        <div class="filter-group">
          <h3>Brand</h3>
          <ul class="filter-list">
          {brands.map((item, index) => {
              return (
                <li>
                  <input
                    key={index}
                    type="checkbox"
                    id={`category-${item}`}
                    name="category"
                    value={item}
                    onChange={ handleBrandChange}
                  />
                  <label for={`category-${item}`}>{item}</label>
                </li>
              );
            })}
          </ul>
        </div>

      </div>
    </>
  );
};

export default Filter;
