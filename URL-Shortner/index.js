const express = require("express")
const dotenv = require("dotenv")
const connectToDb = require("./config/db")
dotenv.config()
const app = express()
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    const data = [
        {
            id: 1,
            longUrl: "https://in.search.yahoo.com/search?fr=mcafee&type=E210IN1357G0&p=full+stack+developer+course+udemy",
            shortUrl: "234567",
            click: 0
        },
        {
            id: 2,
            longUrl: "https://chatgpt.com/c/68693428-8308-800d-ae50-4d3203f20e89",
            shortUrl: "234567",
            click: 0
        },
        {
            id: 3,
            longUrl: "https://drive.google.com/file/d/1eKXxfo5CPyM7JE8z9WsZrB-YF5D4A691/view",
            shortUrl: "234567",
            click: 0
        },
        {
            id: 4,
            longUrl: "https://www.instagram.com/direct/t/17845435856986998/",
            shortUrl: "234567",
            click: 0
        }
    ]
    res.render("home", { data })
})

app.post("/addData", (req, res) => {
    res.send("OK")
    res.redirect("/")
})





app.listen(process.env.PORT, async () => {
    try {
        await connectToDb();
        console.log("Sever is running")
    } catch (error) {
        console.log("Error in Internal server", error)
    }
})