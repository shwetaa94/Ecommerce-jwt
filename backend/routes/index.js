const express= require('express')
const router= express.Router()
const authRoutes = require('./authRoutes')
const cartRoutes = require('./cartRoutes')
const productRoutes = require('./productRoutes')
const {isLoggedIn} = require('../middleware/isLoggedIn')

router.use('/auth', authRoutes)
router.use('/cart',isLoggedIn, cartRoutes)
router.use('/products',isLoggedIn, productRoutes)

module.exports = router