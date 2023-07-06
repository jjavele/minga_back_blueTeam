import Router from 'express';
import read from '../controllers/chapters/read.js'
import create from '../controllers/chapters/create.js'
import propertyOf from '../middlewares/is_property_of.js';
import validator from '../middlewares/validator.js'
import chapterRegister from '../schemas/chapter/register.js'
import add_cover_photo from '../middlewares/add_cover_photo.js';
import next_order from '../middlewares/next_order.js';
import passport from '../middlewares/passport.js';

let chapter_router = Router();

chapter_router.post('/', validator(chapterRegister), passport.authenticate('jwt',{ session:false }), add_cover_photo, next_order, create) //crea un capítulo
chapter_router.get('/', read) //leer uno o todos
// chapter_router.purge() //actualizar un autor
// chapter_router.delete() //elimina un autor


export default chapter_router;