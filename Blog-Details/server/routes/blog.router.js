const express = require("express")
const blogController = require("../controller/blog.controller")
const blogRouter = express.Router()


blogRouter.get("/test", blogController.test)
blogRouter.post("/createpost", blogController.create)
blogRouter.get("/", blogController.getBlog)
blogRouter.put("/update/:id", blogController.updateblog)
blogRouter.delete("/delete/:id", blogController.deleteblog)

module.exports = blogRouter