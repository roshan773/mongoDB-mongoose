const express = require("express")
const dotenv = require("dotenv")
const connectTODb = require("./utils/db")
dotenv.config()
const app = express()
app.use(express.json())









app.listen(process.env.PORT, () => {
    try {
        connectTODb();
        console.log("Server is running")
    } catch (error) {
        console.error("Internal Server Error", error)
    }
})