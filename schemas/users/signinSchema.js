import joi from 'joi';

const userSignin = joi.object({
    email: joi.string()
        .required()
        .email({
            minDomainSegments: 2
        }),
    password: joi.string()
        .required()
        .min(8)
        .max(35)
        .alphanum(),
   
})

export default userSignin;