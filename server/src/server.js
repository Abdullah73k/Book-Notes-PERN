import express from "express";
import cors from "cors";
import searchManga from "./routes/searchManga.routes.js"
import searchAuthor from "./routes/notes.routes.js";
import displayItems from "./routes/displayManga.routes.js"

const app = express();

app.use(cors({ origin: ["http://localhost:5174"] }));
app.use(express.json());

app.use("/api/manga", searchManga)
app.use("/api/authors", searchAuthor)
app.use("/api/items", displayItems)
app.use("/api/notes")

app.listen(5000, () => {
    console.log("Server started on port 5000")
})