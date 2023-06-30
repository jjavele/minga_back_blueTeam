import Chapter from "../../models/Chapter.js"

export default async(req, res) => {
    try {
        const one = await Chapter.create(req.body);

        return res.status(201).json({
            response: one,
            success: true,
            message: 'Chapter created sucessfully'
        })

    } catch(error) {
        console.log(error)
        return res.status(500).json({
            response: null,
            success: false,
            message: error.message
        })
    }
}