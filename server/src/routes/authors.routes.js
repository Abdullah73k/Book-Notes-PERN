import express from "express";
import {getAuthorBooksController} from "../controllers/authors.controller";

const router = express.Router();

router.get("/authors", getAuthorBooksController)

export default router; 