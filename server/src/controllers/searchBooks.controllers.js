import {openLibraryBooks} from "../services/searchBookServices.js";

export const searchBookController = async (req, res) => {
    try {
        const query = req.body.query;
        const books = await openLibraryBooks(query);
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: "Error fetching data", error });
    }
};