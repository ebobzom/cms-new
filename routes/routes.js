import createUser from '../controllers/signup';
import createUserValidation from '../validators/create-user-validation';
import loginValidation from '../validators/login-validation';
import categoryValidation from '../validators/category-validation';
import loginUser from '../controllers/login';
import logout from '../controllers/logout';
import category from '../controllers/category'

function routes(app){
    app.post('/create', createUserValidation, createUser);
    app.post('/category', category);
    app.post('/login', loginValidation, loginUser);
    app.post('/logout', logout);
}

export default routes;