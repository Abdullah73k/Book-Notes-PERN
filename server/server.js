import express from "express";
import cors from "cors";

const app = express();

app.use(cors({ origin: ["http://localhost:5174"] }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/api/notes")

app.listen(5000, () => {
    console.log("Server started on port 5000")
})