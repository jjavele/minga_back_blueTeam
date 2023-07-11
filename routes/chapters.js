import Router from 'express';
import read from '../controllers/chapters/read.js'
import create from '../controllers/chapters/create.js'
import passport from '../middlewares/passport.js'
import validator from '../middlewares/validator.js'
//import has_permition from '../middlewares/has_permition.js'
//import is_active from '../middlewares/is_active.js'
import is_property_of from '../middlewares/is_property_of.js'
import add_cover_photo from '../middlewares/add_cover_photo.js'
import exists_order from '../middlewares/exists_order.js'
import next_order from '../middlewares/next_order.js';
import chapterRegister from '../schemas/chapter/register.js'

let chapter_router = Router();

chapter_router.post('/', passport.authenticate('jwt',{ session:false }), validator(chapterRegister), /*has_permition, is_active, is_property_of, */ add_cover_photo, exists_order, next_order, create) //crea un capítulo
chapter_router.get('/', read) //leer uno o todos
// chapter_router.purge() //actualizar un autor
// chapter_router.delete() //elimina un autor

export default chapter_router;