import db from '../../config/database';

const getAllProducts = (req, res) => {

    const getAllProducts = `SELECT product_name, price, discounted_price, brand, size, description,
    section_id, seller_id FROM products`;

    const getAllImages = `SELECT url, product_id FROM product_images`;
    db.query(getAllProducts, (err, result) => {
        if(err){
            res.status(404).json({
                status: 'error',
                error: 'an error ocurred'
            });
            return;
        }
        db.query(getAllImages, (dbErr, answer) => {
            if(dbErr){
                res.status(404).json({
                    status: 'error',
                    error: 'an error ocurred'
                });
                return;
            }

            res.status(200).json({
                status: 'success',
                data: {
                    products: result,
                    images: answer
                }
            });

            return;
        });
    })

};

export default getAllProducts;