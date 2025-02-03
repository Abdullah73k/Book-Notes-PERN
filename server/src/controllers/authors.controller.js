import { openLibraryAuthorsBooks } from "../services/authorBookServices.js";

export const getAuthorBooksController = async (req, res) => {
    try {
        const jkRowling = await openLibraryAuthorsBooks("J.K. Rowling");
        const key = jkRowling.docs[0].key;
        console.log(key);
        res.json({authorKey: key});
    } catch (error) {
        res.status(500).json({ message: "Error fetching data", error });
    }
}