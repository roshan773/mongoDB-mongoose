const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/UserDb");
        console.log("Connected to database successfully");
    } catch (error) {
        console.error("Error connecting to db", error.message);
    }
};

module.exports = connectDb;
