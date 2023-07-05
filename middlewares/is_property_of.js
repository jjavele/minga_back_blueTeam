import Manga from "../models/Manga.js";

async function propertyOf(req, res, next) {
  try {
    let manga = await Manga.findOne({
      manga_id: req.body.manga_id,
      author_id: req.body.author_id,
      company_id: req.body.company_id,
    });

    if (manga) {
      return next();
    }
    return res
      .status(404)
      .json({ message: "You do not have permission to modify this manga" });
  } catch (error) {
    next(error);
  }
}

export default propertyOf;
