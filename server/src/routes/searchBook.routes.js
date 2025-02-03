import express from "express";
import {searchBookController} from "../controllers/searchBooks.controllers.js";

const router = express.Router();

router.get("/search", searchBookController)

export default router;