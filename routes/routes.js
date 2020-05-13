import createUser from '../controllers/signup';
import createUserValidation from '../validators/create-user-validation';
import loginValidation from '../validators/login-validation';
import categoryValidation from '../validators/category-validation';
import sellerValidation from '../validators/sellers-validation';
import editCategoryValidation from '../validators/edit-category-validation';
import shippingValidation from '../validators/shipping-validation';
import sectionValidation from '../validators/section-validation';
import updateSectionValidation from '../validators/update-section-validation';
import loginUser from '../controllers/login';
import logout from '../controllers/logout';
import category from '../controllers/category';
import editCategory from '../controllers/update-category';
import deleteCategory from '../controllers/delete-category';
import createSeller from '../controllers/seller';
import editSeller from '../controllers/edit-seller';
import deleteSeller from '../controllers/delete-seller';
import shipping from '../controllers/shipping';
import updateShipping from '../controllers/update-shipping';
import deleteShipping from '../controllers/delete-shipping';
import section from '../controllers/section';
import updateSection from '../controllers/update-section';



function routes(app){
    app.post('/create', createUserValidation, createUser);
    app.post('/category', categoryValidation, category);
    app.put('/category', editCategoryValidation, editCategory);
    app.delete('/category/:categoryId', deleteCategory);
    app.post('/seller', sellerValidation, createSeller);
    app.post('/shipping', shippingValidation, shipping);
    app.put('/shipping', shippingValidation, updateShipping);
    app.delete('/shipping/:shippingId', deleteShipping);
    app.put('/seller', sellerValidation, editSeller);
    app.delete('/seller/:sellerId', deleteSeller);
    app.post('/section', sectionValidation, section);
    app.put('/section', updateSectionValidation, updateSection);
    app.post('/login', loginValidation, loginUser);
    app.post('/logout', logout);
}

export default routes;