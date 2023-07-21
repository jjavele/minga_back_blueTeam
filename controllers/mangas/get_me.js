import Manga from "../../models/Manga.js"

export default async (req, res, next) => {
    try {
        let mangas = await Manga.find({author_id:req.author._id})
        .populate("category_id")
        .pagination()
        return res.status(201).json({
            mangas
        })
        
    } catch (error) {
        return next(error);
    }
}
