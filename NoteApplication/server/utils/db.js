const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

const connectTODb = () => {
    try {
        const res = mongoose.connect(process.env.Mongoose_URL)
        console.log(">>>>>>>>>> Connected to Database <<<<<<<<<<")
    } catch (error) {
        console.error(500).json({message: error.message})
    }
}


module.exports = connectTODb;