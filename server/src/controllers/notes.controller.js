import pool from "../db/db.js";

export const getBookmarks = async (req, res) => {
    try {
        const result = pool.query("SELECT * FROM bookmarks");
        console.log(result.rows)
        //if no bookmark exists it will send a message which should be a popup for the user to add some
        if (result.rows.length === 0) {
            return res.status(200).json({ message: "No books in your bookmarks! Add some to view them." })
        }
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: "Server error. Please try again." })
    }
}

export const addBookmark = async (req, res) => {
    try {
        const { title, image, score } = req.body;

        const missingField = [];
        if (!title) missingField.push("title");
        if (!image) missingField.push("Image");
        if (score === undefined) missingField.push("score");

        if (missingField.length > 0) {
            return res.status(400).json({ error: `Missing required fields: ${missingField.join(" , ")}` })
        }

        //Check if book already exists within the database
        const result = await pool.query("SELECT * FROM bookmarks WHERE title=$1", [title]);
        console.log(result.rows)
        if (result.rows.length > 0) {
            return res.status(409).json({ message: "Book is already in bookmarks. Cannot bookmark twice." });
        }

        //if book does not exists then we add the book information in the db
        const newBookmark = await pool.query(
            "INSERT INTO bookmarks (title, image_url, score) VALUES ($1, $2, $3) RETURNING *",
            [title, image, score]
        );
        console.log(newBookmark);
        // Send success response
        res.status(201).json({
            message: "Book successfully added to bookmarks!",
            bookmark: newBookmark.rows[0]
        });
    } catch (error) {
        res.status(500).json({ error: "Server error. Please try again." })
        console.log("Couldn't add book, error")
    }

}

export const getBookNotes = async (req, res) => {}

export const deleteBookMark = async (req, res) => {}

export const addNote = async (req, res) => {}

export const deleteNote = async (req, res) => {}

export const editNote = async (req, res) => {}