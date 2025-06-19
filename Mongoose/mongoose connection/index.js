const express = require("express");
const connectDb = require("./DB/Index");
const userRoutes = require("./routes/UserRoutes");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Everything is working fine");
    console.log("Everything is working fine");
});

app.use("/", userRoutes);

app.listen(8080, async () => {
    console.log("Server is running on http://localhost:8080");
    await connectDb();
});
