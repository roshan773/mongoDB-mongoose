const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("hello world")
    console.log("hello world")
})


app.listen(8080, () => {
    console.log(">>>>>>> Server is running on http://localhost:8080 <<<<<<<<")
})