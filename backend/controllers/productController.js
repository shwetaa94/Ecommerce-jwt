const {Product} =require('../models/product');
const getProduct = async(req, res)=> {
  try {
    // Extract query parameters from the request
    const { category = '', brand = '', price = '' } = req.query;

    // Check if category and brand are provided and not empty strings
    const categoryLength = category ? category.split(',').length : 0;
    const brandLength = brand ? brand.split(',').length : 0;

    console.log(req.query, categoryLength, brandLength);

    // Construct a filter object based on the provided query parameters
    const filter = {};
    if (category) {
      filter.category = { $in: category.split(',') };
    }
    if (brand) {
      filter.brand = { $in: brand.split(',') };
    }

    // Find products based on the constructed filter
    let products = await Product.find(filter);

    // Sort the products based on the price
    if (price === 'lowtohigh') {
      products.sort((a, b) => a.price - b.price);
    } else if (price === 'hightolow') {
      products.sort((a, b) => b.price - a.price);
    }

    res.status(200).json({ products });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { getProduct };


module.exports = {getProduct};