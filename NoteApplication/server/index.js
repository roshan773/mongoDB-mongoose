const express = require("express")
const dotenv = require("dotenv")
const connectTODb = require("./utils/db")
const userRouter = require("./routes/user.routes")
const cookie = require("cookie-parser")
dotenv.config()
const app = express()


app.use(express.json())
app.use(cookie())

app.use("/api/user", userRouter)







app.listen(process.env.PORT, () => {
    try {
        connectTODb();
        console.log("Server is running")
    } catch (error) {
        console.error("Internal Server Error", error)
    }
})