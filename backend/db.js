const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config()
const url = process.env.MONGO_URI



exports.connectDatabase = ()=>{
    mongoose.connect(url)
    .then((con)=>console.log(`Database Connected : ${con.connection.host}`))
    .catch((error)=>console.log(error));

} 