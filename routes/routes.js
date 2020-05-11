import createUser from '../controllers/signup';
import createUserValidation from '../validators/create-user-validation';
import loginValidation from '../validators/login-validation';
import loginUser from '../controllers/login';
import logout from '../controllers/logout';

function routes(app){
    app.post('/create', createUserValidation, createUser);
    app.post('/login', loginValidation, loginUser);
    app.post('/logout', logout);
}

export default routes;