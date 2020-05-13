import createUser from '../controllers/signup';
import createUserValidation from '../validators/create-user-validation';
import loginValidation from '../validators/login-validation';
import categoryValidation from '../validators/category-validation';
import sellerValidation from '../validators/sellers-validation';
import editCategoryValidation from '../validators/edit-category-validation';
import shippingValidation from '../validators/shipping-validation';
import sectionValidation from '../validators/section-validation';
import updateSectionValidation from '../validators/update-section-validation';
import productValidation from '../validators/product-validation';
import updateProductValidation from '../validators/update-product-validation';
import loginUser from '../controllers/login';
import logout from '../controllers/logout';
import category from '../controllers/create/category';
import editCategory from '../controllers/update/update-category';
import deleteCategory from '../controllers/delete/delete-category';
import createSeller from '../controllers/create/seller';
import editSeller from '../controllers/update/edit-seller';
import deleteSeller from '../controllers/delete/delete-seller';
import shipping from '../controllers/create/shipping';
import updateShipping from '../controllers/update/update-shipping';
import deleteShipping from '../controllers/delete/delete-shipping';
import section from '../controllers/create/section';
import updateSection from '../controllers/update/update-section';
import deleteSection from '../controllers/delete/delete-section';
import product from '../controllers/create/product';
import updateProduct from '../controllers/update/update-product';



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
    app.post('/product', productValidation, product);
    app.put('/product', updateProductValidation, updateProduct);
    app.delete('/section/:sectionId', deleteSection);
    app.post('/login', loginValidation, loginUser);
    app.post('/logout', logout);
}

export default routes;