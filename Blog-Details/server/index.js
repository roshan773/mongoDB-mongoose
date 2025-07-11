const express = require("express")
const connectTODb = require("./utils/db")
require("dotenv").config()
const app = express()











app.listen(process.env.PORT || 3000, async() => {
    try {
        await connectTODb();
        console.log(">>>>>>>>>>>>>>>>>>>> SERVER IS RUNNING <<<<<<<<<<<<<<<<<<<<")
    } catch (error) {
        console.log("Error to connect", error)
    }
})