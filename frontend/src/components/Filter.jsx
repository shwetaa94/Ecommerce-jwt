import React from "react";
import "./Filter.css";
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
              />
              <label for="lowtohigh">Low to High</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="hightolow"
                name="price"
                value="hightolow"
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
