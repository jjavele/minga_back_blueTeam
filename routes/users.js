import Router from "express";
import signinSchema from "../schemas/users/signinSchema.js";
import read from "../controllers/users/read.js";
import signin from "../controllers/users/signin.js";
import signout from "../controllers/users/signout.js";
import passwordIsOk from "../middlewares/passwordIsOk.js";
import accountNotExists from "../middlewares/accountNotExists.js";
import generateToken from "../middlewares/generateToken.js";
import passport from "../middlewares/passport.js";
import userSignUp from '../schemas/users/signUp.js'
import validator from '../middlewares/validator.js';
import register from "../controllers/users/register.js";
import is_property_of from "../middlewares/is_property_of.js"
import accountExists from "../middlewares/accountExists.js";
import createHash from "../middlewares/createHash.js";


let auth_router = Router();

auth_router.post('/register',validator(userSignUp),accountExists,createHash,register)
auth_router.get('/',passport.authenticate('jwt',{ session:false }),read) //leer uno o todos
auth_router.post("/signin", validator(signinSchema),accountNotExists, passwordIsOk, generateToken,signin); //envía datos al servidor
auth_router.post("/signout",);

export default auth_router;
