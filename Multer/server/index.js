const express = require("express");
const cors = require("cors");
const upload = require("./Config/multer");
const app = express();

app.use(cors());
// No need for express.json() when handling file uploads

app.get("/api/test", (req, res) => {
    res.send("Test Route is working");
});

app.post("/api/file/upload", upload.single("file"), (req, res) => {
    console.log("File uploaded Successfully:", req.file);
    res.json({
        message: "File uploaded Successfully",
        file: req.file
    });
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
