const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())

app.get("/api/test", (req, res) => {
    res.send("Test Routes is working")
})

app.post("/api/file/upload", (req, res) => {
    res.send("File uploaded Successfully")
    // console.log("File uploaded Successfully")
})






app.listen(5000, () => {
    console.log("server is running")
})