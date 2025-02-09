import express from "express";
import { displayManga } from "../controllers/displayManga.controller.js";

const router = express.Router();

router.get("/display", displayManga)

export default router;