import Router from "express";

import signinSchema from "../schemas/users/signinSchema.js";

import read from "../controllers/users/read.js";
import signin from "../controllers/users/signin.js";
import signout from "../controllers/users/signout.js";

import validator from "../middlewares/validator.js";
import passwordIsOk from "../middlewares/passwordIsOk.js";
import accountNotExists from "../middlewares/accountNotExists.js";
import generateToken from "../middlewares/generateToken.js";
import passport from "../middlewares/passport.js";



let auth_router = Router();

auth_router.get('/',passport.authenticate('jwt',{ session:false }),read) //leer uno o todos
auth_router.post("/signin", validator(signinSchema),accountNotExists, passwordIsOk, generateToken,signin); //envía datos al servidor
auth_router.post("/signout",signout);

export default auth_router;
