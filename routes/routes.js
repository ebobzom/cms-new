import createUser from '../controllers/signup';
import createUserValidation from '../validators/create-user-validation';
import loginValidation from '../validators/login-validation';
import categoryValidation from '../validators/category-validation';
import sellerValidation from '../validators/sellers-validation';
import editCategoryValidation from '../validators/edit-category-validation';
import createPaymentValidation from '../validators/create-payment-validation';
import loginUser from '../controllers/login';
import logout from '../controllers/logout';
import category from '../controllers/category';
import editCategory from '../controllers/update-category';
import deleteCategory from '../controllers/delete-category';
import createSeller from '../controllers/seller';
import editSeller from '../controllers/edit-seller';
import deleteSeller from '../controllers/delete-seller';
import createPayment from '../controllers/create-payment';
function routes(app){
    app.post('/create', createUserValidation, createUser);
    app.post('/category', categoryValidation, category);
    app.put('/category', editCategoryValidation, editCategory);
    app.post('/seller', sellerValidation, createSeller);
    app.post('/payment', createPaymentValidation, createPayment);
    app.put('/seller', sellerValidation, editSeller);
    app.delete('/seller/:sellerId', deleteSeller);
    app.delete('/category/:categoryId', deleteCategory);
    app.post('/login', loginValidation, loginUser);
    app.post('/logout', logout);
}

export default routes;