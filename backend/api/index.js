const express = require('express');
const app =express();
const dotenv = require('dotenv');
const { connectDatabase } = require('../db');
dotenv.config();


app.use(express.json());

connectDatabase()

app.get('/',(req,res)=>{
    res.status(200).json({
        message:"Made by Pranjul Shukla"
    })
});

const port = process.env.PORT ||3000;


app.listen(port,()=>{
    console.log(`Server started on the port ${port}`)
})