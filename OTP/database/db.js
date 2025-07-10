const mongoose = require("mongoose")
require("dotenv").config()

async function connectTodb(){
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected to Database")
    } catch (error) {
        console.log("Error for connecting to database", error)
    }
}

module.exports = connectTodb;