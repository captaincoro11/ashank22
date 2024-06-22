import express from 'express'
const app =express();

app.get('/',(req,res)=>{
    res.status(200).json({
        message:"Made by Pranjul Shukla"
    })
});


app.listen(port,()=>{
    console.log(``)
})