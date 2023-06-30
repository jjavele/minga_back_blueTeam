import joi from 'joi'

const chapterRegister = joi.object({
    manga_id: joi.string()
        .required(),
    title: joi.string()
        .required()
        .min(1)
        .max(30),
    cover_photo: joi.string()
        .required()
        .uri(),
    pages: joi.array()
        .required(),
    order: joi.number(),    

})

export default chapterRegister;

/*
pages: joi.array()
        .required()
        .items(joi.string()),
    order: joi.number()
        .required(),
*/

