import { openLibraryAuthorsBooks } from "../services/authorBookServices.js";


let key; 

export const getAuthorBooksController = async () => {
    try {
        const jkRowling = await openLibraryAuthorsBooks("J.K. Rowling");
        key = jkRowling.docs[0].key;
        console.log(key);
    } catch (error) {
        res.status(500).json({ message: "Error fetching data", error });
    }
}

export {key};