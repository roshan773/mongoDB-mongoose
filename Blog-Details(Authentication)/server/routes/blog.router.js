const express = require("express")
const blogController = require("../controller/blog.controller")
const blogRouter = express.Router()


blogRouter.get("/test", blogController.test)
blogRouter.post("/createpost", blogController.create)
blogRouter.get("/getpost", blogController.getBlog)
blogRouter.put("/update/:id", blogController.updateblog)
blogRouter.delete("/delete/:id", blogController.deleteblog)
blogRouter.get("/detail/:id", blogController.getblogById)
blogRouter.get("/:id", blogController.getblogById)

module.exports = blogRouter