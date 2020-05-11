import createUser from '../controllers/signup';
import createUserValidation from '../validators/create-user-validation';

function routes(app){
    app.post('/create', createUserValidation, createUser);
}

export default routes;