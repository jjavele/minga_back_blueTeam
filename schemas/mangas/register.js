import joi from 'joi'

const mangaRegister = joi.object({
    author_id: joi.string()
        .required()
        .messages({
            'any.required': 'Author is required',
        }),
    category_id: joi.string()
        .required()
        .messages({
            'any.required': 'Category is required',
        }),
    character_photo: joi.string()
        .required()
        .uri()
        .messages({
            'any.required': 'Character photo is required',
        }),
    title: joi.string()
        .required()
        .min(1)
        .max(30)
        .messages({
            'any.required': 'Title is required',
            'any.min': 'Title must be between 1 and 30 characters',
            'any.max': 'Title must be between 1 and 30 characters',
        }),
    cover_photo: joi.string()
        .required()
        .uri()
        .messages({
            'any.required': 'Cover photo is required',
        }),
});

export default mangaRegister;