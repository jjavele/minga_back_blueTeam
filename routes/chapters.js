import Router from 'express';
import read from '../controllers/chapters/read.js'
import create from '../controllers/chapters/create.js'

import validator from '../middlewares/validator.js'
import chapterRegister from '../schemas/chapter/register.js'
import propertyOf from '../middlewares/is_property_of.js';

let chapter_router = Router();

chapter_router.post('/register', validator(chapterRegister), propertyOf, create) //crea un capítulo
chapter_router.get('/', read) //leer uno o todos
// chapter_router.purge() //actualizar un autor
// chapter_router.delete() //elimina un autor


export default chapter_router;