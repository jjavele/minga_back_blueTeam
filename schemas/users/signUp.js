import joi from "joi";

const userSignUp = joi.object({
  email: joi
    .string()
    .required()
    .email({
      minDomainSegments: 2,
    })
    .messages({
      "string.email": "This mail is not valid, please insert a valid mail",
      "string.empty": "A mail is required",
    }),
  password: joi.string().required().min(6).max(15).messages({
    "string.min": "Your password must have a minimum of 6 characters",
    "string.max": "Your password must have a maximum of 15 characters",
    "string.empty": "Please, insert a password",
  }),
  photo: joi.string().required().uri().messages({
    "string.uri": "Invalid photo URL. Please provide a valid URL",
    "string.empty": "Please, insert a photo URL",
  }),
  role: joi.number().required().integer().min(0),
  online: joi.boolean().strict().default(false),
  verified: joi.boolean().required().strict().default(false),
  verify_code: joi.string().required().alphanum(),
});

export default userSignUp;
