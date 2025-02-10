import express from "express";
import { getBookmarks, addBookmark, getBookNotes, deleteBookMark, addNote, deleteNote, editNote } from "../controllers/notes.controller.js";

const router = express.Router();

router.get("/", getBookmarks)
router.post("/add", addBookmark)
router.get("/:id", getBookNotes)
router.delete("/:id/delete", deleteBookMark)
router.post("/:id/note/add", addNote)
router.delete("/:id/note/:note_id/delete", deleteNote)
router.put("/:id/note/:note_id/edit", editNote)

export default router; 