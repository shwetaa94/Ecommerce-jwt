const express = require ('express')
const {registerUser, loginUser} =require('../controllers/authController.js')
const {isLoggedIn} = require('../middleware/isLoggedIn.js')

const router = express.Router()

router.post('/register',registerUser)
router.post('/login',loginUser)

module.exports = router