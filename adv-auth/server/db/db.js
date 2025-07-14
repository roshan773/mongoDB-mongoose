const mongoose = require("mongoose")

async function connectTodb(){
    try {
        await mongoose.connect(process.env.MONGO_URL + "adv-auth")
        console.log(`Connected TO Database`)
    } catch (error) {
        
    }
}

module.exports = connectTodb