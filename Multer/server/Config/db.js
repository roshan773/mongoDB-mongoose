const mongoose = require("mongoose")

async function connectToDb(){
    await mongoose.connect("mongodb://127.0.0.1:27017/photos")
    console.log("Connected to Database")
}

const fileSchema = new mongoose.Schema({
    filename: {
        type: String,
        required: true
    }
})

const File = mongoose.model("File", fileSchema)

module.exports = {connectToDb, File}