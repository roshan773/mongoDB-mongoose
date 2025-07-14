const express = require("express")
const connectTodb = require("./db/db")
require("dotenv").config()
const app = express()






app.listen(process.env.PORT, async () => {

    try {
        await connectTodb()
        console.log(`Server is runnong`)
    } catch (error) {
        console.log("Unable to connect")
    }
})