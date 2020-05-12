import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';
import db from '../config/database';

const updateCategory = (req, res) => {
    // check for user input errors
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        res.status(401).json({
            status: 'error',
            error: errors.array()
        });
        return;
    }

    // make a copy of category
    const { 
        categoryName: category_name,
        categoryId: category_id
     } = req.body;

    const token = req.cookies.token;
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
        if(err){
            res.status(401).json({
                status: 'error',
                error: err.message
            });
            return;
        }

        // check if user is an admin
        if(decoded.isAdmin){
            const queryString = `UPDATE category SET category_name='${ category_name }' WHERE category_id = '${category_id}'`;
            db.query(queryString, (err) => {

                if(err){
                    console.log('erro ', err)
                    res.status(401).json({
                        status: 'error',
                        error: err.message
                    });
                    return;
                }

                res.status(200).json({
                    status: 'success',
                    data: {
                        categoryName: category_name,
                        categorId: category_id
                    }
                });
                return;
                
            });

            return
        }

        res.status(401).json({
            status: 'error',
            error: 'only admin is allowed'
        });
        return;
    });
};

export default updateCategory;