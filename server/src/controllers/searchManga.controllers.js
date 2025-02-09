import { jikanManga } from "../services/searchMangaServices.js";

export const searchManga = async (req, res) => {
    try {
        const query = req.query.q;
        const manga = await jikanManga(query);
        const mangaData = manga.map((manga) => ({
            title: manga.title_japanese,
            image: manga.images.jpg.image_url,
            score: manga.score,
            synopsis: manga.synopsis
        }));
        res.json({ mangaData });
    } catch (error) {
        res.status(500).json({ message: "Error fetching data", error });
    }
};