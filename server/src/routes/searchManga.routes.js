import express from "express";
import {searchManga} from "../controllers/searchManga.controllers.js";

const router = express.Router();

router.get("/search", searchManga)

export default router;