import Router from 'express';
import read from '../controllers/users/read.js'
import create from '../controllers/users/register.js'

let auth_router = Router();

auth_router.get('/', read);
auth_router.post('/signup', create);

export default auth_router;