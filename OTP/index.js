const express = require("express")
const connectTodb = require("./database/db")
const userRouter = require("./router/user.routes")
require("dotenv").config()
const app = express()

app.use("/api/user/", userRouter)






app.listen(process.env.PORT, async() => {
    await connectTodb();
    console.log(`Sever is running on ${process.env.PORT}`)
})