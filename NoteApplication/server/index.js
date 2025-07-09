const express = require("express")
const dotenv = require("dotenv")
const connectTODb = require("./utils/db")
const userRouter = require("./routes/user.routes")

const noteRouter = require("./routes/note.routes")
dotenv.config()
const cors = require("cors")
const cookieParser = require("cookie-parser")

const app = express()


app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(cookieParser())

app.use("/api/user", userRouter)
app.use("/api/note", noteRouter)






app.listen(process.env.PORT, () => {
    try {
        connectTODb();
        console.log("Server is running")
    } catch (error) {
        console.error("Internal Server Error", error)
    }
})