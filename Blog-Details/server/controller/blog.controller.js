const Blog = require("../model/blog.model")

const blogController = {
    test: (req, res) => {
        console.log("Test Routes is working")
        res.status(200).json({ message: "Test Routes is working Properly" })
    },

    create: async (req, res) => {

        const { title, author, content, tags } = req.body

        try {
            const blogs = new Blog({ title, author, content, tags })
            await blogs.save();

            res.status(201).json({ message: "Blog added successfully", blogs })
        } catch (error) {
            res.status(500).json({ message: "Unable to add Blog", error })
        }

    },

    getBlog: async (req, res) => {
        try {
            const blog = await Blog.find()
            res.status(200).json({ message: "fetch data Successfully", blog })
        } catch (error) {
            res.status(500).json({ message: "Unable to fetch data", error })
        }
    },

    updateblog: async (req, res) => {
        const { id } = req.params
        const { title, author, content, tags } = req.body

        try {
            const blog = await Blog.findByIdAndUpdate(id, { title, author, content, tags }, { new: true })
            res.status(200).json({ message: "Blog edited Successfully", blog })
        } catch (error) {
            res.status(500).json({ message: "Error for updating", error })
        }
    },

    deleteblog: async (req, res) => {
        const { id } = req.params

        try {
            const blog = await Blog.findByIdAndDelete(id)
            res.status(200).json({ message: "Blog Deleted Successfully", blog })
        } catch (error) {
            res.status(500).json({ message: "Error for deleting", error })
        }
    },

    getblogById: async (req, res) => {
        const { id } = req.params

        try {
            const blog = await Blog.findById(id)
            if (!blog) {
                return res.status(404).json({ message: "Blog Not found" })
            }
            res.status(200).json({ blog })
        } catch (error) {
            res.status(500).json({message: "Internal Server Error", error})
        }
    }

}

module.exports = blogController