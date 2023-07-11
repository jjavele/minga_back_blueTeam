import Router from 'express';
import read from '../controllers/authors/read.js'
import read_me from '../controllers/authors/read_me.js';
import passport from '../middlewares/passport.js';
import userSignin from '../schemas/users/signinSchema.js'; '../schemas/users/signinSchema.js'

let author_router = Router();

// author_router.post() //crea un autor
author_router.get('/me', passport.authenticate('jwt',{ session:false }), read_me)
author_router.get('/', read) //leer uno o todos
// author_router.purge() //actualizar un autor
// author_router.delete() //elimina un autor


export default author_router;