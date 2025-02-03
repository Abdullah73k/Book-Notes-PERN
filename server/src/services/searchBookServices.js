import axios from "axios";

export const openLibraryBooks = async (query) => {
  try {
    const apiURL = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=5`;
    const response = await axios.get(apiURL);
    return response.data; 
  } catch (error) {
    console.error("Error fetching data from API:", error); 
    throw error; 
  }
};
