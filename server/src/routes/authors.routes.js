import express from "express";
import {getAuthorBooksController} from "../controllers/authors.controller.js";

const router = express.Router();

router.get("/search", getAuthorBooksController)

export default router; 