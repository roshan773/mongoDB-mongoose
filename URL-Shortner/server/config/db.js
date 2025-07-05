const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()


async function connectToDb(){
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Database is connected")
    } catch (error) {
        console.log("Error to connect to Database", error)
    }
}

module.exports = connectToDb;