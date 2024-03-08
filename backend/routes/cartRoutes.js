const express = require('express');
const router = express.Router();
const {addCart,getCart,updateCart} = require('../controllers/cartController');

// Routes for CRUD operations
router.get('/', getCart);
router.post('/', addCart);
router.put('/:cartId', updateCart);

module.exports = router;
