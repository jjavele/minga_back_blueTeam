import Router from 'express';

import signinSchema from '../schemas/users/signinSchema.js';


import read from '../controllers/users/read.js';

import signin from '../controllers/users/signin.js'


let auth_router = Router();

auth_router.get('/', read) //leer uno o todos
auth_router.post('/signin',signin); //envía datos al servidor





export default auth_router;