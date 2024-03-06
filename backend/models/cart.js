const mongoose = require("mongoose");

const User = require('./user.js'); 
const Product = require('./product.js');

const cartSchema = new mongoose.Schema({
  quantity: { type: Number,},
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product",  },
});




exports.Cart = mongoose.model("Cart", cartSchema);