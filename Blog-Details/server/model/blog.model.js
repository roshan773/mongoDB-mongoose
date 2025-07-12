const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },

    content: {
        type: String,
        required: true
    },

    tags: {
        type: [String],
        default: []
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Blog = mongoose.model("blog", blogSchema)

module.exports = Blog