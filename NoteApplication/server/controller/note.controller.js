const noteModel = require("../model/note.model")

const noteController = {
  test: (req, res) => {
    res.status(201).json({ message: "Test routes Working" })
  },

  create: async (req, res) => {
    if (!req.body.title || !req.body.content) {
      return res.status(400).json({ message: "Title and content are required" })
    }

    try {
      const note = await noteModel.create({
        ...req.body,
        userId: req?.user?._id,
      });

      res.status(201).json({ message: "Note Created Successfully", note })
    } catch (error) {
      console.error("Error Creating Notes:", error);
      res.status(500).json({ message: error.message || "Internal Server Error" })
    }
  },

  getById: async (req, res) => {
    const { noteId } = req.params;
    if (!noteId) {
      return res.status(400).json({ message: "Note ID is required" });
    }
    try {
      const isExistNote = await noteModel.findById(noteId);
      if (!isExistNote) {
        return res.status(404).json({ message: "Note not found" });
      }

      if (isExistNote.userId !== req?.user?._id) {
        return res.status(403).json({ message: "You do not have permission to access this note" });
      }

      res.status(200).json(isExistNote);
    }
    catch (error) {
      console.error("Error Fetching Note", error);
      res.status(500).json({ message: error.message || "Internal server Error" })
    }
  },

  update: async (req, res) => {
    const { noteId } = req.params;
    if (!noteId) {
      return res.status(400).json({ message: "Note Id is requires" })
    }

    try {
      const isExistNote = await noteModel.findById(noteId);
      if (!isExistNote) {
        return res.status(400).json({ message: "Note not Found" })
      }
      await noteModel.findByIdAndDelete(noteId, { $set: { ...req.body } });
      res.status(200).json("Note Updated successfully")
    } catch (error) {
      console.error("Error Fetching note", error);
      res.status(500).json({ message: error.message || "Internal Server Error" })
    }
  },

  delete: async (req, res) => {
    const { noteId } = req.params;
    if (!noteId) {
      return res.status(400).json({ message: "Note Id is required" });
    }

    try {
      const isExistNote = await noteModel.findById(noteId);
      if (!isExistNote) {
        return res.status(404).json({ message: "Note not found" });
      }
      await noteModel.findByIdAndDelete(noteId);
      res.status(200).json({ message: "Note Deleted Successfully" });
    } catch (error) {
      console.error("Error Deleting note", error)
      res.status(500).json({ message: error.message || "Internal Server Error" })
    }
  },

  getAllNotes: async (req, res) => {
    const { userId } = req.params;
    console.log("req.user", req.user)

    if (!userId) {
      return res.status(400).json({ message: "User Id is required" });
    }

    try {
      const notes = await noteModel.find({ userId });

      res.status(200).json(notes)
    } catch (error) {
      console.error("Error fetching notes", error);
      res.status(500).json({ message: error.message || "Internal Server error" })
    }
  }
}


module.exports = noteController;