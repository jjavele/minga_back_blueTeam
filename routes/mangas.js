import Router from 'express';
import read from '../controllers/mangas/read.js'
import create from '../controllers/mangas/create.js';
import validator from '../middlewares/validator.js'
import mangaRegister from '../schemas/mangas/register.js';




let manga_router = Router();

// manga_router.post() //crea un autor
manga_router.post('/mangas',validator(mangaRegister),create) //crea una manga
manga_router.get('/', read) //leer uno o todos
// manga_router.purge() //actualizar un autor
// manga_router.delete() //elimina un autor


export default manga_router;