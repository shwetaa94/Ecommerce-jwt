const express = require('express')
const cors = require('cors')
const {connectDB} = require('./config/db')
const v1_API = require('./routes/index')

const app = express()
require('dotenv').config()

//configure env
const PORT =process.env.PORT 

//connect database 
connectDB()

//middlewares
app.use(express.json())
app.use(cors())

//routes
app.use('/api/v1',v1_API)

//rest api
app.get('/',(req, res)=>{
    res.send('<h1>backend activated</h1>' );
})
app.listen(PORT, ()=>{console.log(`server running at ${PORT}`)})