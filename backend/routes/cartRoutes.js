const express = require('express');
const router = express.Router();
const {addCart,getCart,updateCart} = require('../controllers/cartController');

// Routes for CRUD operations
router.post('/', addCart);
router.get('/:userId', getCart);
router.put('/:cartId', updateCart);

module.exports = router;
