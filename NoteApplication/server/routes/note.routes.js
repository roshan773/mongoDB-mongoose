const express = require("express")
const noteController = require("../controller/note.controller")
const checkIsAuth = require("../Middleware/Auth")


const noteRouter = express.Router()

noteRouter.get("/test", noteController.test)
noteRouter.post("/create", checkIsAuth, noteController.create)
noteRouter.patch("/update/:noteId", checkIsAuth , noteController.update );
noteRouter.delete("/delete/:noteId", checkIsAuth , noteController.delete)
noteRouter.get("/notes/:noteId", checkIsAuth , noteController.getById)
noteRouter.get("/getnotes/:noteId", checkIsAuth , noteController.getAllNotes)

module.exports = noteRouter

