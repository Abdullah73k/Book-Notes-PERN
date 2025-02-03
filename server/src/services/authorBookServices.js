import axios from "axios";

export const openLibraryAuthorsBooks = async (authorName) => {
    try {
        const apiURL = `https://openlibrary.org/search/authors.json?q=${encodeURIComponent(authorName)}`;
        const response = await axios.get(apiURL);
        console.log(response.data);
        return response.data
    } catch (error) {
        console.error("Error fetching data from API:", error);
        throw error;
    }
}

