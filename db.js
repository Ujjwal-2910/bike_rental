const mongoose = require("mongoose");

function connectDB() {
    mongoose.connect('mongodb+srv://Ujjwal2910:Ujjwal2910@cluster0.m33ssdp.mongodb.net/?retryWrites=true&w=majority');
    const connection = mongoose.connection
    connection.on('connected', () => {
        console.log('Mongo DB Connection Successfull')
    })
    connection.on('error', () => {
        console.log('Mongo DB Connection Error')
    })
}

connectDB()

module.exports = mongoose