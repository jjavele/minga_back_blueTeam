import Router from 'express';
import read from '../controllers/mangas/read.js'
import create from '../controllers/mangas/create.js';
import validator from '../middlewares/validator.js'
import mangaRegister from '../schemas/mangas/register.js';
import passport from '../middlewares/passport.js';
import read_one from '../controllers/mangas/read_one.js';
import read_news from '../controllers/mangas/read_news.js';

let manga_router = Router();

manga_router.post('/mangas',validator(mangaRegister),create) //crea una manga
manga_router.get('/',read) //leer uno o todos
manga_router.get('/:id',passport.authenticate('jwt',{ session:false }),read_one) //leer uno o todos
manga_router.get('/news', passport.authenticate('jwt',{ session:false }), read_news)
// manga_router.purge() //actualizar un autor
// manga_router.delete() //elimina un autor

export default manga_router;