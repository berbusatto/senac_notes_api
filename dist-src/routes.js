import { Router } from 'express';
import UserController from './api/controllers/UserController';
import NoteController from './api/controllers/NoteController';
const routes = new Router(); // ROTA USER CONTROLLER

routes.get('/user/list', UserController.list); // ROTA CHAMANDO CONTROLLER
// ROTA NOTAS

routes.get('/notes/list', NoteController.list);
routes.get('/notes/show/:id', NoteController.show);
routes.post('/notes/store', NoteController.store);
routes.patch('/notes/update/:id', NoteController.update);
routes.delete('/notes/delete/:id', NoteController.delete); // req.params.id quando é get e req.body quando é post e patch  //

export default routes;