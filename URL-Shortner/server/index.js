const express = require("express")
const dotenv = require("dotenv")
const connectToDb = require("./config/db")
dotenv.config()
const app = express()







app.listen(process.env.PORT, async() => {
    try {
        await connectToDb();
        console.log("Sever is running")
    } catch (error) {
        console.log("Error in Internal server", error)
    }
})