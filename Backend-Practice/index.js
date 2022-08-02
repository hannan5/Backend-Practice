const express = require('express');
const connectDB = require('./db/connection');
const app = express()
const bodyparser = require('body-parser')
const AuthRouter = require('./Routes/Auth')
const ProductRouter = require('./Routes/Product')
require('dotenv').config()

app.use(bodyparser.json())

const start = async () => {
    try {
        await connectDB('mongodb+srv://hannan:hannan123@cluster0.qhfp1.mongodb.net/?retryWrites=true&w=majority')
    } catch (error) {
        console.log(error)
    }
}


start()

app.use('/',AuthRouter)
app.use('/product',ProductRouter)

app.listen(3001,()=>{
    console.log(`Port is Connected`);
})