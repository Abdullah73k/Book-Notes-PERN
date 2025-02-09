import axios from "axios";

export const jikanManga = async (query) => {
  try {
    const apiURL = `https://api.jikan.moe/v4/manga?q=${encodeURIComponent(query)}&limit=5&order_by=popularity`;
    const response = await axios.get(apiURL);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching data from API:", error);
    throw error;
  }
};
