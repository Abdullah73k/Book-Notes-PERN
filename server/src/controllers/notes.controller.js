import db from "../db/db";

export const addToNotes = async (req, res) => {
    try {
        const { title, image, score } = req.body;

        const missingField = [];
        if (!title) missingField.push("title");
        if (!image) missingField.push("Image");
        if (!score) missingField.push("Score");

        if (missingField.length > 0) {
            res.status(400).json({ error: `Missing required fields: ${missingField.join(" , ")}` })
        }

        


    } catch (error) {

    }

}