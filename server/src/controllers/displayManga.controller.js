import { jikanDisplayManga, jikanDisplayLightnovel } from "../services/displayMangaServices.js";

export const displayManga = async (req, res) => {
    try {
        const [displayItems1, displayItems2] = await Promise.all([
            jikanDisplayManga(),
            jikanDisplayLightnovel()
        ]);

        const mangaItems = displayItems1.map((manga) => ({
            title: manga.title_japanese,
            image: manga.images.jpg.image_url
        }));

        const lightnovelItems = displayItems2.map((lightnovel) => ({
            title: lightnovel.title_japanese,
            image: lightnovel.images.jpg.image_url
        }));

        res.json({ mangaItems, lightnovelItems });

    } catch (error) {
        console.error("Error fetching data from API:", error);
        res.status(500).json({ message: "Error fetching data", error });
    }
};
