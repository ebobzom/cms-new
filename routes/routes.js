import createUser from '../controllers/signup';
import createUserValidation from '../validators/create-user-validation';
import loginValidation from '../validators/login-validation';
import loginUser from '../controllers/login';

function routes(app){
    app.post('/create', createUserValidation, createUser);
    app.post('/login', loginValidation, loginUser);
}

export default routes;