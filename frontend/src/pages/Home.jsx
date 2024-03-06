import React from "react";
import Layout from "../components/Layout";
import Filter from "../components/Filter";
import ProductAll from "./ProductAll";
import './Home.css'
const Home = () => {

  return (
    <Layout>
      <div className="layout">
        <div className="filter">
          <Filter />
        </div>
        <div className="product">
          <ProductAll />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
