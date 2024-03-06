const  {Product}  = require("../models/product");

 async function getProduct(req, res) {
  try {
    // Find cart items by user Id
    const products = await Product.find();

    res.status(200).json({ products });
  } catch (error) {
    console.error("Error fetching all products :", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
module.exports = {getProduct};