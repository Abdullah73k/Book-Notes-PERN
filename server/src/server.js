import express from "express";
import cors from "cors";
import searchBooks from "./routes/searchBook.routes.js"
import searchAuthor from "./routes/authors.routes.js";

const app = express();

app.use(cors({ origin: ["http://localhost:5174"] }));
app.use(express.json());

app.use("/api/books", searchBooks)
app.use("/api/authors", searchAuthor)
app.use("/api/displayBooks", )

app.listen(5000, () => {
    console.log("Server started on port 5000")
})