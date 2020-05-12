import createUser from '../controllers/signup';
import createUserValidation from '../validators/create-user-validation';
import loginValidation from '../validators/login-validation';
import categoryValidation from '../validators/category-validation';
import sellerValidation from '../validators/sellers-validation';
import loginUser from '../controllers/login';
import logout from '../controllers/logout';
import category from '../controllers/category';
import createSeller from '../controllers/seller';
import editSeller from '../controllers/edit-seller';

function routes(app){
    app.post('/create', createUserValidation, createUser);
    app.post('/category', categoryValidation, category);
    app.post('/seller', sellerValidation, createSeller);
    app.put('/seller', sellerValidation, editSeller);
    app.post('/login', loginValidation, loginUser);
    app.post('/logout', logout);
}

export default routes;