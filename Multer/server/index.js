const express = require("express");
const cors = require("cors");
const upload = require("./Config/multer");
const { connectToDb, File } = require("./Config/db");
const app = express();
app.use(express.static("upload"));

app.use(cors());
// No need for express.json() when handling file uploads

app.get("/api/test", (req, res) => {
    res.send("Test Route is working");
});

app.post("/api/file/upload", upload.single("file"), async (req, res) => {
    try {
        await File.create({ filename: req.file.filename })
        res.status(201).json({ message: "File uploaded Successfully", file: req.file })
        console.log("File uploaded Successfully:", req.file.filename);
    } catch (error) {
        res.status(500).json({ message: "Unable to upload file" })
    }
});

app.get("/api/file/photo", async(req, res) => {
    const files = await File.find()
    res.json(files)
})

app.listen(8080, async () => {
    await connectToDb()
    console.log("Server is running on port 8080");
});
