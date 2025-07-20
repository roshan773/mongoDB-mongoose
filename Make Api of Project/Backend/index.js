const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const userRoutes = require("./routes/user.routes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", userRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT, () =>
        console.log(`Server running on http://localhost:${process.env.PORT}`)
    );
});
