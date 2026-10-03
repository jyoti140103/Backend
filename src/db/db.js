const mongoose = require('mongoose');


async function connectDB(){

    await mongoose.connect("mongodb+srv://jyoti:TpeF2wGJjrHeajBg@backend.xito5jj.mongodb.net/halley")
    console.log("Connected to MongoDB")
}

module.exports = connectDB;