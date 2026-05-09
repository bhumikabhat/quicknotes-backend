const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const {
  getNotes,
  createNote,
  deleteNote,
} = require("../controllers/notesController");

router.get("/notes", auth, getNotes);
router.post("/notes", auth, createNote);
router.delete("/notes/:id", auth, deleteNote);

module.exports = router;