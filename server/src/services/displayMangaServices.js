import axios from "axios";

export const jikanDisplayManga = async () => {
    try {
        const apiURL = "https://api.jikan.moe/v4/top/manga";
        const response = await axios.get(apiURL);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching data from API:", error);
        throw error;
    }

}

export const jikanDisplayLightnovel = async () => {
    try {
        const apiURL = "https://api.jikan.moe/v4/top/manga?type=lightnovel";
        const response = await axios.get(apiURL);
        return response.data.data;
    } catch (error) {
        
    }
}
