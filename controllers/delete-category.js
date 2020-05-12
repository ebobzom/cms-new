import jwt from 'jsonwebtoken';
import db from '../config/database';
import { validationResult } from 'express-validator';

const deleteCategory = (req, res) => {

    const categoryId = req.params.categoryId

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

            const sellerQuery = `DELETE From category WHERE category_id='${ categoryId }'`;
            db.query(sellerQuery, (err) => {

                if(err){
                    res.status(401).json({
                        status: 'error',
                        error: err.message
                    });
                    return;
                }

                res.status(200).json({
                    status: 'success',
                    data: 'deleted successfully'
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

export default deleteCategory;